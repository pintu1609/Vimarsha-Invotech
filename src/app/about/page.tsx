export default function AboutPage() {
  return (
    <section className="py-24 md:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-slate-100">
            About <span className="text-blue-400">Vimarsha Invotech</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Where deep research, thoughtful analysis, and scalable engineering
            come together to solve real business problems.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center mb-16 md:mb-20">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-slate-100">
              Our Origin Story
            </h2>
            <p className="text-slate-300 mb-4 text-sm sm:text-base">
              Vimarsha Invotech was founded with a simple but powerful belief:
              technology should be driven by{" "}
              <span className="text-blue-400">insight</span>, not assumptions.
            </p>
            <p className="text-slate-400 text-sm sm:text-base">
              Instead of jumping straight to solutions, we start by deeply
              understanding the data, the domain, and the underlying business
              challenge.
            </p>
          </div>

          {/* Glass Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-400">
              Vimarsha + Invotech
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              A fusion of deep analytical thinking and modern engineering,
              designed to build systems that scale with confidence.
            </p>
          </div>
        </div>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-slate-100 group-hover:text-blue-400 transition">
              Vimarsha — Deep Analysis
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              We approach every problem with a researcher’s mindset, asking the
              right questions before writing a single line of code.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-slate-100 group-hover:text-blue-400 transition">
              Invotech — Scalable Innovation
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Our solutions are engineered using modern full-stack technologies
              and cloud architecture to scale confidently with growth.
            </p>
          </div>
        </div>

        {/* Strength Section */}
        <div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl sm:rounded-3xl p-4 sm:p-12 text-center border border-white/10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-slate-100">
            What Sets Us Apart
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto">
            By combining full-stack engineering expertise with applied AI and
            research-driven thinking, we deliver solutions that are practical,
            intelligent, and built for long-term impact.
          </p>
        </div>

      </div>
    </section>
  );
}
