"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Counter({
  to,
  suffix = "",
  duration = 1600,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(Math.round(eased * to));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const TRUST = [
  { value: <Counter to={25} suffix="+" />, label: "Years in Commodity Trading" },
  { value: "Since 2004", label: "Coffee Curing Works" },
  { value: "Since 2007", label: "Pepper Grading Works" },
  { value: <>100% Coorg</>, label: "Direct Estate Sourcing" },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen flex flex-col overflow-x-clip">
      {/* Background image + overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-estate.png"
          alt="Misty Coorg coffee estates in Kodagu, Karnataka at dawn"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/75 to-ink/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center pt-24 pb-10 sm:pb-12 lg:pt-28 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber/15 border border-amber/50 px-3 py-1.5 text-xs font-semibold text-amber-dark backdrop-blur-sm mb-6">
              <Leaf className="h-3.5 w-3.5" />
              Virajpet, Kodagu (Coorg) • Trusted Since 2001
            </div>

            <h1 className="font-serif-display text-cream font-bold leading-[1.12] sm:leading-[1.08] text-3xl sm:text-5xl lg:text-6xl xl:text-[4.1rem] text-balance">
              25 Years of Excellence in Coorg Coffee Curing, Pepper Grading &amp; Global Agro-Exports.
            </h1>

            <p className="mt-5 sm:mt-6 text-cream/85 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
              Direct from the misty estates of Virajpet, Kodagu, delivering
              precision-graded Robusta coffee, bold black pepper, and pure Coorg
              honey to domestic wholesalers and international buyers since 2001.
            </p>

            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="bg-brand-gradient text-cream hover:brightness-110 font-semibold shadow-brand-glow text-sm sm:text-base min-h-12 h-auto py-3 px-5 sm:px-6 text-center justify-center"
              >
                <Link href="#products">
                  Explore Product Specifications
                  <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-amber/50 text-amber hover:bg-amber hover:text-ink bg-cream/10 backdrop-blur-sm font-semibold text-sm sm:text-base min-h-12 h-auto py-3 px-5 sm:px-6 text-center justify-center"
              >
                <Link href="#buyer-portal">Register for Trade &amp; Price Updates</Link>
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-2 text-cream/70 text-xs">
              <ShieldCheck className="h-4 w-4 text-amber shrink-0" />
              <span>GSTIN 29AFEPA6566L1Z3 • Full traceability from Kodagu estates to export ports</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip: 4 column counter bar */}
      <div className="relative z-10 border-t border-amber/25 bg-ink-soft/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {TRUST.map((item, i) => (
              <div
                key={i}
                className={cn(
                  "px-3 sm:px-4 py-5 sm:py-6 lg:py-7 text-center",
                  i === 0 && "border-r border-b border-amber/20 lg:border-b-0",
                  i === 1 && "border-b border-amber/20 lg:border-b-0 lg:border-r",
                  i === 2 && "border-r border-amber/20 lg:border-r",
                  i === 3 && "border-none",
                  "lg:border-b-0 lg:border-r lg:last:border-r-0"
                )}
              >
                <dt className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-dark leading-none">
                  {item.value}
                </dt>
                <dd className="mt-2 text-[10.5px] sm:text-xs lg:text-[13px] font-medium text-cream/75 uppercase tracking-wider">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
