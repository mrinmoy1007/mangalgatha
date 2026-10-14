'use client';

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
  // Repeat so the strip has plenty of content for a seamless loop
  const repeatedImages = [...images, ...images, ...images];

  return (
    <div className="overflow-hidden marquee-container select-none">
      <div
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
