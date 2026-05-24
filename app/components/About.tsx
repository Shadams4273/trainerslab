const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Elite Performance",
    description:
      "Every program is engineered for peak physical and mental output. No filler, no fluff.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Custom Programming",
    description:
      "No two athletes are the same. Every plan is built around your body, your schedule, and your goals.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Community-Driven",
    description:
      "Training is better together. Our community of coaches and athletes will push you further than you'd go alone.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#0C0C0C] py-24 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-px bg-[#F97316]" />
          <span className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-[#F97316] font-700">
            03: Who We Are
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — mission block */}
          <div>
            <h2 className="font-display font-800 uppercase text-[clamp(2.5rem,5vw,4rem)] leading-none text-[#F0EDE8] mb-8">
              A New Standard
              <br />
              in <span className="text-[#F97316]">Personal Training.</span>
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-6 font-body">
              TrainersLab was built on one belief: that everyone deserves access to
              elite-level coaching. We combine fitness science, nutrition, and wellness
              into a single, integrated approach that strengthens body, mind, and spirit.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed font-body">
              Whether you&apos;re a busy professional, a competitive athlete, or someone
              starting fresh. Our coaches meet you where you are and take you where you
              want to go.
            </p>

            {/* Divider rule */}
            <div className="flex items-center gap-4 mt-10">
              <div className="w-12 h-px bg-[#F97316]" />
              <span className="font-display text-[0.6rem] tracking-[0.25em] uppercase text-[#6B6B6B]">
                Mount Juliet · Hilton Head · Jacksonville
              </span>
            </div>
          </div>

          {/* Right — pillars */}
          <div className="flex flex-col gap-0 border border-[#2A2A2A]">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`p-6 flex gap-5 ${i < pillars.length - 1 ? "border-b border-[#2A2A2A]" : ""}`}
              >
                <div className="text-[#F97316] shrink-0 mt-0.5">{p.icon}</div>
                <div>
                  <h3 className="font-display font-700 uppercase tracking-widest text-sm text-[#F0EDE8] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed font-body">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
