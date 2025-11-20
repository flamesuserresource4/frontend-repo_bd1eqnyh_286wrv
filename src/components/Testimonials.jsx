export default function Testimonials() {
  const items = [
    {
      quote: "Flawless execution and impeccable safety culture. Our plant expansion finished ahead of schedule.",
      name: "A. Verma",
      role: "Operations Director, NovaChem"
    },
    {
      quote: "Their design-build team brought clarity and speed. We saved months on coordination.",
      name: "R. Menon",
      role: "CEO, NorthPoint Realty"
    },
    {
      quote: "Professional, transparent, and quality-focused. Highly recommend for turnkey projects.",
      name: "S. Iyer",
      role: "Head of Projects, Skyline Group"
    },
  ];

  return (
    <section id="testimonials" className="bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">What Clients Say</h2>
          <p className="mt-3 text-white/70">Trusted by developers, industry leaders, and global brands.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="relative p-6 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03]">
              <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-[conic-gradient(from_180deg,rgba(250,204,21,0.15),rgba(59,130,246,0.15),rgba(251,113,133,0.15),rgba(52,211,153,0.15),rgba(250,204,21,0.15))] blur-2xl" />
              <p className="text-white/90">“{t.quote}”</p>
              <div className="mt-4 text-sm text-white/70">{t.name}</div>
              <div className="text-xs text-white/50">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
