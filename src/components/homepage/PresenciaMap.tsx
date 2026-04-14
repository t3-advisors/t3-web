"use client";

import { useLocale } from "next-intl";

const GOLD = "#C9A84C";
const WW   = "#F8F6F0";

const R = 155, CX = 185, CY = 185;
const cLon = -20 * Math.PI / 180;
const cLat =  12 * Math.PI / 180;

function project(lon: number, lat: number) {
  const λ = lon * Math.PI / 180;
  const φ = lat * Math.PI / 180;
  const cosC =
    Math.sin(φ) * Math.sin(cLat) +
    Math.cos(φ) * Math.cos(cLat) * Math.cos(λ - cLon);
  const x = CX + R * Math.cos(φ) * Math.sin(λ - cLon);
  const y =
    CY -
    R * (Math.sin(φ) * Math.cos(cLat) -
         Math.cos(φ) * Math.cos(λ - cLon) * Math.sin(cLat));
  return { x, y, visible: cosC > 0 };
}

/** Open polyline — breaks at the limb. Used for lat/lon grid. */
function makeLine(pts: [number, number][]) {
  let d = "", on = false;
  for (const [lon, lat] of pts) {
    const { x, y, visible } = project(lon, lat);
    if (visible) {
      d += on ? ` L${x.toFixed(1)},${y.toFixed(1)}` : ` M${x.toFixed(1)},${y.toFixed(1)}`;
      on = true;
    } else { on = false; }
  }
  return d;
}

/**
 * Closed polygon — projects all points, keeps only visible ones, closes with Z.
 * Works well when most vertices are on the near-side hemisphere.
 */
function makeFilled(pts: [number, number][]) {
  const vis = pts
    .map(([lon, lat]) => project(lon, lat))
    .filter(p => p.visible);
  if (vis.length < 3) return "";
  return vis.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ") + " Z";
}

// ── Grid ─────────────────────────────────────────────────────
const parallels = [-60, -30, 0, 30, 60].map(lat =>
  makeLine(Array.from({ length: 721 }, (_, i) => [-180 + i * 0.5, lat] as [number, number]))
);
const meridians = [-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150, 180].map(lon =>
  makeLine(Array.from({ length: 357 }, (_, i) => [lon, -89 + i * 0.5] as [number, number]))
);

// ── Simplified continent polygons ────────────────────────────
// All vertices are on the near-hemisphere (center: lon=-20°, lat=12°).

const SA: [number, number][] = [
  [-73, 11.8], [-68, 11.5], [-63, 10.7], [-61, 10.6], [-60, 8],
  [-60, 5],    [-52, 4],    [-50, 2],    [-49, 0],
  [-44, -3],   [-38, -5],   [-35, -6],   [-35, -9],   [-38, -15],
  [-39, -18],  [-40, -20],  [-43, -23],  [-44, -24],  [-48, -28],
  [-52, -33],  [-58, -39],  [-65, -55],  [-68, -55],
  [-75, -50],  [-73, -37],  [-71, -30],  [-70, -20],
  [-75, -14],  [-80, -3],   [-80, 3],    [-77, 8],    [-75, 10],
];

// North America — Atlantic seaboard + Central America.
// The Gulf of Mexico concavity cannot be rendered as a simple filled polygon
// from this projection angle, so we skip directly from S Florida to Central America
// and close via the continental interior (no self-intersection).
const NA: [number, number][] = [
  // Atlantic coast (north → south)
  [-52, 47], [-64, 44], [-67, 44], [-70, 42],
  [-74, 40.7], [-75, 36], [-77, 35], [-79, 33],
  [-81, 31], [-80, 25],
  // Jump to Central America (avoids Gulf concavity)
  [-87, 16], [-83, 10], [-77, 8],
  // Interior return north through Mexico & continental US
  [-85, 12], [-90, 17], [-97, 22],
  [-101, 28], [-100, 35], [-90, 40],
  [-80, 44], [-72, 45], [-65, 47],
  [-52, 47],
];

// Middle East + Arabian Peninsula — gives Dubai geographic context
const MIDDLE_EAST: [number, number][] = [
  [28, 43], [35, 43], [42, 42], [44, 40],
  [48, 35], [50, 30], [52, 27], [55, 24],
  [56, 22], [58, 22], [58, 15],
  [54, 12], [46, 12], [42, 15],
  [40, 20], [38, 25], [36, 28],
  [35, 30], [35, 36], [36, 37], [28, 43],
];

// Atlantic Europe (Iberia → British Isles → France)
const EUROPE: [number, number][] = [
  [-9, 37],  [-5, 36],  [-3, 36],  [0, 37],  [3, 40],
  [3, 43],   [4, 44],   [8, 44],  [10, 44], [14, 44],
  [18, 40],  [22, 38],  [26, 38], [28, 41], [30, 42],
  [30, 44],  [28, 56],  [24, 55], [20, 54], [18, 57],
  [16, 56],  [10, 55],   [8, 55],  [5, 54],  [3, 51],
  [2, 51],   [1, 51],  [-1, 51], [-3, 51], [-5, 50],
  [-5, 48],  [-2, 47], [-3, 44], [-5, 44], [-8, 44],
  [-9, 44],  [-9, 42],
];

// Scandinavia + Baltic coast
const SCANDINAVIA: [number, number][] = [
  [5, 57],   [8, 55],  [10, 55], [10, 58],  [5, 62],
  [6, 63],  [10, 64], [14, 65], [18, 70],  [20, 70],
  [25, 70], [28, 71], [30, 70], [29, 69],  [28, 68],
  [26, 65], [24, 65], [25, 60], [28, 57],  [24, 55],
  [20, 54], [18, 57], [16, 56], [10, 55],   [8, 55],
];

// Africa (west coast dominates; east coast still visible from this projection)
const AFRICA: [number, number][] = [
  [-6, 36],  [-5, 36],  [-3, 36],  [0, 37],  [8, 37],
  [15, 37],  [25, 37],  [30, 31], [37, 22], [40, 10],
  [36, -1],  [35, -10], [35, -25],[30, -31],[26, -34],
  [18, -35], [14, -17],  [9, -2],  [9, 5],   [5, 5],
  [0, 5],   [-7, 5],  [-10, 5], [-15, 10], [-17, 15],
  [-17, 21],[-13, 24], [-9, 33], [-5, 34],
];

const CONTINENTS = [SA, NA, EUROPE, SCANDINAVIA, AFRICA, MIDDLE_EAST];

// ── Cities ───────────────────────────────────────────────────
const citiesBase = [
  { nameEs: "MIAMI",    nameEn: "MIAMI",    lon: -80.2, lat:  25.8, dx: -7, dy:  3, anchor: "end"    },
  { nameEs: "N. YORK",  nameEn: "N. YORK",  lon: -74,   lat:  40.7, dx:  0, dy: -8, anchor: "middle" },
  { nameEs: "MADRID",   nameEn: "MADRID",   lon:  -3.7, lat:  40.4, dx:  7, dy:  9, anchor: "start"  },
  { nameEs: "LONDRES",  nameEn: "LONDON",   lon:  -0.1, lat:  51.5, dx:  7, dy: -3, anchor: "start"  },
  { nameEs: "DUBAI",    nameEn: "DUBAI",    lon:  55.3, lat:  25.3, dx: -8, dy:  3, anchor: "end"    },
  { nameEs: "S. PAULO", nameEn: "S. PAULO", lon: -46.6, lat: -23.5, dx:  7, dy:  4, anchor: "start"  },
];

function r1(n: number) { return Math.round(n * 10) / 10; }

const vzla = project(-66, 8);

function arcPath(ax: number, ay: number, bx: number, by: number) {
  const mx = (ax + bx) / 2;
  const my = (ay + by) / 2;
  const cpx = mx + 0.28 * (CX - mx);
  const cpy = my + 0.28 * (CY - my);
  return `M${ax.toFixed(1)},${ay.toFixed(1)} Q${cpx.toFixed(1)},${cpy.toFixed(1)} ${bx.toFixed(1)},${by.toFixed(1)}`;
}

export function PresenciaMap() {
  const locale = useLocale();
  const cities = citiesBase.map(c => ({ ...c, name: locale === "en" ? c.nameEn : c.nameEs }));

  return (
    <svg
      viewBox="0 0 370 370"
      style={{ width: "100%", maxWidth: 440, height: "auto", display: "block", margin: "0 auto" }}
    >
      <defs>
        {/* Sphere gradient — light from top-left for volume */}
        <radialGradient id="pm-sphere" cx="35%" cy="28%" r="72%">
          <stop offset="0%"   stopColor="rgba(46,90,62,0.96)" />
          <stop offset="55%"  stopColor="rgba(18,46,31,0.98)" />
          <stop offset="100%" stopColor="rgba(5,16,10,1)"     />
        </radialGradient>

        {/* Venezuela glow gradient */}
        <radialGradient id="pm-vzla-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor={GOLD} stopOpacity="0.45" />
          <stop offset="100%" stopColor={GOLD} stopOpacity="0"    />
        </radialGradient>

        {/* Clip everything to globe circle */}
        <clipPath id="pm-clip">
          <circle cx={CX} cy={CY} r={R} />
        </clipPath>
      </defs>

      {/* CSS animations */}
      <style>{`
        @keyframes pm-pulse {
          0%   { transform: scale(1);   opacity: 0.7; }
          100% { transform: scale(3);   opacity: 0;   }
        }
        @keyframes pm-arc {
          to { stroke-dashoffset: -90; }
        }
        .pm-ring {
          animation: pm-pulse 2.6s ease-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        .pm-arc {
          animation: pm-arc 5s linear infinite;
        }
      `}</style>

      {/* ── Globe base ─────────────────────────── */}
      <circle cx={CX} cy={CY} r={R} fill="url(#pm-sphere)" />

      {/* ── Grid (clipped) ─────────────────────── */}
      <g clipPath="url(#pm-clip)" opacity={0.09}>
        {parallels.map((d, i) => (
          <path key={`p${i}`} d={d} fill="none" stroke={WW} strokeWidth={0.65} />
        ))}
        {meridians.map((d, i) => (
          <path key={`m${i}`} d={d} fill="none" stroke={WW} strokeWidth={0.65} />
        ))}
      </g>

      {/* ── Continent fills (clipped) ──────────── */}
      <g clipPath="url(#pm-clip)">
        {CONTINENTS.map((pts, i) => (
          <path
            key={i}
            d={makeFilled(pts)}
            fill="rgba(27,85,52,0.62)"
            stroke={`rgba(201,168,76,0.28)`}
            strokeWidth={0.75}
            strokeLinejoin="round"
          />
        ))}
      </g>

      {/* ── Globe rim ─────────────────────────── */}
      <circle cx={CX} cy={CY} r={R} fill="none" stroke={`rgba(248,246,240,0.18)`} strokeWidth={1} />

      {/* ── Connection arcs ────────────────────── */}
      {cities.map(({ name, lon, lat }) => {
        const c = project(lon, lat);
        if (!c.visible) return null;
        return (
          <path
            key={name}
            className="pm-arc"
            d={arcPath(r1(c.x), r1(c.y), r1(vzla.x), r1(vzla.y))}
            fill="none"
            stroke={GOLD}
            strokeWidth={1}
            strokeDasharray="4,6"
            opacity={0.55}
          />
        );
      })}

      {/* ── City markers ───────────────────────── */}
      {cities.map(({ name, lon, lat, dx, dy, anchor }) => {
        const { x: rx, y: ry, visible } = project(lon, lat);
        const x = r1(rx); const y = r1(ry);
        if (!visible) return null;
        return (
          <g key={name}>
            <circle cx={x} cy={y} r={3} fill={GOLD} opacity={0.9} />
            <text
              x={x + dx} y={y + dy + 4}
              textAnchor={anchor as "start" | "middle" | "end"}
              fontSize={8} fill={`rgba(248,246,240,0.7)`}
              fontFamily="Montserrat, sans-serif"
              fontWeight={600} letterSpacing={0.7}
            >
              {name}
            </text>
          </g>
        );
      })}

      {/* ── Venezuela ──────────────────────────── */}
      {/* Soft glow area */}
      <circle cx={r1(vzla.x)} cy={r1(vzla.y)} r={26} fill="url(#pm-vzla-glow)" />

      {/* Animated expanding ring */}
      <circle
        className="pm-ring"
        cx={r1(vzla.x)} cy={r1(vzla.y)} r={7}
        fill="none" stroke={GOLD} strokeWidth={1.5}
      />

      {/* Static outer ring */}
      <circle cx={r1(vzla.x)} cy={r1(vzla.y)} r={11} fill="none" stroke={GOLD} strokeWidth={0.7} opacity={0.3} />

      {/* Solid centre dot */}
      <circle cx={r1(vzla.x)} cy={r1(vzla.y)} r={4} fill={GOLD} />

      {/* Label */}
      <text
        x={r1(vzla.x)} y={r1(vzla.y) + 25}
        textAnchor="middle"
        fontSize={8} fill={GOLD}
        fontFamily="Montserrat, sans-serif"
        fontWeight={700} letterSpacing={1.6}
      >
        VENEZUELA
      </text>
    </svg>
  );
}
