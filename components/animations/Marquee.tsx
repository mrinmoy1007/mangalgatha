'use client';

import { useEffect, useRef } from 'react';

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
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Read numeric scroll velocity to dynamically modify marquee playback rate
    let animFrame: number;

    const checkVelocity = () => {
      const currentVelocity =
        typeof window !== 'undefined'
          ? (window as unknown as { __scrollVelocity?: number }).__scrollVelocity || 0
          : 0;

      if (contentRef.current) {
        // Smoothly adjust animation duration
        const boost = Math.min(currentVelocity * 0.02, 0.5);
        const effectiveSpeed = Math.max(18, speed / (1 + boost));
        contentRef.current.style.animationDuration = `${effectiveSpeed}s`;
      }
      animFrame = requestAnimationFrame(checkVelocity);
    };

    animFrame = requestAnimationFrame(checkVelocity);
    return () => cancelAnimationFrame(animFrame);
  }, [speed]);

  // Repeat text items so that each strip has plenty of content for seamless looping
  const repeatedText = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden marquee-container select-none ${className}`}>
      <div
        ref={contentRef}
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
