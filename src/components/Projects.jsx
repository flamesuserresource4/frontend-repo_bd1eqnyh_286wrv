export default function Projects() {
  const projects = [
    { title: "Skyline Residences", tag: "Residential", img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop" },
    { title: "NorthPoint Business Park", tag: "Commercial", img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1600&auto=format&fit=crop" },
    { title: "Nova Industrial Plant", tag: "Industrial", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600&auto=format&fit=crop" },
  ];

  return (
    <section id="projects" className="bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
            <p className="mt-3 text-white/70">A snapshot of our recent work across sectors.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-block text-sm border border-white/20 px-4 py-2 rounded-md hover:bg-white/10">Start Your Project</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img src={p.img} alt={p.title} className="h-64 w-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <span className="inline-block text-xs uppercase tracking-wide text-white/70">{p.tag}</span>
                <h3 className="text-xl font-semibold">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
