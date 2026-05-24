const hours = [
  { day: "Monday – Friday", time: "5:00 AM – 9:00 PM" },
  { day: "Saturday", time: "7:00 AM – 5:00 PM" },
  { day: "Sunday", time: "8:00 AM – 2:00 PM" },
];

export default function Location() {
  return (
    <section id="location" className="bg-[#141414] py-24 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-px bg-[#F97316]" />
          <span className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-[#F97316] font-700">
            04: Location
          </span>
        </div>

        <h2 className="font-display font-800 uppercase text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-[#F0EDE8] mb-16">
          Find Us in
          <br />
          <span className="text-[#F97316]">Mount Juliet.</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-px bg-[#2A2A2A]">
          {/* Address + hours */}
          <div className="bg-[#1C1C1C] p-8 flex flex-col gap-10">
            {/* Address */}
            <div>
              <span className="font-display text-[0.6rem] tracking-[0.25em] uppercase text-[#F97316] block mb-3">
                Address
              </span>
              <address className="not-italic font-display font-700 text-xl uppercase tracking-wide text-[#F0EDE8] leading-snug">
                1730 N Mt. Juliet Rd.
                <br />
                Mount Juliet, TN 37122
              </address>
              <a
                href="https://maps.google.com/?q=1730+N+Mt+Juliet+Rd+Mount+Juliet+TN+37122"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 font-display text-[0.6rem] tracking-[0.2em] uppercase text-[#6B6B6B] hover:text-[#F97316] transition-colors"
              >
                Get Directions
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>

            {/* Hours */}
            <div>
              <span className="font-display text-[0.6rem] tracking-[0.25em] uppercase text-[#F97316] block mb-4">
                Hours of Operation
              </span>
              <div className="flex flex-col gap-0 border border-[#2A2A2A]">
                {hours.map((h, i) => (
                  <div
                    key={h.day}
                    className={`flex justify-between items-center px-4 py-3 ${
                      i < hours.length - 1 ? "border-b border-[#2A2A2A]" : ""
                    }`}
                  >
                    <span className="font-display text-xs tracking-wide uppercase text-[#6B6B6B]">
                      {h.day}
                    </span>
                    <span className="font-display text-xs tracking-wide uppercase text-[#F0EDE8]">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[0.65rem] text-[#6B6B6B] mt-3 font-body">
                * Hours subject to change on holidays. Call ahead to confirm.
              </p>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-[#0C0C0C] min-h-[400px] flex items-center justify-center relative overflow-hidden">
            {/* Grid bg */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(#F97316 1px, transparent 1px), linear-gradient(90deg, #F97316 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative z-10 text-center px-8">
              <div className="w-10 h-10 border border-[#F97316] flex items-center justify-center mx-auto mb-4">
                <svg className="w-5 h-5 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <p className="font-display text-[0.65rem] tracking-[0.2em] uppercase text-[#6B6B6B] mb-3">
                Mount Juliet, Tennessee
              </p>
              <a
                href="https://maps.google.com/?q=1730+N+Mt+Juliet+Rd+Mount+Juliet+TN+37122"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#F97316] hover:bg-[#EA580C] text-white font-display font-700 text-xs tracking-[0.15em] uppercase px-6 py-3 transition-colors"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
