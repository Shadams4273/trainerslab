import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | TrainersLab",
  description: "Get in touch with TrainersLab. Ready to start your training journey? A coach will reach out within 24 hours.",
};

export default function ContactPage() {
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
            Get in Touch.
          </h1>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 md:gap-20 items-start">
          {/* Left — info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#111111]" />
              <span className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-[#111111] font-700">
                Start Today
              </span>
            </div>
            <h2 className="font-display font-800 uppercase text-[clamp(2rem,4vw,3rem)] leading-none text-[#111111] mb-6">
              Ready to Get
              <br />to Work?
            </h2>
            <p className="text-[#737373] leading-relaxed mb-10 font-body">
              Fill out the form and a TrainersLab coach will reach out within 24 hours
              to discuss your goals and get you set up with the right program.
            </p>

            {/* Location contacts */}
            <div className="flex flex-col gap-0 border border-[#E5E5E5]">
              {[
                { city: "Mount Juliet, TN", phone: "629-246-8588", email: "mtjuliet@trainerslab.com" },
                { city: "Hilton Head, SC", phone: "854-255-2839", email: "wexford@trainerslab.com" },
                { city: "Jacksonville, NC", phone: "910-346-3446", email: "jacksonville@trainerslab.com" },
              ].map((loc, i, arr) => (
                <div
                  key={loc.city}
                  className={`p-5 ${i < arr.length - 1 ? "border-b border-[#E5E5E5]" : ""}`}
                >
                  <div className="font-display text-[0.65rem] tracking-[0.2em] uppercase text-[#111111] font-700 mb-2">
                    {loc.city}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`tel:${loc.phone.replace(/\D/g, "")}`}
                      className="font-display text-[0.65rem] tracking-[0.15em] uppercase text-[#737373] hover:text-[#111111] transition-colors"
                    >
                      {loc.phone}
                    </a>
                    <span className="hidden sm:block text-[#E5E5E5]">·</span>
                    <a
                      href={`mailto:${loc.email}`}
                      className="font-display text-[0.65rem] tracking-[0.15em] text-[#737373] hover:text-[#111111] transition-colors lowercase"
                    >
                      {loc.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form className="flex flex-col gap-0 border border-[#E5E5E5]">
            <div className="grid sm:grid-cols-2 gap-px bg-[#E5E5E5]">
              <div className="bg-white">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-5 py-4 text-sm text-[#111111] placeholder-[#D4D4D4] font-body outline-none bg-white focus:bg-[#F5F5F4] transition-colors"
                />
              </div>
              <div className="bg-white">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-5 py-4 text-sm text-[#111111] placeholder-[#D4D4D4] font-body outline-none bg-white focus:bg-[#F5F5F4] transition-colors"
                />
              </div>
            </div>

            <div className="border-t border-[#E5E5E5]">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 text-sm text-[#111111] placeholder-[#D4D4D4] font-body outline-none bg-white focus:bg-[#F5F5F4] transition-colors"
              />
            </div>

            <div className="border-t border-[#E5E5E5]">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-5 py-4 text-sm text-[#111111] placeholder-[#D4D4D4] font-body outline-none bg-white focus:bg-[#F5F5F4] transition-colors"
              />
            </div>

            <div className="border-t border-[#E5E5E5]">
              <select className="w-full px-5 py-4 text-sm text-[#D4D4D4] font-body outline-none bg-white focus:bg-[#F5F5F4] transition-colors appearance-none cursor-pointer">
                <option value="">Preferred Location</option>
                <option value="mtjuliet">Mount Juliet, TN</option>
                <option value="hiltonhead">Hilton Head, SC</option>
                <option value="jacksonville">Jacksonville, NC</option>
              </select>
            </div>

            <div className="border-t border-[#E5E5E5]">
              <select className="w-full px-5 py-4 text-sm text-[#D4D4D4] font-body outline-none bg-white focus:bg-[#F5F5F4] transition-colors appearance-none cursor-pointer">
                <option value="">I&apos;m interested in...</option>
                <option value="personal">Personal Training</option>
                <option value="strength">Strength &amp; Conditioning</option>
                <option value="nutrition">Nutrition Coaching</option>
                <option value="group">Group Training</option>
              </select>
            </div>

            <div className="border-t border-[#E5E5E5]">
              <textarea
                rows={4}
                placeholder="Tell us about your goals..."
                className="w-full px-5 py-4 text-sm text-[#111111] placeholder-[#D4D4D4] font-body outline-none bg-white focus:bg-[#F5F5F4] transition-colors resize-none"
              />
            </div>

            <div className="border-t border-[#E5E5E5]">
              <button
                type="submit"
                className="w-full bg-[#111111] hover:bg-[#333333] text-white font-display font-700 text-[0.7rem] tracking-[0.2em] uppercase py-5 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
