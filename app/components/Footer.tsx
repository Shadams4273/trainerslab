import Link from "next/link";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

const locations = [
  { city: "Mount Juliet, TN", address: "1730 N Mt. Juliet Rd." },
  { city: "Hilton Head, SC", address: "1000 William Hilton Pkwy." },
  { city: "Jacksonville, NC", address: "104 N. Marine Blvd." },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <Link href="/" className="font-display text-2xl font-800 uppercase tracking-widest text-[#111111]">
              Trainers<span className="border-b-2 border-[#111111]">Lab</span>
            </Link>
            <p className="text-sm text-[#737373] mt-3 leading-relaxed font-body max-w-xs">
              Redefining personal fitness through high-end training. Three locations across the Southeast.
            </p>
          </div>

          <div>
            <span className="font-display text-[0.6rem] tracking-[0.25em] uppercase text-[#111111] block mb-4 font-700">
              Navigate
            </span>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-display text-xs tracking-[0.15em] uppercase text-[#737373] hover:text-[#111111] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-display text-[0.6rem] tracking-[0.25em] uppercase text-[#111111] block mb-4 font-700">
              Locations
            </span>
            <ul className="flex flex-col gap-4">
              {locations.map((l) => (
                <li key={l.city}>
                  <div className="font-display text-xs tracking-wide uppercase text-[#111111]">{l.city}</div>
                  <div className="font-display text-[0.65rem] tracking-wide uppercase text-[#737373] mt-0.5">{l.address}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E5E5E5] pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <span className="font-display text-[0.6rem] tracking-[0.2em] uppercase text-[#737373]">
            © {new Date().getFullYear()} TrainersLab. All rights reserved.
          </span>
          <span className="font-display text-[0.6rem] tracking-[0.2em] uppercase text-[#737373]">
            Mount Juliet · Hilton Head · Jacksonville
          </span>
        </div>
      </div>
    </footer>
  );
}
