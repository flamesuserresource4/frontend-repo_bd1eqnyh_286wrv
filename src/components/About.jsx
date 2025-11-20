export default function About() {
  return (
    <section id="about" className="bg-white text-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Who We Are</h2>
          <p className="mt-4 text-slate-600">
            Illuminati Pvt Ltd is a multidisciplinary construction company delivering high-quality infrastructure with a focus on safety, innovation, and sustainability. Our team brings decades of experience across civil works, structural engineering, MEP, and industrial EPC.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-6">
            <div className="rounded-lg border border-slate-200 p-4 bg-white shadow-sm">
              <div className="text-3xl font-extrabold text-amber-500">250+</div>
              <div className="text-slate-600 text-sm">Projects Delivered</div>
            </div>
            <div className="rounded-lg border border-slate-200 p-4 bg-white shadow-sm">
              <div className="text-3xl font-extrabold text-amber-500">15+</div>
              <div className="text-slate-600 text-sm">Years of Excellence</div>
            </div>
            <div className="rounded-lg border border-slate-200 p-4 bg-white shadow-sm">
              <div className="text-3xl font-extrabold text-amber-500">100%</div>
              <div className="text-slate-600 text-sm">On-time Delivery</div>
            </div>
            <div className="rounded-lg border border-slate-200 p-4 bg-white shadow-sm">
              <div className="text-3xl font-extrabold text-amber-500">ISO</div>
              <div className="text-slate-600 text-sm">Certified Processes</div>
            </div>
          </div>
        </div>
        <div className="relative h-80 rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
          <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop" alt="Team at work" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
