import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo_simple.png";
import { cn } from "@/lib/utils";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "Order", href: "#order" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Bistro Noir"
            className="h-14 w-auto brightness-0 invert"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="eyebrow text-white/70 hover:text-white transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#order"
          className="hidden md:inline-flex eyebrow border border-white/30 text-white px-5 py-2.5 hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
        >
          Reserve
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden text-white"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 bg-[#0A0A0A]/95 backdrop-blur-md",
          open ? "max-h-96 border-t border-white/10" : "max-h-0",
        )}
      >
        <ul className="flex flex-col px-6 py-6 gap-5">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="eyebrow text-white/80 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#order"
              onClick={() => setOpen(false)}
              className="inline-flex eyebrow border border-white/30 text-white px-5 py-2.5"
            >
              Reserve
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
