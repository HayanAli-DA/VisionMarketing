import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://visionmarketing.in"),
  title: {
    default: "Vision Marketing | Coorg Coffee Curing, Pepper Grading & Agro-Exports | Virajpet, Kodagu",
    template: "%s | Vision Marketing",
  },
  description:
    "Vision Marketing is a 25+ year buyer, processor & exporter of Coorg agricultural products in Virajpet, Kodagu, Karnataka. Precision-graded Robusta coffee, bold Tellicherry black pepper, pure Coorg honey & plantation produce. Coffee Curing Works since 2004, Pepper Grading Works since 2007. GSTIN 29AFEPA6566L1Z3.",
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
      "Precision-graded Robusta coffee, bold Tellicherry black pepper & pure Coorg honey — direct from Virajpet estates since 2001.",
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
      <body
        className={`${cormorant.variable} ${manrope.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
