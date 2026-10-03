'use client';

interface RotatingBadgeProps {
  size?: number;
  textColor?: string;
  subColor?: string;
  className?: string;
}

export default function RotatingBadge({
  size = 140,
  textColor = '#B08D57',
  subColor = '#5C1A1B',
  className = '',
}: RotatingBadgeProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Spinning circular SVG text */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full animate-spin-badge"
        style={{ transformOrigin: 'center center' }}
      >
        <defs>
          {/* Path for text to follow (circle of radius 72) */}
          <path
            id="badgeCirclePath"
            d="M 100, 100 m -72, 0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
          />
        </defs>

        <circle
          cx="100"
          cy="100"
          r="86"
          fill="none"
          stroke={textColor}
          strokeWidth="0.8"
          strokeOpacity="0.4"
        />

        <circle
          cx="100"
          cy="100"
          r="58"
          fill="none"
          stroke={textColor}
          strokeWidth="0.6"
          strokeOpacity="0.3"
        />

        <text
          fill={textColor}
          fontSize="11.5"
          letterSpacing="0.28em"
          fontFamily="var(--font-sans), sans-serif"
          fontWeight="400"
          className="uppercase"
        >
          <textPath href="#badgeCirclePath" startOffset="0%">
            ✦ MANGALGATHA ✦ LUXURY WEDDING PLANNERS ✦
          </textPath>
        </text>
      </svg>

      {/* Central Monogram मंगल गाथा in center */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span
          className="font-serif text-lg font-light tracking-widest"
          style={{ color: subColor }}
        >
          मंगल
        </span>
        <span className="font-hindi text-[8px] text-[#B08D57] -mt-1">
          गाथा
        </span>
      </div>
    </div>
  );
}
