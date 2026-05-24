const testimonials = [
  {
    name: "Megan Leblanc",
    quote:
      "This gym keeps you committed to your workouts! The 1:1 training is amazing, but I also love getting to know others during their sessions, creating such a motivating community. They're super flexible with scheduling, which makes it easy to stay consistent.",
  },
  {
    name: "Raquel Rosas",
    quote:
      "Joining Trainers Lab changed everything for me. I walked in unsure, needing accountability, and honestly terrified to push myself. What I found was a community that met me exactly where I was and pushed me to become stronger week after week. In a little over a year I have lost more than 30+ pounds, gained over 10+ pounds of muscle, reversed my prediabetes, added 100+ pounds to my core lifts, and built confidence I did not know I had. Chris, Nick, and Brett are tough but patient, hold you accountable, and genuinely want to see you succeed. The 1:1 attention you receive in a fun, low pressure environment makes this the best training experience in Mount Juliet. I found myself at Trainers Lab. I keep going because the results speak for themselves. If you are ready to change your life, start here.",
  },
  {
    name: "Angela F.",
    quote:
      "This is the place to go in Mount Juliet if you want to get real results! True 1:1 coaching with the trainers that push you to get better and stronger. As a woman in her 40s with a petite frame, it has been very hard for me to gain muscle, however, since being a member at Trainers Lab since April, I've noticed a huge improvement in muscle tone and strength, and feel much more confident in my body after a few years of not feeling so great about where things were headed (postpartum). Would highly recommend for anyone looking for 1:1 training and accountability!",
  },
];

import Image from "next/image";

export default function TestimonialsPage() {
  return (
    <section className="min-h-screen bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-6 h-px bg-[#111111]" />
          <span className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-[#111111] font-700">
            Real Results
          </span>
        </div>
        <h1 className="font-display font-800 uppercase text-[clamp(2.5rem,6vw,5rem)] leading-none text-[#111111] mb-8">
          What Our Members Say.
        </h1>

        {/* Team photo */}
        <div className="relative h-[360px] w-full overflow-hidden mb-16">
          <Image
            src="/images/team-community.png"
            alt="Trainers Lab community"
            fill
            className="object-cover object-[center_30%]"
          />
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-px bg-[#E5E5E5]">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white p-8 flex flex-col gap-6">
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-[#111111]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#737373] font-body text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Name */}
              <div className="border-t border-[#E5E5E5] pt-6">
                <div className="font-display font-700 uppercase tracking-widest text-sm text-[#111111]">
                  {t.name}
                </div>
                <div className="font-display text-[0.65rem] tracking-[0.2em] uppercase text-[#737373] mt-1">
                  Trainers Lab Member
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/book"
            className="bg-[#111111] hover:bg-[#333333] text-white font-display font-700 text-sm tracking-[0.15em] uppercase px-10 py-5 transition-colors"
          >
            Claim Your Free Session
          </a>
        </div>
      </div>
    </section>
  );
}
