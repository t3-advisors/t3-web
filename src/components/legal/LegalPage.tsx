import { ScrollReveal } from "@/components/ui/ScrollReveal";

const F    = "#1B4332";
const GOLD = "#C9A84C";
const WW   = "#F8F6F0";
const CH   = "#2C2C2C";

export interface LegalSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

interface LegalPageProps {
  eyebrow?: string;
  title: string;
  intro: string;
  sections: LegalSection[];
}

/**
 * Shared layout for /privacy, /cookies and /terms.
 * Consumes translated content from the caller; no text lives here.
 */
export function LegalPage({ eyebrow = "T3 Advisors", title, intro, sections }: LegalPageProps) {
  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", backgroundColor: WW, color: CH }}>
      {/* Page header */}
      <section className="px-5 pt-12 pb-10 md:px-10 md:pt-20 md:pb-[72px]" style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
        <div style={{ animation: "heroReveal 0.7s cubic-bezier(0.16,1,0.3,1) both" }}>
          <p style={{ fontSize: 22, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: GOLD }}>
            {eyebrow}
          </p>
          <div style={{ width: 40, height: 1, backgroundColor: GOLD, opacity: 0.4, margin: "12px auto 24px" }} />
        </div>
        <div style={{ animation: "heroReveal 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}>
          <h1 className="text-[32px] md:text-[52px]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: F }}>
            {title}
          </h1>
        </div>
      </section>

      {/* gold rule */}
      <div style={{ height: 1, backgroundColor: GOLD, opacity: 0.55 }} />

      {/* Body */}
      <section className="px-5 py-10 md:px-10 md:py-[72px]" style={{ maxWidth: 780, margin: "0 auto" }}>
        <ScrollReveal>
          <p className="text-base md:text-[18px]" style={{ lineHeight: 1.8, color: `${CH}CC` }}>
            {intro}
          </p>
        </ScrollReveal>

        <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 40 }}>
          {sections.map((section, i) => (
            <ScrollReveal key={section.title} delay={i * 0.05}>
              <article>
                <h2 className="text-xl md:text-[26px]" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, color: F, letterSpacing: "-0.01em" }}>
                  {section.title}
                </h2>
                <div style={{ marginTop: 10, width: 40, height: 3, backgroundColor: GOLD, borderRadius: 2 }} />

                {section.paragraphs?.map((p, j) => (
                  <p
                    key={j}
                    className="text-base md:text-[17px]"
                    style={{ marginTop: j === 0 ? 20 : 14, lineHeight: 1.8, color: `${CH}CC` }}
                  >
                    {p}
                  </p>
                ))}

                {section.bullets && section.bullets.length > 0 && (
                  <ul style={{ marginTop: 16, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                    {section.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="text-base md:text-[17px]"
                        style={{ lineHeight: 1.7, color: `${CH}CC`, paddingLeft: 20, position: "relative" }}
                      >
                        <span
                          aria-hidden="true"
                          style={{
                            position: "absolute", left: 0, top: "0.6em",
                            width: 8, height: 1, backgroundColor: GOLD, opacity: 0.8,
                          }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
