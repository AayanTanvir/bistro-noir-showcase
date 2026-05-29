import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Details } from "@/components/site/Details";
import { SignaturePlates } from "@/components/site/SignaturePlates";
import { Locations } from "@/components/site/Locations";
import { FoodpandaCTA } from "@/components/site/FoodpandaCTA";
import { Footer } from "@/components/site/Footer";

export default function App() {
  useEffect(() => {
    document.title = "Bistro Noir — Modern Fine Dining in Islamabad & Lahore";
  }, []);

  return (
    <main className="bg-bone text-ink">
      <Navbar />
      <Hero />
      <Details />
      <SignaturePlates />
      <Locations />
      <FoodpandaCTA />
      <Footer />
    </main>
  );
}