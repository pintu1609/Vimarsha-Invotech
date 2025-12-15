export default function ContactPage() {
  return (
    <section className="pt-24 pb-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-slate-100">
            Contact <span className="text-blue-400">Us</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Let’s discuss how Vimarsha Invotech can help you build scalable,
            intelligent digital solutions.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

            {/* Left: Info */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-slate-100">
                Get in Touch
              </h2>
              <p className="text-slate-300 mb-6 text-sm sm:text-base">
                Whether you’re a startup, MSME, or growing business, we’d love
                to explore how research-driven engineering and AI can unlock
                your next phase of growth.
              </p>

              <div className="space-y-3 sm:space-y-4 text-slate-300 text-sm sm:text-base">
                <p>
                  <span className="text-blue-400 font-medium">Email:</span>{" "}
                  contact@vimarshainvotech.com
                </p>
                <p>
                  <span className="text-blue-400 font-medium">Location:</span>{" "}
                  India (Serving Global Clients)
                </p>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="flex items-center justify-center">
              <div className="w-full bg-gradient-to-br from-blue-500/10 to-transparent border border-white/10 rounded-2xl p-6 sm:p-8 text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-slate-100">
                  Start a Conversation
                </h3>
                <p className="text-slate-300 mb-6 text-sm sm:text-base">
                  Share your idea or challenge, and we’ll get back with
                  thoughtful insights and next steps.
                </p>
                <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition text-sm sm:text-base">
                  Email Us
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
