export default function About() {
  return (
    <section id="about" className="bg-neutral-950 text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Who We Are</h2>
          <p className="mt-4 text-white/70">
            Illuminati Pvt Ltd is a multidisciplinary construction company delivering high-quality infrastructure with a focus on safety, innovation, and sustainability. Our team brings decades of experience across civil works, structural engineering, MEP, and industrial EPC.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-6">
            <div className="rounded-lg border border-white/10 p-4 bg-white/[0.03]">
              <div className="text-3xl font-extrabold text-yellow-300">250+</div>
              <div className="text-white/70 text-sm">Projects Delivered</div>
            </div>
            <div className="rounded-lg border border-white/10 p-4 bg-white/[0.03]">
              <div className="text-3xl font-extrabold text-yellow-300">15+</div>
              <div className="text-white/70 text-sm">Years of Excellence</div>
            </div>
            <div className="rounded-lg border border-white/10 p-4 bg-white/[0.03]">
              <div className="text-3xl font-extrabold text-yellow-300">100%</div>
              <div className="text-white/70 text-sm">On-time Delivery</div>
            </div>
            <div className="rounded-lg border border-white/10 p-4 bg-white/[0.03]">
              <div className="text-3xl font-extrabold text-yellow-300">ISO</div>
              <div className="text-white/70 text-sm">Certified Processes</div>
            </div>
          </div>
        </div>
        <div className="relative h-80 rounded-xl overflow-hidden border border-white/10 bg-white/5">
          <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop" alt="Team at work" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
