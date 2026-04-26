import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "History — Prodigal Swan",
  description:
    "From Beezus Christ Supercar to a 2016 rebirth — the long story of how Prodigal Swan came to be.",
};

export default function HistoryPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-dust">
        § Burning Man / History
      </div>
      <h1 className="mt-3 font-display text-5xl uppercase text-bone">History</h1>
      <div className="mt-8 space-y-6 text-lg leading-[1.8] text-ash">
        {/* TODO: paste history from the Wix admin. */}
        <p>
          The deeper version of the Beezus → Prodigal Swan origin lives here
          once we pull the copy off Wix. The condensed version is on the{" "}
          <a href="/about" className="text-flame hover:underline">
            About
          </a>{" "}
          page.
        </p>
      </div>
    </main>
  );
}
