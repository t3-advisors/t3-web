"use client";

import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqKeys = [1, 2, 3, 4, 5, 6] as const;

export function FaqSection() {
  const t = useTranslations("sellersPage");

  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[800px]">
        <h2 className="text-3xl font-semibold text-forest">
          {t("faq_headline")}
        </h2>
        <Accordion className="mt-10">
          {faqKeys.map((n) => (
            <AccordionItem key={n} value={`faq-${n}`}>
              <AccordionTrigger className="text-left text-base font-semibold text-forest hover:no-underline">
                {t(`faq${n}_q`)}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-charcoal/80 leading-relaxed">
                  {t(`faq${n}_a`)}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
