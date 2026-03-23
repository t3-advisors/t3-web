import { Building2, Hotel, Wheat, Factory, HeartPulse, ArrowRight } from "lucide-react";

const sectors = [
  { icon: Building2, label: "Bienes Raíces", tag: "RE" },
  { icon: Hotel, label: "Hotelería", tag: "HOS" },
  { icon: Wheat, label: "Agroindustria", tag: "AG" },
  { icon: Factory, label: "Industrial", tag: "IND" },
  { icon: HeartPulse, label: "Salud", tag: "HC" },
];

export function LosCincoSectores() {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center px-8 py-20"
      style={{ backgroundColor: "#F8F6F0", fontFamily: "'Montserrat', 'Inter', sans-serif" }}
    >
      <div className="mx-auto w-full max-w-4xl text-center">
        {/* Sector pills — the visual hook */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {sectors.map(({ icon: Icon, label, tag }) => (
            <div
              key={tag}
              className="flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold"
              style={{
                borderColor: "#D5CEC0",
                backgroundColor: "white",
                color: "#1B4332",
              }}
            >
              <Icon className="h-3.5 w-3.5" style={{ color: "#C9A84C" }} />
              {label}
            </div>
          ))}
        </div>

        {/* Eyebrow */}
        <p
          className="mt-10 text-xs font-bold uppercase tracking-[0.3em]"
          style={{ color: "#C9A84C" }}
        >
          T3 Advisors
        </p>
        <div className="mx-auto mt-3 h-px w-10" style={{ backgroundColor: "#C9A84C", opacity: 0.5 }} />

        {/* Headline */}
        <h1
          className="mt-6 text-[52px] font-semibold leading-[1.1] tracking-tight"
          style={{ color: "#1B4332" }}
        >
          Activos comerciales venezolanos
          <br />a una fracción de su valor.
        </h1>

        {/* Sub */}
        <p
          className="mx-auto mt-7 max-w-[600px] text-lg leading-relaxed"
          style={{ color: "#2D3436", opacity: 0.7 }}
        >
          T3 Advisors es la firma que conecta capital con oportunidades de inversión en Venezuela — y a propietarios de activos con el comprador o inversionista que necesitan.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded px-8 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#1B4332" }}
          >
            Soy inversionista <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded border px-8 py-4 text-sm font-semibold transition-colors hover:bg-green-50"
            style={{ borderColor: "#1B4332", color: "#1B4332" }}
          >
            Quiero vender <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Stat bar */}
        <div
          className="mx-auto mt-14 flex w-full max-w-2xl divide-x rounded"
          style={{
            backgroundColor: "#1B4332",
            divideColor: "rgba(248,246,240,0.12)",
          }}
        >
          {[
            { value: "50+", label: "oportunidades activas" },
            { value: "5", label: "sectores de inversión" },
            { value: "70–90%", label: "bajo precios regionales" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-1 flex-col items-center py-5">
              <p
                className="text-2xl font-bold"
                style={{ color: "#C9A84C" }}
              >
                {value}
              </p>
              <p
                className="mt-1 text-[10px] font-medium uppercase tracking-widest"
                style={{ color: "#F8F6F0", opacity: 0.6 }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
