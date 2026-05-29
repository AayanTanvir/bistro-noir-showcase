import { Reveal } from "./Reveal";
import bg from "@/assets/dining-outdoor.png";
import foodpandaLogo from "@/assets/foodpanda.svg";

function FoodpandaLogo({ className }: { className?: string }) {
  return (
    <img src={foodpandaLogo} alt="foodpanda" className={className} />
  );
}

export function FoodpandaCTA() {
  return (
    <section id="order" className="relative overflow-hidden bg-ink text-bone py-32 md:py-44">
      <div className="absolute inset-0 opacity-[0.08]">
        <img src={bg} alt="" className="h-full w-full object-cover mono-img" />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-ink via-ink/90 to-ink" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <Reveal>
          <p className="eyebrow text-white/50">Reserve · Order</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-8 text-6xl md:text-8xl leading-[0.98]">
            Reserve Your
            <br />
            <span className="italic font-light">Experience.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-xl mx-auto text-white/65 font-light text-base md:text-lg leading-relaxed">
            Dine in for the full Bistro Noir occasion, or bring the experience home — now available on foodpanda.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-14 flex justify-center">
            <a
              href="https://www.foodpanda.pk/restaurant/hovo/bistro-noir-hovo"
              target="_blank"
              rel="noopener noreferrer"
              className="foodpanda-btn group relative inline-flex items-center justify-center gap-6 rounded-full pl-3 py-3"
            >
              <span className="foodpanda-btn-bg" aria-hidden />
              {/* <span className="relative z-10 flex items-center justify-center h-11 w-11 rounded-full border border-[#E21B70] text-[#E21B70] transition-colors duration-300 group-hover:bg-white group-hover:border-white group-hover:text-[#E21B70]">
                <img src={foodpandaLogo} alt="foodpanda" className="h-5 w-5" />
              </span> */}
              <span className="relative z-10 flex items-center justify-center h-12 w-12 rounded-full border transition-colors duration-300 bg-white border-white">
                <img src={foodpandaLogo} alt="foodpanda" className="h-7 w-7" />
              </span>
              <span className="relative z-10 flex-1 text-center eyebrow text-[#E21B70] transition-colors duration-300 group-hover:text-white">
                Order on foodpanda
              </span>
              <span className="relative z-10 w-11" aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>

      <style>{`
        .foodpanda-btn {
          border: 1.5px solid #E21B70;
          background: transparent;
          transition: transform 300ms ease, box-shadow 400ms ease, border-color 300ms ease;
          isolation: isolate;
        }
        .foodpanda-btn-bg {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: linear-gradient(135deg, #E21B70 0%, #B81560 100%);
          opacity: 0;
          transition: opacity 300ms ease;
          z-index: 0;
        }
        .foodpanda-btn:hover {
          transform: translateY(-2px);
          border-color: transparent;
          box-shadow: 0 18px 40px -16px rgba(226, 27, 112, 0.55);
        }
        .foodpanda-btn:hover .foodpanda-btn-bg { opacity: 1; }
      `}</style>
    </section>
  );
}
