import Link from "next/link";
import Image from "next/image";
import { brand, nav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper px-6 py-12 md:px-10">
      <div className="mx-auto max-w-360">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.5fr_0.7fr] md:gap-12 lg:grid-cols-[1.4fr_0.5fr_0.7fr] lg:gap-20">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/visam-logo.png"
                alt={brand.name}
                width={2039}
                height={771}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              {brand.description}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-ink-soft/70">
              Navigate
            </span>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-ink hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-ink-soft/70">
              Contact
            </span>
            <a href={`mailto:${brand.email}`} className="text-sm text-ink hover:text-accent">
              {brand.email}
            </a>
            <a href={`tel:${brand.phone}`} className="text-sm text-ink hover:text-accent">
              {brand.phone}
            </a>
            <span className="max-w-55 text-sm text-ink-soft">{brand.address}</span>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-soft md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
          <span>Jodhpur, Rajasthan — India</span>
        </div>
      </div>
    </footer>
  );
}
