import { Building2, Wrench, Factory, Ruler, ShieldCheck, Hammer, BadgeCheck, Leaf } from "lucide-react";

const services = [
  { icon: Building2, title: "General Contracting", desc: "Comprehensive project management and delivery across residential, commercial, and industrial builds." },
  { icon: Factory, title: "Industrial EPC", desc: "Design, engineering, procurement, and construction for large-scale plants and facilities." },
  { icon: Ruler, title: "Design & Build", desc: "Integrated architecture and engineering services for concept-to-completion delivery." },
  { icon: Wrench, title: "Renovation & Retrofit", desc: "Structural upgrades, MEP modernization, and sustainable retrofitting." },
  { icon: ShieldCheck, title: "Safety & Compliance", desc: "Zero-harm policy with full regulatory compliance and ISO-certified processes." },
  { icon: Hammer, title: "Turnkey Solutions", desc: "End-to-end execution with single-point accountability and guaranteed timelines." },
];

const badges = [
  { icon: BadgeCheck, text: "ISO 9001 / 14001 / 45001" },
  { icon: Leaf, text: "Sustainable & Green Practices" },
  { icon: ShieldCheck, text: "Zero Incident Culture" },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-white text-slate-900 py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_20%_10%,rgba(245,158,11,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.10),transparent_35%),radial-gradient(circle_at_40%_80%,rgba(251,113,133,0.10),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Core Services</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Expert capabilities tailored to your project’s scale and complexity.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group border border-slate-200 rounded-xl p-6 bg-white hover:shadow-lg transition relative overflow-hidden">
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-tr from-amber-400/20 via-rose-400/20 to-sky-400/20 blur-2xl" />
              <div className="h-12 w-12 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {badges.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg">
              <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-amber-200 via-rose-200 to-sky-200 flex items-center justify-center text-slate-700">
                <Icon className="h-4 w-4" />
              </div>
              <span className="text-slate-700 text-sm">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
