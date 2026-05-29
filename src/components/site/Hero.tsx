import { motion } from "framer-motion";
import hero from "@/assets/restaurant.jpg";
import logo from "@/assets/logo_mono.png";

export function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-160 w-full overflow-hidden bg-[#0A0A0A]">
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={hero}
          alt="Inside of Bistro Noir restaurant"
          className="h-full w-full object-cover mono-img"
        />
      </motion.div>

      {/* gradient overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/85" />
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-black/40" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="eyebrow text-white/70"
        >
          Welcome To
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 brightness-0 invert"
        >
          <img
            src={logo}
            alt="Bistro Noir"
            className="h-70 w-auto "
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-8 max-w-xl text-white/80 text-base md:text-xl font-light leading-relaxed"
        >
          The Epitome Of Fine Dining In Pakistan
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#locations"
            className="eyebrow border border-white/40 text-white px-8 py-4 hover:bg-white hover:text-[#0A0A0A] transition-all duration-500"
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="eyebrow text-white/80 hover:text-white px-2 py-4 border-b border-transparent hover:border-white/40 transition-all duration-300"
          >
            Discover the Menu →
          </a>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="eyebrow text-white/50 text-[0.6rem]">Scroll</span>
          <div className="h-12 w-px bg-linear-to-b from-white/60 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
