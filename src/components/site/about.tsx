"use client";

import { useState } from "react";
import {
  Sprout,
  Factory,
  Gauge,
  Globe2,
  MapPin,
  Award,
  Users,
  Quote,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Milestone = {
  year: string;
  title: string;
  icon: React.ElementType;
  blurb: string;
  detail: string;
};

const MILESTONES: Milestone[] = [
  {
    year: "2001",
    title: "Trading Foundation",
    icon: Sprout,
    blurb: "Founded in Virajpet, Coorg",
    detail:
      "Vision Marketing is established in Virajpet, Coorg (Kodagu) by proprietor Mr. Duddiyanda Fakrudhin Ashrafali — beginning 25 years of trusted commodity trading and wholesale distribution across India's premier coffee and spice belt.",
  },
  {
    year: "2004",
    title: "Coffee Curing Works",
    icon: Factory,
    blurb: "Dedicated curing facility commissioned",
    detail:
      "We commission our dedicated Coffee Curing & Grading Works in Virajpet — bringing moisture-controlled hulling, polishing and size grading in-house to guarantee consistent, defect-controlled Robusta for wholesale and export buyers.",
  },
  {
    year: "2007",
    title: "Pepper Grading Works",
    icon: Gauge,
    blurb: "Specialised grading line expanded",
    detail:
      "Infrastructure expands with a specialised Black Pepper Grading Works — mechanical garbling, size-sorting and bulk-density grading for bold Tellicherry (TGSEB / TGEB), Malabar (MG1) and bulk grades.",
  },
  {
    year: "Present",
    title: "25-Year Milestone & Export Readiness",
    icon: Globe2,
    blurb: "Global export-ready, fully traceable",
    detail:
      "Today Vision Marketing marks 25 years of trading excellence — a fully traceable, GST-registered (29AFEPA6566L1Z3) supply chain from Kodagu estates to export ports, serving domestic wholesalers and international buyers with precision-graded coffee, pepper, honey and plantation produce.",
  },
];

export function About() {
  const [active, setActive] = useState(3);

  return (
    <section id="about" className="relative bg-linen py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section intro */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-gold-dark mb-3">
              About &amp; Heritage
            </span>
            <h2 className="font-serif-display text-forest text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              Deep roots in Kodagu — ethical, transparent wholesale trading.
            </h2>
            <p className="mt-5 text-coffee/80 text-base lg:text-lg leading-relaxed">
              For over two decades, Vision Marketing has anchored itself in the
              misty coffee and spice belt of Coorg (Kodagu), Karnataka. We work
              directly with local planters — buying fresh from the estate gate,
              curing and grading in our own Virajpet works, and dispatching
              precision-graded lots to wholesalers and exporters worldwide.
            </p>
            <p className="mt-4 text-coffee/75 leading-relaxed">
              Our promise is simple: full traceability, honest grading and
              consistent specifications — every season, every shipment.
            </p>

            <div className="mt-7 grid sm:grid-cols-2 gap-4">
              <div className="rounded-lg border border-[#e2dbcd] bg-white p-4 shadow-sm">
                <Users className="h-5 w-5 text-forest mb-2" />
                <div className="font-serif-display font-bold text-forest text-sm">
                  Proprietor-led
                </div>
                <p className="text-coffee/70 text-[13px] mt-1">
                  Mr. Duddiyanda Fakrudhin Ashrafali — hands-on, estate-direct
                  relationships since 2001.
                </p>
              </div>
              <div className="rounded-lg border border-[#e2dbcd] bg-white p-4 shadow-sm">
                <Award className="h-5 w-5 text-forest mb-2" />
                <div className="font-serif-display font-bold text-forest text-sm">
                  Compliant &amp; Traceable
                </div>
                <p className="text-coffee/70 text-[13px] mt-1">
                  Registered Indian GST entity (29AFEPA6566L1Z3) with full estate-to-port traceability.
                </p>
              </div>
            </div>
          </div>

          {/* Image + quote */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant ring-1 ring-[#e2dbcd] aspect-[4/3]">
              { }
              <img
                src="/images/about-cherries.png"
                alt="Ripe Robusta coffee cherries on a branch in a Coorg shade-grown plantation"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-2 sm:left-6 max-w-xs rounded-xl bg-forest text-ivory p-5 shadow-elegant border border-gold/30">
              <Quote className="h-5 w-5 text-gold mb-2" />
              <p className="text-sm leading-relaxed text-ivory/90">
                “Direct from the estates of Coorg — graded honestly, dispatched
                with traceability you can trust.”
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-wider text-gold-light">
                — Vision Marketing, Virajpet
              </p>
            </div>
            <div className="absolute -top-4 -right-2 sm:-right-4 hidden sm:flex items-center gap-1.5 rounded-full bg-gold text-coffee px-3 py-1.5 text-xs font-bold shadow-gold-glow">
              <MapPin className="h-3.5 w-3.5" /> Kodagu, Karnataka
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20 lg:mt-28">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif-display text-forest text-2xl lg:text-3xl font-bold">
              Our Legacy Timeline
            </h3>
            <p className="mt-2 text-coffee/70 text-sm lg:text-base">
              Four milestones across 25 years of Coorg commodity trading,
              curing and grading excellence.
            </p>
          </div>

          {/* Desktop horizontal stepper */}
          <div className="hidden md:block relative">
            <div className="absolute top-7 left-0 right-0 h-0.5 bg-[#e2dbcd]" />
            <div
              className="absolute top-7 left-0 h-0.5 bg-gold transition-all duration-500"
              style={{ width: `${(active / (MILESTONES.length - 1)) * 100}%` }}
            />
            <div className="relative grid grid-cols-4 gap-4">
              {MILESTONES.map((m, i) => {
                const Icon = m.icon;
                const isActive = i === active;
                return (
                  <button
                    key={m.year}
                    onClick={() => setActive(i)}
                    className="group flex flex-col items-center text-center cursor-pointer"
                  >
                    <span
                      className={cn(
                        "relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-300",
                        isActive
                          ? "bg-forest border-gold text-gold scale-110 shadow-elegant"
                          : "bg-white border-[#d6cdbb] text-coffee/50 group-hover:border-gold/60 group-hover:text-forest"
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <span
                      className={cn(
                        "mt-3 font-serif-display font-bold text-lg transition-colors",
                        isActive ? "text-forest" : "text-coffee/60"
                      )}
                    >
                      {m.year}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 text-[12px] font-medium transition-colors",
                        isActive ? "text-gold-dark" : "text-coffee/50"
                      )}
                    >
                      {m.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active detail card */}
            <div className="mt-8 rounded-2xl border border-[#e2dbcd] bg-white p-6 lg:p-8 shadow-elegant">
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-forest text-gold">
                  {(() => {
                    const Icon = MILESTONES[active].icon;
                    return <Icon className="h-6 w-6" />;
                  })()}
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="font-serif-display text-2xl font-bold text-forest">
                      {MILESTONES[active].year}
                    </span>
                    <span className="text-sm font-semibold text-gold-dark uppercase tracking-wide">
                      {MILESTONES[active].title}
                    </span>
                  </div>
                  <p className="mt-3 text-coffee/80 leading-relaxed">
                    {MILESTONES[active].detail}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden space-y-4">
            {MILESTONES.map((m, i) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.year}
                  className="relative pl-16 pb-5 border-l-2 border-[#e2dbcd] ml-7"
                >
                  <span className="absolute -left-[31px] top-0 flex h-12 w-12 items-center justify-center rounded-full bg-forest text-gold border-2 border-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="font-serif-display font-bold text-forest text-lg">
                    {m.year}
                  </div>
                  <div className="text-gold-dark text-xs font-semibold uppercase tracking-wide">
                    {m.title}
                  </div>
                  <p className="mt-2 text-coffee/75 text-sm leading-relaxed">
                    {m.detail}
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
