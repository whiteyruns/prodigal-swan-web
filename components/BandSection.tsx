"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";

type Props = {
  quote: React.ReactNode; // editorial pull-quote text
  caption: string; // engineering-style "// Plate 003 — drop in: ..." caption
  background?: string; // optional CSS background for the band-bg element
};

const DEFAULT_BG = `repeating-linear-gradient(135deg, rgba(232,145,58,.04) 0 12px, rgba(232,145,58,0) 12px 24px),
  radial-gradient(60% 80% at 50% 50%, rgba(184,92,28,.4), rgba(10,9,7,.95)),
  var(--color-ink-2)`;

export function BandSection({ quote, caption, background }: Props) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const onScroll = () => {
      const section = sectionRef.current;
      const target = targetRef.current;
      if (!section || !target) return;
      const r = section.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      const offset = (r.top - window.innerHeight / 2) * -0.08;
      target.style.transform = `translate3d(0, ${offset}px, 0)`;
    };
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[60vh] min-h-[420px] items-center justify-center overflow-hidden"
    >
      <div
        ref={targetRef}
        className="absolute -inset-[10%] bg-cover bg-center will-change-transform"
        style={{ background: background ?? DEFAULT_BG }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,9,7,.6) 0%, rgba(10,9,7,.2) 50%, rgba(10,9,7,.85) 100%)",
        }}
      />
      <div className="relative z-10 max-w-[1100px] px-6 text-center">
        <Reveal>
          <p
            className="font-serif italic text-bone"
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              lineHeight: 1.2,
              textShadow: "0 4px 32px rgba(0,0,0,.7)",
            }}
          >
            {quote}
          </p>
        </Reveal>
      </div>
      <span className="absolute bottom-4 left-6 z-10 font-mono text-[10px] uppercase tracking-[0.3em] text-dust">
        {caption}
      </span>
    </section>
  );
}
