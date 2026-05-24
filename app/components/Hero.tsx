export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0C0C0C]">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "grayscale(100%)" }}
      >
        <source src="/HeroB.Roll.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-[#0C0C0C]/70 pointer-events-none" />

      {/* Diagonal stripe accent — top left */}
      <div
        className="absolute top-0 left-0 w-1 h-full bg-white opacity-20"
        aria-hidden="true"
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        {/* Location tag */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-white opacity-40" />
          <span className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-white opacity-60 font-700">
            Mount Juliet, Tennessee
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-display font-800 uppercase leading-none tracking-tight mb-6">
          <span className="block text-[clamp(3.5rem,10vw,8rem)] text-white">Forge</span>
          <span className="block text-[clamp(3.5rem,10vw,8rem)] text-white">Your</span>
          <span className="block text-[clamp(3.5rem,10vw,8rem)] text-white">Limits.</span>
        </h1>

        {/* Tagline */}
        <p className="max-w-xl text-base text-white/50 leading-relaxed mb-10 font-body">
          Redefining the world of personal fitness through high-end personal training.
          Elite coaches. Real results.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/book"
            className="bg-white hover:bg-white/90 text-[#0C0C0C] font-display font-700 text-sm tracking-[0.15em] uppercase px-8 py-4 transition-colors"
          >
            Claim Your Free Session
          </a>
          <a
            href="#services"
            className="border border-white/30 hover:border-white/60 text-white/60 hover:text-white font-display font-700 text-sm tracking-[0.15em] uppercase px-8 py-4 transition-colors"
          >
            View Programs
          </a>
        </div>
      </div>

      {/* Stat strip */}
      <div className="relative z-10 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 grid grid-cols-3 divide-x divide-white/10">
          {[
            { value: "500+", label: "Members Trained" },
            { value: "10+", label: "Expert Coaches" },
            { value: "3", label: "Locations Open" },
          ].map((stat) => (
            <div key={stat.label} className="px-3 md:px-6 first:pl-0 last:pr-0">
              <div className="font-display text-xl md:text-3xl font-800 text-white">{stat.value}</div>
              <div className="font-display text-[0.55rem] md:text-[0.65rem] tracking-[0.15em] md:tracking-[0.2em] uppercase text-white/40 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
