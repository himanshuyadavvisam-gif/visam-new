"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { brand, nav } from "@/lib/content";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-line bg-paper/85 px-5 py-4 backdrop-blur-md sm:px-8 sm:py-5">

        <Link href="/" data-cursor="link" className="flex items-center">
          <Image
            src="/visam-logo.png"
            alt={brand.name}
            width={2039}
            height={771}
            priority
            className="h-8 w-auto sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-9 text-[18px] text-ink md:flex">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                data-cursor="link"
                className={`relative pb-1 transition-opacity hover:opacity-60 ${
                  active ? "text-ink" : ""
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          data-cursor="link"
          className="hidden text-[23px] text-ink underline underline-offset-2 transition-opacity hover:opacity-60 md:block"
        >
          Get in touch
        </Link>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`h-[2px] w-6 bg-ink transition-transform duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-ink transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-ink transition-transform duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-start justify-center gap-8 bg-paper/95 px-8 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={closeMenu}
            className="font-display text-[32px] font-medium text-ink"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={closeMenu}
          className="text-[32px] font-medium text-ink underline underline-offset-2"
        >
          Get in touch
        </Link>
      </div>
    </>
  );
}
