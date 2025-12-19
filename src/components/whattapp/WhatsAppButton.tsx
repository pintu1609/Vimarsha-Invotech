"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9179035662217?text=Hello%20Vimarsha%20Invotech,%20I%20am%20interested%20in%20your%20software%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Vimarsha Invotech on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        bg-green-500 hover:bg-green-600
        text-white
        px-3 py-3 md:px-5 md:py-3
        rounded-full shadow-lg
        flex items-center gap-2
        transition transform hover:scale-105
      "
    >
      <FaWhatsapp size={30} />
      <span className="font-semibold hidden md:block">
        WhatsApp Us
      </span>
    </a>
  );
}
