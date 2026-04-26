"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/#specs", label: "Specs" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#ecosystem", label: "Where to Find Us" },
  { href: "/contact", label: "Booking", flame: true },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed inset-x-0 top-0 z-50 backdrop-blur-md backdrop-saturate-150 transition-[background,border-color] duration-300",
        "border-b",
        scrolled
          ? "border-b-hairline-2 bg-ink/[0.88]"
          : "border-b-ember/[0.06] bg-gradient-to-b from-ink/[0.78] to-ink/[0.32]",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-[1480px] items-center justify-between px-8 py-3.5 max-md:px-5">
        <Link
          href="/"
          aria-label="Prodigal Swan home"
          className="flex items-center gap-3"
        >
          <span className="brand-mark" aria-hidden />
          <span className="font-display text-lg uppercase tracking-[0.18em] text-bone">
            Prodigal Swan
          </span>
        </Link>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="hidden h-11 w-11 items-center justify-center max-[880px]:inline-flex"
        >
          <span className="relative block h-px w-[22px] bg-bone before:absolute before:left-0 before:top-[-6px] before:block before:h-px before:w-[22px] before:bg-bone before:content-[''] after:absolute after:left-0 after:top-[6px] after:block after:h-px after:w-[22px] after:bg-bone after:content-['']" />
        </button>

        <ul
          className={[
            "flex items-center gap-8",
            "max-[880px]:absolute max-[880px]:inset-x-0 max-[880px]:top-full max-[880px]:flex-col max-[880px]:gap-2 max-[880px]:border-b max-[880px]:border-hairline-2 max-[880px]:bg-ink/95 max-[880px]:px-6 max-[880px]:py-4",
            open ? "max-[880px]:flex" : "max-[880px]:hidden",
          ].join(" ")}
        >
          {links.map((link) => (
            <li key={link.href} className="max-[880px]:w-full">
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={[
                  "relative inline-block px-0.5 py-2 text-[13px] tracking-[0.06em] transition-colors hover:text-flame",
                  link.flame ? "text-flame" : "text-ash",
                  "after:absolute after:bottom-0.5 after:left-0 after:right-0 after:h-px after:origin-left after:scale-x-0 after:bg-flame after:transition-transform after:duration-300 hover:after:scale-x-100",
                  "max-[880px]:block max-[880px]:border-b max-[880px]:border-ember/5 max-[880px]:py-3.5",
                ].join(" ")}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
