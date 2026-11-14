"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { useUi } from "@/lib/ui-store";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About & Heritage", href: "#about" },
  { label: "Products & Specs", href: "#products" },
  { label: "Processing & Infrastructure", href: "#infrastructure" },
  { label: "Buyer Portal", href: "#buyer-portal" },
  { label: "Contact Us", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const openQuote = useUi((s) => s.openQuote);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-elegant border-b border-taupe"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
          {/* Logo + tagline */}
          <Link href="#home" className="flex items-center gap-3 shrink-0">
            <div className="relative h-11 w-11 lg:h-12 lg:w-12 rounded-md overflow-hidden ring-1 ring-amber/40 bg-white shadow-sm">
              { }
              <img
                src="/images/vision-logo-1.png"
                alt="Vision Marketing logo — coffee beans over rolling Coorg hills"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="leading-tight">
              <div
                className={cn(
                  "font-serif-display font-extrabold tracking-tight text-lg lg:text-xl transition-colors",
                  scrolled ? "text-brand" : "text-cream"
                )}
              >
                Vision Marketing
              </div>
              <div
                className={cn(
                  "text-[10px] lg:text-[11px] font-medium uppercase tracking-[0.14em] transition-colors",
                  scrolled ? "text-amber-dark" : "text-amber"
                )}
              >
                Buyer &amp; Exporter of Coorg Products
              </div>
            </div>
          </Link>

          {/* Center nav (desktop) */}
          <nav className="hidden xl:flex items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-[13px] font-medium transition-colors",
                  scrolled
                    ? "text-ink hover:text-brand hover:bg-cream-deep"
                    : "text-cream/90 hover:text-white hover:bg-white/10"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right CTA + mobile trigger */}
          <div className="flex items-center gap-2">
            <Button
              onClick={openQuote}
              size="sm"
              className="hidden sm:inline-flex bg-brand-gradient text-cream hover:brightness-110 font-semibold shadow-brand-glow"
            >
              Request Quote / Register as Buyer
            </Button>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "xl:hidden",
                    scrolled
                      ? "text-brand hover:bg-cream-deep"
                      : "text-cream hover:bg-white/10"
                  )}
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-cream p-0">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="flex items-center justify-between p-5 border-b border-[#e2dbcd] bg-ink">
                  <div className="flex items-center gap-2">
                    { }
                    <img
                      src="/images/vision-logo-1.png"
                      alt="Vision Marketing logo"
                      className="h-10 w-10 object-contain rounded bg-white/90"
                    />
                    <div className="font-serif-display text-cream font-bold leading-tight">
                      Vision Marketing
                    </div>
                  </div>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-cream hover:bg-white/10"
                      aria-label="Close menu"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col p-3">
                  {NAV.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="px-4 py-3 rounded-md text-ink font-medium hover:bg-cream-deep hover:text-brand transition-colors"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <Button
                    onClick={() => {
                      setOpen(false);
                      openQuote();
                    }}
                    className="mt-3 bg-amber text-ink hover:bg-amber-dark font-semibold"
                  >
                    Request Quote / Register as Buyer
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
