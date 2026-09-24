'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('VIEW');
  const [isVisible, setIsVisible] = useState(false);

  const isPointerFine = useSyncExternalStore(
    (onStoreChange) => {
      const mql = window.matchMedia('(pointer: fine)');
      mql.addEventListener('change', onStoreChange);
      return () => mql.removeEventListener('change', onStoreChange);
    },
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches,
    () => false
  );

  useEffect(() => {
    if (!isPointerFine) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth lerp loop
    const render = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    // Event delegation for cursor modes
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || typeof target.closest !== 'function') return;

      const viewElement =
        target.closest('[data-cursor="view"]') ||
        target.closest('.swiper-slide') ||
        target.closest('.cursor-view-target') ||
        (target.tagName === 'IMG' && !target.closest('header') && !target.closest('button'));

      const customLabel = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');

      if (viewElement) {
        setIsHovered(true);
        setCursorText(customLabel || 'VIEW');
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isPointerFine]);

  if (!isPointerFine) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        opacity: isVisible ? 1 : 0,
      }}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 flex items-center justify-center ${
        isHovered
          ? 'w-20 h-20 bg-[#5C1A1B]/90 backdrop-blur-xs rounded-full border border-[#B08D57]/60 shadow-lg scale-100 transition-all duration-300'
          : 'w-3 h-3 bg-[#B08D57] rounded-full scale-100 transition-all duration-300'
      }`}
    >
      {isHovered && (
        <span
          ref={textRef}
          className="text-[9px] tracking-[0.25em] text-[#F8F4EC] font-sans font-medium uppercase select-none animate-in fade-in duration-200"
        >
          {cursorText}
        </span>
      )}
    </div>
  );
}
