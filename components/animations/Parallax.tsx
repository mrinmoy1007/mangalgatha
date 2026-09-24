'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number; // positive = moves down slower; negative = moves up
  className?: string;
}

export default function Parallax({
  children,
  speed = 0.2, // standard subtle parallax factor
  className = '',
}: ParallaxProps) {
  const targetRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (typeof window === 'undefined' || !targetRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(targetRef.current, { y: 0 });
      return;
    }

    const yMovement = speed * 120; // total px range

    gsap.fromTo(
      targetRef.current,
      {
        y: -yMovement / 2,
      },
      {
        y: yMovement / 2,
        ease: 'none',
        scrollTrigger: {
          trigger: targetRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, [speed]);

  return (
    <div ref={targetRef} className={className}>
      {children}
    </div>
  );
}
