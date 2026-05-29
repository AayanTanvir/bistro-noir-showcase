import { Reveal } from "./Reveal";
import table from "@/assets/table.jpg";
import { MapPin, Phone } from "lucide-react";

const branches = [
  {
    city: "Islamabad",
    address: "F-7/3, Islamabad",
    phone: "0300 1888 768",
  },
  {
    city: "Lahore",
    address: "MM Alam Road, Lahore",
    phone: "0300 1888 718",
  },
];

export function Locations() {
  return (
    <section id="locations" className="bg-bone py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-3/4 overflow-hidden">
            <img src={table} alt="A table at Bistro Noir" className="h-full w-full object-cover mono-img" />
            <div className="absolute inset-0 bg-linear-to-t from-ink/40 via-transparent to-transparent" />
            {/* <p className="absolute bottom-8 left-8 font-display italic text-bone text-3xl md:text-4xl max-w-65 leading-tight">
              We have a table <br /> for <span className="not-italic">you.</span>
            </p> */}
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow text-ash">Visit us</p>
            <h2 className="font-display mt-6 text-5xl md:text-6xl text-ink leading-[1.05]">
              Two cities,
              <br />
              <span className="italic font-light text-ash">one standard.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {branches.map((b, i) => (
              <Reveal key={b.city} delay={i * 0.1}>
                <article className="group border border-ink/10 p-8 md:p-10 bg-white/40 transition-all duration-500 hover:bg-ink hover:text-bone hover:-translate-y-1">
                  <p className="eyebrow text-ash group-hover:text-white/50 transition-colors">
                    Branch · 0{i + 1}
                  </p>
                  <h3 className="font-display mt-4 text-4xl text-ink group-hover:text-bone transition-colors">
                    {b.city}
                  </h3>
                  <div className="hairline-dark mt-8 w-12 group-hover:bg-white/30 transition-colors" />
                  <ul className="mt-8 space-y-4 text-sm font-light">
                    <li className="flex items-start gap-3 text-ink/70 group-hover:text-bone/80 transition-colors">
                      <MapPin size={16} className="mt-0.5 shrink-0" />
                      <span>{b.address}</span>
                    </li>
                    <li className="flex items-start gap-3 text-ink/70 group-hover:text-bone/80 transition-colors">
                      <Phone size={16} className="mt-0.5 shrink-0" />
                      <a href={`tel:${b.phone.replace(/\s/g, "")}`}>{b.phone}</a>
                    </li>
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-14 border-t border-ink/10 pt-10">
              <p className="eyebrow text-ash">Eid Hours</p>
              <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-4">
                  <dt className="font-display text-2xl text-ink">Eid Day 2</dt>
                  <dd className="text-ash font-light text-sm tracking-wide">12:00 PM – 1:00 AM</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-4">
                  <dt className="font-display text-2xl text-ink">Eid Day 3</dt>
                  <dd className="text-ash font-light text-sm tracking-wide">09:00 AM – 1:00 AM</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
