"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, CheckCircle } from "lucide-react";
import type { Vertical } from "@/data/portfolio-listings";

type FormMode = "buyer" | "seller";

const VERTICALS: { key: string; id: Vertical }[] = [
  { key: "vertical_re", id: "re" },
  { key: "vertical_hos", id: "hos" },
  { key: "vertical_ag", id: "ag" },
  { key: "vertical_ind", id: "ind" },
  { key: "vertical_hc", id: "hc" },
  { key: "vertical_min", id: "min" },
];

const VALID_VERTICALS: Vertical[] = ["re", "hos", "ag", "ind", "hc", "min"];

const PRICE_RANGES = [
  { value: "under_1m", key: "price_under_1m" },
  { value: "1m_5m", key: "price_1m_5m" },
  { value: "5m_15m", key: "price_5m_15m" },
  { value: "15m_50m", key: "price_15m_50m" },
  { value: "over_50m", key: "price_over_50m" },
] as const;

const INPUT_CLS =
  "mt-1 block w-full border-0 border-b border-stone bg-transparent py-2 text-base text-charcoal outline-none transition-colors focus:border-forest";

export function ContactForm() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const searchParams = useSearchParams();

  const interestParam = searchParams.get("interest") as Vertical | null;
  const modeParam = searchParams.get("mode");

  const initialMode: FormMode = modeParam === "seller" ? "seller" : "buyer";

  const [mode, setMode] = useState<FormMode>(initialMode);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [sellerTxError, setSellerTxError] = useState(false);
  const [buyerVerticalsError, setBuyerVerticalsError] = useState(false);

  const [shared, setShared] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  const [buyerFields, setBuyerFields] = useState({
    verticals:
      interestParam && VALID_VERTICALS.includes(interestParam)
        ? [interestParam]
        : ([] as string[]),
  });

  const [sellerFields, setSellerFields] = useState({
    assetType: "",
    location: "",
    priceRange: "",
    transactionTypes: [] as string[],
    message: "",
  });

  function handleSellerTxToggle(id: string) {
    setSellerFields((prev) => ({
      ...prev,
      transactionTypes: prev.transactionTypes.includes(id)
        ? prev.transactionTypes.filter((v) => v !== id)
        : [...prev.transactionTypes, id],
    }));
  }

  function handleVerticalToggle(id: string) {
    setBuyerFields((prev) => ({
      ...prev,
      verticals: prev.verticals.includes(id)
        ? prev.verticals.filter((v) => v !== id)
        : [...prev.verticals, id],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!shared.name.trim() || !shared.email.trim()) return;
    if (mode === "buyer" && buyerFields.verticals.length === 0) {
      setBuyerVerticalsError(true);
      return;
    }
    if (mode === "seller" && sellerFields.transactionTypes.length === 0) {
      setSellerTxError(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode,
          locale,
          ...shared,
          ...(mode === "buyer"
            ? { verticals: buyerFields.verticals }
            : {
                transactionTypes: sellerFields.transactionTypes,
                assetType: sellerFields.assetType,
                location: sellerFields.location,
                priceRange: sellerFields.priceRange,
                message: sellerFields.message,
              }),
          website: "", // honeypot — always empty from humans
        }),
      });

      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setSubmitError(t("submit_error"));
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded border border-forest/20 bg-forest/5 p-10 text-center">
        <CheckCircle className="h-10 w-10 text-forest" />
        <p className="text-lg font-semibold text-forest">
          {t(mode === "buyer" ? "success_buyer" : "success_seller")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* ── Mode Toggle ── */}
      <div className="relative flex rounded-full border border-stone p-1">
        <div
          className="absolute top-1 bottom-1 rounded-full bg-forest transition-all duration-300 ease-out"
          style={{
            left: mode === "buyer" ? 4 : "50%",
            width: "calc(50% - 4px)",
          }}
        />
        <button
          type="button"
          onClick={() => setMode("buyer")}
          className={`relative z-10 flex-1 rounded-full py-2.5 text-base font-semibold transition-colors duration-300 ${
            mode === "buyer" ? "text-warm-white" : "text-charcoal"
          }`}
        >
          {t("toggle_buyer")}
        </button>
        <button
          type="button"
          onClick={() => setMode("seller")}
          className={`relative z-10 flex-1 rounded-full py-2.5 text-base font-semibold transition-colors duration-300 ${
            mode === "seller" ? "text-warm-white" : "text-charcoal"
          }`}
        >
          {t("toggle_seller")}
        </button>
      </div>

      {/* ── Buyer Intro ── */}
      {mode === "buyer" && (
        <div className="rounded-lg border border-stone bg-forest/5 px-5 py-4">
          <p className="text-base leading-relaxed text-charcoal/80">
            {t("buyer_intro")}
          </p>
        </div>
      )}

      {/* ── Shared Fields ── */}
      <div>
        <label className="text-base font-semibold text-charcoal">
          {t("name")} *
        </label>
        <input
          type="text"
          required
          value={shared.name}
          onChange={(e) => setShared({ ...shared, name: e.target.value })}
          className={INPUT_CLS}
        />
      </div>

      <div>
        <label className="text-base font-semibold text-charcoal">
          {t("email")} *
        </label>
        <input
          type="email"
          required
          value={shared.email}
          onChange={(e) => setShared({ ...shared, email: e.target.value })}
          className={INPUT_CLS}
        />
      </div>

      <div>
        <label className="text-base font-semibold text-charcoal">
          {t("company")}
        </label>
        <input
          type="text"
          value={shared.company}
          onChange={(e) => setShared({ ...shared, company: e.target.value })}
          className={INPUT_CLS}
        />
      </div>

      <div>
        <label className="text-base font-semibold text-charcoal">
          {t("phone")}
        </label>
        <input
          type="tel"
          value={shared.phone}
          onChange={(e) => setShared({ ...shared, phone: e.target.value })}
          className={INPUT_CLS}
        />
      </div>

      {/* ── Buyer-Specific Fields ── */}
      {mode === "buyer" && (
        <>
          <div>
            <label className="text-base font-semibold text-charcoal">
              {t("verticals")} *
            </label>
            <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {VERTICALS.map((v) => (
                <label
                  key={v.id}
                  className="flex cursor-pointer items-center gap-2.5 text-base text-charcoal"
                >
                  <input
                    type="checkbox"
                    checked={buyerFields.verticals.includes(v.id)}
                    onChange={() => {
                      handleVerticalToggle(v.id);
                      setBuyerVerticalsError(false);
                    }}
                    className="accent-gold h-4 w-4"
                  />
                  {t(v.key)}
                </label>
              ))}
            </div>
            {buyerVerticalsError && (
              <p className="mt-2 text-xs text-red-600">
                {t("buyer_verticals_required")}
              </p>
            )}
          </div>

        </>
      )}

      {/* ── Seller-Specific Fields ── */}
      {mode === "seller" && (
        <>
          <div>
            <label className="text-base font-semibold text-charcoal">
              {t("seller_transaction_type")} *
            </label>
            <div className="mt-3 flex flex-col gap-2.5">
              {(["full_sale", "equity", "partners", "financing"] as const).map((opt) => (
                <label
                  key={opt}
                  className="flex cursor-pointer items-center gap-2.5 text-base text-charcoal"
                >
                  <input
                    type="checkbox"
                    checked={sellerFields.transactionTypes.includes(opt)}
                    onChange={() => {
                      handleSellerTxToggle(opt);
                      setSellerTxError(false);
                    }}
                    className="accent-gold h-4 w-4"
                  />
                  {t(`seller_tx_${opt}`)}
                </label>
              ))}
            </div>
            {sellerTxError && (
              <p className="mt-2 text-xs text-red-600">
                {t("seller_tx_required")}
              </p>
            )}
          </div>

          <div>
            <label className="text-base font-semibold text-charcoal">
              {t("asset_type")}
            </label>
            <select
              value={sellerFields.assetType}
              onChange={(e) =>
                setSellerFields({ ...sellerFields, assetType: e.target.value })
              }
              className={INPUT_CLS}
            >
              <option value="">—</option>
              {VERTICALS.map((v) => (
                <option key={v.id} value={v.id}>
                  {t(v.key)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-base font-semibold text-charcoal">
              {t("asset_location")}
            </label>
            <input
              type="text"
              value={sellerFields.location}
              onChange={(e) =>
                setSellerFields({ ...sellerFields, location: e.target.value })
              }
              placeholder={t("asset_location_placeholder")}
              className={INPUT_CLS}
            />
          </div>

          <div>
            <label className="text-base font-semibold text-charcoal">
              {t("price_range")}
            </label>
            <select
              value={sellerFields.priceRange}
              onChange={(e) =>
                setSellerFields({
                  ...sellerFields,
                  priceRange: e.target.value,
                })
              }
              className={INPUT_CLS}
            >
              <option value="">{t("price_range_placeholder")}</option>
              {PRICE_RANGES.map((r) => (
                <option key={r.value} value={r.value}>
                  {t(r.key)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-base font-semibold text-charcoal">
              {t("message")} *
            </label>
            <textarea
              rows={4}
              required
              value={sellerFields.message}
              onChange={(e) =>
                setSellerFields({ ...sellerFields, message: e.target.value })
              }
              className="mt-1 block w-full resize-none border-0 border-b border-stone bg-transparent py-2 text-base text-charcoal outline-none transition-colors focus:border-forest"
            />
          </div>
        </>
      )}

      {/* ── Submit ── */}
      <div className="space-y-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center rounded-lg bg-forest px-6 py-3 text-base font-semibold text-warm-white transition-colors hover:bg-forest/90 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? t("submitting") : (mode === "buyer" ? t("submit_buyer") : t("submit_seller"))}
          {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
        </button>
        {submitError && (
          <p className="text-sm text-red-600">{submitError}</p>
        )}
      </div>
    </form>
  );
}
