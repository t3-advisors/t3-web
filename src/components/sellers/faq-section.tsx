"use client";

import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const F    = "#1B4332";
const GOLD = "#C9A84C";
const WW   = "#F8F6F0";
const CH   = "#2C2C2C";

const faqKeys = [1, 2, 3, 4, 5, 6] as const;

export function FaqSection() {
  const t = useTranslations("sellersPage");

  return (
    <section className="px-5 py-10 md:px-10 md:py-[72px]" style={{ backgroundColor: "#F2EFE8" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h2 className="text-2xl md:text-[36px]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, letterSpacing: "-0.02em", color: F }}>
          {t("faq_headline")}
        </h2>
        <div style={{ marginTop: 14, width: 64, height: 4, backgroundColor: GOLD, borderRadius: 2, marginBottom: 40 }} />

        <div style={{
          backgroundColor: WW, borderRadius: 10,
          boxShadow: "0 8px 32px rgba(44,44,44,0.10), 0 2px 8px rgba(44,44,44,0.06)",
          overflow: "hidden",
        }}>
          <Accordion className="">
            {faqKeys.map((n, i) => (
              <AccordionItem
                key={n}
                value={`faq-${n}`}
                style={{
                  borderBottom: i < faqKeys.length - 1 ? "1px solid rgba(27,67,50,0.10)" : "none",
                }}
              >
                <AccordionTrigger
                  style={{ padding: "24px 32px", fontSize: 17, fontWeight: 700, color: F, textAlign: "left" }}
                  className="hover:no-underline"
                >
                  {t(`faq${n}_q`)}
                </AccordionTrigger>
                <AccordionContent style={{ padding: "0 32px 24px" }}>
                  <p style={{ fontSize: 16, lineHeight: 1.8, color: `${CH}CC` }}>
                    {t(`faq${n}_a`)}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
