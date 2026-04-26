import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const ledger = [
  { k: "Designation", v: "Mutant Vehicle", flame: false },
  { k: "Born", v: "2016", flame: true },
  { k: "Built by", v: "Dust to Dust", flame: false },
  { k: "Home", v: "Las Vegas, NV", flame: false },
  { k: "Annual pilgrimage", v: "Black Rock", flame: true },
  { k: "Status", v: "Bookable", flame: false },
];

export function AboutSection() {
  return (
    <section id="about" className="relative px-8 py-[140px] max-md:px-5 max-md:py-20">
      <div className="mx-auto max-w-[1320px]">
        <SectionHeader
          num="01"
          kicker="Origin"
          title={
            <>
              Born twice.
              <br />
              <span className="text-flame">Burned both times.</span>
            </>
          }
          side="A 2016 fire-breathing mechaswan welded onto a 1996 Taylor-Dunn cargo mover. Built by the Dust to Dust Collective out of Oakland. Lives in Vegas. Returns to the playa annually to shed its skin."
        />

        <div className="grid grid-cols-[1.05fr_0.95fr] items-start gap-20 max-[980px]:grid-cols-1 max-[980px]:gap-12">
          <Reveal>
            <div className="[&_strong]:font-semibold [&_strong]:text-bone">
              <p
                className="mb-9 font-serif italic text-ember"
                style={{
                  fontSize: "clamp(22px, 2.4vw, 30px)",
                  lineHeight: 1.4,
                }}
              >
                Before there was a swan, there was{" "}
                <strong>Beezus Christ Supercar</strong> — a hot-rodded golf
                cart with too much chrome and not enough sense. Beezus broke.
                Beezus burned. Beezus had it coming.
              </p>

              <p className="mb-6 max-w-[58ch] text-[16.5px] leading-[1.75] text-ash">
                Out of those ashes, in the spring of 2016, the Dust to Dust
                Collective stripped the cargo mover to its frame, welded a
                16-foot mechaswan on top, plumbed a propane crown into its
                skull, and laced 200 meters of programmable LED through its
                feathers. They named it Prodigal because it kept coming home
                and Swan because the silhouette demanded it.
              </p>

              <p className="mb-6 max-w-[58ch] text-[16.5px] leading-[1.75] text-ash">
                Now it lives in <strong>Las Vegas</strong>. It sleeps in a
                warehouse off the Strip and wakes up for festivals, parades,
                brand activations, film shoots, and the kind of private
                bookings where someone needs a ten-thousand-pound mood-setter
                to roll into the room and exhale fire on cue. Every August it
                points itself at the Black Rock Desert, sheds another skin,
                and comes back changed.
              </p>

              <figure className="relative my-12 border-l-2 border-flame py-6 pl-7">
                <span
                  aria-hidden
                  className="absolute left-[18px] top-[-22px] font-serif text-[80px] text-flame opacity-60"
                >
                  &ldquo;
                </span>
                <blockquote
                  className="font-serif italic text-bone"
                  style={{
                    fontSize: "clamp(24px, 2.6vw, 34px)",
                    lineHeight: 1.32,
                  }}
                >
                  A cargo mover&rsquo;s midlife crisis turned playa legend.
                </blockquote>
                <cite className="mt-4 block font-mono text-[11px] not-italic uppercase tracking-[0.32em] text-dust">
                  — overheard, 4:30am, Esplanade &amp; 7:30
                </cite>
              </figure>

              <p className="mb-6 max-w-[58ch] text-[16.5px] leading-[1.75] text-ash">
                We broke it. We fixed it. <strong>Now duck.</strong>
              </p>
            </div>
          </Reveal>

          <aside className="sticky top-30 self-start max-[980px]:static">
            <Reveal delay={2}>
              <div className="border border-hairline-2 bg-gradient-to-b from-ink-2 to-ink-3 p-8">
                {ledger.map((row, i) => (
                  <div
                    key={row.k}
                    className={[
                      "flex items-baseline justify-between gap-4 py-3.5",
                      i < ledger.length - 1
                        ? "border-b border-hairline-2"
                        : "",
                    ].join(" ")}
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-dust">
                      {row.k}
                    </span>
                    <span
                      className={[
                        "font-display text-[22px] uppercase tracking-[0.04em]",
                        row.flame ? "text-flame" : "text-bone",
                      ].join(" ")}
                    >
                      {row.v}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}
