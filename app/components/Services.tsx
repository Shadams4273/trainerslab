const services = [
  {
    number: "01",
    title: "Personal Training",
    description:
      "One-on-one sessions built around your goals. Our certified coaches design every program from the ground up. No cookie-cutter plans.",
    detail: "1-on-1 coaching · Custom programming · Progress tracking",
  },
  {
    number: "02",
    title: "Strength & Conditioning",
    description:
      "Build raw power, improve athleticism, and develop the physical resilience to handle anything life throws at you.",
    detail: "Powerlifting · Athletic performance · Functional movement",
  },
  {
    number: "03",
    title: "Nutrition Coaching",
    description:
      "Training is only half the equation. Our nutrition coaching bridges the gap between hard work in the gym and the results you want.",
    detail: "Meal planning · Macro tracking · Sustainable habits",
  },
  {
    number: "04",
    title: "Group Training",
    description:
      "High-intensity sessions in a small-group environment. Expert-led, community-driven, and built to push every person in the room.",
    detail: "Small groups · Coached sessions · Community energy",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#141414] py-24 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-px bg-[#F97316]" />
          <span className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-[#F97316] font-700">
            02: Programs
          </span>
        </div>

        <h2 className="font-display font-800 uppercase text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-[#F0EDE8] mb-16">
          Built for
          <br />
          <span className="text-[#F97316]">Results.</span>
        </h2>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-px bg-[#2A2A2A]">
          {services.map((s) => (
            <div
              key={s.number}
              className="bg-[#1C1C1C] p-8 group hover:bg-[#222] transition-colors"
            >
              {/* Stamped number */}
              <div className="font-display text-[4rem] font-800 leading-none text-[#2A2A2A] group-hover:text-[#F97316] transition-colors mb-4 select-none">
                {s.number}
              </div>
              <h3 className="font-display font-700 uppercase text-xl tracking-widest text-[#F0EDE8] mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6 font-body">
                {s.description}
              </p>
              {/* Detail tag */}
              <div className="border-t border-[#2A2A2A] pt-4">
                <span className="font-display text-[0.6rem] tracking-[0.2em] uppercase text-[#F97316]">
                  {s.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex items-center gap-6">
          <a
            href="#contact"
            className="bg-[#F97316] hover:bg-[#EA580C] text-white font-display font-700 text-sm tracking-[0.15em] uppercase px-8 py-4 transition-colors"
          >
            Book a Session
          </a>
          <div className="h-px flex-1 bg-[#2A2A2A]" />
        </div>
      </div>
    </section>
  );
}
