import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Products } from "@/components/site/products";
import { Infrastructure } from "@/components/site/infrastructure";
import { BuyerPortal } from "@/components/site/buyer-portal";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { QuoteDialog } from "@/components/site/dialogs";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Products />
        <Infrastructure />
        <BuyerPortal />
        <Contact />
      </main>
      <Footer />
      <QuoteDialog />
    </div>
  );
}
