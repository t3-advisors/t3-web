"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const F = "#1B4332";
const GOLD = "#C9A84C";
const WW = "#F8F6F0";

const ITEMS = [
  { sector: "BIENES RAÍCES", name: "Centro Empresarial Las Mercedes", location: "Caracas, Miranda", type: "Edificio de oficinas · 4.200 m²", price: "USD 4.2M", tag: "En venta" },
  { sector: "HOTELERÍA & TURISMO", name: "Hotel Boutique Los Andes", location: "Mérida, Mérida", type: "Hotel · 48 habitaciones", price: "USD 2.1M", tag: "En venta" },
  { sector: "AGROINDUSTRIA", name: "Hacienda La Trinidad", location: "Barinas, Barinas", type: "Finca productiva · 380 ha", price: "USD 890K", tag: "En negociación" },
  { sector: "INDUSTRIAL / ENERGÍA", name: "Planta Ensambladora Carabobo", location: "Valencia, Carabobo", type: "Planta industrial · 12.000 m²", price: "USD 3.8M", tag: "En venta" },
  { sector: "SALUD", name: "Clínica Metropolitana del Lago", location: "Maracaibo, Zulia", type: "Clínica privada · 6.500 m²", price: "USD 2.4M", tag: "En venta" },
];

const CARD_W = 340;
const CARD_GAP = 20;
const VISIBLE = 3;

export function PortfolioCarousel() {
  const [idx, setIdx] = useState(0);
  const idxRef = useRef(0);
  const max = ITEMS.length - VISIBLE;

  const goTo = (i: number) => {
    const clamped = Math.max(0, Math.min(max, i));
    idxRef.current = clamped;
    setIdx(clamped);
  };

  useEffect(() => {
    const t = setInterval(() => {
      const next = idxRef.current >= max ? 0 : idxRef.current + 1;
      idxRef.current = next;
      setIdx(next);
    }, 3600);
    return () => clearInterval(t);
  }, [max]);

  const translateX = idx * (CARD_W + CARD_GAP);

  return (
    <div>
      <div style={{ overflow: "hidden", borderRadius: 4 }}>
        <div style={{
          display: "flex",
          gap: CARD_GAP,
          transform: `translateX(-${translateX}px)`,
          transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)",
          willChange: "transform",
        }}>
          {ITEMS.map((item) => (
            <div
              key={item.name}
              style={{
                flex: `0 0 ${CARD_W}px`,
                backgroundColor: WW,
                borderRadius: 10,
                padding: "32px 28px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
                display: "flex",
                flexDirection: "column",
                minHeight: 280,
              }}
            >
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: GOLD }}>{item.sector}</p>
              <h3 style={{ marginTop: 12, fontFamily: "'Montserrat', sans-serif", fontSize: 19, fontWeight: 600, color: F, lineHeight: 1.3 }}>{item.name}</h3>
              <p style={{ marginTop: 8, fontSize: 14, color: `${F}88` }}>{item.location}</p>
              <p style={{ marginTop: 3, fontSize: 13, color: `${F}66` }}>{item.type}</p>
              <div style={{ marginTop: "auto", paddingTop: 5, borderTop: `1px solid rgba(27,67,50,0.10)`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 22, fontWeight: 700, color: F }}>{item.price}</span>
                <span style={{ fontSize: 10, fontWeight: 700, padding: "4px 10px", borderRadius: 4, backgroundColor: `${F}12`, color: F, letterSpacing: "0.08em", textTransform: "uppercase" }}>{item.tag}</span>
              </div>
              <p style={{ marginTop: 12, fontSize: 11, color: `${F}44`, fontStyle: "italic" }}>Detalles completos bajo NDA · solicitar acceso</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 12 }}>
        <button
          onClick={() => goTo(idx - 1)}
          disabled={idx === 0}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: "50%", border: `1px solid rgba(201,168,76,0.4)`, backgroundColor: "transparent", color: GOLD, cursor: idx === 0 ? "default" : "pointer", opacity: idx === 0 ? 0.3 : 1, transition: "opacity 0.2s" }}
        >
          <ChevronLeft size={18} />
        </button>
        {Array.from({ length: max + 1 }, (_, i) => (
          <div
            key={i}
            onClick={() => goTo(i)}
            style={{ width: idx === i ? 24 : 8, height: 8, borderRadius: 4, backgroundColor: idx === i ? GOLD : `rgba(201,168,76,0.3)`, cursor: "pointer", transition: "all 0.3s" }}
          />
        ))}
        <button
          onClick={() => goTo(idx + 1)}
          disabled={idx === max}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: "50%", border: `1px solid rgba(201,168,76,0.4)`, backgroundColor: "transparent", color: GOLD, cursor: idx === max ? "default" : "pointer", opacity: idx === max ? 0.3 : 1, transition: "opacity 0.2s" }}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
