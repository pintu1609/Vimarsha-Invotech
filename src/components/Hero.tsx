// export default function Hero() {
//   return (
//     <section className="h-[80vh] flex items-center justify-center text-center px-6">
//       <div>
//         <h1 className="text-5xl font-bold mb-6">
//           Vimarsha Invotech
//         </h1>
//         <p className="text-xl text-gray-600 mb-8">
//           Coding Deep Insights into Scalable Digital Solutions
//         </p>
//         <a
//           href="/contact"
//           className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
//         >
//           Work With Us
//         </a>
//       </div>
//     </section>
//   );
// }
import AIIllustration from "@/components/AIIllustration";


import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="relative max-w-7xl w-full bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-14 grid md:grid-cols-2 gap-10">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Vimarsha Invotech:
            <br />
            Where Deep Insight Meets
            <span className="text-blue-600"> Digital Innovation.</span>
          </h1>

          <p className="text-gray-600 mb-8 max-w-md">
            We are Vimarsha Invotech—a company built at the confluence of deep
            research and scalable technology. Our mission is to solve complex
            business challenges with data-driven innovation.
          </p>

          <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Explore Our Solutions
          </button>
        </div>

        {/* Right Illustration */}
        <div className="relative flex items-center justify-center">
          <Image
            src="/image/homes.png"
            alt="AI Illustration"
            width={420}
            height={420}
            className="bg-blue"
          />
          {/* <div className="relative flex items-center justify-center">
  <AIIllustration />
</div> */}
        </div>
      </div>
    </section>
  );
}
