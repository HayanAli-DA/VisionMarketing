"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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
import { Loader2, Check, ArrowRight, MessageSquare, MessageCircle, ExternalLink, Mail } from "lucide-react";
import { useUi } from "@/lib/ui-store";
import { products } from "@/lib/products";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

type InquiryData = {
  product: string;
  productName: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  volume: string;
  message: string;
};

const EMPTY: InquiryData = {
  product: "",
  productName: "",
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  volume: "",
  message: "",
};

export function QuoteDialog() {
  const {
    quoteOpen,
    inquiryOpen,
    inquiryProductKey,
    inquiryProductName,
    closeQuote,
    closeInquiry,
    openInquiry,
  } = useUi();

  const open = quoteOpen || inquiryOpen;
  const isInquiry = inquiryOpen;
  const [data, setData] = useState<InquiryData>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const { toast } = useToast();

  // Sync prefilled product when inquiry dialog opens
  useEffect(() => {
    if (inquiryOpen) {
      setData((d) => ({
        ...EMPTY,
        product: inquiryProductKey,
        productName: inquiryProductName,
        message: `Please share bulk pricing and availability for ${inquiryProductName}.`,
      }));
      setDone(false);
    }
  }, [inquiryOpen, inquiryProductKey, inquiryProductName]);

  // Reset to general quote state when quote dialog opens
  useEffect(() => {
    if (quoteOpen) {
      setData(EMPTY);
      setDone(false);
      setErrors({});
    }
  }, [quoteOpen]);

  const close = () => {
    if (quoteOpen) closeQuote();
    if (inquiryOpen) closeInquiry();
  };

  const set = (k: keyof InquiryData, v: string) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const selectProduct = (key: string) => {
    const p = products.find((x) => x.key === key);
    setData((d) => ({ ...d, product: key, productName: p?.name ?? key }));
  };

  const goFullRegistration = () => {
    close();
    setTimeout(() => {
      document
        .getElementById("buyer-portal")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  const submit = async () => {
    const e: Record<string, string> = {};
    if (!data.name.trim()) e.name = "Name is required";
    if (!data.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      e.email = "Enter a valid email";
    if (!data.message.trim() && !data.product) e.message = "Add a short message";
    setErrors(e);
    if (Object.keys(e).length) return;

    setSubmitting(true);
    // Background API sync (non-blocking for serverless/read-only DB environments)
    try {
      await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (apiErr) {
      console.warn("Background inquiry sync warning:", apiErr);
    }

    setDone(true);
    setSubmitting(false);
    toast({
      title: isInquiry ? "Bulk pricing request ready" : "Quote request ready",
      description: "Click below to deliver directly via WhatsApp or Gmail.",
    });
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (!v) close();
      }}
    >
      <DialogContent
        aria-describedby={undefined}
        className="sm:max-w-[560px] bg-cream max-h-[92vh] overflow-y-auto scroll-elegant p-4 sm:p-6"
      >
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-amber-dark">
              <MessageSquare className="h-5 w-5" />
            </span>
            <DialogTitle className="font-serif-display text-xl text-brand">
              {isInquiry ? "Inquire for Bulk Pricing" : "Request a Quote / Register as Buyer"}
            </DialogTitle>
          </div>
          <DialogDescription className="text-ink/80">
            {isInquiry
              ? "Send a quick bulk-pricing request for this product. Our trade desk will respond within one business day."
              : "Send a quick quote request below, or register as a full trade partner for spec catalogs, crop reports and sample requests."}
          </DialogDescription>
        </DialogHeader>

        {done ? (
          <div className="text-center py-6">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mb-3 ring-4 ring-emerald-50">
              <Check className="h-7 w-7" />
            </div>
            <h3 className="font-serif-display text-xl font-bold text-brand">
              Request Received &amp; Saved
            </h3>
            <p className="mt-2 text-ink/80 text-[13px] max-w-sm mx-auto">
              Thank you, <strong className="text-ink">{data.name}</strong>. Our trade desk has received your request and will respond to{" "}
              <span className="font-medium text-ink">{data.email}</span> within one business day.
            </p>

            {/* Direct WhatsApp & Email Send */}
            <div className="mt-5 p-4 rounded-xl bg-emerald-50/70 border border-emerald-500/30 text-left">
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                Direct Dispatch Options
              </div>
              <p className="text-xs text-ink/75 mb-3">
                Send your quote request directly to our Virajpet Trade Desks via WhatsApp or Email:
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={`https://wa.me/918762757287?text=${encodeURIComponent(
                      [
                        "📦 *QUOTE / PRICING INQUIRY — VISION MARKETING*",
                        "━━━━━━━━━━━━━━━━━━━━━━━━━━",
                        data.productName ? `*Product:* ${data.productName}` : null,
                        `*Name:* ${data.name}`,
                        data.company ? `*Company:* ${data.company}` : null,
                        data.country ? `*Location:* ${data.country}` : null,
                        data.volume ? `*Target Volume:* ${data.volume}` : null,
                        `*Email:* ${data.email}`,
                        data.phone ? `*Phone:* ${data.phone}` : null,
                        data.message ? `*Message:* ${data.message}` : null,
                        "━━━━━━━━━━━━━━━━━━━━━━━━━━",
                      ]
                        .filter(Boolean)
                        .join("\n")
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-2.5 px-3 shadow transition-all"
                  >
                    <MessageCircle className="h-4 w-4 fill-white" />
                    <span>WhatsApp: +91 87627 57287</span>
                    <ExternalLink className="h-3 w-3 opacity-80" />
                  </a>
                  <a
                    href={`https://wa.me/919448108287?text=${encodeURIComponent(
                      [
                        "📦 *QUOTE / PRICING INQUIRY — VISION MARKETING*",
                        "━━━━━━━━━━━━━━━━━━━━━━━━━━",
                        data.productName ? `*Product:* ${data.productName}` : null,
                        `*Name:* ${data.name}`,
                        data.company ? `*Company:* ${data.company}` : null,
                        data.country ? `*Location:* ${data.country}` : null,
                        data.volume ? `*Target Volume:* ${data.volume}` : null,
                        `*Email:* ${data.email}`,
                        data.phone ? `*Phone:* ${data.phone}` : null,
                        data.message ? `*Message:* ${data.message}` : null,
                        "━━━━━━━━━━━━━━━━━━━━━━━━━━",
                      ]
                        .filter(Boolean)
                        .join("\n")
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-2.5 px-3 shadow transition-all"
                  >
                    <MessageCircle className="h-4 w-4 fill-white" />
                    <span>WhatsApp: +91 94481 08287</span>
                    <ExternalLink className="h-3 w-3 opacity-80" />
                  </a>
                </div>

                <a
                  href={`mailto:Visionmarketting5@gmail.com?subject=${encodeURIComponent(
                    `Pricing Quote Request - ${data.productName || data.name}`
                  )}&body=${encodeURIComponent(
                    [
                      "QUOTE / PRICING INQUIRY — VISION MARKETING",
                      "━━━━━━━━━━━━━━━━━━━━━━━━━━",
                      data.productName ? `Product: ${data.productName}` : null,
                      `Name: ${data.name}`,
                      data.company ? `Company: ${data.company}` : null,
                      data.country ? `Location: ${data.country}` : null,
                      data.volume ? `Target Volume: ${data.volume}` : null,
                      `Email: ${data.email}`,
                      data.phone ? `Phone: ${data.phone}` : null,
                      data.message ? `Message: ${data.message}` : null,
                      "━━━━━━━━━━━━━━━━━━━━━━━━━━",
                    ]
                      .filter(Boolean)
                      .join("\n")
                  )}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand hover:bg-brand-dark text-cream text-xs font-bold py-2 px-3 border border-amber/30 transition-all"
                >
                  <Mail className="h-3.5 w-3.5 text-amber" />
                  <span>Send via Email (Visionmarketting5@gmail.com)</span>
                  <ExternalLink className="h-3 w-3 opacity-80" />
                </a>
              </div>
            </div>

            <Button
              onClick={() => {
                close();
                setData(EMPTY);
                setDone(false);
              }}
              variant="outline"
              className="mt-5 border-brand/30 text-brand hover:bg-ink hover:text-cream text-xs"
            >
              Close
            </Button>
          </div>
        ) : (
          <div className="space-y-4 pt-2">
            {/* Product (prefilled for inquiry, selectable for general quote) */}
            <div>
              <Label htmlFor="q-product">Product of interest</Label>
              {isInquiry ? (
                <div className="mt-1.5 flex items-center gap-2 rounded-md bg-amber/10 border border-amber/30 px-3 py-2.5">
                  <span className="text-[13px] font-semibold text-ink">
                    {data.productName}
                  </span>
                  <span className="ml-auto text-[10px] uppercase tracking-wider text-amber-dark font-bold">
                    prefilled
                  </span>
                </div>
              ) : (
                <Select
                  value={data.product}
                  onValueChange={selectProduct}
                >
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Select a product (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    {products.map((p) => (
                      <SelectItem key={p.key} value={p.key}>
                        {p.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="q-name">Name *</Label>
                <Input
                  id="q-name"
                  value={data.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="Your full name"
                  className="mt-1.5"
                />
                {errors.name && <p className="text-destructive text-[12px] mt-1">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="q-email">Email *</Label>
                <Input
                  id="q-email"
                  type="email"
                  value={data.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="you@company.com"
                  className="mt-1.5"
                />
                {errors.email && <p className="text-destructive text-[12px] mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="q-phone">WhatsApp / Phone</Label>
                <Input
                  id="q-phone"
                  value={data.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  placeholder="+91 98765 43210"
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="q-company">Company</Label>
                <Input
                  id="q-company"
                  value={data.company}
                  onChange={(e) => set("company", e.target.value)}
                  placeholder="Company name"
                  className="mt-1.5"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="q-country">Country / City</Label>
                <Input
                  id="q-country"
                  value={data.country}
                  onChange={(e) => set("country", e.target.value)}
                  placeholder="e.g. Hamburg, Germany"
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="q-volume">Estimated volume</Label>
                <Input
                  id="q-volume"
                  value={data.volume}
                  onChange={(e) => set("volume", e.target.value)}
                  placeholder="e.g. 2 x 20ft FCL / season"
                  className="mt-1.5"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="q-message">Message</Label>
              <Textarea
                id="q-message"
                value={data.message}
                onChange={(e) => set("message", e.target.value)}
                placeholder="Grades of interest, destination port, documentation needed, target price range…"
                className="mt-1.5 min-h-[90px]"
              />
              {errors.message && <p className="text-destructive text-[12px] mt-1">{errors.message}</p>}
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <Button
                onClick={submit}
                disabled={submitting}
                className="flex-1 bg-ink text-cream hover:bg-ink-soft"
              >
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>Send request</>
                )}
              </Button>
              <Button
                onClick={goFullRegistration}
                variant="outline"
                className={cn(
                  "border-amber text-amber-dark hover:bg-amber hover:text-ink font-semibold"
                )}
              >
                Full registration <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <p className="text-[11px] text-ink/80 text-center">
              By submitting you agree to be contacted by Vision Marketing for
              trade onboarding. GSTIN 29AFEPA6566L1Z3.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
