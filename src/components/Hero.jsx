import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-end overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1 rounded-full border border-white/20 text-white text-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              ISO-certified construction partner
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Building the future with precision and integrity
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Illuminati Pvt Ltd delivers end-to-end construction solutions—from design and engineering to turnkey execution—across residential, commercial, and industrial sectors.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition">Request a Quote</a>
              <a href="#projects" className="border border-white/30 text-white px-6 py-3 rounded-md hover:bg-white/10 transition">View Projects</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
    </section>
  );
}
