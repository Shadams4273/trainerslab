const pillars = [
  {
    number: "01",
    headline: "No More Crowded Gyms. Ever.",
    body: "Forget waiting for equipment, dodging strangers, or getting lost in a sea of people who don't know your name. At Trainers Lab, your trainer is locked in on you, and only you, from the moment you walk in.",
  },
  {
    number: "02",
    headline: "Every Rep. Every Plan. Built for You.",
    body: "There are no generic programs here. No one-size-fits-all routines. Your workouts, your progressions, your goals: all of it is designed specifically around your body, your life, and where you want to go.",
  },
  {
    number: "03",
    headline: "Community When You Want It.",
    body: "We've built something rare: a gym culture that actually feels like one. Come for the 1:1 coaching, stay for the energy. Whether you want to keep your head down and grind or become part of something bigger, the door is open either way.",
  },
];

export default function WhyDifferent() {
  return (
    <section className="bg-[#0C0C0C] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-px bg-white/30" />
          <span className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-white/40 font-700">
            Why Trainers Lab
          </span>
        </div>

        {/* Big statement */}
        <h2 className="font-display font-800 uppercase leading-none tracking-tight mb-8">
          <span className="block text-[clamp(2rem,5vw,4rem)] text-white">Not Your</span>
          <span className="block text-[clamp(2rem,5vw,4rem)] text-white/20">Average</span>
          <span className="block text-[clamp(2rem,5vw,4rem)] text-white">Gym.</span>
        </h2>

        {/* Pillars */}
        <div className="divide-y divide-white/10">
          {pillars.map((p) => (
            <div
              key={p.number}
              className="group grid md:grid-cols-[80px_1fr_1fr] gap-4 md:gap-6 py-7 items-start"
            >
              {/* Number */}
              <div className="hidden md:block font-display text-[5rem] font-800 leading-none text-white/10 group-hover:text-white/20 transition-colors select-none">
                {p.number}
              </div>

              {/* Headline */}
              <h3 className="font-display font-800 uppercase text-[clamp(1.4rem,2.5vw,2rem)] leading-tight text-white self-center">
                {p.headline}
              </h3>

              {/* Body */}
              <p className="text-white/50 font-body leading-relaxed text-base self-center">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className="mt-12 border-t border-white/10 pt-10">
          <blockquote className="font-display font-800 uppercase text-[clamp(1.5rem,4vw,3rem)] leading-tight text-white/80 max-w-4xl">
            &ldquo;Your trainer. Your plan. Your results. No distractions. No excuses. Just work.&rdquo;
          </blockquote>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="/book"
            className="bg-white hover:bg-white/90 text-[#0C0C0C] font-display font-700 text-sm tracking-[0.15em] uppercase px-10 py-5 transition-colors"
          >
            Claim Your Free Session
          </a>
        </div>

      </div>
    </section>
  );
}
