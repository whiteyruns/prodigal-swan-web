"use client";

import { useRef } from "react";
import { SectionHeader } from "./SectionHeader";

type Photo = {
  shape: "default" | "tall" | "wide";
  title: string;
  meta: string;
  realUrl?: string;
  placeholder?: string;
  // "cover" (default) crops to fill the slot. "contain" shows the full
  // image centered, letterboxing against the dark slot background.
  fit?: "cover" | "contain";
};

const photos: Photo[] = [
  {
    shape: "wide",
    title: "Sundown",
    meta: "// BRC 2024",
    realUrl: "/images/gallery-golden-hour.jpg",
  },
  {
    shape: "wide",
    title: "After Dark · Playa",
    meta: "// LED Run",
    realUrl: "/images/gallery-vegas-leds.jpg",
  },
  {
    shape: "tall",
    title: "Crown · Plume",
    meta: "// 6–8 ft",
    realUrl: "/images/gallery-crown-flame.jpg",
  },
  {
    shape: "default",
    title: "Man Burn",
    meta: "// BRC 2024",
    realUrl: "/images/gallery-festival.jpg",
  },
  {
    shape: "wide",
    title: "Esplanade · Sunrise",
    meta: "// BRC 2025",
    realUrl: "/images/gallery-esplanade.jpg",
  },
  {
    shape: "tall",
    title: "Playa",
    meta: "// BRC 2025",
    realUrl: "/images/gallery-workshop.jpg",
  },
  {
    shape: "default",
    title: "Whiteout · Still rolling",
    meta: "// Dust",
    realUrl: "/images/gallery-whiteout.jpg",
  },
];

const shapeClass: Record<Photo["shape"], string> = {
  default: "aspect-[4/5] w-[min(70vw,560px)]",
  tall: "aspect-[3/5] w-[min(70vw,560px)]",
  wide: "aspect-[5/4] w-[min(86vw,720px)]",
};

const PLACEHOLDER_BG = `repeating-linear-gradient(135deg, rgba(232,145,58,.06) 0 14px, rgba(232,145,58,0) 14px 28px),
  radial-gradient(60% 100% at 50% 60%, rgba(184,92,28,.28), transparent 70%),
  linear-gradient(180deg, #1a130c, #0e0a07)`;

export function GallerySection() {
  const railRef = useRef<HTMLDivElement | null>(null);

  function scroll(dir: -1 | 1) {
    const rail = railRef.current;
    if (!rail) return;
    const step = Math.min(rail.clientWidth * 0.8, 600);
    rail.scrollBy({ left: dir * step, behavior: "smooth" });
  }

  return (
    <section id="gallery" className="overflow-hidden bg-ink-2 py-[120px] max-md:py-20">
      <div className="mx-auto max-w-[1320px] px-8 max-md:px-5">
        <SectionHeader
          num="04"
          kicker="Field Notes"
          title={
            <>
              In the wild,
              <br />
              at <span className="text-flame">full chat.</span>
            </>
          }
          side="A cinematic horizontal scroll of the Swan in Vegas, on the Black Rock playa, and at every festival in between. Drag, swipe, or use the arrows."
        />
      </div>

      <div
        ref={railRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-8 pb-2 max-md:px-5 [scrollbar-color:var(--color-flame)_var(--color-ink-3)] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:bg-flame-deep [&::-webkit-scrollbar-track]:bg-ink-3 [&::-webkit-scrollbar]:h-1.5"
      >
        {photos.map((photo, i) => (
          <figure
            key={i}
            className={[
              "relative flex-none snap-start overflow-hidden border border-hairline-2 bg-ink-3",
              shapeClass[photo.shape],
            ].join(" ")}
          >
            {photo.realUrl ? (
              <div
                className={[
                  "absolute inset-0 bg-center bg-no-repeat transition-transform duration-700 ease-out hover:scale-[1.04]",
                  photo.fit === "contain" ? "bg-contain" : "bg-cover",
                ].join(" ")}
                style={{ backgroundImage: `url('${photo.realUrl}')` }}
              />
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: PLACEHOLDER_BG }}
              >
                <span className="whitespace-pre-line px-6 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-dust">
                  {photo.placeholder}
                </span>
              </div>
            )}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 50%, rgba(10,9,7,.85))",
              }}
            />
            <figcaption className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 text-bone">
              <span className="font-display text-[22px] uppercase tracking-[0.04em]">
                {photo.title}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ember">
                {photo.meta}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-6 px-8 pt-8 max-md:px-5">
        <span className="font-mono text-[12px] uppercase tracking-[0.04em] text-dust">
          // {photos.length} frames · drag or arrow
        </span>
        <div className="flex gap-2.5">
          <button
            aria-label="Previous photo"
            onClick={() => scroll(-1)}
            className="flex h-12 w-12 items-center justify-center border border-hairline font-display text-[22px] text-bone transition-all hover:border-flame hover:bg-flame hover:text-ink hover:shadow-[0_0_20px_rgba(232,145,58,.4)]"
          >
            ←
          </button>
          <button
            aria-label="Next photo"
            onClick={() => scroll(1)}
            className="flex h-12 w-12 items-center justify-center border border-hairline font-display text-[22px] text-bone transition-all hover:border-flame hover:bg-flame hover:text-ink hover:shadow-[0_0_20px_rgba(232,145,58,.4)]"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
