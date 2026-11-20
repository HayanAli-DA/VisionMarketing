import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL("https://visionmarketing.in"),
  title: {
    default: "Vision Marketing | Coorg Coffee Curing, Pepper Grading & Agro-Exports | Virajpet, Kodagu",
    template: "%s | Vision Marketing",
  },
  description:
    "Vision Marketing is a 25+ year buyer, processor & exporter of Coorg agricultural products in Virajpet, Kodagu, Karnataka. Precision-graded Robusta coffee, bold Tellicherry black pepper, pure Coorg honey & cured coffee husk. Coffee Curing Works since 2004, Pepper Grading Works since 2007. GSTIN 29AFEPA6566L1Z3.",
  keywords: [
    "Coorg Robusta coffee exporter",
    "Virajpet black pepper wholesaler",
    "coffee curing works Karnataka",
    "bulk Coorg spices",
    "Robusta coffee grading India",
    "Tellicherry pepper TGSEB exporter",
    "Coorg honey wholesale",
    "Kodagu agricultural products exporter",
    "coffee curing Virajpet",
    "Vision Marketing Coorg",
  ],
  authors: [{ name: "Vision Marketing" }],
  creator: "Vision Marketing",
  publisher: "Vision Marketing",
  icons: {
    icon: "/images/vision-logo-1.png",
    apple: "/images/vision-logo-1.png",
  },
  openGraph: {
    title: "Vision Marketing | Coorg Coffee Curing, Pepper Grading & Agro-Exports",
    description:
      "25+ years of excellence in Coorg coffee curing, pepper grading & global agro-exports from Virajpet, Kodagu. Direct estate sourcing since 2001.",
    url: "https://visionmarketing.in",
    siteName: "Vision Marketing",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision Marketing | Coorg Coffee, Pepper & Agro-Exports",
    description:
      "Precision-graded Robusta coffee, bold Tellicherry black pepper & pure Coorg honey, direct from Virajpet estates since 2001.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
  category: "agriculture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
