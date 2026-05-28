"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const fd = new FormData(e.currentTarget);
    const payload = {
      firstName: String(fd.get("firstName") ?? "").trim(),
      lastName: String(fd.get("lastName") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      location: String(fd.get("location") ?? ""),
      interest: String(fd.get("interest") ?? ""),
      message: String(fd.get("message") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? `Request failed (${res.status})`);
      }
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-[#E5E5E5] p-10 flex flex-col gap-4">
        <div className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-[#111111] font-700">
          Message Sent
        </div>
        <h3 className="font-display font-800 uppercase text-2xl leading-none text-[#111111]">
          Thanks — we got it.
        </h3>
        <p className="text-[#737373] leading-relaxed font-body">
          A TrainersLab coach will reach out within 24 hours.
        </p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-0 border border-[#E5E5E5]"
    >
      <div className="grid sm:grid-cols-2 gap-px bg-[#E5E5E5]">
        <div className="bg-white">
          <input
            type="text"
            name="firstName"
            required
            placeholder="First Name"
            className="w-full px-5 py-4 text-sm text-[#111111] placeholder-[#D4D4D4] font-body outline-none bg-white focus:bg-[#F5F5F4] transition-colors"
          />
        </div>
        <div className="bg-white">
          <input
            type="text"
            name="lastName"
            required
            placeholder="Last Name"
            className="w-full px-5 py-4 text-sm text-[#111111] placeholder-[#D4D4D4] font-body outline-none bg-white focus:bg-[#F5F5F4] transition-colors"
          />
        </div>
      </div>

      <div className="border-t border-[#E5E5E5]">
        <input
          type="email"
          name="email"
          required
          placeholder="Email Address"
          className="w-full px-5 py-4 text-sm text-[#111111] placeholder-[#D4D4D4] font-body outline-none bg-white focus:bg-[#F5F5F4] transition-colors"
        />
      </div>

      <div className="border-t border-[#E5E5E5]">
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full px-5 py-4 text-sm text-[#111111] placeholder-[#D4D4D4] font-body outline-none bg-white focus:bg-[#F5F5F4] transition-colors"
        />
      </div>

      <div className="border-t border-[#E5E5E5]">
        <select
          name="location"
          defaultValue=""
          className="w-full px-5 py-4 text-sm text-[#111111] font-body outline-none bg-white focus:bg-[#F5F5F4] transition-colors appearance-none cursor-pointer"
        >
          <option value="" disabled>
            Preferred Location
          </option>
          <option value="mtjuliet">Mount Juliet, TN</option>
          <option value="hiltonhead">Hilton Head, SC</option>
          <option value="jacksonville">Jacksonville, NC</option>
        </select>
      </div>

      <div className="border-t border-[#E5E5E5]">
        <select
          name="interest"
          defaultValue=""
          className="w-full px-5 py-4 text-sm text-[#111111] font-body outline-none bg-white focus:bg-[#F5F5F4] transition-colors appearance-none cursor-pointer"
        >
          <option value="" disabled>
            I&apos;m interested in...
          </option>
          <option value="personal">Personal Training</option>
          <option value="strength">Strength &amp; Conditioning</option>
          <option value="nutrition">Nutrition Coaching</option>
          <option value="group">Group Training</option>
        </select>
      </div>

      <div className="border-t border-[#E5E5E5]">
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your goals..."
          className="w-full px-5 py-4 text-sm text-[#111111] placeholder-[#D4D4D4] font-body outline-none bg-white focus:bg-[#F5F5F4] transition-colors resize-none"
        />
      </div>

      {status === "error" && errorMsg && (
        <div className="border-t border-[#E5E5E5] bg-[#FEF2F2] px-5 py-3 text-xs text-[#B91C1C] font-body">
          {errorMsg}
        </div>
      )}

      <div className="border-t border-[#E5E5E5]">
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-[#111111] hover:bg-[#333333] text-white font-display font-700 text-[0.7rem] tracking-[0.2em] uppercase py-5 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
