'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 1.0,
  y = 40,
}: RevealProps) {
  const elRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (typeof window === 'undefined' || !elRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(elRef.current, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      elRef.current,
      {
        opacity: 0,
        y: y,
      },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: elRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [delay, duration, y]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
}
