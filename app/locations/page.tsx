import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Locations | TrainersLab",
  description: "Find a TrainersLab near you. Locations in Mount Juliet TN, Hilton Head SC, and Jacksonville NC.",
};

const locations = [
  {
    number: "01",
    city: "Mount Juliet",
    state: "Tennessee",
    address: "1730 N Mt. Juliet Rd.",
    cityState: "Mount Juliet, TN 37122",
    phone: "629-246-8588",
    email: "mtjuliet@trainerslab.com",
    instagram: "@trainerslabmtjuliet",
    instagramUrl: "https://instagram.com/trainerslabmtjuliet",
    mapUrl: "https://maps.google.com/?q=1730+N+Mt+Juliet+Rd+Mount+Juliet+TN+37122",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=1730+N+Mt+Juliet+Rd+Mount+Juliet+TN+37122&t=&z=15&ie=UTF8&iwloc=&output=embed",
    note: null,
  },
  {
    number: "02",
    city: "Hilton Head Island",
    state: "South Carolina",
    address: "1000 William Hilton Pkwy.",
    cityState: "Hilton Head Island, SC 29928",
    phone: "854-255-2839",
    email: "wexford@trainerslab.com",
    instagram: "@trainerslabwexford",
    instagramUrl: "https://instagram.com/trainerslabwexford",
    mapUrl: "https://maps.google.com/?q=1000+William+Hilton+Pkwy+Hilton+Head+Island+SC+29928",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=1000+William+Hilton+Pkwy+Hilton+Head+Island+SC+29928&t=&z=15&ie=UTF8&iwloc=&output=embed",
    note: null,
  },
  {
    number: "03",
    city: "Jacksonville",
    state: "North Carolina",
    address: "104 N. Marine Blvd.",
    cityState: "Jacksonville, NC 28540",
    phone: "910-346-3446",
    email: "jacksonville@trainerslab.com",
    instagram: null,
    instagramUrl: null,
    mapUrl: "https://maps.google.com/?q=104+N+Marine+Blvd+Jacksonville+NC+28540",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=104+N+Marine+Blvd+Jacksonville+NC+28540&t=&z=15&ie=UTF8&iwloc=&output=embed",
    note: "Located inside Courts Plus",
  },
];

export default function LocationsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#111111] text-white py-10 border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-white opacity-30" />
            <span className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-white opacity-50 font-700">
              TrainersLab
            </span>
          </div>
          <h1 className="font-display font-800 uppercase text-[clamp(2.5rem,6vw,5rem)] leading-none text-white">
            Our Locations.
          </h1>
          <p className="mt-3 text-white opacity-50 font-body max-w-lg text-sm leading-relaxed">
            Three facilities. One standard of coaching. Find the location nearest you.
          </p>
        </div>
      </section>

      {/* Facility photo */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <Image
          src="/images/gym-floor.png"
          alt="Trainers Lab gym floor"
          fill
          className="object-cover"
        />
      </div>

      {/* Locations */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-0 border border-[#E5E5E5]">
          {locations.map((loc, i) => (
            <div
              key={loc.number}
              className={`p-6 md:p-10 ${
                i < locations.length - 1 ? "border-b border-[#E5E5E5]" : ""
              }`}
            >
              <div className="grid md:grid-cols-[100px_1fr_1fr] gap-6">
              {/* Number */}
              <div className="font-display text-[3.5rem] font-800 leading-none text-[#E5E5E5] select-none">
                {loc.number}
              </div>

              {/* Address block */}
              <div>
                <div className="font-display text-[0.6rem] tracking-[0.25em] uppercase text-[#737373] mb-2">
                  {loc.state}
                </div>
                <h2 className="font-display font-700 uppercase text-2xl tracking-wide text-[#111111] mb-4">
                  {loc.city}
                </h2>
                <address className="not-italic font-display text-sm tracking-wide uppercase text-[#111111] leading-snug mb-1">
                  {loc.address}
                  <br />
                  {loc.cityState}
                </address>
                {loc.note && (
                  <p className="font-display text-[0.65rem] tracking-[0.15em] uppercase text-[#737373] mt-2">
                    {loc.note}
                  </p>
                )}
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 font-display text-[0.65rem] tracking-[0.2em] uppercase text-[#111111] border-b border-[#111111] pb-px hover:opacity-50 transition-opacity"
                >
                  Get Directions
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>

              {/* Contact block */}
              <div className="border-t md:border-t-0 md:border-l border-[#E5E5E5] pt-4 md:pt-0 md:pl-8 flex flex-col gap-5">
                <div>
                  <span className="font-display text-[0.55rem] tracking-[0.25em] uppercase text-[#737373] block mb-1">
                    Phone
                  </span>
                  <a
                    href={`tel:${loc.phone.replace(/\D/g, "")}`}
                    className="font-display text-sm font-700 tracking-wide uppercase text-[#111111] hover:opacity-50 transition-opacity"
                  >
                    {loc.phone}
                  </a>
                </div>
                <div>
                  <span className="font-display text-[0.55rem] tracking-[0.25em] uppercase text-[#737373] block mb-1">
                    Email
                  </span>
                  <a
                    href={`mailto:${loc.email}`}
                    className="font-display text-sm font-700 tracking-wide text-[#111111] hover:opacity-50 transition-opacity lowercase"
                  >
                    {loc.email}
                  </a>
                </div>
                {loc.instagram && (
                  <div>
                    <span className="font-display text-[0.55rem] tracking-[0.25em] uppercase text-[#737373] block mb-1">
                      Instagram
                    </span>
                    <a
                      href={loc.instagramUrl!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-sm font-700 tracking-wide text-[#111111] hover:opacity-50 transition-opacity"
                    >
                      {loc.instagram}
                    </a>
                  </div>
                )}
              </div>
              </div>

              {/* Map */}
              <div className="mt-8 border border-[#E5E5E5]">
                <iframe
                  src={loc.mapEmbedUrl}
                  title={`Map of TrainersLab ${loc.city}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[320px] md:h-[380px] block grayscale hover:grayscale-0 transition-[filter] duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F5F4] py-20 border-t border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-800 uppercase text-[clamp(1.8rem,4vw,3rem)] leading-none text-[#111111] mb-2">
              Not sure where to start?
            </h2>
            <p className="text-sm text-[#737373] font-body">
              Reach out and we&apos;ll connect you with the right location and coach.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-[#111111] hover:bg-[#333333] text-white font-display font-700 text-[0.7rem] tracking-[0.15em] uppercase px-8 py-4 transition-colors shrink-0"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
