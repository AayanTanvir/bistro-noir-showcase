import { Reveal } from "./Reveal";
import filet from "@/assets/dish-filet.png";
import ribeye from "@/assets/dish-ribeye.png";
import pavlova from "@/assets/dessert-pavlova.png";
import torte from "@/assets/dessert-torte.png";

const plates = [
  { img: filet, label: "Filet & Cherry Jus", tag: "Main" },
  { img: ribeye, label: "Aged Ribeye", tag: "Main" },
  { img: torte, label: "Mousse Torte", tag: "Dessert" },
  { img: pavlova, label: "Wild Berry Pavlova", tag: "Dessert" },
];

export function SignaturePlates() {
  return (
    <section id="menu" className="bg-ink text-bone py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <Reveal>
            <p className="eyebrow text-white/50">Signature Meals</p>
            <h2 className="font-display mt-6 text-5xl md:text-7xl leading-[1.02]">
              A taste of <span className="italic font-light text-white/60">Noir.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-white/60 font-light leading-relaxed">
              A small selection from a menu that changes with the seasons. Every plate, plated by hand.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {plates.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.08}>
              <figure className="group">
                <div className="aspect-4/5 overflow-hidden bg-white/5">
                  <img
                    src={p.img}
                    alt={p.label}
                    className="h-full w-full object-cover grayscale transition-all duration-1400 ease-out group-hover:scale-110 group-hover:grayscale-0"
                  />
                </div>
                <figcaption className="mt-5 flex items-center justify-between">
                  <span className="font-display text-xl">{p.label}</span>
                  <span className="eyebrow text-white/40">{p.tag}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
