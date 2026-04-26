import { Reveal } from "./Reveal";

const includes = [
  { n: "01", t: "Trained driver for the full event", b: "incl." },
  { n: "02", t: "Certified fire operator and propane", b: "incl." },
  { n: "03", t: "Full LED light show, programmed to your event", b: "incl." },
  { n: "04", t: "Sound system with DJ input", b: "incl." },
  { n: "05", t: "Transport to and from the venue", b: "incl." },
  { n: "06", t: "Insurance & permitting on request", b: "add-on" },
];

export function BookingCard() {
  return (
    <section
      id="booking"
      className="relative px-8 py-[140px] max-md:px-5 max-md:py-20"
      style={{
        background:
          "radial-gradient(900px 500px at 80% 50%, rgba(232,145,58,.10), transparent 60%), var(--color-ink)",
      }}
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="grid grid-cols-[1.1fr_0.9fr] items-center gap-20 max-[980px]:grid-cols-1 max-[980px]:gap-12">
          <div>
            <Reveal>
              <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-dust">
                § 06 / Booking
              </div>
            </Reveal>
            <Reveal>
              <h2
                className="mb-6 mt-3 font-display uppercase text-bone"
                style={{
                  fontSize: "clamp(56px, 8vw, 128px)",
                  lineHeight: 0.88,
                  letterSpacing: "-0.01em",
                }}
              >
                Hire the
                <br />
                <span className="text-flame">swan.</span>
              </h2>
            </Reveal>

            <Reveal delay={1}>
              <div className="mb-8 inline-flex items-baseline gap-3.5 border border-hairline bg-flame/[0.04] px-5 py-3.5">
                <span className="font-display text-4xl tracking-[0.02em] text-flame">
                  $5,000
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ash">
                  / 6-hour event
                </span>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <p className="mb-9 max-w-[560px] font-serif text-[22px] italic leading-[1.5] text-ember">
                Festivals, parades, brand activations, film shoots, weddings
                that have given up on subtle. Vegas-based, willing to travel,
                terms negotiable for anything weirder than the list.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:info@prodigalswan.com?subject=Booking%20Inquiry"
                  className="group inline-flex min-h-12 items-center gap-3.5 border border-flame bg-flame px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#1a0e04] transition-all hover:-translate-y-px hover:bg-[#ffa247] hover:shadow-[0_0_40px_rgba(232,145,58,.55),0_0_80px_rgba(255,106,31,.25),inset_0_0_12px_rgba(255,255,255,.18)]"
                >
                  Get in touch
                  <span
                    aria-hidden
                    className="font-display text-lg transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
                <a
                  href="mailto:info@prodigalswan.com"
                  className="font-mono text-[11px] uppercase tracking-[0.24em] text-dust transition-colors hover:text-flame"
                >
                  info@prodigalswan.com
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={1}>
            <ul className="grid grid-cols-1 gap-0 border-t border-hairline-2">
              {includes.map((row) => (
                <li
                  key={row.n}
                  className="grid grid-cols-[36px_1fr_auto] items-center gap-4 border-b border-hairline-2 py-4"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-dust">
                    // {row.n}
                  </span>
                  <span className="text-base text-bone">{row.t}</span>
                  <span
                    className={[
                      "font-mono text-[10px] uppercase tracking-[0.28em]",
                      row.b === "incl." ? "text-flame" : "text-dust",
                    ].join(" ")}
                  >
                    {row.b}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
