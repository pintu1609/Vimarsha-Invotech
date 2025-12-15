import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-10 px-4 sm:px-6 mb-10 flex items-center justify-center">
        <div
          className="
            relative max-w-7xl w-full mx-auto
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
            gap-6 md:gap-8
            bg-gray-200/80 backdrop-blur
            p-6 sm:p-8
            rounded-2xl
          "
        >
          {/* Card 1 */}
          <div className="group bg-white rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 transition-colors group-hover:text-blue-600 text-black">
              Deep Analysis
            </h3>
            <p className="text-gray-600 text-sm sm:text-base transition-colors group-hover:text-gray-700">
              Every solution starts with understanding the data, the business
              context, and the real problem beneath the surface.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 transition-colors group-hover:text-blue-600 text-black">
              Scalable Engineering
            </h3>
            <p className="text-gray-600 text-sm sm:text-base transition-colors group-hover:text-gray-700">
              We build robust full-stack systems using Next.js, MERN, and cloud
              architectures designed to scale to millions of users.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 transition-colors group-hover:text-blue-600 text-black">
              Applied AI
            </h3>
            <p className="text-gray-600 text-sm sm:text-base transition-colors group-hover:text-gray-700">
              From NLP-powered chatbots to intelligent automation, we apply AI
              where it creates real, measurable impact.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
