import { Menu, Phone } from "lucide-react";

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/illuminati-logo.svg" alt="Illuminati Pvt Ltd" className="h-8 w-8" />
          <span className="text-white font-semibold tracking-wide">Illuminati Pvt Ltd</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <button onClick={() => scrollTo('services')} className="hover:text-white transition">Services</button>
          <button onClick={() => scrollTo('projects')} className="hover:text-white transition">Projects</button>
          <button onClick={() => scrollTo('about')} className="hover:text-white transition">About</button>
          <button onClick={() => scrollTo('testimonials')} className="hover:text-white transition">Testimonials</button>
          <button onClick={() => scrollTo('careers')} className="hover:text-white transition">Careers</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-white transition">Contact</button>
        </nav>
        <button onClick={() => scrollTo('contact')} className="hidden md:inline-flex items-center gap-2 bg-gradient-to-tr from-yellow-400 via-rose-400 to-sky-400 text-black font-semibold px-4 py-2 rounded-md hover:opacity-90 transition shadow">
          <Phone className="h-4 w-4" /> Get a Quote
        </button>
        <button className="md:hidden text-white/80">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute inset-x-0 bottom-[-2px] h-[2px] bg-[linear-gradient(90deg,#fde047,#fb7185,#60a5fa,#34d399,#fde047)]" />
    </header>
  );
}
