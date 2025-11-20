import { Building2, Wrench, Factory, Ruler, ShieldCheck, Hammer } from "lucide-react";

const services = [
  { icon: Building2, title: "General Contracting", desc: "Comprehensive project management and delivery across residential, commercial, and industrial builds." },
  { icon: Factory, title: "Industrial EPC", desc: "Design, engineering, procurement, and construction for large-scale plants and facilities." },
  { icon: Ruler, title: "Design & Build", desc: "Integrated architecture and engineering services for concept-to-completion delivery." },
  { icon: Wrench, title: "Renovation & Retrofit", desc: "Structural upgrades, MEP modernization, and sustainable retrofitting." },
  { icon: ShieldCheck, title: "Safety & Compliance", desc: "Zero-harm policy with full regulatory compliance and ISO-certified processes." },
  { icon: Hammer, title: "Turnkey Solutions", desc: "End-to-end execution with single-point accountability and guaranteed timelines." },
];

export default function Services() {
  return (
    <section id="services" className="bg-neutral-950 text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Core Services</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Expert capabilities tailored to your project’s scale and complexity.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group border border-white/10 rounded-xl p-6 bg-white/[0.03] hover:bg-white/[0.06] transition">
              <div className="h-12 w-12 rounded-lg bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-300 mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
