'use client';

import Image from 'next/image';
import Link from 'next/link';
import SplitTextReveal from '@/components/animations/SplitTextReveal';
import Parallax from '@/components/animations/Parallax';
import Reveal from '@/components/animations/Reveal';
import MagneticButton from '@/components/animations/MagneticButton';

export default function IntroSection() {
  const statementLines = [
    'MANGALGATHA IS A LUXURY',
    'WEDDING PLANNING HOUSE',
    'CRAFTING TIMELESS CELEBRATIONS',
    'ACROSS INDIA AND BEYOND.'
  ];

  return (
    <section className="relative bg-[#F8F4EC] text-[#1C1C1C] py-28 lg:py-40 overflow-hidden border-b border-[#B08D57]/20">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Top Header Label with Gold Line */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans font-medium">
            Introduction
          </span>
          <div className="h-[1px] w-20 bg-[#B08D57]" />
        </div>

        {/* Large Uppercase Serif Statement (Split Text Reveal) */}
        <div className="mb-20 lg:mb-28 max-w-6xl">
          <SplitTextReveal
            lines={statementLines}
            tag="h2"
            lineClassName="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-light text-[#1C1C1C] uppercase tracking-tight"
          />
        </div>

        {/* Two Column Layout: Tall Parallax Image Left/Right + Descriptive Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Tall Image with Parallax (5 cols) */}
          <div className="lg:col-span-5 relative">
            <Parallax speed={0.25} className="w-full">
              <div
                className="relative w-full aspect-[3/4] overflow-hidden shadow-xl border border-[#B08D57]/30 group"
                data-cursor="view"
                data-cursor-text="STUDIO"
              >
                <Image
                  src="/images/Untitled design 40.png"
                  alt="Royal Indian wedding celebration by Mangalgatha"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#5C1A1B]/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </Parallax>

            {/* Subtle decorative gold corner */}
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b border-l border-[#B08D57] pointer-events-none" />
          </div>

          {/* Right Column: Paragraph, Philosophy details, and "READ OUR STORY" button (7 cols) */}
          <div className="lg:col-span-7 space-y-8 lg:pl-6">
            <Reveal delay={0.1}>
              <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#5C1A1B] font-semibold block">
                  The Auspicious Philosophy
                </span>
                <p className="font-serif text-xl sm:text-2xl text-[#1C1C1C] leading-relaxed font-light">
                  &ldquo;Mangalgatha&rdquo; translates to <em className="italic text-[#5C1A1B]">an auspicious story</em>. Founded in Delhi, our company operates at the nexus of sacred heritage and modern haute couture.
                </p>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-sans font-light max-w-xl">
                  We believe royal Indian ceremonies need not be loud to be unforgettable. By stripping away superficial excess and commissioning the finest artisans, botanists, and sound architects, we transform palaces and private shores into timeless sanctuaries of quiet grandeur.
                </p>
              </div>
            </Reveal>

            {/* Micro stats / distinctions */}
            <Reveal delay={0.25}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-[#B08D57]/20">
                <div>
                  <span className="font-serif text-3xl text-[#5C1A1B] block font-light">220+</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#8E7145] font-sans">
                    Singular Celebrations
                  </span>
                </div>
                <div>
                  <span className="font-serif text-3xl text-[#5C1A1B] block font-light">12</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#8E7145] font-sans">
                    Years of Provenance
                  </span>
                </div>
                <div>
                  <span className="font-serif text-3xl text-[#5C1A1B] block font-light">14</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#8E7145] font-sans">
                    Global Destinations
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Action button */}
            <Reveal delay={0.35}>
              <div className="pt-4">
                <MagneticButton>
                  <Link href="/about" className="btn-luxury">
                    Read Our Story
                  </Link>
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
