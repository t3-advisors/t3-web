import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  Building2,
  Hotel,
  Wheat,
  Factory,
  HeartPulse,
  ArrowRight,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sectors = [
  { icon: Building2, key: "Real Estate" },
  { icon: Hotel, key: "Hospitality" },
  { icon: Wheat, key: "Agribusiness" },
  { icon: Factory, key: "Industrial & Energy" },
  { icon: HeartPulse, key: "Healthcare" },
];

export default function HomePage() {
  const t = useTranslations("cta");

  return (
    <>
      {/* Hero */}
      <section className="bg-forest px-6 py-24 text-warm-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Acceso + Traducción
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-warm-white/80">
            Venezuela ofrece una de las oportunidades de inversión más
            asimétricas del hemisferio. T3 Advisors conecta capital
            internacional con activos reales, eliminando la fricción operativa
            que detiene a la mayoría.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-gold text-charcoal hover:bg-gold/90"
              )}
            >
              {t("contact")} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="portfolio"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-warm-white/30 text-warm-white hover:bg-warm-white/10"
              )}
            >
              {t("portfolio")}
            </Link>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Preparar",
                desc: "Estructuramos cada activo con estándares internacionales: documentación, valoración y narrativa de inversión.",
              },
              {
                step: "02",
                title: "Conectar",
                desc: "Identificamos y contactamos compradores calificados a través de redes especializadas por vertical.",
              },
              {
                step: "03",
                title: "Cerrar",
                desc: "Acompañamos la transacción de principio a fin: negociación, due diligence y cierre.",
              },
            ].map((card) => (
              <div
                key={card.step}
                className="rounded-lg border border-stone bg-white p-8"
              >
                <span className="text-sm font-semibold text-gold">
                  {card.step}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-forest">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors grid */}
      <section className="bg-stone/30 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold text-forest">
            Sectores
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-5">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <div
                  key={sector.key}
                  className="flex flex-col items-center gap-3 rounded-lg bg-white p-6 text-center shadow-sm"
                >
                  <Icon className="h-8 w-8 text-forest" />
                  <span className="text-sm font-semibold text-charcoal">
                    {sector.key}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-forest px-6 py-16 text-center text-warm-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-semibold">
            ¿Listo para explorar oportunidades en Venezuela?
          </h2>
          <p className="mt-4 text-warm-white/70">
            Solicite acceso a nuestro portafolio completo bajo acuerdo de
            confidencialidad.
          </p>
          <Link
            href="contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-8 bg-gold text-charcoal hover:bg-gold/90"
            )}
          >
            {t("contact")}
          </Link>
        </div>
      </section>
    </>
  );
}
