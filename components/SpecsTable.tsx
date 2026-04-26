import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

type Spec = {
  num: string;
  label: string;
  value: React.ReactNode;
  note: string;
  icon: React.ReactNode;
};

const specs: Spec[] = [
  {
    num: "01",
    label: "Dimensions",
    value: (
      <>
        6′ × 16′
        <br />
        <span className="text-dust">×</span> 12′{" "}
        <span className="text-[0.55em] tracking-[0.04em] text-dust">tall</span>
      </>
    ),
    note: "Wide enough for the lane. Tall enough for the photo.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M3 12h18M3 6h18M3 18h18M6 3v18M18 3v18" />
      </svg>
    ),
  },
  {
    num: "02",
    label: "Base Vehicle",
    value: (
      <>
        1996
        <br />
        Taylor-Dunn{" "}
        <span className="text-[0.55em] tracking-[0.04em] text-dust">B248</span>
      </>
    ),
    note: "The cargo mover that started it all. Still moves cargo. Different cargo now.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="6" cy="17" r="3" />
        <circle cx="18" cy="17" r="3" />
        <path d="M3 17h.5M9 17h6m3 0h.5M5 11l3-5h8l3 5v6" />
      </svg>
    ),
  },
  {
    num: "03",
    label: "Weight & Capacity",
    value: (
      <>
        10,000 <span className="text-[0.55em] tracking-[0.04em] text-dust">lbs</span>
        <br />
        4,000 <span className="text-[0.55em] tracking-[0.04em] text-dust">lb load</span>
      </>
    ),
    note: "Curb weight of a small school bus. Can carry a sound rig and a bar.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M4 7h16v10H4z" />
        <path d="M8 11h8M8 14h8" />
        <path d="M2 10v4M22 10v4" />
      </svg>
    ),
  },
  {
    num: "04",
    label: "Power",
    value: (
      <>
        Dual
        <br />
        500
        <span className="text-[0.55em] tracking-[0.04em] text-dust">Ah</span> packs
      </>
    ),
    note: "Two 500Ah battery packs for drive + lights. Onboard propane for fire.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M14 3l-7 11h5l-2 7 7-11h-5l2-7z" />
      </svg>
    ),
  },
  {
    num: "05",
    label: "Lighting",
    value: (
      <>
        200<span className="text-[0.55em] tracking-[0.04em] text-dust">m</span>
        <br />
        programmable LED
      </>
    ),
    note: "Two hundred meters of addressable LED, sequenced live or to soundtrack.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
      </svg>
    ),
  },
  {
    num: "06",
    label: "Fire Effects",
    value: (
      <>
        Crown flame,
        <br />
        <span className="text-flame">certified op.</span>
      </>
    ),
    note: "Propane crown effect. Always operated by a certified fire effects technician.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M12 2c2 4-2 5 0 9 2-3 5-1 4 4-1 4-5 6-8 4-3-2-3-7 0-9 1 3 4-1 4-8z" />
      </svg>
    ),
  },
];

export function SpecsTable() {
  return (
    <section
      id="specs"
      className="bg-gradient-to-b from-ink to-ink-2 px-8 py-[120px] max-md:px-5 max-md:py-20"
    >
      <div className="mx-auto max-w-[1320px]">
        <SectionHeader
          num="02"
          kicker="Hardware"
          title={
            <>
              The build,
              <br />
              by the <span className="text-flame">numbers.</span>
            </>
          }
          side="Six honest specs for the engineer in your safety officer. The Swan is heavy, electric underneath, and runs propane on top. Everything else is showmanship."
        />

        <Reveal>
          <div className="grid grid-cols-3 gap-px border border-hairline-2 bg-hairline-2 max-[880px]:grid-cols-2 max-[560px]:grid-cols-1">
            {specs.map((s) => (
              <div
                key={s.num}
                className="group flex min-h-[240px] flex-col justify-between bg-ink-2 px-8 pb-8 pt-9 transition-colors duration-300 hover:bg-ink-3"
              >
                <div className="mb-6 flex items-start justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-dust transition-colors group-hover:text-flame">
                    // {s.num}
                  </span>
                  <div className="h-7 w-7 text-flame opacity-85">{s.icon}</div>
                </div>
                <div>
                  <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.3em] text-ash">
                    {s.label}
                  </div>
                  <div
                    className="font-display uppercase leading-none text-bone"
                    style={{ fontSize: "clamp(28px, 3.4vw, 44px)" }}
                  >
                    {s.value}
                  </div>
                </div>
                <p className="mt-3.5 text-[13px] leading-[1.5] text-dust">
                  {s.note}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
