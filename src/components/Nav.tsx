"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/speaking", label: "Speaking" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  if (pathname?.startsWith("/studio")) {
    return null;
  }

  return (
    <header className="fade-in">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-8 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-primary transition hover:text-accent"
        >
          Mubina Raza
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-secondary md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:text-accent ${
                pathname === link.href ? "text-primary" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mx-auto flex w-full max-w-6xl gap-3 px-6 pt-5 text-xs text-secondary md:hidden sm:px-8 lg:px-12">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition hover:text-accent ${
              pathname === link.href ? "text-primary" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
