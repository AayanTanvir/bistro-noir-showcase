import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Details } from "@/components/site/Details";
import { SignaturePlates } from "@/components/site/SignaturePlates";
import { Locations } from "@/components/site/Locations";
import { FoodpandaCTA } from "@/components/site/FoodpandaCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bistro Noir — Modern Fine Dining in Islamabad & Lahore" },
      {
        name: "description",
        content:
          "Bistro Noir is a cinematic fine-dining experience in Islamabad and Lahore. Crafted plates, considered ambience, and an unhurried sense of occasion.",
      },
      { property: "og:title", content: "Bistro Noir — Modern Fine Dining" },
      {
        property: "og:description",
        content:
          "A cinematic fine-dining experience in Islamabad and Lahore. Reserve a table or order on foodpanda.",
      },
    ],
  }),
  component: Index,
});

function Index() {
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
