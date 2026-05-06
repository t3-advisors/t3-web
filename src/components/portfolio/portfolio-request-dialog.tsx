"use client";

import { Suspense } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { useTranslations } from "next-intl";
import { CheckCircle, X } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import type { Vertical } from "@/data/portfolio-listings";

const F    = "#1B4332";
const GOLD = "#C9A84C";
const WW   = "#F8F6F0";
const CH   = "#2C2C2C";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultVertical?: Vertical;
  /** Called after a successful submission. The parent persists session
   * state and triggers PDF downloads from here. */
  onSubmitSuccess: (pdfLanguages: ("es" | "en")[]) => void;
  /** When true, shows the success state instead of the form. */
  showSuccess: boolean;
}

export function PortfolioRequestDialog({
  open,
  onOpenChange,
  defaultVertical,
  onSubmitSuccess,
  showSuccess,
}: Props) {
  const t = useTranslations("contact");

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(20,32,28,0.55)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            zIndex: 100,
            // Base UI sets data-state="open"/"closed" — fade with CSS
            transition: "opacity 0.2s ease",
          }}
        />
        <Dialog.Popup
          className="px-5 py-8 md:px-10 md:py-10"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: WW,
            borderRadius: 12,
            boxShadow: "0 24px 60px rgba(0,0,0,0.35), 0 4px 14px rgba(0,0,0,0.18)",
            width: "min(640px, 92vw)",
            maxHeight: "92vh",
            overflowY: "auto",
            zIndex: 101,
            outline: "none",
          }}
        >
          {/* Close button — top right */}
          <Dialog.Close
            aria-label={t("modal_close")}
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              borderRadius: 6,
              color: CH,
              opacity: 0.6,
              transition: "opacity 0.15s, background-color 0.15s",
            }}
          >
            <X size={20} />
          </Dialog.Close>

          {showSuccess ? (
            // ── Success state ─────────────────────────────────
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "20px 8px 8px",
              }}
            >
              <div style={{ width: 40, height: 1, backgroundColor: GOLD, marginBottom: 24 }} />
              <CheckCircle size={56} style={{ color: F }} aria-hidden="true" />
              <Dialog.Title
                render={
                  <h2
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: 24,
                      fontWeight: 600,
                      color: F,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2,
                      marginTop: 18,
                    }}
                  />
                }
              >
                {t("modal_success_title")}
              </Dialog.Title>
              <Dialog.Description
                render={
                  <p
                    style={{
                      fontSize: 16,
                      color: `${CH}CC`,
                      lineHeight: 1.65,
                      marginTop: 14,
                      maxWidth: 460,
                    }}
                  />
                }
              >
                {t("modal_success_body")}
              </Dialog.Description>
              <Dialog.Close
                style={{
                  marginTop: 28,
                  padding: "12px 32px",
                  borderRadius: 6,
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: "var(--font-heading)",
                  backgroundColor: GOLD,
                  color: CH,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.22), 0 1px 4px rgba(0,0,0,0.12)",
                }}
              >
                {t("modal_success_close")}
              </Dialog.Close>
            </div>
          ) : (
            // ── Form state ────────────────────────────────────
            <>
              <div style={{ width: 40, height: 1, backgroundColor: GOLD, marginBottom: 16 }} />
              <Dialog.Title
                render={
                  <h2
                    className="text-[26px] md:text-[30px]"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 600,
                      color: F,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2,
                    }}
                  />
                }
              >
                {t("modal_title")}
              </Dialog.Title>
              <Dialog.Description
                render={
                  <p
                    style={{
                      fontSize: 15,
                      color: `${CH}CC`,
                      lineHeight: 1.65,
                      marginTop: 12,
                      marginBottom: 28,
                    }}
                  />
                }
              >
                {t("modal_subtitle")}
              </Dialog.Description>

              <Suspense fallback={null}>
                <ContactForm
                  forceBuyer
                  defaultVertical={defaultVertical}
                  onSuccess={({ pdfLanguages }) => onSubmitSuccess(pdfLanguages)}
                />
              </Suspense>
            </>
          )}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
