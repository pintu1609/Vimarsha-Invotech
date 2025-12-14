export default function VisionPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">
            Our <span className="text-blue-400">Vision</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Shaping the future of intelligent, scalable digital products through
            research-driven innovation.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="mb-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-slate-100">
            Turning Analysis into Action
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            We believe the future belongs to businesses that can transform
            deep analysis into decisive, confident action.
          </p>
        </div>

        {/* Vision Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">

          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
            <h3 className="text-xl font-semibold mb-3 text-slate-100 group-hover:text-blue-400 transition">
              Research-Driven Services
            </h3>
            <p className="text-slate-300">
              Every client engagement is treated as a research initiative,
              allowing us to uncover deep insights and real market needs.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
            <h3 className="text-xl font-semibold mb-3 text-slate-100 group-hover:text-blue-400 transition">
              Product-Led Thinking
            </h3>
            <p className="text-slate-300">
              Service projects inform our future SaaS products, ensuring that
              what we build is grounded in real-world demand.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
            <h3 className="text-xl font-semibold mb-3 text-slate-100 group-hover:text-blue-400 transition">
              MSME-Focused Innovation
            </h3>
            <p className="text-slate-300">
              We aim to empower Indian and global MSMEs with AI-driven products
              that unlock sustainable growth.
            </p>
          </div>

        </div>

        {/* Long-Term Vision */}
        <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-white/10 rounded-3xl p-12 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-slate-100">
            Building the Future, One Insight at a Time
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Our long-term vision is to evolve from a service-driven company into
            a product-focused organization, delivering AI-powered platforms that
            solve meaningful problems at scale.
          </p>
        </div>

      </div>
    </section>
  );
}
