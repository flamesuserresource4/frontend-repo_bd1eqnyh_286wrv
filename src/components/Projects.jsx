export default function Projects() {
  const projects = [
    { title: "Skyline Residences", tag: "Residential", img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop" },
    { title: "NorthPoint Business Park", tag: "Commercial", img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1600&auto=format&fit=crop" },
    { title: "Nova Industrial Plant", tag: "Industrial", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600&auto=format&fit=crop" },
    { title: "Harbor Bridge Extension", tag: "Infrastructure", img: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1600&auto=format&fit=crop" },
    { title: "Helios Solar Farm", tag: "Energy", img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop" },
    { title: "Quantum R&D Center", tag: "Tech Campus", img: "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=1600&auto=format&fit=crop" },
  ];

  return (
    <section id="projects" className="bg-white text-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
            <p className="mt-3 text-slate-600">A snapshot of our recent work across sectors.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-block text-sm border border-slate-300 px-4 py-2 rounded-md hover:bg-slate-50">Start Your Project</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-b from-white to-slate-50">
              <img src={p.img} alt={p.title} className="h-64 w-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-4">
                <span className="inline-block text-xs uppercase tracking-wide text-slate-700">{p.tag}</span>
                <h3 className="text-xl font-semibold">{p.title}</h3>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(34,197,94,0.12),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.12),transparent_40%)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
