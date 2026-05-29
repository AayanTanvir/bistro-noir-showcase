import { Reveal } from "./Reveal";
import interior from "@/assets/interior.jpeg";
import chef from "@/assets/chef.jpg";
import ingredients from "@/assets/dish-wellington.png";

const pillars = [
  {
    eyebrow: "01 — Atmosphere",
    title: "A modern, royal ambience",
    body:
      "One of a kind cinematic interiors designed to make every dining experience unforgettable.",
    img: interior,
  },
  {
    eyebrow: "02 — Cooking",
    title: "Masters of culinary artistry",
    body:
      "Led by expert chefs devoted to their craft, every meal is prepared with precision, passion, and genuine care.",
    img: chef,
  },
  {
    eyebrow: "03 — Service & Experience",
    title: "Exceptional hospitality, unforgettable flavor",
    body:
      "Exceptional 5-star hospitality, refined service, and a diverse menu crafted with fresh, high-quality ingredients. An overall dining experience never seen before in Pakistan.",
    img: ingredients,
  },
];

export function Details() {
  return (
    <section id="about" className="bg-bone py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-ash">What makes us</p>
          <h2 className="font-display mt-6 text-5xl md:text-7xl leading-[1.02] text-ink">
            Fine dining,
            <br />
            <span className="italic font-light text-ash">unhurried.</span>
          </h2>
        </Reveal>

        <div className="mt-24 space-y-32 md:space-y-44">
          {pillars.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={p.title}
                className={`grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center ${
                  reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal className="md:col-span-7">
                  <div className="aspect-4/5 md:aspect-5/4 overflow-hidden bg-ink/5">
                    <img
                      src={p.img}
                      alt={p.title}
                      className={`h-full w-full ${p.img === chef ? "object-[center_58%]" : ""} grayscale object-cover transition-all duration-600 ease-out hover:grayscale-0`}
                    />
                  </div>
                </Reveal>

                <Reveal delay={0.15} className="md:col-span-5">
                  <p className="eyebrow text-ash">{p.eyebrow}</p>
                  <h3 className="font-display mt-5 text-4xl md:text-5xl text-ink leading-tight">
                    {p.title}
                  </h3>
                  <div className="hairline-dark mt-8 w-16" />
                  <p className="mt-8 text-ink/70 font-light leading-relaxed text-base md:text-[17px]">
                    {p.body}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
