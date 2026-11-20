"use client";

import { useState, useRef } from "react";
import {
  Truck,
  Filter,
  Sun,
  Gauge,
  PackageCheck,
  Microscope,
  Maximize2,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type FacilityItem = {
  src: string;
  videoSrc?: string;
  type?: "image" | "video";
  category: "coffee" | "pepper";
  title: string;
  tag: string;
  caption: string;
};

const FACILITIES: FacilityItem[] = [
  {
    src: "/images/pepper-grading/pepper-grading-machine.jpg",
    type: "image",
    category: "pepper",
    title: "SMS Industry Pepper Grading Line",
    tag: "Pepper Grading Works • SMS Industry",
    caption: "Heavy-duty SMS Industry vibratory grading machine with deep intake pit, vertical bucket elevator column, and precision multi-deck screening chamber sorting black pepper into TGSEB, TGEB, and MG1 grades.",
  },
  {
    src: "/images/pepper-grading/pepper-grading-machine-wide.jpg",
    videoSrc: "/videos/pepper-grading.mp4",
    type: "video",
    category: "pepper",
    title: "Pepper Grading Line in Live Action",
    tag: "Video • Live Facility Operation",
    caption: "Real factory video of our Virajpet black pepper grading works in active operation, showing the bucket elevator intake and multi-spout vibratory discharge sorting into calibrated bins.",
  },
  {
    src: "/images/curing/hulling-line.jpg",
    type: "image",
    category: "coffee",
    title: "Dual Coffee Hulling Station",
    tag: "Huller-1 & Huller-2 • EL-5 Elevator",
    caption: "Commercial twin huller setup with central vertical bucket elevator (EL-5) for hulling and polishing Robusta parchment into clean green coffee bean.",
  },
  {
    src: "/images/curing/gravity-grader.jpg",
    type: "image",
    category: "coffee",
    title: "Vibratory Gravity Separator",
    tag: "Density Sorting & Quality Grading",
    caption: "Oscillating fluidised gravity table separating processed coffee beans by density, eliminating lights, defective beans and foreign matter.",
  },
  {
    src: "/images/curing/destoner-elevator.jpg",
    type: "image",
    category: "coffee",
    title: "Mechanical Pre-Cleaning & Destoning",
    tag: "D Stoner • EL-7 Elevator",
    caption: "High-throughput destoner connected to elevator EL-7 to isolate heavy stones, grit and soil before the beans enter the hulling chamber.",
  },
  {
    src: "/images/curing/processing-hall.jpg",
    type: "image",
    category: "coffee",
    title: "Main Curing & Bagging Hall",
    tag: "Industrial Screening & Dispatch Works",
    caption: "Enclosed vibratory sifter and grading machinery floor with dedicated lot storage for final sampling, lab verification and export bagging.",
  },
  {
    src: "/images/curing/destoner-unit.jpg",
    type: "image",
    category: "coffee",
    title: "Fluidized Bed Destoner Unit",
    tag: "Dual Motor Vibro-Separation",
    caption: "Twin eccentric drive motors powering the negative-pressure separation deck to ensure 100% stone-free processing.",
  },
  {
    src: "/images/curing/huller-unit.jpg",
    type: "image",
    category: "coffee",
    title: "Precision Hulling Unit (Huller-1)",
    tag: "Low-Breakage De-Husking",
    caption: "Close-up of Huller-1 showing mechanical chain drive and feed chute calibrated for uniform de-husking with minimal bean breakage.",
  },
];

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
    desc: "Incoming coffee and pepper pass through mechanical pre-cleaners and destoners to remove dust, sticks, stones and foreign matter, protecting downstream grading accuracy.",
  },
  {
    no: "03",
    title: "Hulling & Polishing",
    icon: Sun,
    tag: "Coffee Curing Works (Est. 2004)",
    desc: "In our dedicated Coffee Curing Works (commissioned 2004), parchment is hulled, polished and surface-cleaned to deliver uniform, defect-controlled green bean.",
  },
  {
    no: "04",
    title: "Size & Gravity Grading",
    icon: Gauge,
    tag: "Pepper & Coffee Grading Works (Est. 2007)",
    desc: "Cured coffee and sun-dried pepper are size-graded on multi-tier oscillating sieves and density-graded by gravity separators, producing clean, bold, uniform export grades.",
  },
  {
    no: "05",
    title: "Lab Verification, Export Bagging & Dispatch",
    icon: PackageCheck,
    desc: "Final lots are lab-verified for moisture, defects and density, then bagged in 50/60kg jute or GrainPro bags, palletised and dispatched to domestic wholesalers and export ports with full traceability.",
  },
];

export function Infrastructure() {
  const [selectedFacility, setSelectedFacility] = useState<null | FacilityItem>(null);
  const [categoryFilter, setCategoryFilter] = useState<"all" | "pepper" | "coffee">("all");
  
  // Spotlight video player controls
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const filteredFacilities =
    categoryFilter === "all"
      ? FACILITIES
      : FACILITIES.filter((f) => f.category === categoryFilter);

  return (
    <section id="infrastructure" className="relative bg-ink-texture py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-amber mb-3">
            Processing Infrastructure &amp; Quality Assurance
          </span>
          <h2 className="font-serif-display text-cream text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            An integrated Virajpet works: from estate gate to export port.
          </h2>
          <p className="mt-4 text-cream/70 text-base lg:text-lg">
            Our curing and grading facility combines dedicated coffee curing
            (est. 2004) and specialized pepper grading (est. 2007) lines with in-house
            lab verification for consistent, export-grade lots every season.
          </p>
        </div>

        {/* Featured Pepper Grading Works Spotlight */}
        <div className="mb-16 rounded-3xl overflow-hidden bg-gradient-to-br from-ink-soft via-ink to-[#13110e] border border-amber/30 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-0 items-stretch">
            {/* Left: Video Player */}
            <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[440px] bg-black flex items-center justify-center overflow-hidden group">
              <video
                ref={videoRef}
                src="/videos/pepper-grading.mp4"
                poster="/images/pepper-grading/pepper-grading-machine.jpg"
                playsInline
                loop
                muted={isMuted}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover max-h-[520px]"
              />

              {/* Gradient overlay when paused */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px] transition-all" />
              )}

              {/* Play / Pause button overlay */}
              <button
                type="button"
                onClick={toggleVideoPlay}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className={cn(
                  "absolute z-10 flex items-center justify-center rounded-full transition-all duration-300 shadow-2xl cursor-pointer",
                  isPlaying
                    ? "opacity-0 group-hover:opacity-100 h-14 w-14 bg-ink/80 text-amber hover:scale-110"
                    : "opacity-100 h-20 w-20 bg-amber text-ink hover:scale-110 ring-4 ring-amber/40"
                )}
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-8 w-8 ml-1" />
                )}
              </button>

              {/* Video control pills */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="pointer-events-auto flex items-center gap-2 rounded-full bg-ink/80 backdrop-blur-md px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-amber border border-amber/30">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  Live Machinery Run
                </span>
                <div className="pointer-events-auto flex items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/80 backdrop-blur-md text-cream/90 hover:text-amber border border-white/20 transition-all cursor-pointer"
                  >
                    {isMuted ? (
                      <VolumeX className="h-4 w-4" />
                    ) : (
                      <Volume2 className="h-4 w-4" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedFacility({
                        src: "/images/pepper-grading/pepper-grading-machine.jpg",
                        videoSrc: "/videos/pepper-grading.mp4",
                        type: "video",
                        category: "pepper",
                        title: "SMS Industry Pepper Grading Line in Operation",
                        tag: "Live Factory Video • Virajpet",
                        caption:
                          "Full-view video demonstration of our SMS Industry pepper grading system at Vision Marketing Works, showing bucket elevator intake and multi-grade vibratory sorting.",
                      })
                    }
                    aria-label="Expand video"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/80 backdrop-blur-md text-cream/90 hover:text-amber border border-white/20 transition-all cursor-pointer"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Technical specifications & highlight */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber/20 text-amber text-xs">
                    <Sparkles className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-amber">
                    Pepper Grading Works (Est. 2007)
                  </span>
                </div>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-cream leading-tight">
                  SMS Industry Multi-Deck Pepper Grader
                </h3>
                <p className="mt-3 text-cream/75 text-sm sm:text-[15px] leading-relaxed">
                  Our Virajpet facility is equipped with a high-capacity{" "}
                  <strong className="text-cream">SMS Industry</strong> precision
                  grader, engineered specifically for mechanical garbling and
                  size separation of Kodagu black pepper.
                </p>

                <div className="mt-6 space-y-3.5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-[13px] text-cream/80">
                      <strong className="text-cream block">Deep Intake Pit &amp; Bucket Elevator</strong>
                      Poured concrete hopper with an enclosed vertical bucket elevator column that lifts bulk pepper smoothly to the top chute without berry abrasion.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-[13px] text-cream/80">
                      <strong className="text-cream block">Multi-Deck Vibratory Sorting</strong>
                      Oscillating calibrated screens separate into bold export grades: TGSEB (4.75 mm+), TGEB (4.50 mm), MG1 (4.25 mm), and bulk.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-[13px] text-cream/80">
                      <strong className="text-cream block">Multi-Spout Direct Discharge</strong>
                      Precision angled collection pipes segregate different grades into dedicated food-grade receiving bins simultaneously.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-amber/20 flex flex-wrap items-center justify-between gap-3">
                <div className="text-[11px] text-cream/60">
                  <span>Capacity: Bulk export &amp; retail</span> •{" "}
                  <span className="text-amber">100% Traceable</span>
                </div>
                <a
                  href="#products"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber hover:text-amber-light transition-colors"
                >
                  <span>View Black Pepper Grades</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="font-serif-display text-cream text-2xl font-bold">
              Facility Gallery &amp; Machinery
            </h3>
            <p className="text-cream/60 text-xs sm:text-sm mt-0.5">
              Click any photo or video to inspect machinery details.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-ink-soft p-1 rounded-xl border border-amber/20">
            <button
              type="button"
              onClick={() => setCategoryFilter("all")}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer",
                categoryFilter === "all"
                  ? "bg-amber text-ink shadow-sm"
                  : "text-cream/70 hover:text-cream"
              )}
            >
              All Works ({FACILITIES.length})
            </button>
            <button
              type="button"
              onClick={() => setCategoryFilter("pepper")}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer",
                categoryFilter === "pepper"
                  ? "bg-amber text-ink shadow-sm"
                  : "text-cream/70 hover:text-cream"
              )}
            >
              Pepper Grading ({FACILITIES.filter((f) => f.category === "pepper").length})
            </button>
            <button
              type="button"
              onClick={() => setCategoryFilter("coffee")}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer",
                categoryFilter === "coffee"
                  ? "bg-amber text-ink shadow-sm"
                  : "text-cream/70 hover:text-cream"
              )}
            >
              Coffee Curing ({FACILITIES.filter((f) => f.category === "coffee").length})
            </button>
          </div>
        </div>

        {/* Facility photo gallery */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {filteredFacilities.map((p, i) => (
            <figure
              key={p.title}
              onClick={() => setSelectedFacility(p)}
              className="group relative rounded-2xl overflow-hidden ring-1 ring-amber/30 shadow-elegant bg-ink-soft cursor-pointer transition-all duration-300 hover:ring-amber hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={p.src}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

                {/* Top badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber text-ink text-[10px] font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-amber bg-ink/80 backdrop-blur-sm px-2 py-0.5 rounded border border-amber/20 truncate">
                      {p.category === "pepper" ? "Pepper Works" : "Coffee Works"}
                    </span>
                  </div>
                  {p.type === "video" ? (
                    <span className="h-6 px-2 rounded-full bg-amber text-ink font-bold text-[10px] flex items-center gap-1">
                      <Play className="h-3 w-3 fill-ink" />
                      <span>Video</span>
                    </span>
                  ) : (
                    <span className="h-6 w-6 shrink-0 rounded-full bg-ink/70 backdrop-blur-sm text-cream/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="h-3 w-3 text-amber" />
                    </span>
                  )}
                </div>

                {/* Center play icon for video items */}
                {p.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber/90 text-ink shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="h-5 w-5 ml-0.5 fill-ink" />
                    </span>
                  </div>
                )}

                {/* Bottom caption */}
                <figcaption className="absolute bottom-0 left-0 right-0 p-3.5">
                  <h4 className="font-serif-display text-cream text-[14px] font-bold leading-tight mb-1 truncate">
                    {p.title}
                  </h4>
                  <p className="text-cream/80 text-[11px] leading-snug line-clamp-2">
                    {p.caption}
                  </p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        {/* Media Lightbox Modal */}
        <Dialog
          open={!!selectedFacility}
          onOpenChange={(open) => !open && setSelectedFacility(null)}
        >
          <DialogContent className="max-w-3xl bg-ink border-amber/40 text-cream p-0 overflow-hidden shadow-2xl">
            {selectedFacility && (
              <div>
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center">
                  {selectedFacility.videoSrc ? (
                    <video
                      src={selectedFacility.videoSrc}
                      controls
                      autoPlay
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <img
                      src={selectedFacility.src}
                      alt={selectedFacility.title}
                      className="h-full w-full object-contain"
                    />
                  )}
                </div>
                <div className="p-5 sm:p-6 bg-ink-soft border-t border-amber/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber bg-amber/10 border border-amber/30 px-2.5 py-0.5 rounded-full">
                      {selectedFacility.tag}
                    </span>
                    <span className="text-[11px] text-cream/50">
                      Vision Marketing Works • Virajpet
                    </span>
                  </div>
                  <DialogTitle className="font-serif-display text-xl sm:text-2xl font-bold text-cream">
                    {selectedFacility.title}
                  </DialogTitle>
                  <DialogDescription className="mt-2 text-cream/80 text-sm leading-relaxed">
                    {selectedFacility.caption}
                  </DialogDescription>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* 5-step workflow */}
        <div className="rounded-2xl bg-cream/5 backdrop-blur-sm border border-cream/10 p-6 lg:p-10">
          <div className="flex items-center gap-3 mb-8">
            <Microscope className="h-6 w-6 text-amber" />
            <h3 className="font-serif-display text-cream text-xl lg:text-2xl font-bold">
              End-to-End Processing Workflow
            </h3>
          </div>

          {/* Desktop horizontal */}
          <div className="hidden lg:grid grid-cols-5 gap-4 relative">
            <div className="absolute top-9 left-[10%] right-[10%] h-0.5 bg-amber/30" />
            {STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.no} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-18 w-18 items-center justify-center rounded-2xl bg-ink border-2 border-amber text-amber shadow-elegant">
                    <Icon className="h-8 w-8" />
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-amber text-ink text-[11px] font-bold">
                      {s.no}
                    </span>
                  </div>
                  <h4 className="mt-4 font-serif-display text-cream text-[15px] font-bold leading-tight">
                    {s.title}
                  </h4>
                  {s.tag && (
                    <span className="mt-1.5 inline-block text-[10px] font-semibold text-amber uppercase tracking-wider">
                      {s.tag}
                    </span>
                  )}
                  <p className="mt-2 text-cream/65 text-[12px] leading-relaxed">
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
                  className="relative pl-14 sm:pl-16 pb-6 border-l-2 border-amber/30 ml-6 sm:ml-8"
                >
                  <span className="absolute -left-[25px] sm:-left-[29px] top-0 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-ink border-2 border-amber text-amber shadow-elegant">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <span className="absolute -left-[29px] sm:-left-[33px] -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-amber text-ink text-[10px] font-bold">
                    {s.no}
                  </span>
                  <h4 className="font-serif-display text-cream text-[15px] sm:text-base font-bold leading-tight">
                    {s.title}
                  </h4>
                  {s.tag && (
                    <span className="block mt-1 text-[10px] font-semibold text-amber uppercase tracking-wider">
                      {s.tag}
                    </span>
                  )}
                  <p className="mt-2 text-cream/70 text-xs sm:text-[13px] leading-relaxed">
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
