'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '@/components/animations/MagneticButton';
import Reveal from '@/components/animations/Reveal';

export default function SplitCTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Opposite parallax on scroll: left image moves down-to-up, right moves up-to-down
    gsap.fromTo(
      leftImageRef.current,
      { y: 60 },
      {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      rightImageRef.current,
      { y: -60 },
      {
        y: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#EFE7DA] text-[#1C1C1C] py-28 lg:py-40 overflow-hidden border-b border-[#B08D57]/20"
    >
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Tall Image (3 cols) */}
          <div className="hidden lg:block lg:col-span-3">
            <div
              ref={leftImageRef}
              className="relative w-full aspect-[2/3] overflow-hidden shadow-xl border border-[#B08D57]/30"
              data-cursor="view"
              data-cursor-text="MEWAR"
            >
              <Image
                src="/images/Untitled design 40.png"
                alt="Intricate bridal henna and wedding rituals"
                fill
                sizes="25vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#5C1A1B]/10 pointer-events-none" />
            </div>
          </div>

          {/* Center Column: Centered Text & Button (6 cols) */}
          <div className="lg:col-span-6 text-center space-y-8 px-4">
            <Reveal delay={0.1}>
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#8E7145] font-sans font-medium block">
                  Private Commissions
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight font-light leading-[1.1] text-[#1C1C1C]">
                  Let Us Plan The Celebration Of A Lifetime
                </h2>
                <div className="w-16 h-[1px] bg-[#B08D57] mx-auto mt-6" />
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="font-serif italic text-lg sm:text-xl text-[#5C1A1B] max-w-md mx-auto leading-relaxed">
               Curating a select number of celebrations each year, ensuring every detail receives our undivided attention.
               </p>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5">
                <MagneticButton>
                  <Link
                    href="/contact"
                    className="btn-luxury-maroon text-xs"
                  >
                    Speak To A Wedding Specialist
                  </Link>
                </MagneticButton>
                <Link
                  href="/stories"
                  className="text-[11px] uppercase tracking-[0.22em] text-[#1C1C1C] hover:text-[#5C1A1B] underline underline-offset-8 transition-colors"
                >
                  Explore Archives
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Tall Image (3 cols) */}
          <div className="hidden lg:block lg:col-span-3">
            <div
              ref={rightImageRef}
              className="relative w-full aspect-[2/3] overflow-hidden shadow-xl border border-[#B08D57]/30"
              data-cursor="view"
              data-cursor-text="PALACE"
            >
              <Image
                src="/images/udaipur wedding.png"
                alt="Candlelit luxury wedding banquet tablescape"
                fill
                sizes="25vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#5C1A1B]/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
