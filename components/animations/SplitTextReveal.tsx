'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface SplitTextRevealProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'div';
}

export default function SplitTextReveal({
  lines,
  className = '',
  lineClassName = '',
  tag = 'div',
}: SplitTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lineElements = containerRef.current.querySelectorAll('.split-line-inner');

    if (prefersReducedMotion) {
      gsap.set(lineElements, { yPercent: 0, opacity: 1 });
      return;
    }

    gsap.fromTo(
      lineElements,
      {
        yPercent: 115,
        opacity: 0.2,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [lines]);

  const Tag = tag;

  return (
    <Tag ref={containerRef as unknown as React.RefObject<HTMLHeadingElement>} className={className}>
      {lines.map((line, idx) => (
        <span key={idx} className="block overflow-hidden py-0.5">
          <span className={`block split-line-inner ${lineClassName}`}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
