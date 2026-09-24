'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Template({ children }: { children: React.ReactNode }) {
  const isFirstMount = useRef(true);

  useEffect(() => {
    // Scroll to top on navigation
    window.scrollTo(0, 0);

    // Refresh ScrollTrigger after new page DOM has painted
    const timeout = setTimeout(() => {
      if (typeof window !== 'undefined') {
        ScrollTrigger.refresh();
      }
    }, 150);

    isFirstMount.current = false;
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* Route transition overlay */}
      <motion.div
        className="fixed inset-0 z-[9000] pointer-events-none bg-[#5C1A1B] flex flex-col items-center justify-center"
        initial={{ y: '100%' }}
        animate={{ y: '-100%' }}
        transition={{
          duration: 0.9,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <div className="flex flex-col items-center select-none">
          <svg className="w-12 h-12 text-[#B08D57]" viewBox="0 0 60 60" fill="currentColor">
            <path d="M 12 48 L 12 12 L 18 12 L 30 36 L 42 12 L 48 12 L 48 48 L 42 48 L 42 22 L 32 42 L 28 42 L 18 22 L 18 48 Z" />
          </svg>
          <span className="font-hindi text-[10px] text-[#F8F4EC] tracking-widest mt-1">
            मंगलगाथा
          </span>
        </div>
      </motion.div>

      {/* Children page content */}
      <main className="min-h-screen relative">{children}</main>
    </>
  );
}
