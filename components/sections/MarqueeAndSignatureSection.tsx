'use client';

import Image from 'next/image';
import Link from 'next/link';
import Marquee from '@/components/animations/Marquee';
import RotatingBadge from '@/components/ui/RotatingBadge';
import MagneticButton from '@/components/animations/MagneticButton';
import Reveal from '@/components/animations/Reveal';

export default function MarqueeAndSignatureSection() {
  const marqueeItems = [
    'DESTINATION WEDDINGS',
    'ROYAL CELEBRATIONS',
    'INTIMATE CEREMONIES',
    'HERITAGE PALACE CITADELS',
    'COUTURE SCENOGRAPHY'
  ];

  return (
    <section className="relative bg-[#F8F4EC] text-[#1C1C1C] py-24 lg:py-36 overflow-hidden border-b border-[#B08D57]/20">
      {/* Two Horizontal Opposite Marquee Bands */}
      <div className="space-y-4 mb-24 border-y border-[#B08D57]/30 py-8 bg-[#EFE7DA]/50">
        {/* Top Marquee scrolling left */}
        <Marquee
          items={marqueeItems}
          direction="left"
          speed={55}
          className="font-serif text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.18em] text-[#5C1A1B] font-light"
        />

        {/* Bottom Marquee scrolling right */}
        <Marquee
          items={marqueeItems}
          direction="right"
          speed={55}
          className="font-sans text-xs sm:text-sm uppercase tracking-[0.35em] text-[#8E7145] font-normal"
        />
      </div>

      {/* Signature Experience Feature */}
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Descriptive Text & Rotating Badge on Mobile/Desktop */}
          <div className="lg:col-span-6 space-y-8">
            <Reveal delay={0.1}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans font-medium">
                    The Signature Experience
                  </span>
                  <div className="w-12 h-[1px] bg-[#B08D57]" />
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight font-light text-[#1C1C1C] leading-[1.1]">
                  An Auspicious Union, Reimagined
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-sm sm:text-base text-[#555555] font-sans font-light leading-relaxed max-w-xl">
                Every wedding we craft is an orchestrated masterwork. We assign a dedicated Creative Director, an architectural spatial designer, a master floral artisan, and a senior protocol concierge to every single union.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <span className="font-serif text-xl text-[#B08D57] font-light">01</span>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#1C1C1C]">
                      Private Studio Access
                    </h4>
                    <p className="text-xs text-[#666666] font-light mt-0.5">
                      Direct liaison with royal custodians of Rajasthan, Michelin banqueting chefs, and bespoke couturiers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-serif text-xl text-[#B08D57] font-light">02</span>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#1C1C1C]">
                      Unseen Logistics Protocol
                    </h4>
                    <p className="text-xs text-[#666666] font-light mt-0.5">
                      Private airstrip charters, biometric luggage handling, and dedicated guest shadow concierges.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="pt-4 flex items-center gap-6">
                <MagneticButton>
                  <Link href="/about" className="btn-luxury">
                    Discover Our Process
                  </Link>
                </MagneticButton>
                {/* Rotating badge next to CTA on mobile/tablet */}
                <div className="lg:hidden">
                  <RotatingBadge size={100} textColor="#B08D57" subColor="#5C1A1B" />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Large Image with Rotating Badge Badge */}
          <div className="lg:col-span-6 relative">
            <Reveal delay={0.2}>
              <div
                className="relative w-full aspect-[4/5] overflow-hidden shadow-2xl border border-[#B08D57]/40 group"
                data-cursor="view"
                data-cursor-text="SIGNATURE"
              >
                <Image
                  src="/images/Untitled design 10.png"
                  alt="Mangalgatha signature royal bride"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#5C1A1B]/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Circular Rotating Badge (20s linear infinite) overlapping image */}
              <div className="hidden lg:block absolute -bottom-10 -left-10 z-20 drop-shadow-xl">
                <RotatingBadge size={150} textColor="#B08D57" subColor="#5C1A1B" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
