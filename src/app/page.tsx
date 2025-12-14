// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }


import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />

     

      <section className="py-8  px-4 mb-8  flex items-center justify-center ">
  <div className="relative max-w-7xl w-full mx-auto grid md:grid-cols-3 gap-8 bg-gray-400 p-8 rounded-2xl">

    {/* Card 1 */}
    <div className="group bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer">
      <h3 className="text-xl font-semibold mb-3 transition-colors group-hover:text-blue-600">
        Deep Analysis
      </h3>
      <p className="text-gray-600 transition-colors group-hover:text-gray-700">
        Every solution starts with understanding the data, the business context,
        and the real problem beneath the surface.
      </p>
    </div>

    {/* Card 2 */}
    <div className="group bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer">
      <h3 className="text-xl font-semibold mb-3 transition-colors group-hover:text-blue-600">
        Scalable Engineering
      </h3>
      <p className="text-gray-600 transition-colors group-hover:text-gray-700">
        We build robust full-stack systems using Next.js, MERN, and cloud
        architectures designed to scale to millions of users.
      </p>
    </div>

    {/* Card 3 */}
    <div className="group bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer">
      <h3 className="text-xl font-semibold mb-3 transition-colors group-hover:text-blue-600">
        Applied AI
      </h3>
      <p className="text-gray-600 transition-colors group-hover:text-gray-700">
        From NLP-powered chatbots to intelligent automation, we apply AI where
        it creates real, measurable impact.
      </p>
    </div>

  </div>
</section>

    </>
  );
}
