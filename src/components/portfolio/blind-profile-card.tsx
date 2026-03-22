import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlindProfileCardProps {
  transactionTypeLabel: string;
  verticalLabel: string;
  title: string;
  size: string;
  priceRange: string;
  highlight: string;
  requestInfoLabel: string;
}

export function BlindProfileCard({
  transactionTypeLabel,
  verticalLabel,
  title,
  size,
  priceRange,
  highlight,
  requestInfoLabel,
}: BlindProfileCardProps) {
  return (
    <div className="flex flex-col rounded border border-stone bg-warm-white p-6">
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-forest px-2.5 py-0.5 text-xs font-semibold text-warm-white">
          {transactionTypeLabel}
        </span>
        <span className="rounded-full bg-stone/30 px-2.5 py-0.5 text-xs font-semibold text-charcoal">
          {verticalLabel}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-charcoal">
        {title}
      </h3>
      <p className="mt-2 text-sm text-charcoal/70">{size}</p>
      <p className="text-sm font-semibold text-forest">{priceRange}</p>
      <p className="mt-3 flex-1 text-sm italic leading-relaxed text-charcoal/70">
        {highlight}
      </p>
      <Link
        href="contact"
        className="mt-4 inline-flex items-center text-sm font-semibold text-gold transition-colors hover:text-gold/80"
      >
        {requestInfoLabel} <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
}
