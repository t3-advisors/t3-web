import { ArrowRight } from "lucide-react";

export function ElPuente() {
  return (
    <div
      className="flex min-h-screen w-full"
      style={{ fontFamily: "'Montserrat', 'Inter', sans-serif" }}
    >
      {/* Left panel — Forest Green, the asset side */}
      <div
        className="relative flex w-1/2 flex-col justify-center px-14 py-20"
        style={{ backgroundColor: "#1B4332" }}
      >
        <p
          className="text-xs font-bold uppercase tracking-[0.3em]"
          style={{ color: "#C9A84C" }}
        >
          El Mercado
        </p>
        <div className="mt-3 h-px w-10" style={{ backgroundColor: "#C9A84C", opacity: 0.5 }} />
        <h2
          className="mt-8 text-5xl font-semibold leading-[1.1] tracking-tight"
          style={{ color: "#F8F6F0" }}
        >
          Venezuela<br />tiene los<br />activos.
        </h2>
        <p
          className="mt-8 text-base leading-relaxed"
          style={{ color: "#F8F6F0", opacity: 0.7 }}
        >
          Más de 50 oportunidades en 5 sectores: bienes raíces, hotelería, agroindustria, industria y salud. A 20–30¢ por dólar de costo de reposición.
        </p>

        {/* Stat trio */}
        <div className="mt-12 flex gap-8 border-t pt-8" style={{ borderColor: "rgba(248,246,240,0.15)" }}>
          <div>
            <p className="text-3xl font-bold" style={{ color: "#C9A84C" }}>50+</p>
            <p className="mt-1 text-xs uppercase tracking-widest" style={{ color: "#F8F6F0", opacity: 0.6 }}>oportunidades</p>
          </div>
          <div>
            <p className="text-3xl font-bold" style={{ color: "#C9A84C" }}>5</p>
            <p className="mt-1 text-xs uppercase tracking-widest" style={{ color: "#F8F6F0", opacity: 0.6 }}>sectores</p>
          </div>
          <div>
            <p className="text-3xl font-bold" style={{ color: "#C9A84C" }}>70–90%</p>
            <p className="mt-1 text-xs uppercase tracking-widest" style={{ color: "#F8F6F0", opacity: 0.6 }}>bajo precios región</p>
          </div>
        </div>

        {/* Vertical gold line at right edge */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2"
          style={{ width: 3, height: "40%", backgroundColor: "#C9A84C", opacity: 0.6 }}
        />
      </div>

      {/* Right panel — Warm White, T3 as the bridge */}
      <div
        className="flex w-1/2 flex-col justify-center px-14 py-20"
        style={{ backgroundColor: "#F8F6F0" }}
      >
        <p
          className="text-xs font-bold uppercase tracking-[0.3em]"
          style={{ color: "#1B4332", opacity: 0.5 }}
        >
          T3 Advisors · Caracas · Madrid
        </p>
        <div className="mt-3 h-px w-10" style={{ backgroundColor: "#C9A84C", opacity: 0.5 }} />
        <h2
          className="mt-8 text-5xl font-semibold leading-[1.1] tracking-tight"
          style={{ color: "#1B4332" }}
        >
          T3 conecta<br />el capital.
        </h2>
        <p
          className="mt-8 text-base leading-relaxed"
          style={{ color: "#2D3436", opacity: 0.75 }}
        >
          Somos la firma de asesoría que prepara, presenta y acompaña transacciones en un mercado donde la intermediación profesional no existía.
        </p>

        <div className="mt-12 flex flex-col gap-3">
          <a
            href="#"
            className="inline-flex items-center justify-between rounded px-6 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#1B4332" }}
          >
            <span>Soy inversionista</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-between rounded border px-6 py-4 text-sm font-semibold transition-colors hover:bg-green-50"
            style={{ borderColor: "#1B4332", color: "#1B4332" }}
          >
            <span>Quiero vender un activo</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <p
          className="mt-10 text-xs leading-relaxed"
          style={{ color: "#2D3436", opacity: 0.45 }}
        >
          Confidencialidad garantizada. La identidad del activo solo se revela tras firma de NDA.
        </p>
      </div>
    </div>
  );
}
