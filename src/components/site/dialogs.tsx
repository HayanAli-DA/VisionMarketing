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
import { Loader2, Check, ArrowRight, MessageSquare } from "lucide-react";
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
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Inquiry failed");
      setDone(true);
      toast({
        title: isInquiry ? "Bulk pricing request sent" : "Quote request received",
        description: "Our trade desk will respond within one business day.",
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

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (!v) close();
      }}
    >
      <DialogContent className="sm:max-w-[560px] bg-ivory max-h-[92vh] overflow-y-auto scroll-elegant">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-forest text-gold">
              <MessageSquare className="h-5 w-5" />
            </span>
            <DialogTitle className="font-serif-display text-xl text-forest">
              {isInquiry ? "Inquire for Bulk Pricing" : "Request a Quote / Register as Buyer"}
            </DialogTitle>
          </div>
          <DialogDescription className="text-coffee/70">
            {isInquiry
              ? "Send a quick bulk-pricing request for this product. Our trade desk will respond within one business day."
              : "Send a quick quote request below, or register as a full trade partner for spec catalogs, crop reports and sample requests."}
          </DialogDescription>
        </DialogHeader>

        {done ? (
          <div className="text-center py-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest text-gold mb-3">
              <Check className="h-7 w-7" />
            </div>
            <h3 className="font-serif-display text-lg font-bold text-forest">
              Request received
            </h3>
            <p className="mt-2 text-coffee/70 text-[13px] max-w-sm mx-auto">
              Thank you. Our trade desk will review your request and respond to{" "}
              <span className="font-medium text-coffee">{data.email}</span> within one business day.
            </p>
            <Button
              onClick={() => {
                close();
                setData(EMPTY);
                setDone(false);
              }}
              variant="outline"
              className="mt-5 border-forest/30 text-forest hover:bg-forest hover:text-ivory"
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
                <div className="mt-1.5 flex items-center gap-2 rounded-md bg-gold/10 border border-gold/30 px-3 py-2.5">
                  <span className="text-[13px] font-semibold text-coffee">
                    {data.productName}
                  </span>
                  <span className="ml-auto text-[10px] uppercase tracking-wider text-gold-dark font-bold">
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
                className="flex-1 bg-forest text-ivory hover:bg-forest-dark"
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
                  "border-gold text-gold-dark hover:bg-gold hover:text-coffee font-semibold"
                )}
              >
                Full registration <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <p className="text-[11px] text-coffee/50 text-center">
              By submitting you agree to be contacted by Vision Marketing for
              trade onboarding. GSTIN 29AFEPA6566L1Z3.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
