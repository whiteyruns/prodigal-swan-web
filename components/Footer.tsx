export function Footer() {
  return (
    <footer
      className="relative border-t border-hairline-2 px-8 pb-9 pt-16 max-md:px-5"
      style={{ background: "#070605" }}
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-12 max-[760px]:grid-cols-1 max-[760px]:gap-6 max-[760px]:text-left">
          <div className="flex items-center gap-3.5">
            <span className="brand-mark" aria-hidden />
            <span className="font-display text-[22px] uppercase tracking-[0.18em] text-bone">
              Prodigal Swan
            </span>
          </div>
          <div className="text-[13px] tracking-wider text-dust">
            © 2026 Prodigal Swan · Las Vegas, NV ·{" "}
            <a
              href="mailto:info@prodigalswan.com"
              className="text-ash transition-colors hover:text-flame"
            >
              info@prodigalswan.com
            </a>
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.28em] text-ash">
            <a
              href="https://instagram.com/prodigal_swan"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-flame"
            >
              @prodigal_swan
            </a>
            <a
              href="https://www.swanforestcamp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-flame"
            >
              Swan Forest
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-hairline-2 pt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-dust-2">
          <span>
            // Built on a 1996 cargo mover · Burned twice · Coming back for thirds
          </span>
          <span>v.2026.04</span>
        </div>
      </div>
    </footer>
  );
}
