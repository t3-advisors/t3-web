import { type NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/components";
import { resend } from "@/lib/resend";
import { appendToSheet } from "@/lib/apps-script";
import { checkRateLimit } from "@/lib/rate-limit";
import { TeamNotification } from "@/lib/email-templates/team-notification";
import { SellerConfirmation, sellerConfirmationSubject } from "@/lib/email-templates/seller-confirmation";
import { BuyerConfirmation, buyerConfirmationSubject } from "@/lib/email-templates/buyer-confirmation";

interface ContactPayload {
  mode: "buyer" | "seller";
  locale: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  // buyer
  verticals?: string[];
  // seller
  transactionTypes?: string[];
  assetType?: string;
  location?: string;
  priceRange?: string;
  message?: string;
  // honeypot
  website?: string;
}

export async function POST(request: NextRequest) {
  // Rate limit
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  // Parse body
  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot
  if (data.website) {
    return NextResponse.json({ success: true }); // silent
  }

  // Validate required fields
  if (!data.name?.trim() || !data.email?.trim() || !data.mode) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (data.mode === "buyer" && (!data.verticals || data.verticals.length === 0)) {
    return NextResponse.json({ error: "Select at least one sector" }, { status: 400 });
  }
  if (data.mode === "seller" && (!data.transactionTypes || data.transactionTypes.length === 0)) {
    return NextResponse.json({ error: "Select at least one transaction type" }, { status: 400 });
  }

  const locale = data.locale === "en" ? "en" : "es";
  const teamTo = process.env.TEAM_TO_EMAIL!;
  const teamBcc = process.env.TEAM_BCC_EMAILS?.split(",").map(e => e.trim()) ?? [];
  const emailFrom = process.env.EMAIL_FROM!;
  const replyTo = process.env.EMAIL_REPLY_TO!;

  // Run Sheets + emails in parallel
  const [sheetsResult, emailsResult] = await Promise.allSettled([

    // 1. Append to Google Sheet
    appendToSheet({
      mode: data.mode,
      locale,
      name: data.name,
      email: data.email,
      company: data.company,
      phone: data.phone,
      verticals: data.verticals,
      transactionTypes: data.transactionTypes,
      assetType: data.assetType,
      location: data.location,
      priceRange: data.priceRange,
      message: data.message,
    }),

    // 2. Send emails
    (async () => {
      const sheetsError = undefined; // we don't know yet — emails run in parallel

      // Team notification
      const teamHtml = await render(
        TeamNotification({
          mode: data.mode,
          name: data.name,
          email: data.email,
          company: data.company,
          phone: data.phone,
          locale,
          verticals: data.verticals,
          transactionTypes: data.transactionTypes,
          assetType: data.assetType,
          location: data.location,
          priceRange: data.priceRange,
          message: data.message,
          sheetsError,
        })      );

      const modeLabel = data.mode === "buyer" ? "Inversionista" : "Vendedor";
      await resend.emails.send({
        from: emailFrom,
        to: teamTo,
        bcc: teamBcc,
        replyTo: data.email, // reply goes to the lead
        subject: `Nuevo lead ${modeLabel} — ${data.name}`,
        html: teamHtml,
      });

      // Auto-reply to the user
      if (data.mode === "seller") {
        const sellerHtml = await render(
          SellerConfirmation({ name: data.name, locale })        );
        await resend.emails.send({
          from: emailFrom,
          to: data.email,
          replyTo,
          subject: sellerConfirmationSubject(locale),
          html: sellerHtml,
        });
      } else {
        const buyerHtml = await render(
          BuyerConfirmation({
            name: data.name,
            locale,
            verticals: data.verticals ?? [],
          })        );
        await resend.emails.send({
          from: emailFrom,
          to: data.email,
          replyTo,
          subject: buyerConfirmationSubject(locale),
          html: buyerHtml,
        });
      }
    })(),
  ]);

  // If emails failed, return error (user can retry)
  if (emailsResult.status === "rejected") {
    console.error("Email error:", emailsResult.reason);
    return NextResponse.json({ error: "Failed to send confirmation email" }, { status: 500 });
  }

  // Sheets failure is non-fatal — log it
  if (sheetsResult.status === "rejected") {
    console.error("Sheets error:", sheetsResult.reason);
    // TODO: send a follow-up team notification with the sheets error
  }

  return NextResponse.json({ success: true });
}
