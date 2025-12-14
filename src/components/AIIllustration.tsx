export default function AIIllustration() {
  return (
    <svg
      width="420"
      height="420"
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-2xl"
    >
      {/* Platform */}
      <rect
        x="60"
        y="260"
        width="300"
        height="40"
        rx="20"
        fill="#0F172A"
      />

      {/* Brain */}
      <path
        d="M210 90C170 90 140 120 140 160C140 200 170 230 210 230C250 230 280 200 280 160C280 120 250 90 210 90Z"
        fill="url(#brainGradient)"
      />

      {/* Neural Lines */}
      <circle cx="180" cy="150" r="4" fill="#38BDF8" />
      <circle cx="240" cy="140" r="4" fill="#38BDF8" />
      <circle cx="210" cy="180" r="4" fill="#38BDF8" />

      <line x1="180" y1="150" x2="210" y2="180" stroke="#38BDF8" />
      <line x1="240" y1="140" x2="210" y2="180" stroke="#38BDF8" />

      {/* Cloud */}
      <path
        d="M300 120C320 120 335 135 335 155C355 160 360 185 345 200H275C255 200 250 170 265 160C265 140 280 120 300 120Z"
        fill="#60A5FA"
      />

      {/* Connections */}
      <line x1="210" y1="230" x2="210" y2="260" stroke="#38BDF8" />
      <line x1="300" y1="160" x2="260" y2="200" stroke="#38BDF8" />

      {/* Gradient */}
      <defs>
        <linearGradient
          id="brainGradient"
          x1="140"
          y1="90"
          x2="280"
          y2="230"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#38BDF8" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
      </defs>
    </svg>
  );
}
