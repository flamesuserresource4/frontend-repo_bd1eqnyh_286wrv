import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-end overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-slate-200 text-slate-700 text-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              ISO-certified construction partner
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
              Building the future with precision and integrity
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Illuminati Pvt Ltd delivers end-to-end construction solutions—from design and engineering to turnkey execution—across residential, commercial, and industrial sectors.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="bg-amber-400 text-slate-900 font-semibold px-6 py-3 rounded-md hover:bg-amber-300 transition">Request a Quote</a>
              <a href="#projects" className="border border-slate-300 text-slate-700 px-6 py-3 rounded-md hover:bg-slate-50 transition">View Projects</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
    </section>
  );
}
