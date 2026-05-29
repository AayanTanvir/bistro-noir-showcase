import logo from "@/assets/logo_mono.png";
import instagramLogo from "@/assets/instagram.svg";
import facebookLogo from "@/assets/facebook.svg";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-bone border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Bistro Noir"
              className="h-20 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 text-sm font-light">
            <div>
              <p className="eyebrow text-white/40">Islamabad</p>
              <p className="mt-2 text-white/80">F-7/3</p>
              <a href="tel:03001888768" className="text-white/60 hover:text-white transition-colors">
                0300 1888 768
              </a>
            </div>
            <div>
              <p className="eyebrow text-white/40">Lahore</p>
              <p className="mt-2 text-white/80">MM Alam Road</p>
              <a href="tel:03001888718" className="text-white/60 hover:text-white transition-colors">
                0300 1888 718
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/bistro.noir"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-10 w-10 inline-flex items-center justify-center border border-white/15 rounded-full text-white/70 hover:text-white hover:border-white/40 transition-all"
            >
              <img src={instagramLogo} alt="Instagram" className="brightness-0 invert w-4 h-4"  />
            </a>
            <a
              href="https://www.facebook.com/bistronoir"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="h-10 w-10 inline-flex items-center justify-center border border-white/15 rounded-full text-white/70 hover:text-white hover:border-white/40 transition-all"
            >
              <img src={facebookLogo} alt="Facebook" className="brightness-0 invert w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="hairline mt-10" />
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Bistro Noir. All rights reserved.</p>
          <p className="eyebrow">Designed by Aayan Tanvir</p>
        </div>
      </div>
    </footer>
  );
}
