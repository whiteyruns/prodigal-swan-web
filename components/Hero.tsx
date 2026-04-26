import Link from "next/link";

// Same file is reused as gallery slot 1 — browser caches once.
const HERO_PHOTO = "/images/gallery-golden-hour.jpg";

export function Hero() {
  return (
    <header
      id="top"
      className="relative flex h-screen min-h-[680px] items-end overflow-hidden"
    >
      <div
        className="kenburns absolute -inset-[4%] bg-cover bg-center bg-no-repeat"
        role="img"
        aria-label="The Prodigal Swan art car at golden hour on the Black Rock playa, with a person posed on top."
        style={{ backgroundImage: `url('${HERO_PHOTO}')` }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,9,7,.45) 0%, rgba(10,9,7,.05) 28%, rgba(10,9,7,.15) 55%, rgba(10,9,7,.92) 100%), radial-gradient(900px 500px at 18% 80%, rgba(184,92,28,.32), transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full pb-[9vh]">
        <div className="mx-auto max-w-[1480px] px-8 max-sm:px-5">
          <div className="mb-5 flex items-center gap-4">
            <span
              className="pulse-dot h-2 w-2 rounded-full bg-flame"
              style={{
                boxShadow:
                  "0 0 12px var(--color-flame), 0 0 24px rgba(232,145,58,0.6)",
              }}
            />
            <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-ember">
              Est. 2016 · Las Vegas, NV · Bookable Now
            </span>
          </div>

          <h1
            className="mb-7 font-display uppercase text-bone"
            style={{
              fontSize: "clamp(72px, 18vw, 280px)",
              lineHeight: 0.82,
              letterSpacing: "-0.015em",
              textShadow: "0 6px 60px rgba(0,0,0,.7), 0 2px 0 rgba(0,0,0,.4)",
            }}
          >
            Prodigal
            <br />
            Swan
          </h1>

          <p
            className="mb-10 max-w-[720px] font-serif italic text-ember"
            style={{
              fontSize: "clamp(20px, 2.4vw, 30px)",
              lineHeight: 1.3,
              textShadow: "0 2px 24px rgba(0,0,0,.6)",
            }}
          >
            Self-discovery&rsquo;s a bitch{" "}
            <em className="text-flame not-italic">
              <span className="italic">when you&rsquo;re flammable.</span>
            </em>
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center gap-3.5 border border-flame bg-flame px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#1a0e04] transition-all hover:-translate-y-px hover:bg-[#ffa247] hover:shadow-[0_0_40px_rgba(232,145,58,.55),0_0_80px_rgba(255,106,31,.25),inset_0_0_12px_rgba(255,255,255,.18)]"
            >
              Book for your event
              <span
                aria-hidden
                className="font-display text-lg transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-ash">
              <span className="h-px w-6 bg-hairline" />
              <span>Fire · LED · 10,000 lbs of attitude</span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2.5 text-ash"
        aria-label="Scroll to about"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.36em]">
          Scroll
        </span>
        <span className="scroll-line" aria-hidden />
      </a>
    </header>
  );
}
