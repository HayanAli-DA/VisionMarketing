"use client";

import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  User,
  Building,
  Factory,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_1 = "918762757287";
const PHONE_1_DISPLAY = "+91 87627 57287";
const PHONE_2 = "919448108287";
const PHONE_2_DISPLAY = "+91 94481 08287";
const WHATSAPP_MSG = encodeURIComponent(
  "Hello Vision Marketing, I'd like to enquire about Coorg coffee / pepper / honey bulk pricing and export."
);
const EMAIL = "Visionmarketting5@gmail.com";

export function Contact() {
  return (
    <section id="contact" className="relative bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-amber-dark mb-3">
            Contact &amp; Location
          </span>
          <h2 className="font-serif-display text-brand text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Reach our Virajpet works: direct, traceable, responsive.
          </h2>
          <p className="mt-4 text-ink/80 text-base lg:text-lg">
            Visit our curing and grading facility in Coorg, or message us
            directly on WhatsApp and email for quotes, samples and export
            documentation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Contact details */}
          <div className="rounded-2xl bg-ink text-cream p-5 sm:p-6 lg:p-8 shadow-elegant relative overflow-hidden min-w-0">
            <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-amber/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-1">
                { }
                <img
                  src="/images/vision-logo-1.png"
                  alt="Vision Marketing logo"
                  className="h-12 w-12 object-contain rounded bg-white/90 p-0.5"
                />
                <div>
                  <h3 className="font-serif-display text-xl font-bold text-cream leading-tight">
                    Vision Marketing
                  </h3>
                  <p className="text-[12px] text-amber uppercase tracking-wider">
                    Buyer &amp; Exporter of Coorg Products
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink-muted border border-amber/25 text-amber">
                    <User className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-cream/50 font-semibold">
                      Proprietor
                    </div>
                    <div className="text-cream text-[14px] font-medium">
                      D.F. Ashraf Ali
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink-muted border border-amber/25 text-amber">
                    <Building className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-cream/50 font-semibold">
                      Office Address
                    </div>
                    <div className="text-cream/90 text-[13px] leading-relaxed">
                      <span className="font-semibold text-cream">Vision Coffee</span>
                      <br />
                      Opposite to KSRTC Bus Stand, Next to Athreya Hospital,
                      <br />
                      Virajpet 571218
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink-muted border border-amber/25 text-amber">
                    <Factory className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-cream/50 font-semibold">
                      Factory Address
                    </div>
                    <div className="text-cream/90 text-[13px] leading-relaxed">
                      <span className="font-semibold text-cream">Vision Coffee Curing Works</span>
                      <br />
                      Nalvathoklu Village and Post, Chockandalli,
                      <br />
                      Virajpet 571218
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink-muted border border-amber/25 text-amber">
                    <FileText className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-cream/50 font-semibold">
                      GSTIN
                    </div>
                    <div className="text-cream text-[13px] font-mono tracking-wide">
                      29AFEPA6566L1Z3
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-7 grid sm:grid-cols-2 gap-3">
                <Button
                  asChild
                  className="bg-[#25D366] text-white hover:bg-[#1ebe5a] font-semibold"
                >
                  <a
                    href={`https://wa.me/${PHONE_1}?text=${WHATSAPP_MSG}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp ({PHONE_1_DISPLAY})
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-[#25D366] text-white hover:bg-[#1ebe5a] font-semibold"
                >
                  <a
                    href={`https://wa.me/${PHONE_2}?text=${WHATSAPP_MSG}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp ({PHONE_2_DISPLAY})
                  </a>
                </Button>
              </div>

              <div className="mt-3">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-red-500/40 text-cream hover:bg-[#EA4335] hover:text-white hover:border-[#EA4335] font-semibold bg-transparent transition-all"
                >
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=Bulk%20enquiry%20-%20Vision%20Marketing`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="mr-2 h-4 w-4 text-[#EA4335]" />
                    Email via Gmail ({EMAIL})
                  </a>
                </Button>
              </div>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-cream/70">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=Bulk%20enquiry%20-%20Vision%20Marketing`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-amber" /> {EMAIL}
                </a>
                <a href={`tel:+${PHONE_1}`} className="hover:text-amber flex items-center gap-1.5 transition-colors">
                  <Phone className="h-3.5 w-3.5 text-amber" /> {PHONE_1_DISPLAY}
                </a>
                <a href={`tel:+${PHONE_2}`} className="hover:text-amber flex items-center gap-1.5 transition-colors">
                  <Phone className="h-3.5 w-3.5 text-amber" /> {PHONE_2_DISPLAY}
                </a>
              </div>
            </div>
          </div>

          {/* Right column: Office Photo & Map */}
          <div className="flex flex-col gap-6 min-w-0">
            {/* Office photo */}
            <div className="rounded-2xl overflow-hidden border border-[#e2dbcd] shadow-elegant relative bg-ink-soft group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                <img
                  src="/images/vision-coffee-office.jpg"
                  alt="Vision Coffee Office in Virajpet"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-cream/95 backdrop-blur-sm text-ink px-3 py-1 text-xs font-bold shadow-md border border-[#e2dbcd]">
                  <Building className="h-3.5 w-3.5 text-brand" />
                  <span>Vision Coffee Office</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-amber mb-0.5">
                    Virajpet • Office
                  </div>
                  <h4 className="text-white font-serif-display text-lg sm:text-xl font-bold leading-tight">
                    Opposite to KSRTC Bus Stand, Next to Athreya Hospital
                  </h4>
                  <p className="text-cream/80 text-[11px] sm:text-xs mt-0.5">
                    Virajpet 571218, Kodagu, Karnataka
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-[#e2dbcd] shadow-elegant min-h-[260px] sm:min-h-[290px] relative bg-ink-soft flex-1">
              <iframe
                title="Vision Marketing location: Virajpet, Kodagu, Karnataka"
                src="https://www.google.com/maps?q=Virajpet,Kodagu,Karnataka,571218&output=embed"
                className="h-full w-full min-h-[260px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="absolute top-4 left-4 bg-cream/95 backdrop-blur-sm rounded-lg shadow-elegant px-3 py-2 border border-[#e2dbcd] pointer-events-none">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-amber-dark" />
                  <span className="text-[12px] font-semibold text-brand">
                    Virajpet, Kodagu (Coorg)
                  </span>
                </div>
                <div className="text-[10px] text-ink/80 mt-0.5">
                  Karnataka 571218, India
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Virajpet,Kodagu,Karnataka,571218"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 inline-flex items-center gap-1.5 rounded-lg bg-ink/95 backdrop-blur-sm text-cream px-3 py-2 text-[11.5px] sm:text-[12px] font-semibold shadow-elegant hover:bg-ink-soft transition-colors border border-amber/30"
              >
                Open in Google Maps <ArrowUpRight className="h-3.5 w-3.5 text-amber" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
