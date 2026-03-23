const GOLD = "#C9A84C";
const WW = "#F8F6F0";

const R = 155, CX = 185, CY = 185;
const cLon = -20 * Math.PI / 180;
const cLat = 15 * Math.PI / 180;

function project(lon: number, lat: number) {
  const λ = lon * Math.PI / 180;
  const φ = lat * Math.PI / 180;
  const cosC = Math.sin(φ) * Math.sin(cLat) + Math.cos(φ) * Math.cos(cLat) * Math.cos(λ - cLon);
  const x = CX + R * Math.cos(φ) * Math.sin(λ - cLon);
  const y = CY - R * (Math.sin(φ) * Math.cos(cLat) - Math.cos(φ) * Math.cos(λ - cLon) * Math.sin(cLat));
  return { x, y, visible: cosC > 0 };
}

function makeLine(points: Array<{ lon: number; lat: number }>) {
  let d = "", on = false;
  for (const { lon, lat } of points) {
    const { x, y, visible } = project(lon, lat);
    if (visible) {
      d += on ? ` L${x.toFixed(1)},${y.toFixed(1)}` : ` M${x.toFixed(1)},${y.toFixed(1)}`;
      on = true;
    } else { on = false; }
  }
  return d;
}

function arcPath(ax: number, ay: number, bx: number, by: number) {
  const mx = (ax + bx) / 2;
  const my = (ay + by) / 2;
  const cpx = mx + 0.3 * (CX - mx);
  const cpy = my + 0.3 * (CY - my);
  return `M${ax.toFixed(1)},${ay.toFixed(1)} Q${cpx.toFixed(1)},${cpy.toFixed(1)} ${bx.toFixed(1)},${by.toFixed(1)}`;
}

const parallels = [-60, -30, 0, 30, 60].map(lat =>
  makeLine(Array.from({ length: 721 }, (_, i) => ({ lon: -180 + i * 0.5, lat })))
);
const meridians = [-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150, 180].map(lon =>
  makeLine(Array.from({ length: 357 }, (_, i) => ({ lon, lat: -89 + i * 0.5 })))
);

const cities = [
  { name: "MIAMI",    lon: -80.2, lat: 25.8,  dx: -7, dy:  3, anchor: "end"    },
  { name: "N. YORK",  lon: -74,   lat: 40.7,  dx:  0, dy: -8, anchor: "middle" },
  { name: "MADRID",   lon: -3.7,  lat: 40.4,  dx:  7, dy:  9, anchor: "start"  },
  { name: "LONDRES",  lon: -0.1,  lat: 51.5,  dx:  7, dy: -3, anchor: "start"  },
  { name: "DUBAI",    lon: 55.3,  lat: 25.3,  dx:  7, dy:  3, anchor: "start"  },
  { name: "S. PAULO", lon: -46.6, lat: -23.5, dx:  7, dy:  4, anchor: "start"  },
];

function round1(n: number) { return Math.round(n * 10) / 10; }

const vzla = project(-66, 8);

export function PresenciaMap() {
  return (
    <svg viewBox="0 0 370 370" style={{ width: "100%", maxWidth: 400, height: "auto", display: "block", margin: "0 auto" }}>
      <circle cx={CX} cy={CY} r={R} fill="rgba(13,35,24,0.6)" />
      {parallels.map((d, i) => <path key={`p${i}`} d={d} fill="none" stroke={`rgba(248,246,240,0.11)`} strokeWidth={0.6} />)}
      {meridians.map((d, i) => <path key={`m${i}`} d={d} fill="none" stroke={`rgba(248,246,240,0.11)`} strokeWidth={0.6} />)}
      <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(248,246,240,0.2)" strokeWidth={1} />
      {cities.map(({ name, lon, lat }) => {
        const c = project(lon, lat);
        if (!c.visible) return null;
        return <path key={name} d={arcPath(round1(vzla.x), round1(vzla.y), round1(c.x), round1(c.y))} fill="none" stroke={GOLD} strokeWidth={0.9} strokeDasharray="3,4" opacity={0.5} />;
      })}
      {cities.map(({ name, lon, lat, dx, dy, anchor }) => {
        const { x: rx, y: ry, visible } = project(lon, lat);
        const x = round1(rx); const y = round1(ry);
        if (!visible) return null;
        return (
          <g key={name}>
            <circle cx={x} cy={y} r={2.5} fill={GOLD} opacity={0.85} />
            <text x={x + dx} y={y + dy + 4} textAnchor={anchor as "start" | "middle" | "end"}
              fontSize={8} fill={`rgba(248,246,240,0.6)`}
              fontFamily="Montserrat, sans-serif" fontWeight={600} letterSpacing={0.7}>
              {name}
            </text>
          </g>
        );
      })}
      <circle cx={round1(vzla.x)} cy={round1(vzla.y)} r={19} fill="none" stroke={GOLD} strokeWidth={0.6} opacity={0.14} />
      <circle cx={round1(vzla.x)} cy={round1(vzla.y)} r={11} fill="none" stroke={GOLD} strokeWidth={0.9} opacity={0.28} />
      <circle cx={round1(vzla.x)} cy={round1(vzla.y)} r={5}  fill={GOLD} opacity={0.22} />
      <circle cx={round1(vzla.x)} cy={round1(vzla.y)} r={3}  fill={GOLD} opacity={1} />
      <text x={round1(vzla.x)} y={round1(vzla.y) + 23} textAnchor="middle"
        fontSize={7.5} fill={GOLD} fontFamily="Montserrat, sans-serif" fontWeight={700} letterSpacing={1.5}>
        VENEZUELA
      </text>
    </svg>
  );
}
