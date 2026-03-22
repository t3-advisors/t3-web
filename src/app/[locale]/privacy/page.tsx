import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — T3 Advisors",
  description: "Política de privacidad de T3 Advisors.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[800px]">
          <h1 className="text-4xl font-semibold tracking-tight text-forest md:text-5xl">
            Política de Privacidad
          </h1>
          <p className="mt-8 leading-relaxed text-charcoal/80">
            Esta página se encuentra en construcción. La política de privacidad
            completa estará disponible próximamente.
          </p>
        </div>
      </section>
    </>
  );
}
