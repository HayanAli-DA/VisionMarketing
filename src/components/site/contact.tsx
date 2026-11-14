"use client";

import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  User,
  Building,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "919000000000"; // placeholder — replace with Vision Marketing WhatsApp Business number
const WHATSAPP_MSG = encodeURIComponent(
  "Hello Vision Marketing, I'd like to enquire about Coorg coffee / pepper / honey bulk pricing and export."
);
const EMAIL = "sales@visionmarketing.in";

export function Contact() {
  return (
    <section id="contact" className="relative bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-gold-dark mb-3">
            Contact &amp; Location
          </span>
          <h2 className="font-serif-display text-forest text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Reach our Virajpet works — direct, traceable, responsive.
          </h2>
          <p className="mt-4 text-coffee/75 text-base lg:text-lg">
            Visit our curing and grading facility in Coorg, or message us
            directly on WhatsApp and email for quotes, samples and export
            documentation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Contact details */}
          <div className="rounded-2xl bg-forest text-ivory p-6 lg:p-8 shadow-elegant relative overflow-hidden">
            <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-1">
                { }
                <img
                  src="/images/vision-logo-1.png"
                  alt="Vision Marketing logo"
                  className="h-12 w-12 object-contain rounded bg-white/90 p-0.5"
                />
                <div>
                  <h3 className="font-serif-display text-xl font-bold text-ivory leading-tight">
                    Vision Marketing
                  </h3>
                  <p className="text-[12px] text-gold-light uppercase tracking-wider">
                    Buyer &amp; Exporter of Coorg Products
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-forest-light border border-gold/25 text-gold-light">
                    <User className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-ivory/50 font-semibold">
                      Proprietor
                    </div>
                    <div className="text-ivory text-[14px] font-medium">
                      Duddiyanda Fakrudhin Ashrafali
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-forest-light border border-gold/25 text-gold-light">
                    <Building className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-ivory/50 font-semibold">
                      Registered Address
                    </div>
                    <div className="text-ivory/90 text-[13px] leading-relaxed">
                      Near KSRTC Bus Stand, Chockcity, Bilugunda, Hattur Road,
                      Virajpet, Coorg (Kodagu), Karnataka – 571218, India.
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-forest-light border border-gold/25 text-gold-light">
                    <FileText className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-ivory/50 font-semibold">
                      GSTIN
                    </div>
                    <div className="text-ivory text-[13px] font-mono tracking-wide">
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
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-gold/40 text-gold-light hover:bg-gold hover:text-coffee font-semibold bg-transparent"
                >
                  <a href={`mailto:${EMAIL}?subject=Bulk%20enquiry%20-%20Vision%20Marketing`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Email Us
                  </a>
                </Button>
              </div>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[12px] text-ivory/60">
                <a href={`mailto:${EMAIL}`} className="hover:text-gold-light flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5" /> {EMAIL}
                </a>
                <span className="flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5" /> +91 90000 00000
                </span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-[#e2dbcd] shadow-elegant min-h-[380px] lg:min-h-[460px] relative bg-forest-dark">
            <iframe
              title="Vision Marketing location — Virajpet, Kodagu, Karnataka"
              src="https://www.google.com/maps?q=Virajpet,Kodagu,Karnataka,571218&output=embed"
              className="h-full w-full"
              style={{ minHeight: 380, border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="absolute top-4 left-4 bg-ivory/95 backdrop-blur-sm rounded-lg shadow-elegant px-3 py-2 border border-[#e2dbcd] pointer-events-none">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold-dark" />
                <span className="text-[12px] font-semibold text-forest">
                  Virajpet, Kodagu (Coorg)
                </span>
              </div>
              <div className="text-[10px] text-coffee/60 mt-0.5">
                Karnataka 571218, India
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Virajpet,Kodagu,Karnataka,571218"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-lg bg-forest text-ivory px-3 py-2 text-[12px] font-semibold shadow-elegant hover:bg-forest-dark"
            >
              Open in Google Maps <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
