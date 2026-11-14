"use client";

import { useState } from "react";
import {
  Coffee,
  Sparkles,
  Droplet,
  Leaf,
  Download,
  MessageSquare,
  CheckCircle2,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, type Product } from "@/lib/products";
import { downloadSpecSheet } from "@/lib/spec-sheet";
import { useUi } from "@/lib/ui-store";
import { cn } from "@/lib/utils";

const ICONS: Record<string, React.ElementType> = {
  Coffee,
  Sparkles,
  Droplet,
  Leaf,
};

const ACCENT: Record<Product["accent"], { ring: string; chip: string; head: string; dot: string }> = {
  forest: {
    ring: "ring-brand/30",
    chip: "bg-ink/8 text-brand border-brand/20",
    head: "text-brand",
    dot: "bg-ink",
  },
  gold: {
    ring: "ring-amber/40",
    chip: "bg-amber/12 text-amber-dark border-amber/30",
    head: "text-amber-dark",
    dot: "bg-amber",
  },
  coffee: {
    ring: "ring-coffee/25",
    chip: "bg-coffee/8 text-ink border-coffee/20",
    head: "text-ink",
    dot: "bg-coffee",
  },
};

export function Products() {
  const [active, setActive] = useState(0);
  const openInquiry = useUi((s) => s.openInquiry);
  const product = products[active];
  const Icon = ICONS[product.icon] ?? Coffee;
  const accent = ACCENT[product.accent];

  return (
    <section id="products" className="relative bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-amber-dark mb-3">
            Core Products &amp; Technical Specifications
          </span>
          <h2 className="font-serif-display text-brand text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Precision-graded Coorg produce — export-ready specification sheets.
          </h2>
          <p className="mt-4 text-ink/80 text-base lg:text-lg">
            Browse grade-wise technical specifications for each product line.
            Download a printable spec sheet or request bulk contract pricing
            directly from our Virajpet works.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {products.map((p, i) => {
            const PIcon = ICONS[p.icon] ?? Coffee;
            const isActive = i === active;
            return (
              <button
                key={p.key}
                onClick={() => setActive(i)}
                className={cn(
                  "flex items-center gap-2 rounded-full px-4 sm:px-5 py-2.5 text-sm font-semibold transition-all border",
                  isActive
                    ? "bg-ink text-cream border-brand shadow-elegant"
                    : "bg-white text-ink border-[#e2dbcd] hover:border-amber/50 hover:text-brand"
                )}
              >
                <PIcon className="h-4 w-4" />
                <span className="hidden sm:inline">{p.name}</span>
                <span className="sm:hidden">{p.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Active product panel */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left: overview */}
          <div className="lg:col-span-5">
            <div
              className={cn(
                "rounded-2xl bg-white border border-[#e2dbcd] shadow-elegant p-6 lg:p-8 h-full ring-1",
                accent.ring
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-amber-dark">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-serif-display text-xl lg:text-2xl font-bold text-brand leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-[13px] text-amber-dark font-medium">
                    {product.tagline}
                  </p>
                </div>
              </div>

              <p className="text-ink/80 text-[14px] leading-relaxed">
                {product.description}
              </p>

              <div className="mt-5 space-y-2">
                {product.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2 text-[13px] text-ink/80">
                    <CheckCircle2 className="h-4 w-4 text-amber-dark shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Varieties & grades */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-ink/80 mb-2">
                    Varieties
                  </div>
                  <ul className="space-y-1.5">
                    {product.varieties.map((v) => (
                      <li key={v} className="text-[13px] text-ink/80 flex items-start gap-1.5">
                        <span className={cn("mt-1.5 h-1.5 w-1.5 rounded-full shrink-0", accent.dot)} />
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-ink/80 mb-2">
                    Grades
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.grades.map((g) => (
                      <span
                        key={g}
                        className={cn(
                          "text-[11px] font-medium px-2 py-1 rounded-md border",
                          accent.chip
                        )}
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Packaging */}
              <div className="mt-6 pt-5 border-t border-[#ece5d6]">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-ink/80 mb-2">
                  <Package className="h-3.5 w-3.5" /> Standard Packaging
                </div>
                <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                  {product.packaging.map((p) => (
                    <li key={p} className="text-[12px] text-ink/80 flex items-start gap-1.5">
                      <span className="text-amber-dark mt-0.5">›</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="mt-7 flex flex-col gap-3">
                <Button
                  onClick={() => downloadSpecSheet(product.key)}
                  className="w-full bg-ink text-cream hover:bg-ink-soft font-semibold"
                >
                  <Download className="mr-2 h-4 w-4 shrink-0" />
                  Download Spec Sheet (PDF)
                </Button>
                <Button
                  onClick={() => openInquiry(product.key, product.name)}
                  variant="outline"
                  className="w-full border-amber text-amber-dark hover:bg-amber hover:text-ink font-semibold"
                >
                  <MessageSquare className="mr-2 h-4 w-4 shrink-0" />
                  Inquire for Bulk Pricing
                </Button>
              </div>
            </div>
          </div>

          {/* Right: spec tables */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-[#e2dbcd] shadow-elegant overflow-hidden">
              <div className="bg-ink text-cream px-6 py-4 flex items-center justify-between">
                <h4 className="font-serif-display text-lg font-bold">
                  Grade-wise Technical Specifications
                </h4>
                <span className="text-[11px] font-medium text-amber uppercase tracking-wider">
                  VM-SPEC / {product.shortName}
                </span>
              </div>

              <div className="p-5 lg:p-6 space-y-6">
                {/* Key spec rows */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-ink/80 mb-3">
                    Core Specifications
                  </div>
                  <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {product.specRows.map((r) => (
                      <div
                        key={r.label}
                        className="flex flex-col sm:flex-row sm:justify-between sm:gap-4 border-b border-dashed border-[#ece5d6] pb-2"
                      >
                        <dt className="text-[12px] font-medium text-ink/80 shrink-0">
                          {r.label}
                        </dt>
                        <dd className="text-[13px] font-semibold text-ink sm:text-right">
                          {r.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Grade tables */}
                {product.specTables.map((t, ti) => (
                  <div key={ti}>
                    {t.caption && (
                      <div className="text-[12px] font-semibold italic text-ink mb-2">
                        {t.caption}
                      </div>
                    )}
                    <div className="overflow-x-auto -mx-2 px-2">
                      <table className="w-full text-[12px] border-collapse min-w-[520px]">
                        <thead>
                          <tr>
                            {t.headers.map((h) => (
                              <th
                                key={h}
                                className="bg-ink text-cream font-semibold px-3 py-2.5 text-left border border-brand-dark first:rounded-tl-md last:rounded-tr-md"
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {t.rows.map((row, ri) => (
                            <tr
                              key={ri}
                              className={ri % 2 === 0 ? "bg-cream/60" : "bg-white"}
                            >
                              {row.map((cell, ci) => (
                                <td
                                  key={ci}
                                  className={cn(
                                    "px-3 py-2.5 border border-[#ece5d6] align-top text-ink/80",
                                    ci === 0 && "font-semibold text-ink"
                                  )}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-3 text-center text-[11px] text-ink/80">
              Specifications are indicative for export-grade lots and may vary by
              crop season. Confirmed specs issued per contract / lot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
