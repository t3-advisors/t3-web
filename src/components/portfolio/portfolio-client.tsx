"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { BlindProfileCard } from "./blind-profile-card";
import type { BlindProfile, TransactionType, Vertical } from "@/data/portfolio-listings";

const verticals: Vertical[] = ["re", "hos", "ag", "ind", "hc", "min"];

const verticalLabels: Record<Vertical, { labelKey: string }> = {
  re: { labelKey: "filter_re" },
  hos: { labelKey: "filter_hos" },
  ag: { labelKey: "filter_ag" },
  ind: { labelKey: "filter_ind" },
  hc: { labelKey: "filter_hc" },
  min: { labelKey: "filter_min" },
};

interface PortfolioClientProps {
  listings: BlindProfile[];
  locale: string;
}

export function PortfolioClient({ listings, locale }: PortfolioClientProps) {
  const t = useTranslations("portfolioPage");
  const searchParams = useSearchParams();
  const paramVertical = searchParams.get("vertical") as Vertical | null;
  const [activeType, setActiveType] = useState<TransactionType | "all">("all");
  const [activeVertical, setActiveVertical] = useState<Vertical | null>(
    paramVertical && verticals.includes(paramVertical) ? paramVertical : null
  );

  const filtered = listings.filter((item) => {
    if (activeType !== "all" && item.transactionType !== activeType) return false;
    if (activeVertical && item.vertical !== activeVertical) return false;
    return true;
  });

  // Count per vertical (after type filter)
  const typeFiltered = listings.filter(
    (item) => activeType === "all" || item.transactionType === activeType
  );
  const countByVertical = verticals.reduce((acc, v) => {
    acc[v] = typeFiltered.filter((item) => item.vertical === v).length;
    return acc;
  }, {} as Record<Vertical, number>);

  const typeButtons: { key: TransactionType | "all"; labelKey: string }[] = [
    { key: "all", labelKey: "filter_all" },
    { key: "sale", labelKey: "filter_sale" },
    { key: "capital_raise", labelKey: "filter_capital_raise" },
  ];

  function getTransactionLabel(type: TransactionType): string {
    return type === "sale" ? t("filter_sale") : t("filter_capital_raise");
  }

  return (
    <div>
      {/* Level 1: Transaction type tabs */}
      <div className="flex flex-wrap gap-2">
        {typeButtons.map((btn) => (
          <button
            key={btn.key}
            onClick={() => setActiveType(btn.key)}
            className={`rounded px-4 py-2 text-sm font-semibold transition-colors ${
              activeType === btn.key
                ? "bg-forest text-warm-white"
                : "border border-stone bg-transparent text-charcoal hover:border-forest"
            }`}
          >
            {t(btn.labelKey)}
          </button>
        ))}
      </div>

      {/* Level 2: Vertical chips */}
      <div className="mt-4 flex flex-wrap gap-2">
        {verticals.map((v) => (
          <button
            key={v}
            onClick={() => setActiveVertical(activeVertical === v ? null : v)}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
              activeVertical === v
                ? "bg-forest/10 text-forest border border-forest"
                : "border border-stone bg-transparent text-charcoal/70 hover:border-forest"
            }`}
          >
            {t(verticalLabels[v].labelKey)} ({countByVertical[v]})
          </button>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 flex flex-wrap gap-4 text-sm text-charcoal/60">
        {verticals.map((v) => (
          <span key={v}>
            <span className="font-semibold text-forest">{countByVertical[v]}</span>{" "}
            {t(verticalLabels[v].labelKey)}
          </span>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <BlindProfileCard
            key={item.id}
            transactionTypeLabel={getTransactionLabel(item.transactionType)}
            verticalLabel={t(verticalLabels[item.vertical].labelKey)}
            title={locale === "es" ? item.titleEs : item.titleEn}
            size={locale === "es" ? item.sizeEs : item.sizeEn}
            priceRange={item.priceRange}
            highlight={locale === "es" ? item.highlightEs : item.highlightEn}
            requestInfoLabel={t("card_request_info")}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-charcoal/60">
          No hay oportunidades con estos filtros.
        </p>
      )}
    </div>
  );
}
