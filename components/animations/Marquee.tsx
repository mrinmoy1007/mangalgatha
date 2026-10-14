'use client';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  className?: string;
  speed?: number; // base duration in seconds
}

export default function Marquee({
  items,
  direction = 'left',
  className = '',
  speed = 55,
}: MarqueeProps) {
  // Repeat text items so that each strip has plenty of content for seamless looping
  const repeatedText = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden marquee-container select-none ${className}`}>
      <div
        className={direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}
        style={{ animationDuration: `${speed}s` }}
      >
        {repeatedText.map((text, idx) => (
          <div key={idx} className="flex items-center whitespace-nowrap mx-5 text-inherit">
            <span>{text}</span>
            <span className="text-[#B08D57] ml-10 text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
