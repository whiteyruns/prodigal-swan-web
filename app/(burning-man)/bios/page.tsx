import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bios — Prodigal Swan",
  description:
    "The Dust to Dust Collective and the misfits who built Prodigal Swan.",
};

export default function BiosPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-dust">
        § Burning Man / Bios
      </div>
      <h1 className="mt-3 font-display text-5xl uppercase text-bone">
        The Dust to Dust Collective
      </h1>
      <div className="mt-8 space-y-6 text-lg leading-[1.8] text-ash">
        {/* TODO: paste bios from the Wix admin. */}
        <p>
          Bios for the artists, drivers, and operators behind the Swan land
          here once we pull the copy off Wix.
        </p>
      </div>
    </main>
  );
}
