import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
<section className="min-h-[calc(100vh-100px)] sm:min-h-screen flex items-center justify-center px-3 sm:px-6 mt-[80px] sm:mt-0">
      <div
        className="
          relative max-w-7xl w-full
          bg-white/90 backdrop-blur-xl
          rounded-2xl md:rounded-3xl
          shadow-2xl
          p-6 sm:p-10 md:p-14
          grid grid-cols-1 md:grid-cols-2
          gap-10
        "
      >
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1
            className="
              text-3xl sm:text-4xl md:text-4xl lg:text-5xl
              font-bold leading-tight mb-6 text-black
            "
          >
            Vimarsha Invotech:
            <br />
            Where Deep Insight Meets
            <span className="text-blue-600"> Digital Innovation.</span>
          </h1>

          <p
            className="
              text-gray-600 mb-8
              max-w-md mx-auto md:mx-0
              text-sm sm:text-base
            "
          >
            We are Vimarsha Invotech—a company built at the confluence of deep
            research and scalable technology. Our mission is to solve complex
            business challenges with data-driven innovation.
          </p>
                <Link
          href="/contact"
          >
          <button
            className="
              px-6 py-3
              bg-blue-600 text-white
              rounded-full
              hover:bg-blue-700 transition
              text-sm sm:text-base
            "
           
          >
             Discuss Your Project
          </button>
          </Link>
        </div>

        {/* Right Illustration */}
        <div className="relative flex items-center justify-center">
          <Image
            src="/image/homes.png"
            alt="AI Illustration"
            width={420}
            height={420}
            priority
            className="
              w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px]
              h-auto
            "
          />
          {/* <Image
  src="/image/homes.png"
  alt="AI Illustration"
  width={420}
  height={420}
  priority
  className="
    w-[200px]
    sm:w-[280px]
    md:w-[360px]
    lg:w-[420px]
    h-auto
  "
/> */}
        </div>
      </div>
    </section>
  );
}
