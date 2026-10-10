'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { studiosData } from '@/data/studios';
import MagneticButton from '@/components/animations/MagneticButton';
import Reveal from '@/components/animations/Reveal';

export default function LocationsSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (typeof window === 'undefined' || !bgRef.current || !containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Slow parallax on the full-width background image
    gsap.fromTo(
      bgRef.current,
      { yPercent: -15 },
      {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[750px] py-28 lg:py-36 flex items-center justify-center overflow-hidden bg-[#1C1C1C] text-[#F8F4EC]"
    >
      {/* Full-width Background Image with Slow Parallax */}
      <div ref={bgRef} className="absolute -inset-y-24 inset-x-0 z-0 h-[130%]">
        <Image
          src="/images/Untitled design 9.png"
          alt="Grand royal wedding venue illuminated under starlight"
          fill
          sizes="100vw"
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/80 to-[#1C1C1C]/90" />
      </div>

      <div className="relative z-10 max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 w-full">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <Reveal delay={0.1}>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-[#B08D57]" />

              <div className="w-12 h-[1px] bg-[#B08D57]" />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight font-light text-[#F8F4EC]">
              Celebrations Across India
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-sm sm:text-base text-[#EFE7DA]/85 font-sans font-light leading-relaxed">
              We welcome prospective couples by private appointment at our design studios in Delhi NCR and Kolkata to review material portfolios, botanical palettes, and custom wedding narratives.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="pt-4">
              <MagneticButton>
                <Link href="/contact" className="btn-luxury-light">
                  Find Us &amp; Book Consultation
                </Link>
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        {/* Studio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 pt-12 border-t border-[#B08D57]/30 max-w-4xl mx-auto">
          {studiosData.map((studio, idx) => (
            <Reveal key={studio.city} delay={0.2 + idx * 0.1}>
              <div className="border border-[#B08D57]/40 bg-[#1C1C1C]/60 backdrop-blur-xs p-6 sm:p-8 space-y-4 hover:border-[#D4AF7A] transition-colors group">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF7A] font-sans block">
                  {studio.badge}
                </span>
                <h3 className="font-serif text-2xl uppercase tracking-wider text-[#F8F4EC] font-light">
                  {studio.city}
                </h3>
                <p className="text-xs text-[#EFE7DA]/75 font-sans font-light leading-relaxed">
                  {studio.address}, {studio.landmark}
                </p>
                <p className="text-[11px] text-[#B08D57] font-sans font-light">
                  {studio.hours}
                </p>
                <div className="pt-2">
                  <a
                    href={studio.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[#D4AF7A] group-hover:text-[#F8F4EC] transition-colors"
                  >
                    <span>Get Directions</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
