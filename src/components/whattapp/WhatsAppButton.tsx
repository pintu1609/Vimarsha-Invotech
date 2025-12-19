"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917903566217?text=Hello%20Vimarsha%20Invotech,%0AI%20came%20across%20your%20work%20and%20would%20like%20to%20discuss%20my%20project%20requirements.%20Could%20we%20connect%3F"
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
