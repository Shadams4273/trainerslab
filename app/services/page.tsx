import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs & Services | TrainersLab",
  description: "Explore TrainersLab's training programs: personal training, strength & conditioning, nutrition coaching, and group training.",
};

const services = [
  {
    number: "01",
    title: "Personal Training",
    description:
      "One-on-one sessions engineered around your specific goals, schedule, and body. Our certified coaches design every program from the ground up. No templates, no shortcuts. You get a dedicated coach who tracks your progress, adjusts the plan, and holds you accountable every step of the way.",
    details: ["Custom programming", "1-on-1 coaching sessions", "Weekly progress check-ins", "Ongoing plan adjustments"],
  },
  {
    number: "02",
    title: "Strength & Conditioning",
    description:
      "Build raw strength, explosive power, and the physical resilience to handle whatever life demands. Our S&C programs are grounded in proven sports science and designed for athletes, working professionals, and anyone serious about performing at a higher level.",
    details: ["Powerlifting & barbell work", "Athletic performance", "Functional movement", "Injury prevention"],
  },
  {
    number: "03",
    title: "Nutrition Coaching",
    description:
      "Training is only half the equation. Our nutrition coaching bridges the gap between the work you put in at the gym and the results you see in the mirror. We build sustainable habits, not crash diets, tailored to your lifestyle and goals.",
    details: ["Personalized meal planning", "Macro & calorie targets", "Sustainable habit building", "Ongoing check-ins"],
  },
  {
    number: "04",
    title: "Group Training",
    description:
      "High-intensity, expert-coached sessions in a small-group environment. The energy of a class, the quality of personal training. Groups stay small so every member gets real coaching attention, not just someone watching the clock.",
    details: ["Small group format", "Fully coached sessions", "Community environment", "Varied programming"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#111111] text-white py-10 md:py-20 border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-white opacity-30" />
            <span className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-white opacity-50 font-700">
              TrainersLab
            </span>
          </div>
          <h1 className="font-display font-800 uppercase text-[clamp(3rem,8vw,7rem)] leading-none text-white">
            Programs &<br />Services.
          </h1>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-0 border border-[#E5E5E5]">
            {services.map((s, i) => (
              <div
                key={s.number}
                className={`grid md:grid-cols-[120px_1fr_280px] gap-6 p-6 md:p-10 ${
                  i < services.length - 1 ? "border-b border-[#E5E5E5]" : ""
                }`}
              >
                {/* Number */}
                <div className="font-display text-[3.5rem] font-800 leading-none text-[#E5E5E5] select-none">
                  {s.number}
                </div>

                {/* Content */}
                <div>
                  <h2 className="font-display font-700 uppercase text-2xl tracking-widest text-[#111111] mb-4">
                    {s.title}
                  </h2>
                  <p className="text-sm text-[#737373] leading-relaxed font-body max-w-xl">
                    {s.description}
                  </p>
                </div>

                {/* Detail list */}
                <div className="border-t md:border-t-0 md:border-l border-[#E5E5E5] pt-4 md:pt-0 md:pl-8 flex flex-col justify-center gap-3">
                  {s.details.map((d) => (
                    <div key={d} className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-[#111111] shrink-0" />
                      <span className="font-display text-[0.65rem] tracking-[0.15em] uppercase text-[#737373]">
                        {d}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F5F4] py-20 border-t border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-800 uppercase text-[clamp(1.8rem,4vw,3rem)] leading-none text-[#111111] mb-2">
              Ready to Start?
            </h2>
            <p className="text-sm text-[#737373] font-body">
              A coach will reach out within 24 hours to discuss your goals.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-[#111111] hover:bg-[#333333] text-white font-display font-700 text-[0.7rem] tracking-[0.15em] uppercase px-8 py-4 transition-colors shrink-0"
          >
            Book a Session
          </Link>
        </div>
      </section>
    </>
  );
}
