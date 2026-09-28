'use client';

import { useEffect, useState, useRef, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function Preloader() {
  const [shouldShow, setShouldShow] = useState(false);
  const [progress, setProgress] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  useEffect(() => {
    // Check session storage
    const hasSeen = typeof window !== 'undefined' && sessionStorage.getItem('mangalgatha_preloader_seen');
    if (hasSeen) {
      window.dispatchEvent(new CustomEvent('preloader:complete'));
      return;
    }

    // Set show flag inside timer/animation cycle
    const startTimer = setTimeout(() => {
      setShouldShow(true);
    }, 0);

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 3;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setProgress(100);

        // Animate out overlay with GSAP
        setTimeout(() => {
          if (overlayRef.current) {
            const tl = gsap.timeline({
              onComplete: () => {
                sessionStorage.setItem('mangalgatha_preloader_seen', 'true');
                setShouldShow(false);
                window.dispatchEvent(new CustomEvent('preloader:complete'));
              },
            });

            tl.to(contentRef.current, {
              opacity: 0,
              y: -30,
              duration: 0.6,
              ease: 'power3.in',
            }).to(
              overlayRef.current,
              {
                yPercent: -100,
                duration: 1.1,
                ease: 'power3.inOut',
              },
              '-=0.2'
            );
          }
        }, 300);
      } else {
        setProgress(current);
      }
    }, 40);

    return () => {
      clearTimeout(startTimer);
      clearInterval(interval);
    };
  }, []);

  if (!isClient || !shouldShow) return null;

  // Circumference for r=45 is 2 * PI * 45 = 282.74
  const circumference = 282.74;
  const strokeDashoffset = circumference - (circumference * progress) / 100;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#F8F4EC] text-[#1C1C1C] select-none"
    >
      <div ref={contentRef} className="flex flex-col items-center">
        {/* Monogram and animated drawing circle */}
        <div className="relative w-36 h-36 flex items-center justify-center mb-8">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#B08D57"
              strokeWidth="0.8"
              opacity="0.25"
            />
            <circle
              ref={circleRef}
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#B08D57"
              strokeWidth="1.2"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-[stroke-dashoffset] duration-100 ease-out"
            />
          </svg>

          {/* Central Luxury Monogram "M" */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <svg
              className="w-14 h-14 text-[#5C1A1B]"
              viewBox="0 0 60 60"
              fill="currentColor"
            >
              <path d="M 12 48 L 12 12 L 18 12 L 30 36 L 42 12 L 48 12 L 48 48 L 42 48 L 42 22 L 32 42 L 28 42 L 18 22 L 18 48 Z" />
            </svg>
            <span className="font-hindi text-[11px] text-[#B08D57] tracking-widest mt-1">
              मंगलगाथा
            </span>
          </div>
        </div>

        {/* Brand Logo & Counter */}
        <div className="text-center space-y-2">
          <Image
            src="/images/mglogo.png"
            alt="Mangalgatha"
            width={2000}
            height={1000}
            priority
            className="w-64 h-auto sm:w-72"
          />
          <div className="pt-4 font-sans text-xs tracking-[0.25em] text-[#1C1C1C]">
            {progress.toString().padStart(2, '0')}%
          </div>
        </div>
      </div>
    </div>
  );
}
