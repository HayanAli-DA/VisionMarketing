import Link from "next/link";
import { ArrowUp, MapPin, Mail, MessageCircle } from "lucide-react";
import { products } from "@/lib/products";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About & Heritage", href: "#about" },
  { label: "Products & Specs", href: "#products" },
  { label: "Processing & Infrastructure", href: "#infrastructure" },
  { label: "Buyer Portal", href: "#buyer-portal" },
  { label: "Contact Us", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-ink-soft text-cream mt-auto">
      <div className="border-t border-amber/30 bg-ink">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-center gap-2 text-center">
          <span className="text-[11px] sm:text-xs font-medium text-cream/80">
            25+ years of Coorg commodity trading • Coffee Curing Works since 2004 • Pepper Grading Works since 2007
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              { }
              <img
                src="/images/vision-logo-1.png"
                alt="Vision Marketing logo"
                className="h-12 w-12 object-contain rounded bg-white/90 p-0.5"
              />
              <div>
                <div className="font-serif-display text-lg font-bold text-cream leading-tight">
                  Vision Marketing
                </div>
                <div className="text-[10px] text-amber uppercase tracking-wider">
                  Buyer &amp; Exporter of Coorg Products
                </div>
              </div>
            </div>
            <p className="mt-4 text-cream/65 text-[13px] leading-relaxed">
              Precision-graded Robusta coffee, bold Tellicherry black pepper,
              pure Coorg honey and plantation produce — direct from Virajpet,
              Kodagu since 2001.
            </p>
            <div className="mt-4 flex items-start gap-2 text-[12px] text-cream/60">
              <MapPin className="h-4 w-4 text-amber shrink-0 mt-0.5" />
              <span>Near KSRTC Bus Stand, Chockcity, Bilugunda, Hattur Road, Virajpet, Coorg (Kodagu), Karnataka – 571218, India.</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif-display text-sm font-bold text-amber uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-cream/70 text-[13px] hover:text-amber transition-colors"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif-display text-sm font-bold text-amber uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p.key}>
                  <Link
                    href="#products"
                    className="text-cream/70 text-[13px] hover:text-amber transition-colors"
                  >
                    {p.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif-display text-sm font-bold text-amber uppercase tracking-wider mb-4">
              Trade Desk
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:sales@visionmarketing.in?subject=Bulk%20enquiry%20-%20Vision%20Marketing"
                className="flex items-center gap-2 text-cream/75 text-[13px] hover:text-amber transition-colors"
              >
                <Mail className="h-4 w-4 text-amber" />
                sales@visionmarketing.in
              </a>
              <a
                href="https://wa.me/919000000000?text=Hello%20Vision%20Marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/75 text-[13px] hover:text-amber transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-amber" />
                WhatsApp Business
              </a>
              <div className="rounded-lg border border-cream/15 bg-ink-muted/40 p-3 mt-2">
                <div className="text-[10px] uppercase tracking-wider text-cream/50 font-semibold">
                  GSTIN
                </div>
                <div className="text-cream text-[12px] font-mono mt-0.5">
                  29AFEPA6566L1Z3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-cream/55 text-center sm:text-left">
            © {new Date().getFullYear()} Vision Marketing. Proprietor: Duddiyanda
            Fakrudhin Ashrafali. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-cream/45">
              Virajpet • Kodagu • Karnataka • India
            </span>
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-amber text-ink hover:bg-amber-dark transition-colors"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
