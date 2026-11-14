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

  const submit = async () => {
    if (!validateStep(3)) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Registration failed");
      setDone(true);
      toast({
        title: "Registration received",
        description: "Our trade desk will contact you within 1 business day.",
      });
    } catch {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again or email sales@visionmarketing.in",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setData(EMPTY);
    setStep(1);
    setErrors({});
    setDone(false);
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
            contract quotations — direct from our Virajpet works.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Benefits panel */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-ink text-cream p-6 lg:p-8 h-full shadow-elegant relative overflow-hidden">
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
          <div className="lg:col-span-8">
            <div className="rounded-2xl bg-white border border-[#e2dbcd] shadow-elegant p-6 lg:p-8">
              {done ? (
                <div className="text-center py-10">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ink text-amber-dark mb-4">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif-display text-2xl font-bold text-brand">
                    Registration received — welcome, trade partner.
                  </h3>
                  <p className="mt-3 text-ink/80 max-w-md mx-auto">
                    Thank you, {data.fullName.split(" ")[0] || "valued buyer"}.
                    Our trade desk will review your details and reach out within
                    one business day with your membership confirmation and access
                    to specification catalogs.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-cream border border-[#e2dbcd] px-4 py-2 text-[12px] text-ink/80">
                    <Mail className="h-4 w-4 text-amber-dark" />
                    Reference ID generated for {data.email}
                  </div>
                  <div className="mt-6">
                    <Button onClick={reset} variant="outline" className="border-brand/30 text-brand hover:bg-ink hover:text-cream">
                      Register another buyer
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  {/* Stepper */}
                  <div className="flex items-center justify-between mb-8">
                    {STEPS.map((s, i) => {
                      const Icon = s.icon;
                      const isActive = step === s.id;
                      const isComplete = step > s.id;
                      return (
                        <div key={s.id} className="flex items-center flex-1 last:flex-none">
                          <button
                            type="button"
                            onClick={() => {
                              if (s.id < step) setStep(s.id);
                            }}
                            className="flex items-center gap-2 group"
                            disabled={s.id > step}
                          >
                            <span
                              className={cn(
                                "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all",
                                isActive
                                  ? "bg-ink border-brand text-amber-dark scale-105"
                                  : isComplete
                                  ? "bg-amber border-amber text-ink"
                                  : "bg-white border-[#d6cdbb] text-ink/80"
                              )}
                            >
                              {isComplete ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
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
                                "flex-1 h-0.5 mx-2 sm:mx-3 rounded transition-colors",
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
                          placeholder="Optional — e.g. TRN1001234567"
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
                            <SelectItem value="5–20 MT">5 – 20 MT</SelectItem>
                            <SelectItem value="20–50 MT">20 – 50 MT</SelectItem>
                            <SelectItem value="50–100 MT">50 – 100 MT</SelectItem>
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

                      {/* Summary recap */}
                      <div className="rounded-lg bg-cream border border-[#e2dbcd] p-4">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-ink/80 mb-2">
                          Review
                        </div>
                        <dl className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[12px]">
                          <dt className="text-ink/80">Company</dt>
                          <dd className="font-medium text-ink text-right">{data.companyName || "—"}</dd>
                          <dt className="text-ink/80">Location</dt>
                          <dd className="font-medium text-ink text-right">{data.countryCity || "—"}</dd>
                          <dt className="text-ink/80">Business type</dt>
                          <dd className="font-medium text-ink text-right">{data.businessType || "—"}</dd>
                          <dt className="text-ink/80">Products</dt>
                          <dd className="font-medium text-ink text-right">
                            {data.products.length
                              ? `${data.products.length} selected`
                              : "—"}
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
                        className="bg-amber text-ink hover:bg-amber-dark font-semibold"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting…
                          </>
                        ) : (
                          <>
                            <Check className="mr-2 h-4 w-4" /> Complete Registration
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
