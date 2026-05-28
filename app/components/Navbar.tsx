"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Locations", href: "/locations" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
  { label: "Book", href: "/book" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b border-[#E5E5E5] bg-white sticky top-0 z-50">
      <div className="px-6 md:px-10 h-24 md:h-40 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/TLLogoNew.png"
            alt="Trainers Lab"
            width={0}
            height={0}
            sizes="100vw"
            className="h-16 md:h-28 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-display text-[1.05rem] font-700 tracking-[0.15em] uppercase transition-colors ${
                pathname === l.href
                  ? "text-[#111111]"
                  : "text-[#737373] hover:text-[#111111]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#111111] hover:bg-[#333333] text-white font-display font-700 text-[1.05rem] tracking-[0.15em] uppercase px-6 py-3 transition-colors"
          >
            Get Started
          </Link>
        </nav>

        <button
          className="md:hidden text-[#737373] hover:text-[#111111]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#E5E5E5] bg-white px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-[1.05rem] font-700 tracking-[0.15em] uppercase text-[#737373] hover:text-[#111111] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-[#111111] text-white font-display font-700 text-[1.05rem] tracking-[0.15em] uppercase px-5 py-3 text-center transition-colors"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
