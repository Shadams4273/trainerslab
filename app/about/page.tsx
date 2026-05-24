import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Who We Are | TrainersLab",
  description: "Learn about TrainersLab's mission to redefine personal fitness through elite coaching, custom programming, and a community-first approach.",
};


export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#111111] text-white py-10 border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-white opacity-30" />
            <span className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-white opacity-50 font-700">
              TrainersLab
            </span>
          </div>
          <h1 className="font-display font-800 uppercase text-[clamp(2.5rem,6vw,5rem)] leading-none text-white">
            Who We Are.
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-24 border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#111111]" />
              <span className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-[#111111] font-700">
                Our Mission
              </span>
            </div>
            <h2 className="font-display font-800 uppercase text-[clamp(2rem,4vw,3.5rem)] leading-none text-[#111111] mb-8">
              A New Standard
              <br />in Personal Training.
            </h2>
            <p className="text-[#737373] leading-relaxed mb-6 font-body">
              TrainersLab was built on a single belief: that everyone deserves access to
              elite-level coaching. Not just professional athletes. Not just people with unlimited
              time and money. Everyone.
            </p>
            <p className="text-[#737373] leading-relaxed mb-6 font-body">
              We provide elite, customized training programs designed to help our clients achieve
              their peak physical and mental performance, whether you&apos;re a busy professional,
              a competitive athlete, or someone starting fresh.
            </p>
            <p className="text-[#737373] leading-relaxed font-body">
              Our approach combines fitness science, nutrition, and wellness into a single,
              integrated framework. We don&apos;t just build stronger bodies. We build better habits,
              clearer minds, and lives that feel different.
            </p>
          </div>

          <div className="relative h-[480px] overflow-hidden">
            <Image
              src="/images/trainer-mobility.png"
              alt="Trainer during a session"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <h2 className="font-display font-800 uppercase text-[clamp(1.8rem,4vw,3rem)] leading-none text-white">
            Join the Lab.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/locations"
              className="border border-white border-opacity-30 text-white font-display font-700 text-[0.7rem] tracking-[0.15em] uppercase px-8 py-4 hover:border-opacity-60 transition-colors"
            >
              Find a Location
            </Link>
            <Link
              href="/contact"
              className="bg-white text-[#111111] font-display font-700 text-[0.7rem] tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#E5E5E5] transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
