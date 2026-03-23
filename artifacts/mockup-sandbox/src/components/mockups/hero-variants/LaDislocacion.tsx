import { ArrowRight } from "lucide-react";

export function LaDislocacion() {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center px-8 py-20"
      style={{ backgroundColor: "#F8F6F0", fontFamily: "'Montserrat', 'Inter', sans-serif" }}
    >
      <div className="mx-auto w-full max-w-3xl text-center">
        {/* Eyebrow */}
        <p
          className="text-xs font-bold uppercase tracking-[0.3em]"
          style={{ color: "#C9A84C" }}
        >
          T3 Advisors
        </p>
        <div className="mx-auto mt-3 h-px w-10" style={{ backgroundColor: "#C9A84C", opacity: 0.5 }} />

        {/* Shock number */}
        <div className="mt-10 flex items-baseline justify-center gap-2">
          <span
            className="text-[110px] font-bold leading-none tracking-tight"
            style={{ color: "#1B4332" }}
          >
            20
          </span>
          <span
            className="text-[60px] font-semibold leading-none"
            style={{ color: "#C9A84C" }}
          >
            ¢
          </span>
          <div className="ml-4 flex flex-col items-start text-left">
            <span
              className="text-sm font-medium leading-snug"
              style={{ color: "#2D3436", opacity: 0.6, maxWidth: 180 }}
            >
              por cada dólar de costo de reposición
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1
          className="mt-6 text-3xl font-semibold leading-tight tracking-tight"
          style={{ color: "#1B4332" }}
        >
          Así se transan los activos comerciales en Venezuela.
        </h1>

        {/* Divider */}
        <div className="mx-auto mt-8 h-px w-16" style={{ backgroundColor: "#C9A84C", opacity: 0.4 }} />

        {/* Sub */}
        <p
          className="mx-auto mt-8 max-w-xl text-base leading-relaxed"
          style={{ color: "#2D3436", opacity: 0.7 }}
        >
          Oficinas, hoteles, plantas industriales, tierras agrícolas y clínicas se ofrecen a precios que no existen en ningún otro mercado de América Latina. T3 Advisors conecta a quienes quieren invertir con quienes quieren vender.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#1B4332" }}
          >
            Ver oportunidades <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded border px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-green-50"
            style={{ borderColor: "#1B4332", color: "#1B4332" }}
          >
            Quiero vender <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Comparable prices mini-table */}
        <div
          className="mx-auto mt-14 w-full max-w-xl rounded border"
          style={{ borderColor: "#D5CEC0" }}
        >
          <div
            className="grid grid-cols-3 text-left text-xs font-semibold uppercase tracking-wider"
            style={{ backgroundColor: "#1B4332", color: "#F8F6F0" }}
          >
            <div className="border-r px-4 py-2.5" style={{ borderColor: "rgba(248,246,240,0.15)" }}>Ciudad</div>
            <div className="border-r px-4 py-2.5" style={{ borderColor: "rgba(248,246,240,0.15)" }}>Oficina media</div>
            <div className="px-4 py-2.5">vs. Caracas</div>
          </div>
          {[
            { city: "Caracas", price: "$200–$500/m²", diff: "—", highlight: true },
            { city: "Bogotá", price: "$1.200–$1.800/m²", diff: "3–5×" },
            { city: "Panamá", price: "$2.000–$3.000/m²", diff: "6–8×" },
          ].map((row) => (
            <div
              key={row.city}
              className="grid grid-cols-3 border-t text-left text-xs"
              style={{
                borderColor: "#D5CEC0",
                backgroundColor: row.highlight ? "rgba(27,67,50,0.04)" : "transparent",
              }}
            >
              <div
                className="border-r px-4 py-2.5 font-semibold"
                style={{
                  borderColor: "#D5CEC0",
                  color: row.highlight ? "#1B4332" : "#2D3436",
                  borderLeft: row.highlight ? "3px solid #C9A84C" : undefined,
                }}
              >
                {row.city}
              </div>
              <div className="border-r px-4 py-2.5" style={{ borderColor: "#D5CEC0", color: "#2D3436" }}>
                {row.price}
              </div>
              <div
                className="px-4 py-2.5 font-semibold"
                style={{ color: row.highlight ? "#1B4332" : "#C9A84C" }}
              >
                {row.diff}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
