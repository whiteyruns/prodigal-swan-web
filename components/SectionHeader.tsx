import { Reveal } from "./Reveal";

type Props = {
  num: string; // e.g. "01"
  kicker: string; // e.g. "Origin"
  title: React.ReactNode; // can include <span className="text-flame">accent</span>
  side?: React.ReactNode; // optional right-side editorial paragraph
};

export function SectionHeader({ num, kicker, title, side }: Props) {
  return (
    <div className="mb-16 flex flex-wrap items-end justify-between gap-10">
      <div>
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-dust">
            § {num} / {kicker}
          </div>
        </Reveal>
        <Reveal>
          <h2
            className="mt-3 font-display uppercase text-bone"
            style={{
              fontSize: "clamp(48px, 7vw, 108px)",
              lineHeight: 0.9,
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </h2>
        </Reveal>
      </div>
      {side && (
        <Reveal delay={1}>
          <p className="max-w-[380px] text-[15px] leading-relaxed text-ash">
            {side}
          </p>
        </Reveal>
      )}
    </div>
  );
}
