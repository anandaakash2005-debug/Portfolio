import type { Project } from "@/lib/portfolio-data";

export function Motif({ kind }: { kind: Project["motif"] }) {
  const s = "stroke-primary";
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full" aria-hidden="true" fill="none">
      {kind === "sat" && (
        <g strokeWidth="1">
          {Array.from({ length: 8 }).map((_, i) => (
            <path
              key={i}
              className="stroke-accent/40"
              d={`M0 ${40 + i * 26} C 120 ${20 + i * 30}, 260 ${70 + i * 22}, 400 ${30 + i * 28}`}
            />
          ))}
          <rect x="70" y="60" width="90" height="70" className={s} strokeDasharray="4 3" />
          <text x="72" y="54" className="fill-primary font-mono" fontSize="9">
            water · 0.81
          </text>
          <rect
            x="230"
            y="120"
            width="110"
            height="80"
            className="stroke-accent"
            strokeDasharray="4 3"
          />
          <text x="232" y="114" className="fill-accent font-mono" fontSize="9">
            land-cover
          </text>
          <circle cx="200" cy="130" r="3" className="fill-primary" />
        </g>
      )}
      {kind === "graph" && (
        <g strokeWidth="1">
          {[
            [60, 60],
            [150, 40],
            [240, 90],
            [330, 60],
            [100, 170],
            [200, 190],
            [300, 180],
            [200, 120],
          ].map(([x, y], i, a) => (
            <g key={i}>
              {a
                .slice(i + 1)
                .filter((_, j) => (i + j) % 2 === 0)
                .map(([x2, y2], j) => (
                  <line key={j} x1={x} y1={y} x2={x2} y2={y2} className="stroke-primary/25" />
                ))}
              <circle
                cx={x}
                cy={y}
                r={i === 7 ? 7 : 4}
                className={i === 7 ? "fill-primary" : "fill-accent/70"}
              />
            </g>
          ))}
          <text x="212" y="124" className="fill-primary font-mono" fontSize="9">
            copilot ctx
          </text>
        </g>
      )}
      {kind === "health" && (
        <g strokeWidth="1.5">
          <line x1="0" y1="130" x2="400" y2="130" className="stroke-border" />
          <polyline
            className={s}
            points="0,130 110,130 130,130 145,80 160,180 175,110 190,130 400,130"
          />
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x={40 + i * 90}
              y="190"
              width="70"
              height="30"
              className="stroke-accent/50"
              strokeWidth="1"
            />
          ))}
          <text x="44" y="209" className="fill-accent font-mono" fontSize="9">
            diet
          </text>
          <text x="134" y="209" className="fill-accent font-mono" fontSize="9">
            exercise
          </text>
          <text x="224" y="209" className="fill-accent font-mono" fontSize="9">
            medicine
          </text>
          <text x="314" y="209" className="fill-accent font-mono" fontSize="9">
            reminders
          </text>
        </g>
      )}
      {kind === "flow" && (
        <g strokeWidth="1" className="font-mono" fontSize="9">
          {["profile", "/api/register", "mysql", "eligibility", "schemes"].map((t, i) => (
            <g key={t}>
              <rect
                x={20 + i * 76}
                y="110"
                width="66"
                height="36"
                className={i === 4 ? "stroke-primary" : "stroke-accent/50"}
                strokeDasharray={i === 3 ? "3 3" : undefined}
              />
              <text x={26 + i * 76} y="132" className={i === 4 ? "fill-primary" : "fill-accent"}>
                {t}
              </text>
              {i < 4 && <line x1={86 + i * 76} y1="128" x2={96 + i * 76} y2="128" className={s} />}
            </g>
          ))}
          <text x="248" y="168" className="fill-muted-foreground">
            planned AI layer
          </text>
        </g>
      )}
      {kind === "layers" && (
        <g strokeWidth="1" className="font-mono" fontSize="9">
          {["swing gui", "jwt filter", "rest api", "payroll service", "jpa / mysql"].map((t, i) => (
            <g key={t}>
              <rect
                x={70 + i * 14}
                y={30 + i * 42}
                width={260 - i * 28}
                height="30"
                className={i === 2 ? "stroke-primary" : "stroke-accent/50"}
              />
              <text
                x={80 + i * 14}
                y={49 + i * 42}
                className={i === 2 ? "fill-primary" : "fill-accent"}
              >
                {t}
              </text>
            </g>
          ))}
          <line
            x1="360"
            y1="40"
            x2="360"
            y2="220"
            className="stroke-primary"
            strokeDasharray="3 4"
          />
          <text x="300" y="250" className="fill-muted-foreground">
            request ↓ · response ↑
          </text>
        </g>
      )}
    </svg>
  );
}
