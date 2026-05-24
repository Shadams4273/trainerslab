import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";
import WhyDifferent from "./components/WhyDifferent";

export default function Home() {
  return (
    <>
      <Hero />

      <WhyDifferent />

      {/* About teaser */}
      <section className="bg-[#F5F5F4] py-24 border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-[#111111]" />
                <span className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-[#111111] font-700">
                  Who We Are
                </span>
              </div>
              <h2 className="font-display font-800 uppercase text-[clamp(2rem,4vw,3rem)] leading-none text-[#111111] mb-6">
                A New Standard
                <br />in Personal Training.
              </h2>
              <p className="text-[#737373] leading-relaxed mb-8 font-body">
                TrainersLab was built on one belief: everyone deserves access to elite-level coaching.
                We combine fitness science, nutrition, and wellness into a single integrated approach
                that strengthens body, mind, and spirit.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-display text-[0.65rem] tracking-[0.2em] uppercase text-[#111111] border-b border-[#111111] pb-0.5 hover:opacity-60 transition-opacity"
              >
                Our Story
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </Link>
            </div>

            <div className="relative h-[280px] md:h-[420px] overflow-hidden">
              <Image
                src="/images/trainer-session.png"
                alt="Trainer working one on one with a client"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locations teaser */}
      <section className="bg-white py-24 border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-[#111111]" />
                <span className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-[#111111] font-700">
                  Locations
                </span>
              </div>
              <h2 className="font-display font-800 uppercase text-[clamp(2rem,5vw,3.5rem)] leading-none text-[#111111]">
                Three Locations.
                <br />One Standard.
              </h2>
            </div>
            <Link
              href="/locations"
              className="hidden sm:flex items-center gap-2 font-display text-[0.65rem] tracking-[0.2em] uppercase text-[#737373] hover:text-[#111111] transition-colors"
            >
              All Locations
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#E5E5E5]">
            {[
              { city: "Mount Juliet", state: "Tennessee", address: "1730 N Mt. Juliet Rd." },
              { city: "Hilton Head", state: "South Carolina", address: "1000 William Hilton Pkwy." },
              { city: "Jacksonville", state: "North Carolina", address: "104 N. Marine Blvd." },
            ].map((loc) => (
              <div key={loc.city} className="bg-white p-8">
                <div className="font-display text-[0.6rem] tracking-[0.25em] uppercase text-[#737373] mb-3">
                  {loc.state}
                </div>
                <h3 className="font-display font-700 uppercase text-xl tracking-wide text-[#111111] mb-3">
                  {loc.city}
                </h3>
                <address className="not-italic font-display text-xs tracking-wide uppercase text-[#737373]">
                  {loc.address}
                </address>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-[#111111] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display font-800 uppercase text-[clamp(2.5rem,6vw,5rem)] leading-none text-white mb-8">
            Ready to Get to Work?
          </h2>
          <Link
            href="/contact"
            className="bg-white text-[#111111] font-display font-700 text-[0.7rem] tracking-[0.2em] uppercase px-10 py-5 hover:bg-[#E5E5E5] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
