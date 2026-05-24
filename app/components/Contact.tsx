export default function Contact() {
  return (
    <section id="contact" className="bg-[#0C0C0C] py-24 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-px bg-[#F97316]" />
          <span className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-[#F97316] font-700">
            05: Contact
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <div>
            <h2 className="font-display font-800 uppercase text-[clamp(2.5rem,5vw,4rem)] leading-none text-[#F0EDE8] mb-6">
              Ready to
              <br />
              <span className="text-[#F97316]">Get to Work?</span>
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-8 font-body">
              Join TrainersLab today and experience a new standard in personal training.
              Fill out the form and a coach will reach out within 24 hours.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-[#2A2A2A]" />
                <span className="font-display text-[0.6rem] tracking-[0.2em] uppercase text-[#6B6B6B]">
                  1730 N Mt. Juliet Rd., Mt. Juliet, TN 37122
                </span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <form className="flex flex-col gap-0 border border-[#2A2A2A]">
            <div className="grid sm:grid-cols-2 gap-px bg-[#2A2A2A]">
              <div className="bg-[#0C0C0C] p-1">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full bg-transparent px-4 py-4 text-sm text-[#F0EDE8] placeholder-[#6B6B6B] font-body outline-none focus:bg-[#141414] transition-colors"
                />
              </div>
              <div className="bg-[#0C0C0C] p-1">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-transparent px-4 py-4 text-sm text-[#F0EDE8] placeholder-[#6B6B6B] font-body outline-none focus:bg-[#141414] transition-colors"
                />
              </div>
            </div>

            <div className="border-t border-[#2A2A2A] p-1">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent px-4 py-4 text-sm text-[#F0EDE8] placeholder-[#6B6B6B] font-body outline-none focus:bg-[#141414] transition-colors"
              />
            </div>

            <div className="border-t border-[#2A2A2A] p-1">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-transparent px-4 py-4 text-sm text-[#F0EDE8] placeholder-[#6B6B6B] font-body outline-none focus:bg-[#141414] transition-colors"
              />
            </div>

            <div className="border-t border-[#2A2A2A] p-1">
              <select className="w-full bg-[#0C0C0C] px-4 py-4 text-sm text-[#6B6B6B] font-body outline-none focus:bg-[#141414] transition-colors appearance-none cursor-pointer">
                <option value="">I&apos;m interested in...</option>
                <option value="personal">Personal Training</option>
                <option value="strength">Strength &amp; Conditioning</option>
                <option value="nutrition">Nutrition Coaching</option>
                <option value="group">Group Training</option>
              </select>
            </div>

            <div className="border-t border-[#2A2A2A] p-1">
              <textarea
                rows={4}
                placeholder="Tell us about your goals..."
                className="w-full bg-transparent px-4 py-4 text-sm text-[#F0EDE8] placeholder-[#6B6B6B] font-body outline-none focus:bg-[#141414] transition-colors resize-none"
              />
            </div>

            <div className="border-t border-[#2A2A2A]">
              <button
                type="submit"
                className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-display font-700 text-sm tracking-[0.15em] uppercase py-5 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
