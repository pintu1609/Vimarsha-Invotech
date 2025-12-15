"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between text-sm bg-black/90 md:bg-transparent">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-slate-100">
            V <span className="text-blue-400">I</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <Link href="/about" className="hover:text-white">About Us</Link>
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/vision" className="hover:text-white">Vision</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block px-5 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Get Started
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur border-t border-white/10">
          <div className="flex flex-col items-center gap-6 pb-6 pt-2 text-gray-300">
            <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/vision" onClick={() => setOpen(false)}>Vision</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-6 py-2 rounded-full bg-blue-500 text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
