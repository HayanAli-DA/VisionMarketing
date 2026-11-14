"use client";

import {
  Truck,
  Filter,
  Sun,
  Gauge,
  PackageCheck,
  Microscope,
} from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    no: "01",
    title: "Estate Procurement & Moisture Testing",
    icon: Truck,
    desc: "Fresh lots are procured directly from Kodagu planters at the estate gate. Every inbound lot is moisture-tested and graded before acceptance into our Virajpet facility.",
  },
  {
    no: "02",
    title: "Pre-Cleaning & Destoning",
    icon: Filter,
    desc: "Incoming coffee and pepper pass through mechanical pre-cleaners and destoners to remove dust, sticks, stones and foreign matter — protecting downstream grading accuracy.",
  },
  {
    no: "03",
    title: "Hulling & Polishing",
    icon: Sun,
    tag: "Coffee Curing Works — Est. 2004",
    desc: "In our dedicated Coffee Curing Works (commissioned 2004), parchment is hulled, polished and surface-cleaned to deliver uniform, defect-controlled green bean.",
  },
  {
    no: "04",
    title: "Size & Gravity Grading",
    icon: Gauge,
    tag: "Pepper & Coffee Grading Works — Est. 2007",
    desc: "Cured lots are size-graded on oscillating sieves and density-graded by gravity separators — producing clean, bold, uniform grades for both coffee and black pepper.",
  },
  {
    no: "05",
    title: "Lab Verification, Export Bagging & Dispatch",
    icon: PackageCheck,
    desc: "Final lots are lab-verified for moisture, defects and density, then bagged in 50/60kg jute or GrainPro bags, palletised and dispatched to domestic wholesalers and export ports with full traceability.",
  },
];

export function Infrastructure() {
  return (
    <section id="infrastructure" className="relative bg-forest-texture py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-gold-light mb-3">
            Processing Infrastructure &amp; Quality Assurance
          </span>
          <h2 className="font-serif-display text-ivory text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            An integrated Virajpet works — from estate gate to export port.
          </h2>
          <p className="mt-4 text-ivory/70 text-base lg:text-lg">
            Our curing and grading facility combines dedicated coffee curing
            (est. 2004) and pepper grading (est. 2007) lines with in-house lab
            verification — for consistent, export-grade lots every season.
          </p>
        </div>

        {/* Facility photo gallery */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 mb-16">
          {[
            { src: "/images/facility-1.jpeg", caption: "Curing & grading hall — bucket elevators, conveyors and bulk storage hoppers" },
            { src: "/images/facility-2.jpeg", caption: "Coffee curing line — hulling, polishing and vibratory sieving decks" },
            { src: "/images/facility-3.jpeg", caption: "Size & gravity grading — discharge chutes feeding graded lots into collection" },
          ].map((p, i) => (
            <figure
              key={i}
              className={cn(
                "group relative rounded-2xl overflow-hidden ring-1 ring-gold/30 shadow-elegant",
                i === 0 && "md:row-span-2"
              )}
            >
              <div
                className={cn(
                  "relative w-full bg-forest-dark",
                  i === 0 ? "aspect-[3/4] md:aspect-auto md:h-full" : "aspect-[4/3]"
                )}
              >
                { }
                <img
                  src={p.src}
                  alt={p.caption}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-dark/10 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-coffee text-[11px] font-bold">
                      {i + 1}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-light">
                      Virajpet Works
                    </span>
                  </div>
                  <p className="text-ivory text-[13px] leading-snug">{p.caption}</p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        {/* 5-step workflow */}
        <div className="rounded-2xl bg-ivory/5 backdrop-blur-sm border border-ivory/10 p-6 lg:p-10">
          <div className="flex items-center gap-3 mb-8">
            <Microscope className="h-6 w-6 text-gold-light" />
            <h3 className="font-serif-display text-ivory text-xl lg:text-2xl font-bold">
              End-to-End Processing Workflow
            </h3>
          </div>

          {/* Desktop horizontal */}
          <div className="hidden lg:grid grid-cols-5 gap-4 relative">
            <div className="absolute top-9 left-[10%] right-[10%] h-0.5 bg-gold/30" />
            {STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.no} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-18 w-18 items-center justify-center rounded-2xl bg-forest border-2 border-gold text-gold-light shadow-elegant">
                    <Icon className="h-8 w-8" />
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-coffee text-[11px] font-bold">
                      {s.no}
                    </span>
                  </div>
                  <h4 className="mt-4 font-serif-display text-ivory text-[15px] font-bold leading-tight">
                    {s.title}
                  </h4>
                  {s.tag && (
                    <span className="mt-1.5 inline-block text-[10px] font-semibold text-gold-light uppercase tracking-wider">
                      {s.tag}
                    </span>
                  )}
                  <p className="mt-2 text-ivory/65 text-[12px] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mobile vertical */}
          <div className="lg:hidden space-y-5">
            {STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.no}
                  className="relative pl-16 pb-5 border-l-2 border-gold/30 ml-8"
                >
                  <span className="absolute -left-[37px] top-0 flex h-14 w-14 items-center justify-center rounded-xl bg-forest border-2 border-gold text-gold-light">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="absolute -left-[41px] -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-coffee text-[10px] font-bold">
                    {s.no}
                  </span>
                  <h4 className="font-serif-display text-ivory text-base font-bold leading-tight">
                    {s.title}
                  </h4>
                  {s.tag && (
                    <span className="block mt-1 text-[10px] font-semibold text-gold-light uppercase tracking-wider">
                      {s.tag}
                    </span>
                  )}
                  <p className="mt-2 text-ivory/65 text-[13px] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
