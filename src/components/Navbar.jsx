import { Menu, Phone } from "lucide-react";

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/illuminati-logo.svg" alt="Illuminati Pvt Ltd" className="h-8 w-8" />
          <span className="text-slate-900 font-semibold tracking-wide">Illuminati Pvt Ltd</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <button onClick={() => scrollTo('services')} className="hover:text-slate-900 transition">Services</button>
          <button onClick={() => scrollTo('projects')} className="hover:text-slate-900 transition">Projects</button>
          <button onClick={() => scrollTo('about')} className="hover:text-slate-900 transition">About</button>
          <button onClick={() => scrollTo('testimonials')} className="hover:text-slate-900 transition">Testimonials</button>
          <button onClick={() => scrollTo('careers')} className="hover:text-slate-900 transition">Careers</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-slate-900 transition">Contact</button>
        </nav>
        <button onClick={() => scrollTo('contact')} className="hidden md:inline-flex items-center gap-2 bg-gradient-to-tr from-amber-400 via-rose-400 to-sky-400 text-slate-900 font-semibold px-4 py-2 rounded-md hover:opacity-90 transition shadow">
          <Phone className="h-4 w-4" /> Get a Quote
        </button>
        <button className="md:hidden text-slate-700">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute inset-x-0 bottom-[-2px] h-[2px] bg-[linear-gradient(90deg,#f59e0b,#fb7185,#60a5fa,#34d399,#f59e0b)]" />
    </header>
  );
}
