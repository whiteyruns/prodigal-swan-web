import Link from "next/link";

const subNav = [
  { href: "/camp", label: "Camp" },
  { href: "/bios", label: "Bios" },
  { href: "/history", label: "History" },
];

export default function BurningManLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-24">
      <div className="border-b border-white/5">
        <div className="mx-auto flex max-w-5xl items-center gap-2 px-6 py-4">
          <span className="mr-4 text-xs font-semibold uppercase tracking-[2px] text-accent">
            Burning Man
          </span>
          <ul className="flex gap-2">
            {subNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-3 py-2 text-xs font-medium uppercase tracking-[1px] text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
}
