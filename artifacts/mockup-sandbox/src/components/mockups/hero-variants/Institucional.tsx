import { ArrowRight } from "lucide-react";

export function Institucional() {
  return (
    <div
      className="flex min-h-screen w-full flex-col"
      style={{ backgroundColor: "#F8F6F0", fontFamily: "'Montserrat', 'Inter', sans-serif" }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-14 py-5 border-b"
        style={{ borderColor: "#D5CEC0" }}
      >
        <p
          className="text-xs font-bold uppercase tracking-[0.35em]"
          style={{ color: "#1B4332" }}
        >
          T3 Advisors
        </p>
        <p
          className="text-xs font-medium"
          style={{ color: "#2D3436", opacity: 0.45 }}
        >
          Caracas · Madrid
        </p>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col justify-center px-14 py-20">
        <div className="max-w-[720px]">
          {/* Thin gold rule */}
          <div className="mb-10 h-px w-14" style={{ backgroundColor: "#C9A84C" }} />

          {/* The headline — with period for gravitas */}
          <h1
            className="text-[58px] font-semibold leading-[1.08] tracking-tight"
            style={{ color: "#1B4332" }}
          >
            Donde el capital
            <br />sofisticado
            <br />encuentra Venezuela.
          </h1>

          {/* Positioning line */}
          <p
            className="mt-10 text-base leading-relaxed"
            style={{ color: "#2D3436", opacity: 0.65, maxWidth: 520 }}
          >
            T3 Advisors asesora transacciones de activos comerciales en Venezuela — bienes raíces, hotelería, agroindustria, industria y salud — en los dos únicos sentidos que importan: Venta y Capital Raise.
          </p>

          {/* CTAs — restrained */}
          <div className="mt-12 flex items-center gap-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-75"
              style={{ color: "#1B4332" }}
            >
              Para inversionistas <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <div className="h-4 w-px" style={{ backgroundColor: "#D5CEC0" }} />
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-75"
              style={{ color: "#1B4332" }}
            >
              Para vendedores <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom band — key facts, very understated */}
      <div
        className="border-t px-14 py-6"
        style={{ borderColor: "#D5CEC0" }}
      >
        <div className="flex items-center gap-12">
          {[
            { value: "50+", label: "oportunidades en cartera" },
            { value: "5", label: "sectores de inversión" },
            { value: "70–90%", label: "por debajo de precios regionales" },
          ].map(({ value, label }, i) => (
            <div key={i} className="flex items-baseline gap-2">
              <span
                className="text-xl font-bold"
                style={{ color: "#1B4332" }}
              >
                {value}
              </span>
              <span
                className="text-xs"
                style={{ color: "#2D3436", opacity: 0.5 }}
              >
                {label}
              </span>
            </div>
          ))}
          <div className="ml-auto">
            <p
              className="text-[10px] uppercase tracking-widest"
              style={{ color: "#2D3436", opacity: 0.35 }}
            >
              Confidencialidad garantizada bajo NDA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
