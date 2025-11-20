export default function Partners() {
  const logos = [
    { name: "NovaChem", url: "https://dummyimage.com/120x36/f1f5f9/0f172a.png&text=NovaChem" },
    { name: "NorthPoint", url: "https://dummyimage.com/120x36/f1f5f9/0f172a.png&text=NorthPoint" },
    { name: "Skyline", url: "https://dummyimage.com/120x36/f1f5f9/0f172a.png&text=Skyline" },
    { name: "Helios", url: "https://dummyimage.com/120x36/f1f5f9/0f172a.png&text=Helios" },
    { name: "Quantum", url: "https://dummyimage.com/120x36/f1f5f9/0f172a.png&text=Quantum" },
  ];

  return (
    <section className="bg-white text-slate-700 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center text-slate-500 text-sm mb-6">Trusted by leading brands and developers</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center opacity-90">
          {logos.map((l) => (
            <img key={l.name} src={l.url} alt={l.name} className="mx-auto h-9 object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
}
