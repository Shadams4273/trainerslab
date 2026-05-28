import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Book a Session | TrainersLab",
  description:
    "Schedule your TrainersLab session. A coach will confirm shortly.",
};

export default function BookPage() {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-px bg-[#111111]" />
          <span className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-[#111111] font-700">
            Schedule
          </span>
        </div>
        <h1 className="font-display font-800 uppercase text-[clamp(2rem,5vw,4rem)] leading-none text-[#111111] mb-3">
          Book a Session.
        </h1>
        <p className="text-[#737373] font-body mb-12 max-w-lg">
          Select a time below and a coach will confirm your session shortly.
        </p>

        <iframe
          src="https://api.leadconnectorhq.com/widget/booking/cnyedbykQ3ZPNn2rhRPy"
          id="cnyedbykQ3ZPNn2rhRPy_1779987345208"
          title="TrainersLab booking calendar"
          className="w-full border-0 overflow-hidden"
          style={{ minHeight: 600 }}
        />
        <Script
          src="https://link.msgsndr.com/js/form_embed.js"
          strategy="afterInteractive"
        />
      </div>
    </div>
  );
}
