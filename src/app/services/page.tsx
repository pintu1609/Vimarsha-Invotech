
export const metadata = {
  title: "Services",
  description:
  "Full-stack development, cloud architecture, and applied AI services designed for scalable growth.",
};

import Link from "next/link";
export default function ServicesPage() {
  return (
    <section className="pt-24 pb-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-slate-100">
            How We Help <span className="text-blue-400">Teams Build Faster</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            High-impact engineering and AI-driven solutions designed to help
            businesses scale with confidence.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">

          {/* Card 1 */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-slate-100 group-hover:text-blue-400 transition">
              Full-Stack Development
            </h3>
            <p className="text-slate-300 mb-4 text-sm sm:text-base">
              High-performance web and mobile applications built using modern
              full-stack frameworks and best practices.
            </p>
            <p className="text-slate-300 mb-4 text-sm sm:text-base">
              Ideal for startups and founders building early-stage products.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm">
              Next.js · MERN · React · API Design
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-slate-100 group-hover:text-blue-400 transition">
              Cloud Architecture Consulting
            </h3>
            <p className="text-slate-300 mb-4 text-sm sm:text-base">
              Secure, scalable cloud systems designed for reliability,
              performance, and long-term growth.
            </p>
            <p className="text-slate-300 mb-4 text-sm sm:text-base">
              Ideal for startups and founders building early-stage products.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm">
              AWS · Google Cloud · Scalability · Security
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-slate-100 group-hover:text-blue-400 transition">
              Applied AI Solutions
            </h3>
            <p className="text-slate-300 mb-4 text-sm sm:text-base">
              Custom AI, ML, and NLP solutions built to solve real business
              problems with measurable impact.
            </p>
            <p className="text-slate-300 mb-4 text-sm sm:text-base">
              Ideal for startups and founders building early-stage products.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm">
              NLP · Chatbots · Automation · Predictive Systems
            </p>
          </div>

        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 md:mt-20 bg-gradient-to-br from-blue-500/10 to-transparent border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-12 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-slate-100">
            Built for Scale, Designed for Impact
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto">
            Every service engagement at Vimarsha Invotech is treated as a
            research-driven initiative, ensuring solutions that are robust,
            future-ready, and aligned with long-term business goals.
          </p>
        </div>

      </div>
      <div className="mt-12 text-center">
  <p className="text-slate-300 mb-4 text-sm sm:text-2xl">
    Not sure which service fits your needs?
  </p>
  <Link
    href="/contact"
    className="inline-block px-6 py-3 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition "
  >
    Discuss Your Project
  </Link>
</div>
    </section>
  );
}
