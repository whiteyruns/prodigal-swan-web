import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

type EcoCard = {
  href: string;
  pretitle: string;
  title: React.ReactNode;
  tag: string;
  body: string;
  when: string;
  go: string;
  placeholder: string;
  placeholderBg: string;
  imageUrl?: string;
  delay?: 1;
};

const cards: EcoCard[] = [
  {
    href: "https://www.swanforestcamp.com",
    pretitle: "Burning Man 2026 · Aug 30 – Sep 7",
    title: (
      <>
        Swan
        <br />
        Forest Camp
      </>
    ),
    tag: "Two art cars, one camp, Black Rock City.",
    body:
      "The Swan and the Forest, parked next to each other for the week. Fire and trees. Bring your own dust mask.",
    when: "Black Rock City · 6:00 & G",
    go: "swanforestcamp.com →",
    placeholder: "// drop in: camp aerial,\ntwo art cars parked side by side",
    placeholderBg: `repeating-linear-gradient(135deg, rgba(232,145,58,.07) 0 14px, transparent 14px 28px),
      radial-gradient(70% 80% at 50% 50%, rgba(184,92,28,.4), transparent 70%),
      linear-gradient(180deg,#1a130c,#0e0a07)`,
    imageUrl: "/images/swanforest.jpg",
  },
  {
    href: "https://foresthou.se",
    pretitle: "Partner Mutant Vehicle",
    title: (
      <>
        Forest
        <br />
        House
      </>
    ),
    tag: "A glowing two-story forest mutant vehicle.",
    body:
      "Our partner art car. Walks softer than the Swan, climbs higher, and lights up like a canopy at dusk. Together we are loud and quiet at the same time.",
    when: "Two stories · Bioluminescent",
    go: "foresthou.se →",
    placeholder: "// drop in: foresthouse at night,\ntwo stories, glowing canopy",
    placeholderBg: `repeating-linear-gradient(45deg, rgba(127,200,170,.05) 0 14px, transparent 14px 28px),
      radial-gradient(70% 80% at 50% 50%, rgba(60,140,110,.32), transparent 70%),
      linear-gradient(180deg,#0d130f,#080a08)`,
    imageUrl: "/images/foresthouse.jpg",
    delay: 1,
  },
];

export function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden px-8 py-[140px] max-md:px-5 max-md:py-20"
      style={{
        background: "linear-gradient(180deg, var(--color-ink) 0%, #0d0907 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(800px 500px at 75% 30%, rgba(232,145,58,.08), transparent 60%),
            radial-gradient(700px 400px at 15% 80%, rgba(184,92,28,.06), transparent 60%)`,
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <SectionHeader
          num="05"
          kicker="Ecosystem"
          title={
            <>
              Where to <span className="text-flame">find us.</span>
            </>
          }
          side="The Swan doesn't roll alone. Two homes, two collaborators, one weeklong heat-haze. If you're heading to the desert, here's where we'll be."
        />

        <div className="grid grid-cols-2 gap-6 max-[900px]:grid-cols-1">
          {cards.map((card) => (
            <Reveal key={card.href} delay={card.delay}>
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[520px] flex-col overflow-hidden border border-hairline-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-flame hover:shadow-[0_24px_60px_rgba(0,0,0,.5),0_0_80px_rgba(232,145,58,.1)]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(20,16,12,.85), rgba(14,11,8,.95))",
                }}
              >
                <div
                  className="relative h-[280px] overflow-hidden border-b border-hairline-2"
                  style={
                    card.imageUrl
                      ? {
                          backgroundImage: `url('${card.imageUrl}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }
                      : { background: card.placeholderBg }
                  }
                >
                  {!card.imageUrl && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="whitespace-pre-line px-6 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-dust">
                        {card.placeholder}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-4 px-8 pb-9 pt-8">
                  <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-flame">
                    {card.pretitle}
                  </div>
                  <div
                    className="font-display uppercase leading-[0.95] tracking-[0.02em] text-bone"
                    style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
                  >
                    {card.title}
                  </div>
                  <p className="font-serif text-lg italic leading-[1.4] text-ember">
                    {card.tag}
                  </p>
                  <p className="text-[15px] leading-[1.6] text-ash">
                    {card.body}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4 border-t border-hairline-2 px-8 py-5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-dust">
                    {card.when}
                  </span>
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-flame transition-[gap] duration-200 group-hover:gap-3.5">
                    {card.go}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
