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

        {/* GHL Calendar Embed */}
        <div className="w-full min-h-[600px] border-2 border-dashed border-[#E5E5E5] flex flex-col items-center justify-center gap-3 bg-[#F5F5F4]">
          <div className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-[#737373]">
            GHL Calendar Embed
          </div>
          <p className="text-sm text-[#737373] font-body">
            Replace with your GoHighLevel calendar embed code
          </p>
        </div>
      </div>
    </div>
  );
}
