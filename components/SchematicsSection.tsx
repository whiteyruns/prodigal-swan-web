import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

function SideProfileSVG() {
  return (
    <svg
      className="relative z-10 block h-auto w-full"
      viewBox="0 0 600 280"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Side profile schematic of the Prodigal Swan showing fire effect locations"
    >
      <defs>
        <linearGradient id="flameG" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#fff5cc" />
          <stop offset="40%" stopColor="#ffb347" />
          <stop offset="100%" stopColor="#b85c1c" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="20" y1="240" x2="580" y2="240" stroke="#8b7355" strokeWidth="1" strokeDasharray="2 4" />
      <rect x="120" y="200" width="380" height="40" fill="none" stroke="#cfc4b0" strokeWidth="1.2" />
      <circle cx="170" cy="248" r="14" fill="none" stroke="#cfc4b0" strokeWidth="1.2" />
      <circle cx="450" cy="248" r="14" fill="none" stroke="#cfc4b0" strokeWidth="1.2" />
      <path d="M150 200 Q170 130 240 110 Q330 95 380 105 Q420 112 440 130 Q445 145 430 160 Q420 170 410 200 Z" fill="none" stroke="#e8913a" strokeWidth="1.4" />
      <path d="M430 130 Q470 90 460 50 Q455 30 440 30 Q425 30 425 50 Q425 75 410 95" fill="none" stroke="#e8913a" strokeWidth="1.4" />
      <ellipse cx="425" cy="40" rx="22" ry="14" fill="none" stroke="#e8913a" strokeWidth="1.4" />
      <path d="M447 40 L470 38 L447 46 Z" fill="#e8913a" stroke="#e8913a" />
      <path
        d="M425 24 Q420 0 425 -8 Q430 4 432 12 Q434 0 437 -4 Q438 8 442 14 Q438 22 425 24 Z"
        transform="translate(0,8)"
        fill="url(#flameG)"
        stroke="#ffb347"
        strokeWidth=".8"
      />
      <rect x="240" y="210" width="60" height="22" fill="none" stroke="#cfc4b0" strokeWidth="1" />
      <text x="270" y="225" textAnchor="middle" fill="#cfc4b0" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="1">
        LPG · 40LB
      </text>
      <path d="M280 210 Q310 180 360 150 Q400 120 425 35" fill="none" stroke="#e8913a" strokeWidth="1" strokeDasharray="3 3" />
      <g stroke="#f5d49a" strokeWidth=".8" strokeDasharray="1 4">
        <path d="M155 195 Q200 135 280 115 Q360 100 425 110" fill="none" />
      </g>
      <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#cfc4b0" letterSpacing="1">
        <line x1="425" y1="32" x2="500" y2="20" stroke="#e8913a" strokeWidth=".8" />
        <circle cx="425" cy="32" r="2.5" fill="#e8913a" />
        <text x="503" y="22">A · CROWN FLAME</text>
        <text x="503" y="34" fill="#8b7355" fontSize="8">
          propane, 6–8 ft plume
        </text>
        <line x1="270" y1="210" x2="270" y2="262" stroke="#cfc4b0" strokeWidth=".8" />
        <circle cx="270" cy="210" r="2.5" fill="#cfc4b0" />
        <text x="220" y="272">B · LPG TANK · ONBOARD</text>
        <line x1="240" y1="115" x2="115" y2="80" stroke="#f5d49a" strokeWidth=".8" />
        <circle cx="240" cy="115" r="2.5" fill="#f5d49a" />
        <text x="20" y="74">C · 200M ADDRESSABLE LED</text>
        <text x="20" y="86" fill="#8b7355" fontSize="8">
          5V, sequencer-controlled
        </text>
        <line x1="170" y1="234" x2="80" y2="220" stroke="#cfc4b0" strokeWidth=".8" />
        <circle cx="170" cy="234" r="2.5" fill="#cfc4b0" />
        <text x="20" y="214">D · TAYLOR-DUNN B248</text>
        <text x="20" y="226" fill="#8b7355" fontSize="8">
          1996, electric drive
        </text>
      </g>
      <g stroke="#8b7355" strokeWidth=".6" fill="none">
        <path d="M14 14 H30 M14 14 V30" />
        <path d="M586 14 H570 M586 14 V30" />
        <path d="M14 266 H30 M14 266 V250" />
        <path d="M586 266 H570 M586 266 V250" />
      </g>
    </svg>
  );
}

function PlumbingSVG() {
  return (
    <svg
      className="relative z-10 block h-auto w-full"
      viewBox="0 0 600 280"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Propane plumbing flow diagram with regulator, solenoid, dead-man switch, and crown effect"
    >
      <g>
        <rect x="40" y="120" width="80" height="60" rx="4" fill="none" stroke="#cfc4b0" strokeWidth="1.2" />
        <rect x="48" y="112" width="64" height="10" rx="2" fill="none" stroke="#cfc4b0" strokeWidth="1" />
        <text x="80" y="155" textAnchor="middle" fontFamily="Anton" fontSize="14" fill="#f5e9d2" letterSpacing="1">
          LPG
        </text>
        <text x="80" y="170" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#8b7355" letterSpacing="1">
          40 LB · 80% MAX
        </text>
      </g>
      <g>
        <rect x="180" y="135" width="80" height="30" fill="none" stroke="#e8913a" strokeWidth="1.2" />
        <text x="220" y="155" textAnchor="middle" fontFamily="Anton" fontSize="11" fill="#e8913a" letterSpacing="1">
          REGULATOR
        </text>
        <text x="220" y="178" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#8b7355" letterSpacing="1">
          10 PSI
        </text>
      </g>
      <g>
        <rect x="320" y="135" width="80" height="30" fill="none" stroke="#e8913a" strokeWidth="1.2" />
        <text x="360" y="155" textAnchor="middle" fontFamily="Anton" fontSize="11" fill="#e8913a" letterSpacing="1">
          SOLENOID
        </text>
        <text x="360" y="178" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#8b7355" letterSpacing="1">
          12V · NORMALLY CLOSED
        </text>
      </g>
      <g>
        <circle cx="500" cy="150" r="34" fill="none" stroke="#ff6a1f" strokeWidth="1.4" />
        <text x="500" y="148" textAnchor="middle" fontFamily="Anton" fontSize="11" fill="#ff6a1f" letterSpacing="1">
          CROWN
        </text>
        <text x="500" y="162" textAnchor="middle" fontFamily="Anton" fontSize="11" fill="#ff6a1f" letterSpacing="1">
          EFFECT
        </text>
        <g stroke="#ffb347" strokeWidth="1" opacity=".7">
          <path d="M500 110 V94 M520 112 L532 100 M480 112 L468 100 M464 132 L450 128 M536 132 L550 128" />
        </g>
      </g>
      <g stroke="#e8913a" strokeWidth="1.4" fill="none">
        <path d="M120 150 H180" />
        <path d="M260 150 H320" />
        <path d="M400 150 H466" />
      </g>
      <g>
        <rect x="320" y="220" width="80" height="34" fill="none" stroke="#f5d49a" strokeWidth="1" />
        <text x="360" y="238" textAnchor="middle" fontFamily="Anton" fontSize="11" fill="#f5d49a" letterSpacing="1">
          DEAD-MAN
        </text>
        <text x="360" y="250" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#8b7355" letterSpacing="1">
          CERT. OP. ONLY
        </text>
        <path d="M360 220 V165" stroke="#f5d49a" strokeWidth="1" strokeDasharray="3 3" />
        <text x="368" y="195" fontFamily="JetBrains Mono" fontSize="8" fill="#8b7355" letterSpacing="1">
          trigger
        </text>
      </g>
      <g fill="#e8913a">
        <path d="M148 146 L156 150 L148 154 Z" />
        <path d="M288 146 L296 150 L288 154 Z" />
        <path d="M434 146 L442 150 L434 154 Z" />
      </g>
      <g stroke="#8b7355" strokeWidth=".6" fill="none">
        <path d="M14 14 H30 M14 14 V30" />
        <path d="M586 14 H570 M586 14 V30" />
        <path d="M14 266 H30 M14 266 V250" />
        <path d="M586 266 H570 M586 266 V250" />
      </g>
      <text x="20" y="40" fontFamily="JetBrains Mono" fontSize="9" fill="#8b7355" letterSpacing="2">
        FLOW · LEFT TO RIGHT · MANUAL TRIGGER REQUIRED
      </text>
    </svg>
  );
}

type Card = {
  id: string;
  title: string;
  sub: string;
  svg: React.ReactNode;
  foot: { k: string; v: string }[];
  delay?: 1;
};

const cards: Card[] = [
  {
    id: "DWG-PS-001",
    title: "Side Profile · Fire Layout",
    sub: "Rev. 2026.04 · Sheet 1 of 2",
    svg: <SideProfileSVG />,
    foot: [
      { k: "Plume", v: "6–8 ft" },
      { k: "Fuel", v: "Propane" },
      { k: "Operator", v: "Certified" },
    ],
  },
  {
    id: "DWG-PS-002",
    title: "Propane Plumbing · Flow Diagram",
    sub: "Rev. 2026.04 · Sheet 2 of 2",
    svg: <PlumbingSVG />,
    foot: [
      { k: "Pressure", v: "10 psi" },
      { k: "Trigger", v: "Dead-man" },
      { k: "Insurance", v: "On file" },
    ],
    delay: 1,
  },
];

export function SchematicsSection() {
  return (
    <section
      id="schematics"
      className="bg-ink px-8 pb-[140px] pt-[120px] max-md:px-5 max-md:py-20"
    >
      <div className="mx-auto max-w-[1320px]">
        <SectionHeader
          num="03"
          kicker="Engineering"
          title={
            <>
              Yes, the <span className="text-flame">fire is</span>
              <br />
              actually plumbed.
            </>
          }
          side={
            <>
              For event coordinators, fire marshals, and anyone whose job
              description includes the words{" "}
              <em className="italic text-bone">&ldquo;liability waiver.&rdquo;</em>{" "}
              Full schematics, propane routing, and certified-op sign-off
              available on request.
            </>
          }
        />

        <div className="grid grid-cols-2 gap-8 max-[980px]:grid-cols-1">
          {cards.map((card) => (
            <Reveal key={card.id} delay={card.delay}>
              <div className="schem-card border border-hairline-2 p-7">
                <div className="relative z-10 mb-2 flex items-start justify-between gap-4">
                  <div>
                    <div className="font-display text-2xl uppercase tracking-[0.04em] text-bone">
                      {card.title}
                    </div>
                    <div className="font-mono text-[12px] uppercase tracking-[0.18em] text-dust">
                      {card.sub}
                    </div>
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-flame">
                    {card.id}
                  </div>
                </div>

                {card.svg}

                <div className="relative z-10 mt-5 grid grid-cols-3 gap-3">
                  {card.foot.map((f) => (
                    <div key={f.k} className="border-t border-hairline-2 pt-2.5">
                      <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.24em] text-dust">
                        {f.k}
                      </div>
                      <div className="font-display text-lg uppercase text-bone">
                        {f.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
