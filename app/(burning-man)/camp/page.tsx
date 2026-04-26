import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Camp — Prodigal Swan",
  description:
    "Swan Forest Camp at Burning Man — two art cars, one camp, Black Rock City.",
};

export default function CampPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-dust">
        § Burning Man / Camp
      </div>
      <h1 className="mt-3 font-display text-5xl uppercase text-bone">
        Swan Forest Camp
      </h1>
      <div className="mt-8 space-y-6 text-lg leading-[1.8] text-ash">
        {/* TODO: paste camp copy from the Wix admin. */}
        <p>
          Two art cars, one camp, Black Rock City. Swan Forest Camp is where
          Prodigal Swan and ForestHouse share a home for the burn.
        </p>
        <p>
          <a
            href="https://www.swanforestcamp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-flame hover:underline"
          >
            swanforestcamp.com →
          </a>
        </p>
      </div>
    </main>
  );
}
