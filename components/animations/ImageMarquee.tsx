'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface ImageMarqueeProps {
  images: { url: string; alt: string }[];
  direction?: 'left' | 'right';
  speed?: number; // base duration in seconds
  itemClassName?: string;
}

export default function ImageMarquee({
  images,
  direction = 'left',
  speed = 20,
  itemClassName = 'w-55 h-68 sm:w-52 sm:h-64',
}: ImageMarqueeProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Read numeric scroll velocity so the strip subtly speeds up while the page scrolls
    let animFrame: number;

    const checkVelocity = () => {
      const currentVelocity =
        typeof window !== 'undefined'
          ? (window as unknown as { __scrollVelocity?: number }).__scrollVelocity || 0
          : 0;

      if (contentRef.current) {
        const boost = Math.min(currentVelocity * 0.02, 0.5);
        const effectiveSpeed = Math.max(18, speed / (1 + boost));
        contentRef.current.style.animationDuration = `${effectiveSpeed}s`;
      }
      animFrame = requestAnimationFrame(checkVelocity);
    };

    animFrame = requestAnimationFrame(checkVelocity);
    return () => cancelAnimationFrame(animFrame);
  }, [speed]);

  // Repeat so the strip has plenty of content for a seamless loop
  const repeatedImages = [...images, ...images, ...images];

  return (
    <div className="overflow-hidden marquee-container select-none">
      <div
        ref={contentRef}
        className={`flex items-center gap-5 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {repeatedImages.map((img, idx) => (
          <div
            key={idx}
            className={`relative shrink-0 overflow-hidden border border-[#B08D57]/30 shadow-md ${itemClassName}`}
          >
            <Image
              src={img.url}
              alt={img.alt}
              fill
              sizes="300px"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#5C1A1B]/10" />
          </div>
        ))}
      </div>
    </div>
  );
}
