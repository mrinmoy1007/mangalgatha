'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '@/components/animations/MagneticButton';
import Link from 'next/link';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerMediaRef = useRef<HTMLDivElement>(null);
  const leftGroupRef = useRef<HTMLDivElement>(null);
  const rightGroupRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.innerWidth < 1024;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Initial entrance animation on load / after preloader
    const introTl = gsap.timeline({ delay: 0.2 });
    introTl.fromTo(
      '.hero-stagger-img',
      { scale: 1.15, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.6, stagger: 0.15, ease: 'power3.out' }
    );
    introTl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.3, ease: 'power3.out' },
      '-=1.2'
    );
    introTl.fromTo(
      scrollIndicatorRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.out' },
      '-=0.8'
    );

    // If mobile or reduced motion, do not apply pinning scrub
    if (isMobile || prefersReducedMotion) {
      return;
    }

    // Pinned cinematic scrub
    const scrubTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: 1.2,
        anticipatePin: 1,
      },
    });

    // Center video/media scales up to fill viewport
    scrubTl
      .to(
        centerMediaRef.current,
        {
          width: '100vw',
          height: '100vh',
          maxWidth: '100vw',
          maxHeight: '100vh',
          borderRadius: 0,
          scale: 1.05,
          ease: 'power2.inOut',
        },
        0
      )
      // Side images drift outward and fade
      .to(
        leftGroupRef.current,
        {
          xPercent: -130,
          opacity: 0,
          ease: 'power2.inOut',
        },
        0
      )
      .to(
        rightGroupRef.current,
        {
          xPercent: 130,
          opacity: 0,
          ease: 'power2.inOut',
        },
        0
      )
      // Headline fades and moves up
      .to(
        headlineRef.current,
        {
          y: -120,
          opacity: 0,
          ease: 'power2.in',
        },
        0
      )
      .to(
        scrollIndicatorRef.current,
        {
          opacity: 0,
          ease: 'power2.in',
        },
        0
      );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen h-screen flex flex-col justify-between items-center bg-[#5C1A1B] text-[#F8F4EC] overflow-hidden pt-28 pb-10"
    >
      {/* Background radial gradient to give cinematic luxury depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5C1A1B] via-[#5C1A1B]/40 to-[#5C1A1B] pointer-events-none z-0" />

      {/* Main Collage Layout */}
      <div className="relative z-10 w-full max-w-[1520px] mx-auto px-4 sm:px-8 flex-1 flex items-center justify-center">
        {/* Left Side Images (Two staggered portrait photos) */}
        <div
          ref={leftGroupRef}
          className="hidden lg:flex flex-col gap-8 absolute left-4 xl:left-12 top-1/2 -translate-y-1/2 z-10 pointer-events-none"
        >
          {/* Top Left Image */}
          <div className="w-44 xl:w-56 aspect-[3/4] relative overflow-hidden shadow-2xl border border-[#B08D57]/30 hero-stagger-img -translate-y-6">
            <Image
              src="/images/Untitled design 14.png"
              alt="Indian royal couture bride in crimson lehenga"
              fill
              priority
              sizes="(max-width: 1280px) 176px, 224px"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#5C1A1B]/15" />
          </div>

          {/* Bottom Left Image */}
          <div className="w-36 xl:w-48 aspect-[2/3] relative overflow-hidden shadow-2xl border border-[#B08D57]/30 hero-stagger-img translate-x-8 translate-y-6">
            <Image
              src="/images/Untitled design 38.png"
              alt="Sacred Indian wedding mandap with fresh floral blooms"
              fill
              sizes="(max-width: 1280px) 144px, 192px"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#5C1A1B]/15" />
          </div>
        </div>

        {/* Center Media (Centered Portrait Video / Cinematic Loop with Poster) */}
        <div
          ref={centerMediaRef}
          className="w-[85vw] sm:w-[50vw] lg:w-[28vw] max-w-[420px] aspect-[9/15] relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-[#B08D57]/50 z-20 transition-all hero-stagger-img"
          data-cursor="view"
          data-cursor-text="PLAY"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-poster.jpg"
            className="w-full h-full object-cover scale-105"
          >
            <source src="/videos/hero-vid.mp4" type="video/mp4" />
          </video>
          {/* Subtle warm overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/80 via-transparent to-[#1C1C1C]/30 pointer-events-none" />

          {/* Center media badge */}
          <div className="absolute bottom-6 left-0 right-0 text-center px-4 pointer-events-none">
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF7A] font-sans">
              · Mangalgatha ·
            </span>
          </div>
        </div>

        {/* Right Side Images (Two staggered portrait photos) */}
        <div
          ref={rightGroupRef}
          className="hidden lg:flex flex-col gap-8 absolute right-4 xl:right-12 top-1/2 -translate-y-1/2 z-10 pointer-events-none"
        >
          {/* Top Right Image */}
          <div className="w-36 xl:w-48 aspect-[2/3] relative overflow-hidden shadow-2xl border border-[#B08D57]/30 hero-stagger-img -translate-x-6 -translate-y-8">
            <Image
              src="/images/Untitled design 20.png"
              alt="Couture bridal emerald polki jewelry and veil"
              fill
              sizes="(max-width: 1280px) 144px, 192px"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#5C1A1B]/15" />
          </div>

          {/* Bottom Right Image */}
          <div className="w-44 xl:w-56 aspect-[3/4] relative overflow-hidden shadow-2xl border border-[#B08D57]/30 hero-stagger-img translate-y-8">
            <Image
              src="/images/Untitled design.png"
              alt="Royal palace illuminated for luxury wedding celebrations"
              fill
              sizes="(max-width: 1280px) 176px, 224px"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#5C1A1B]/15" />
          </div>
        </div>

        {/* Serif Overlay Headline across Center */}
        <div
          ref={headlineRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-30 px-4"
        >
          <div className="space-y-3 max-w-4xl">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#D4AF7A] font-sans block drop-shadow-md">
              Luxury Wedding Celebrations
            </span>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,6rem)] leading-[1.05] tracking-tight font-light  text-[#F8F4EC] drop-shadow-xl">
              Every Wedding Is A{' '}
              <span className="italic font-normal text-[#D4AF7A] uppercase">STORY</span>
            </h1>
            <p className="text-xs sm:text-sm tracking-[0.22em] text-[#EFE7DA]/90 uppercase font-sans max-w-xl mx-auto drop-shadow-md pt-2">
              We design yours with elegance and distinction.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Row: CTA & "Scroll to Explore" with animated vertical line */}
      <div
        ref={scrollIndicatorRef}
        className="relative z-20 w-full max-w-[1520px] mx-auto px-6 sm:px-14 flex items-end justify-between"
      >
        <div className="hidden sm:block">
          <MagneticButton>
            <Link
              href="/contact"
              className="btn-luxury-light text-[10px]"
            >
              Contact Us
            </Link>
          </MagneticButton>
        </div>

        {/* Animated Scroll to Explore */}
        <div className="mx-auto sm:mr-0 flex flex-col items-center gap-2 select-none">
          <span className="text-[9px] uppercase tracking-[0.28em] text-[#D4AF7A] font-sans">
            Scroll To Explore
          </span>
          <div className="w-[1px] h-10 bg-[#B08D57]/30 relative overflow-hidden">
            <div className="w-full h-1/2 bg-[#D4AF7A] absolute top-0 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
