"use client";

import { useState } from "react";
import {
  UserPlus,
  Building2,
  Globe2,
  Mail,
  Phone,
  Check,
  ChevronRight,
  ChevronLeft,
  FileText,
  TrendingUp,
  Package,
  ShieldCheck,
  Loader2,
  MessageCircle,
  ExternalLink,
  Copy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { products, businessTypes } from "@/lib/products";
import { cn } from "@/lib/utils";

export type DispatchChannel = "whatsapp" | "email";
export type WhatsAppChoice = "8762757287" | "9448108287";

type FormData = {
  fullName: string;
  companyName: string;
  countryCity: string;
  businessType: string;
  taxId: string;
  products: string[];
  estimatedVolume: string;
  email: string;
  phone: string;
  message: string;
  dispatchChannel: DispatchChannel;
  whatsappRecipient: WhatsAppChoice;
};

const EMPTY: FormData = {
  fullName: "",
  companyName: "",
  countryCity: "",
  businessType: "",
  taxId: "",
  products: [],
  estimatedVolume: "",
  email: "",
  phone: "",
  message: "",
  dispatchChannel: "whatsapp",
  whatsappRecipient: "8762757287",
};

const STEPS = [
  { id: 1, title: "Identity", icon: UserPlus, desc: "Tell us who you are" },
  { id: 2, title: "Business", icon: Building2, desc: "Your trade profile" },
  { id: 3, title: "Contact", icon: Mail, desc: "How we reach you" },
];

const BENEFITS = [
  { icon: FileText, title: "Full spec catalogs & lab certificates", desc: "Grade-wise technical sheets and quality documentation on request." },
  { icon: TrendingUp, title: "Weekly & seasonal crop reports", desc: "Market price updates and crop outlook from the Coorg belt." },
  { icon: Package, title: "Sample requests & bulk quotations", desc: "Request product samples and receive bulk contract pricing." },
  { icon: ShieldCheck, title: "Verified trade membership", desc: "Onboard as a registered trade partner with priority dispatch." },
];

export const WHATSAPP_NUMBER_1 = "918762757287";
export const WHATSAPP_DISPLAY_1 = "+91 87627 57287";
export const WHATSAPP_NUMBER_2 = "919448108287";
export const WHATSAPP_DISPLAY_2 = "+91 94481 08287";
export const TRADE_EMAIL = "Visionmarketting5@gmail.com";

export function buildWhatsAppRegistrationUrl(data: FormData, phone: string = WHATSAPP_NUMBER_1): string {
  const productLabels = data.products
    .map((k) => products.find((p) => p.key === k)?.name || k)
    .join(", ");

  const lines = [
    "📋 *NEW BUYER REGISTRATION — VISION MARKETING*",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━",
    `👤 *Full Name:* ${data.fullName}`,
    `🏢 *Company:* ${data.companyName}`,
    `📍 *Location:* ${data.countryCity}`,
    `🏷️ *Business Type:* ${data.businessType}`,
    data.taxId ? `📄 *GSTIN / Tax ID:* ${data.taxId}` : null,
    productLabels ? `📦 *Interested Products:* ${productLabels}` : "📦 *Interested Products:* General / All lines",
    data.estimatedVolume ? `📊 *Estimated Volume:* ${data.estimatedVolume}` : null,
    `📧 *Email:* ${data.email}`,
    `📞 *Phone / WhatsApp:* ${data.phone}`,
    data.message ? `💬 *Trade Requirements:* ${data.message}` : null,
    "━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "Source: Vision Marketing Trade Portal (Virajpet, Kodagu)",
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${phone}?text=${text}`;
}

export function buildGmailRegistrationUrl(data: FormData): string {
  const productLabels = data.products
    .map((k) => products.find((p) => p.key === k)?.name || k)
    .join(", ");

  const subject = encodeURIComponent(
    `New Trade Buyer Registration - ${data.companyName || data.fullName}`
  );

  const body = encodeURIComponent(
    [
      "NEW BUYER REGISTRATION — VISION MARKETING",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━",
      `Full Name: ${data.fullName}`,
      `Company Name: ${data.companyName}`,
      `Location / City: ${data.countryCity}`,
      `Business Type: ${data.businessType}`,
      data.taxId ? `GSTIN / Tax ID: ${data.taxId}` : "GSTIN / Tax ID: N/A",
      `Interested Products: ${productLabels || "General / All lines"}`,
      data.estimatedVolume ? `Estimated Annual Volume: ${data.estimatedVolume}` : "Estimated Volume: Not specified",
      `Email Address: ${data.email}`,
      `Phone / WhatsApp: ${data.phone}`,
      data.message ? `Trade Requirements: ${data.message}` : "Trade Requirements: None specified",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "Submitted via Vision Marketing Trade Portal (Virajpet, Kodagu)",
    ].join("\n")
  );

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${TRADE_EMAIL}&su=${subject}&body=${body}`;
}

export function buildEmailRegistrationUrl(data: FormData): string {
  const productLabels = data.products
    .map((k) => products.find((p) => p.key === k)?.name || k)
    .join(", ");

  const subject = encodeURIComponent(
    `New Trade Buyer Registration - ${data.companyName || data.fullName}`
  );

  const body = encodeURIComponent(
    [
      "NEW BUYER REGISTRATION — VISION MARKETING",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━",
      `Full Name: ${data.fullName}`,
      `Company Name: ${data.companyName}`,
      `Location / City: ${data.countryCity}`,
      `Business Type: ${data.businessType}`,
      data.taxId ? `GSTIN / Tax ID: ${data.taxId}` : "GSTIN / Tax ID: N/A",
      `Interested Products: ${productLabels || "General / All lines"}`,
      data.estimatedVolume ? `Estimated Annual Volume: ${data.estimatedVolume}` : "Estimated Volume: Not specified",
      `Email Address: ${data.email}`,
      `Phone / WhatsApp: ${data.phone}`,
      data.message ? `Trade Requirements: ${data.message}` : "Trade Requirements: None specified",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "Submitted via Vision Marketing Trade Portal (Virajpet, Kodagu)",
    ].join("\n")
  );

  return `mailto:${TRADE_EMAIL}?subject=${subject}&body=${body}`;
}

export function formatRegistrationSummaryText(data: FormData): string {
  const productLabels = data.products
    .map((k) => products.find((p) => p.key === k)?.name || k)
    .join(", ");

  return [
    `Name: ${data.fullName}`,
    `Company: ${data.companyName}`,
    `Location: ${data.countryCity}`,
    `Business Type: ${data.businessType}`,
    data.taxId ? `GSTIN/Tax ID: ${data.taxId}` : null,
    `Products: ${productLabels || "All lines"}`,
    data.estimatedVolume ? `Estimated Volume: ${data.estimatedVolume}` : null,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    data.message ? `Requirements: ${data.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

export function BuyerPortal() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const { toast } = useToast();

  const set = (k: keyof FormData, v: string | string[]) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const toggleProduct = (key: string) => {
    setData((d) => ({
      ...d,
      products: d.products.includes(key)
        ? d.products.filter((p) => p !== key)
        : [...d.products, key],
    }));
    setErrors((e) => ({ ...e, products: "" }));
  };

  const validateStep = (s: number): boolean => {
    const e: Record<string, string> = {};
    if (s === 1) {
      if (!data.fullName.trim()) e.fullName = "Full name is required";
      if (!data.companyName.trim()) e.companyName = "Company name is required";
      if (!data.countryCity.trim()) e.countryCity = "Country / city is required";
    }
    if (s === 2) {
      if (!data.businessType) e.businessType = "Select a business type";
      if (data.products.length === 0)
        e.products = "Select at least one product of interest";
    }
    if (s === 3) {
      if (!data.email.trim()) e.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        e.email = "Enter a valid email address";
      if (!data.phone.trim()) e.phone = "Phone / WhatsApp is required";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (validateStep(step)) setStep((s) => Math.min(3, s + 1));
  };
  const back = () => setStep((s) => Math.max(1, s - 1));

  const [copied, setCopied] = useState(false);

  const submit = async () => {
    if (!validateStep(3)) return;
    setSubmitting(true);

    // Save to API in background (non-blocking so serverless/read-only DB never blocks the user)
    try {
      await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (apiErr) {
      console.warn("Background registration sync warning:", apiErr);
    }

    try {
      // Automatically dispatch based on chosen channel
      if (data.dispatchChannel === "whatsapp") {
        const phone = data.whatsappRecipient === "9448108287" ? WHATSAPP_NUMBER_2 : WHATSAPP_NUMBER_1;
        const phoneDisplay = data.whatsappRecipient === "9448108287" ? WHATSAPP_DISPLAY_2 : WHATSAPP_DISPLAY_1;
        const waUrl = buildWhatsAppRegistrationUrl(data, phone);
        
        try {
          const win = window.open(waUrl, "_blank", "noopener,noreferrer");
          if (!win || win.closed || typeof win.closed === "undefined") {
            window.location.href = waUrl;
          }
        } catch {
          window.location.href = waUrl;
        }

        setDone(true);
        toast({
          title: "Registration ready & WhatsApp dispatched",
          description: `Dispatched to Trade Desk (${phoneDisplay}).`,
        });
      } else {
        const gmailUrl = buildGmailRegistrationUrl(data);
        try {
          const win = window.open(gmailUrl, "_blank", "noopener,noreferrer");
          if (!win || win.closed || typeof win.closed === "undefined") {
            window.location.href = gmailUrl;
          }
        } catch {
          window.location.href = buildEmailRegistrationUrl(data);
        }

        setDone(true);
        toast({
          title: "Registration ready & Gmail prepared",
          description: `Complete details formatted in Gmail for ${TRADE_EMAIL}.`,
        });
      }
    } catch {
      setDone(true);
      toast({
        title: "Registration prepared",
        description: `Please click the button below to deliver your details.`,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const copyDetails = async () => {
    try {
      await navigator.clipboard.writeText(formatRegistrationSummaryText(data));
      setCopied(true);
      toast({ title: "Copied to clipboard", description: "Registration summary copied." });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // ignore
    }
  };

  const reset = () => {
    setData(EMPTY);
    setStep(1);
    setErrors({});
    setDone(false);
    setCopied(false);
  };

  return (
    <section id="buyer-portal" className="relative bg-linen py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-amber-dark mb-3">
            B2B Buyer Registration &amp; Trade Membership
          </span>
          <h2 className="font-serif-display text-brand text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Become a registered trade partner.
          </h2>
          <p className="mt-4 text-ink/80 text-base lg:text-lg">
            Onboard as a domestic or international buyer to receive full
            technical catalogs, lab certificates, weekly crop reports and bulk
            contract quotations, direct from our Virajpet works.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Benefits panel */}
          <div className="lg:col-span-4 min-w-0 order-2 lg:order-1">
            <div className="rounded-2xl bg-ink text-cream p-5 sm:p-6 lg:p-8 h-full shadow-elegant relative overflow-hidden">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-amber/10 blur-2xl" />
              <h3 className="font-serif-display text-xl font-bold relative">
                What you get as a registered buyer
              </h3>
              <ul className="mt-6 space-y-5 relative">
                {BENEFITS.map((b) => {
                  const Icon = b.icon;
                  return (
                    <li key={b.title} className="flex gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-muted border border-amber/30 text-amber">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="font-semibold text-cream text-[14px]">{b.title}</div>
                        <div className="text-cream/65 text-[12px] leading-relaxed mt-0.5">
                          {b.desc}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-7 pt-5 border-t border-cream/15 relative">
                <div className="flex items-center gap-2 text-[12px] text-cream/70">
                  <ShieldCheck className="h-4 w-4 text-amber" />
                  Your data is used only for trade onboarding. GSTIN 29AFEPA6566L1Z3.
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8 min-w-0 order-1 lg:order-2">
            <div className="rounded-2xl bg-white border border-[#e2dbcd] shadow-elegant p-4 sm:p-6 lg:p-8">
              {done ? (
                <div className="py-4">
                  {/* Success Header */}
                  <div className="text-center mb-6">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mb-4 ring-8 ring-emerald-50">
                      <Check className="h-8 w-8 stroke-[2.5]" />
                    </div>
                    <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-brand">
                      Registration Received &amp; Saved
                    </h3>
                    <p className="mt-2 text-ink/80 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
                      Thank you, <strong className="text-ink">{data.fullName}</strong>. Your trade membership application has been saved to our database.
                    </p>
                  </div>

                  {/* Primary WhatsApp Dispatch Banner */}
                  <div className="rounded-2xl bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfdf5] border-2 border-emerald-500/40 p-5 sm:p-6 mb-6 shadow-sm">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                      <div className="flex items-start sm:items-center gap-3.5">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-md">
                          <MessageCircle className="h-6 w-6 fill-white" />
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                              Direct WhatsApp Dispatch
                            </span>
                            <span className="text-[11px] text-emerald-600 font-medium">
                              Instant Delivery
                            </span>
                          </div>
                          <div className="text-[14px] sm:text-[15px] font-bold text-ink mt-0.5">
                            Trade Desks: {WHATSAPP_DISPLAY_1} • {WHATSAPP_DISPLAY_2}
                          </div>
                          <p className="text-xs text-ink/75 mt-0.5">
                            Click below to deliver your complete trade registration details directly on WhatsApp:
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2.5 w-full lg:w-auto">
                        <a
                          href={buildWhatsAppRegistrationUrl(data, WHATSAPP_NUMBER_1)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm px-4 py-3 shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0 cursor-pointer"
                        >
                          <MessageCircle className="h-4 w-4 fill-white" />
                          <span>WhatsApp: {WHATSAPP_DISPLAY_1}</span>
                          <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                        </a>
                        <a
                          href={buildWhatsAppRegistrationUrl(data, WHATSAPP_NUMBER_2)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm px-4 py-3 shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0 cursor-pointer"
                        >
                          <MessageCircle className="h-4 w-4 fill-white" />
                          <span>WhatsApp: {WHATSAPP_DISPLAY_2}</span>
                          <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                        </a>
                        <a
                          href={buildGmailRegistrationUrl(data)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-xl bg-[#EA4335] hover:bg-[#d93025] text-white font-bold text-xs sm:text-sm px-4 py-3 shadow-md shadow-red-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0 cursor-pointer"
                        >
                          <Mail className="h-4 w-4 fill-white text-white" />
                          <span>Send via Gmail</span>
                          <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Complete details summary card */}
                  <div className="rounded-xl border border-[#e2dbcd] bg-[#fbf9f5] p-4 sm:p-5 mb-6 text-left">
                    <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-[#e2dbcd]">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-amber-dark" />
                        <span className="text-xs font-bold uppercase tracking-wider text-brand">
                          Complete Registration Details
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={copyDetails}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand hover:text-amber-dark transition-colors cursor-pointer"
                      >
                        <Copy className="h-3 w-3" />
                        <span>{copied ? "Copied!" : "Copy Details"}</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs">
                      <div>
                        <span className="text-ink/60">Full Name:</span>{" "}
                        <strong className="text-ink font-semibold">{data.fullName}</strong>
                      </div>
                      <div>
                        <span className="text-ink/60">Company:</span>{" "}
                        <strong className="text-ink font-semibold">{data.companyName}</strong>
                      </div>
                      <div>
                        <span className="text-ink/60">Location:</span>{" "}
                        <strong className="text-ink font-semibold">{data.countryCity}</strong>
                      </div>
                      <div>
                        <span className="text-ink/60">Business Type:</span>{" "}
                        <strong className="text-ink font-semibold">{data.businessType}</strong>
                      </div>
                      {data.taxId && (
                        <div>
                          <span className="text-ink/60">GSTIN / Tax ID:</span>{" "}
                          <strong className="text-ink font-semibold font-mono">{data.taxId}</strong>
                        </div>
                      )}
                      <div>
                        <span className="text-ink/60">Phone / WhatsApp:</span>{" "}
                        <strong className="text-ink font-semibold">{data.phone}</strong>
                      </div>
                      <div>
                        <span className="text-ink/60">Email:</span>{" "}
                        <strong className="text-ink font-semibold">{data.email}</strong>
                      </div>
                      {data.estimatedVolume && (
                        <div>
                          <span className="text-ink/60">Est. Volume:</span>{" "}
                          <strong className="text-ink font-semibold">{data.estimatedVolume}</strong>
                        </div>
                      )}
                      {data.products.length > 0 && (
                        <div className="sm:col-span-2">
                          <span className="text-ink/60">Products:</span>{" "}
                          <strong className="text-ink font-semibold">
                            {data.products
                              .map((k) => products.find((p) => p.key === k)?.name || k)
                              .join(", ")}
                          </strong>
                        </div>
                      )}
                      {data.message && (
                        <div className="sm:col-span-2 pt-1 border-t border-[#e2dbcd]/60">
                          <span className="text-ink/60">Requirements:</span>{" "}
                          <span className="text-ink italic">"{data.message}"</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <div className="inline-flex items-center gap-2 text-xs text-ink/70">
                      <Mail className="h-3.5 w-3.5 text-amber-dark" />
                      <span>Confirmation reference logged for {data.email}</span>
                    </div>

                    <Button
                      onClick={reset}
                      variant="outline"
                      className="border-brand/30 text-brand hover:bg-ink hover:text-cream text-xs"
                    >
                      Register another buyer
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  {/* Stepper */}
                  <div className="flex items-center justify-between mb-8 max-w-lg mx-auto w-full">
                    {STEPS.map((s, i) => {
                      const Icon = s.icon;
                      const isActive = step === s.id;
                      const isComplete = step > s.id;
                      return (
                        <div key={s.id} className="flex items-center flex-1 last:flex-initial">
                          <button
                            type="button"
                            onClick={() => {
                              if (s.id < step) setStep(s.id);
                            }}
                            className="flex items-center gap-2 group shrink-0 cursor-pointer disabled:cursor-default"
                            disabled={s.id > step}
                          >
                            <span
                              className={cn(
                                "flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 transition-all",
                                isActive
                                  ? "bg-ink border-brand text-amber-dark scale-105 shadow-sm"
                                  : isComplete
                                  ? "bg-amber border-amber text-ink"
                                  : "bg-white border-[#d6cdbb] text-ink/80"
                              )}
                            >
                              {isComplete ? <Check className="h-4 w-4 sm:h-5 sm:w-5" /> : <Icon className="h-4 w-4 sm:h-5 sm:w-5" />}
                            </span>
                            <div className="hidden sm:block text-left">
                              <div
                                className={cn(
                                  "text-[11px] font-bold uppercase tracking-wider",
                                  isActive ? "text-brand" : isComplete ? "text-amber-dark" : "text-ink/80"
                                )}
                              >
                                Step {s.id}
                              </div>
                              <div
                                className={cn(
                                  "text-[13px] font-semibold",
                                  isActive ? "text-brand" : isComplete ? "text-ink/80" : "text-ink/80"
                                )}
                              >
                                {s.title}
                              </div>
                            </div>
                          </button>
                          {i < STEPS.length - 1 && (
                            <div
                              className={cn(
                                "flex-1 h-0.5 mx-2 sm:mx-3 rounded transition-colors min-w-[16px]",
                                step > s.id ? "bg-amber" : "bg-[#e2dbcd]"
                              )}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Step 1 */}
                  {step === 1 && (
                    <div className="space-y-5 animate-in fade-in duration-300">
                      <div>
                        <h3 className="font-serif-display text-xl font-bold text-brand">
                          Trade partner identity
                        </h3>
                        <p className="text-ink/80 text-[13px] mt-1">
                          Tell us who you are and where you operate from.
                        </p>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            value={data.fullName}
                            onChange={(e) => set("fullName", e.target.value)}
                            placeholder="e.g. Ahmed Al-Rashid"
                            className="mt-1.5"
                          />
                          {errors.fullName && <p className="text-destructive text-[12px] mt-1">{errors.fullName}</p>}
                        </div>
                        <div>
                          <Label htmlFor="companyName">Company Name *</Label>
                          <Input
                            id="companyName"
                            value={data.companyName}
                            onChange={(e) => set("companyName", e.target.value)}
                            placeholder="e.g. Arabian Roasters LLC"
                            className="mt-1.5"
                          />
                          {errors.companyName && <p className="text-destructive text-[12px] mt-1">{errors.companyName}</p>}
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="countryCity">Country / City *</Label>
                        <div className="relative mt-1.5">
                          <Globe2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/80" />
                          <Input
                            id="countryCity"
                            value={data.countryCity}
                            onChange={(e) => set("countryCity", e.target.value)}
                            placeholder="e.g. Dubai, UAE"
                            className="pl-9"
                          />
                        </div>
                        {errors.countryCity && <p className="text-destructive text-[12px] mt-1">{errors.countryCity}</p>}
                      </div>
                    </div>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <div className="space-y-5 animate-in fade-in duration-300">
                      <div>
                        <h3 className="font-serif-display text-xl font-bold text-brand">
                          Business &amp; procurement profile
                        </h3>
                        <p className="text-ink/80 text-[13px] mt-1">
                          Help us tailor crop reports and quotations to your trade.
                        </p>
                      </div>
                      <div>
                        <Label>Business Type *</Label>
                        <Select value={data.businessType} onValueChange={(v) => set("businessType", v)}>
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Select your business type" />
                          </SelectTrigger>
                          <SelectContent>
                            {businessTypes.map((t) => (
                              <SelectItem key={t} value={t}>{t}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.businessType && <p className="text-destructive text-[12px] mt-1">{errors.businessType}</p>}
                      </div>
                      <div>
                        <Label htmlFor="taxId">GST / Tax ID / Import License No.</Label>
                        <Input
                          id="taxId"
                          value={data.taxId}
                          onChange={(e) => set("taxId", e.target.value)}
                          placeholder="Optional (e.g. TRN1001234567)"
                          className="mt-1.5"
                        />
                      </div>
                      <div>
                        <Label>Products of Interest *</Label>
                        <div className="grid sm:grid-cols-2 gap-2.5 mt-2">
                          {products.map((p) => {
                            const checked = data.products.includes(p.key);
                            return (
                              <label
                                key={p.key}
                                className={cn(
                                  "flex items-center gap-3 rounded-lg border px-3 py-2.5 cursor-pointer transition-all",
                                  checked
                                    ? "border-amber bg-amber/8"
                                    : "border-[#e2dbcd] hover:border-amber/50 bg-white"
                                )}
                              >
                                <Checkbox
                                  checked={checked}
                                  onCheckedChange={() => toggleProduct(p.key)}
                                />
                                <span className="text-[13px] font-medium text-ink">{p.shortName}</span>
                              </label>
                            );
                          })}
                        </div>
                        {errors.products && <p className="text-destructive text-[12px] mt-1">{errors.products}</p>}
                      </div>
                      <div>
                        <Label htmlFor="estimatedVolume">Estimated Volume (per season)</Label>
                        <Select value={data.estimatedVolume} onValueChange={(v) => set("estimatedVolume", v)}>
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Select indicative volume" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="< 5 MT">Sample / trial (&lt; 5 MT)</SelectItem>
                            <SelectItem value="5-20 MT">5 to 20 MT</SelectItem>
                            <SelectItem value="20-50 MT">20 to 50 MT</SelectItem>
                            <SelectItem value="50-100 MT">50 to 100 MT</SelectItem>
                            <SelectItem value="100+ MT">100+ MT (container loads)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {/* Step 3 */}
                  {step === 3 && (
                    <div className="space-y-5 animate-in fade-in duration-300">
                      <div>
                        <h3 className="font-serif-display text-xl font-bold text-brand">
                          Contact &amp; communication
                        </h3>
                        <p className="text-ink/80 text-[13px] mt-1">
                          How should our trade desk reach you?
                        </p>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <div className="relative mt-1.5">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/80" />
                            <Input
                              id="email"
                              type="email"
                              value={data.email}
                              onChange={(e) => set("email", e.target.value)}
                              placeholder="you@company.com"
                              className="pl-9"
                            />
                          </div>
                          {errors.email && <p className="text-destructive text-[12px] mt-1">{errors.email}</p>}
                        </div>
                        <div>
                          <Label htmlFor="phone">WhatsApp / Phone *</Label>
                          <div className="relative mt-1.5">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/80" />
                            <Input
                              id="phone"
                              value={data.phone}
                              onChange={(e) => set("phone", e.target.value)}
                              placeholder="+971 50 123 4567"
                              className="pl-9"
                            />
                          </div>
                          {errors.phone && <p className="text-destructive text-[12px] mt-1">{errors.phone}</p>}
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="message">Message (optional)</Label>
                        <Textarea
                          id="message"
                          value={data.message}
                          onChange={(e) => set("message", e.target.value)}
                          placeholder="Tell us about your sourcing requirements, target grades, destination port or any documentation you need…"
                          className="mt-1.5 min-h-[110px]"
                        />
                      </div>

                      {/* Where to send the request: WhatsApp vs Email with WhatsApp number selection */}
                      <div className="rounded-xl border border-amber/30 bg-amber/5 p-4 sm:p-5 space-y-3.5">
                        <div>
                          <Label className="text-xs font-bold uppercase tracking-wider text-brand block mb-1">
                            Choose Where to Send Request *
                          </Label>
                          <p className="text-xs text-ink/75">
                            Select whether to deliver your complete trade registration details via WhatsApp or Email:
                          </p>
                        </div>

                        {/* Main channel toggle: WhatsApp vs Email */}
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => set("dispatchChannel", "whatsapp")}
                            className={cn(
                              "flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-xs sm:text-sm font-bold transition-all cursor-pointer",
                              data.dispatchChannel === "whatsapp"
                                ? "bg-[#25D366] text-white border-[#20bd5a] shadow-md ring-2 ring-emerald-400/40"
                                : "bg-white text-ink border-[#d6cdbb] hover:border-emerald-500 hover:bg-emerald-50/40"
                            )}
                          >
                            <MessageCircle className="h-4 w-4 fill-current" />
                            <span>WhatsApp</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => set("dispatchChannel", "email")}
                            className={cn(
                              "flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-xs sm:text-sm font-bold transition-all cursor-pointer",
                              data.dispatchChannel === "email"
                                ? "bg-[#EA4335] text-white border-[#d93025] shadow-md ring-2 ring-red-400/40"
                                : "bg-white text-ink border-[#d6cdbb] hover:border-[#EA4335] hover:bg-red-50/40"
                            )}
                          >
                            <Mail className="h-4 w-4" />
                            <span>Gmail</span>
                          </button>
                        </div>

                        {/* Sub-choice for WhatsApp: 8762757287 vs 9448108287 */}
                        {data.dispatchChannel === "whatsapp" && (
                          <div className="pt-2 border-t border-amber/20 animate-in fade-in duration-200">
                            <Label className="text-[11px] font-semibold text-emerald-950 block mb-2">
                              Choose WhatsApp Trade Desk Number:
                            </Label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              <button
                                type="button"
                                onClick={() => set("whatsappRecipient", "8762757287")}
                                className={cn(
                                  "flex items-center justify-between p-3 rounded-lg border text-left transition-all cursor-pointer",
                                  data.whatsappRecipient === "8762757287"
                                    ? "bg-white border-[#25D366] text-ink ring-2 ring-[#25D366]/40 shadow-sm"
                                    : "bg-white/80 border-[#d6cdbb] text-ink/80 hover:bg-white"
                                )}
                              >
                                <div>
                                  <div className="text-[10px] uppercase tracking-wider text-emerald-800 font-bold">
                                    Trade Desk 1
                                  </div>
                                  <div className="text-xs font-bold text-ink mt-0.5">
                                    +91 87627 57287
                                  </div>
                                </div>
                                <span
                                  className={cn(
                                    "h-4 w-4 rounded-full border-2 flex items-center justify-center shrink-0 ml-2",
                                    data.whatsappRecipient === "8762757287"
                                      ? "border-[#25D366] bg-[#25D366]"
                                      : "border-gray-300"
                                  )}
                                >
                                  {data.whatsappRecipient === "8762757287" && (
                                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                                  )}
                                </span>
                              </button>

                              <button
                                type="button"
                                onClick={() => set("whatsappRecipient", "9448108287")}
                                className={cn(
                                  "flex items-center justify-between p-3 rounded-lg border text-left transition-all cursor-pointer",
                                  data.whatsappRecipient === "9448108287"
                                    ? "bg-white border-[#25D366] text-ink ring-2 ring-[#25D366]/40 shadow-sm"
                                    : "bg-white/80 border-[#d6cdbb] text-ink/80 hover:bg-white"
                                )}
                              >
                                <div>
                                  <div className="text-[10px] uppercase tracking-wider text-emerald-800 font-bold">
                                    Trade Desk 2
                                  </div>
                                  <div className="text-xs font-bold text-ink mt-0.5">
                                    +91 94481 08287
                                  </div>
                                </div>
                                <span
                                  className={cn(
                                    "h-4 w-4 rounded-full border-2 flex items-center justify-center shrink-0 ml-2",
                                    data.whatsappRecipient === "9448108287"
                                      ? "border-[#25D366] bg-[#25D366]"
                                      : "border-gray-300"
                                  )}
                                >
                                  {data.whatsappRecipient === "9448108287" && (
                                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                                  )}
                                </span>
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Gmail note */}
                        {data.dispatchChannel === "email" && (
                          <div className="pt-2 border-t border-amber/20 text-xs text-ink/80 animate-in fade-in duration-200">
                            Your full registration request will open directly in <strong className="text-[#EA4335] font-semibold">Gmail compose</strong> pre-filled and addressed to{" "}
                            <strong className="text-brand font-semibold">Visionmarketting5@gmail.com</strong>.
                          </div>
                        )}
                      </div>

                      {/* Summary recap */}
                      <div className="rounded-lg bg-cream border border-[#e2dbcd] p-4">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-ink/80 mb-2">
                          Review
                        </div>
                        <dl className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[12px]">
                          <dt className="text-ink/80">Company</dt>
                          <dd className="font-medium text-ink text-right">{data.companyName || "N/A"}</dd>
                          <dt className="text-ink/80">Location</dt>
                          <dd className="font-medium text-ink text-right">{data.countryCity || "N/A"}</dd>
                          <dt className="text-ink/80">Business type</dt>
                          <dd className="font-medium text-ink text-right">{data.businessType || "N/A"}</dd>
                          <dt className="text-ink/80">Products</dt>
                          <dd className="font-medium text-ink text-right">
                            {data.products.length
                              ? `${data.products.length} selected`
                              : "None"}
                          </dd>
                          <dt className="text-ink/80">Dispatch to</dt>
                          <dd className="font-semibold text-emerald-800 text-right">
                            {data.dispatchChannel === "whatsapp"
                              ? `WhatsApp (${data.whatsappRecipient === "9448108287" ? WHATSAPP_DISPLAY_2 : WHATSAPP_DISPLAY_1})`
                              : "Gmail (Visionmarketting5@gmail.com)"}
                          </dd>
                        </dl>
                      </div>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-8 pt-5 border-t border-[#ece5d6]">
                    <Button
                      onClick={back}
                      variant="ghost"
                      disabled={step === 1}
                      className="text-ink hover:bg-cream-deep disabled:opacity-40"
                    >
                      <ChevronLeft className="mr-1 h-4 w-4" /> Back
                    </Button>
                    {step < 3 ? (
                      <Button onClick={next} className="bg-ink text-cream hover:bg-ink-soft">
                        Continue <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        onClick={submit}
                        disabled={submitting}
                        className={cn(
                          "font-semibold transition-all shadow-md",
                          data.dispatchChannel === "whatsapp"
                            ? "bg-[#25D366] text-white hover:bg-[#20bd5a]"
                            : "bg-[#EA4335] text-white hover:bg-[#d93025]"
                        )}
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting…
                          </>
                        ) : data.dispatchChannel === "whatsapp" ? (
                          <>
                            <MessageCircle className="mr-2 h-4 w-4 fill-white" />
                            Submit &amp; Send on WhatsApp
                          </>
                        ) : (
                          <>
                            <Mail className="mr-2 h-4 w-4" />
                            Submit &amp; Send via Gmail
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
