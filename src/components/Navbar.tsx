// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <header className="w-full border-b bg-white">
//       <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo / Brand */}
//         <Link href="/" className="text-xl font-bold">
//           Vimarsha Invotech
//         </Link>

//         {/* Navigation Links */}
//         <div className="hidden md:flex space-x-8 text-sm font-medium">
//           <Link href="/about" className="hover:text-gray-600">
//             About
//           </Link>
//           <Link href="/services" className="hover:text-gray-600">
//             Services
//           </Link>
//           <Link href="/vision" className="hover:text-gray-600">
//             Vision
//           </Link>
//           <Link href="/contact" className="hover:text-gray-600">
//             Contact
//           </Link>
//         </div>

//         {/* CTA Button */}
//         <Link
//           href="/contact"
//           className="hidden md:inline-block px-5 py-2 text-sm bg-black text-white rounded-md hover:bg-gray-800 transition"
//         >
//           Get in Touch
//         </Link>
//       </nav>
//     </header>
//   );
// }


import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between text-sm">
        <div className="text-xl font-bold text-blue-500">
       {/* <Link href="/" className="text-xl font-bold">

          VI
          <Image src="/public/image/logos.svg" alt="AI Illustration" width={50} height={50} />
        </Link> */}
       <Link href="/" className="flex items-center gap-2">
        {/*   <Image
  src="/image/logos.svg"
  alt="Vimarsha Invotech Logo"
  width={144}
  height={144}
  priority
  className="object-contain"
/> */}

          <span className="text-xl font-bold text-slate-100">
            V <span className="text-blue-400">I</span>
          </span>
        </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/vision">Vision</Link>    
          <Link href="/contact">Contact</Link>
        </div>

        <Link
          href="/contact"
          className="px-5 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}
