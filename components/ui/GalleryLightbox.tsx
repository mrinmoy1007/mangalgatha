'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  url: string;
  caption: string;
  aspect: string;
}

interface GalleryLightboxProps {
  items: GalleryItem[];
}

export default function GalleryLightbox({ items }: GalleryLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : items.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev! < items.length - 1 ? prev! + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, items.length]);

  // Lock background scroll while the lightbox is open
  useEffect(() => {
    if (selectedIndex === null) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [selectedIndex]);

  return (
    <>
      {/* Grid of gallery items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className="group cursor-pointer relative aspect-[3/4] overflow-hidden border border-[#B08D57]/30 shadow-md bg-[#1C1C1C]"
            data-cursor="view"
            data-cursor-text="ZOOM"
          >
            <Image
              src={item.url}
              alt={item.caption}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/80 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="absolute bottom-0 inset-x-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF7A] font-sans block">
                Archival Frame {String(idx + 1).padStart(2, '0')}
              </span>
              <p className="text-xs text-[#F8F4EC] font-serif italic mt-1 line-clamp-1">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Full-screen Lightbox Modal — portaled to <body> so it always covers the
          true viewport, even when a scroll-reveal ancestor has left a lingering
          CSS transform (which would otherwise turn "fixed" into "absolute"). */}
      {mounted && selectedIndex !== null && createPortal(
        <div
          className="fixed inset-0 z-[10000] bg-[#1C1C1C]/95 backdrop-blur-md flex flex-col justify-between p-6 sm:p-10 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedIndex(null);
          }}
        >
          {/* Top Bar with Caption & Close */}
          <div className="flex items-center justify-between text-[#F8F4EC] border-b border-[#B08D57]/30 pb-4">
            <div className="flex items-center gap-4">
              <span className="text-xs font-serif text-[#D4AF7A]">
                {selectedIndex + 1} / {items.length}
              </span>
              <span className="text-xs text-[#EFE7DA]/80 font-sans tracking-wider hidden sm:inline">
                {items[selectedIndex].caption}
              </span>
            </div>
            <button
              onClick={() => setSelectedIndex(null)}
              aria-label="Close Lightbox"
              className="p-2 border border-[#B08D57]/50 hover:bg-[#5C1A1B] text-[#F8F4EC] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Image Container */}
          <div
            className="relative flex-1 my-4 flex items-center justify-center"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedIndex(null);
            }}
          >
            <div className="relative max-w-5xl max-h-[75vh] w-full h-full flex items-center justify-center">
              <Image
                src={items[selectedIndex].url}
                alt={items[selectedIndex].caption}
                fill
                sizes="90vw"
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Bottom Bar with Arrows */}
          <div className="flex items-center justify-between border-t border-[#B08D57]/30 pt-4 text-[#F8F4EC]">
            <span className="text-xs font-sans tracking-widest text-[#D4AF7A] sm:hidden">
              {items[selectedIndex].caption}
            </span>
            <div className="flex items-center gap-3 ml-auto">
              <button
                onClick={() =>
                  setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : items.length - 1))
                }
                aria-label="Previous image"
                className="w-10 h-10 border border-[#B08D57]/50 flex items-center justify-center hover:bg-[#5C1A1B] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() =>
                  setSelectedIndex((prev) =>
                    prev! < items.length - 1 ? prev! + 1 : 0
                  )
                }
                aria-label="Next image"
                className="w-10 h-10 border border-[#B08D57]/50 flex items-center justify-center hover:bg-[#5C1A1B] transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
