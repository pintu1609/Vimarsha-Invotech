export default function ServicesPage() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">
            Our <span className="text-blue-400">Services</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            High-impact engineering and AI-driven solutions designed to help
            businesses scale with confidence.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
            <h3 className="text-xl font-semibold mb-4 text-slate-100 group-hover:text-blue-400 transition">
              Full-Stack Development
            </h3>
            <p className="text-slate-300 mb-4">
              High-performance web and mobile applications built using modern
              full-stack frameworks and best practices.
            </p>
            <p className="text-slate-400 text-sm">
              Next.js · MERN · React · API Design
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
            <h3 className="text-xl font-semibold mb-4 text-slate-100 group-hover:text-blue-400 transition">
              Cloud Architecture Consulting
            </h3>
            <p className="text-slate-300 mb-4">
              Secure, scalable cloud systems designed for reliability,
              performance, and long-term growth.
            </p>
            <p className="text-slate-400 text-sm">
              AWS · Google Cloud · Scalability · Security
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
            <h3 className="text-xl font-semibold mb-4 text-slate-100 group-hover:text-blue-400 transition">
              Applied AI Solutions
            </h3>
            <p className="text-slate-300 mb-4">
              Custom AI, ML, and NLP solutions built to solve real business
              problems with measurable impact.
            </p>
            <p className="text-slate-400 text-sm">
              NLP · Chatbots · Automation · Predictive Systems
            </p>
          </div>

        </div>

        {/* Bottom Highlight */}
        <div className="mt-20 bg-gradient-to-br from-blue-500/10 to-transparent border border-white/10 rounded-3xl p-12 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-slate-100">
            Built for Scale, Designed for Impact
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Every service engagement at Vimarsha Invotech is treated as a
            research-driven initiative, ensuring solutions that are robust,
            future-ready, and aligned with long-term business goals.
          </p>
        </div>

      </div>
    </section>
  );
}
