"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/studio")) {
    return null;
  }

  return (
    <footer className="border-t border-muted">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-10 text-xs text-secondary sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-primary">Mubina Raza</span>
          <span>Modern, accessible portfolio.</span>
        </div>
        <span>© {new Date().getFullYear()} All rights reserved.</span>
      </div>
    </footer>
  );
}
