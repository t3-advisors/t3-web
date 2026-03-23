import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

interface CtaBandProps {
  headline: string;
  sub?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function CtaBand({
  headline,
  sub,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CtaBandProps) {
  return (
    <section className="bg-forest px-6 py-20 text-center text-warm-white md:py-28">
      <div className="mx-auto max-w-[680px]">
        <div className="mx-auto mb-6 h-px w-12 bg-gold/50" />
        <h2 className="text-3xl font-semibold leading-snug">{headline}</h2>
        {sub && <p className="mt-5 text-lg text-warm-white/70">{sub}</p>}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href={primaryHref}
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-gold px-8 text-charcoal hover:bg-gold/90"
            )}
          >
            {primaryLabel} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          {secondaryHref && secondaryLabel && (
            <Link
              href={secondaryHref}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-warm-white/40 px-8 text-warm-white hover:bg-warm-white/10"
              )}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
