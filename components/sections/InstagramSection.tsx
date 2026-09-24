'use client';

import Image from 'next/image';
import { instagramData } from '@/data/instagram';
import { Instagram, Play } from 'lucide-react';

export default function InstagramSection() {
  return (
    <section className="relative bg-[#EFE7DA] text-[#1C1C1C] py-24 lg:py-32 overflow-hidden border-b border-[#B08D57]/20">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Heading linking to Instagram */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans block">
            Visual Curations
          </span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-serif text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#1C1C1C] hover:text-[#5C1A1B] transition-colors"
          >
            <span>@mangalgatha</span>
            <Instagram className="w-6 h-6 text-[#B08D57] group-hover:scale-110 transition-transform" />
          </a>
          <p className="text-xs font-sans tracking-[0.2em] text-[#666666] uppercase">
            Follow our daily chronicles of Indian couture weddings
          </p>
        </div>

        {/* 6-image grid (horizontally scrollable on mobile) */}
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-none snap-x">
          {instagramData.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex-shrink-0 w-64 md:w-auto aspect-[4/5] overflow-hidden border border-[#B08D57]/30 shadow-xs bg-[#F8F4EC] snap-start"
              data-cursor="view"
              data-cursor-text="INSTA"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                sizes="(max-width: 768px) 256px, 16vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                referrerPolicy="no-referrer"
              />

              {/* Hover Darken Overlay */}
              <div className="absolute inset-0 bg-[#5C1A1B]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-[#F8F4EC] text-center">
                {post.type === 'reel' ? (
                  <div className="w-10 h-10 rounded-full border border-[#B08D57] flex items-center justify-center mb-2">
                    <Play className="w-4 h-4 text-[#D4AF7A] fill-current ml-0.5" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full border border-[#B08D57] flex items-center justify-center mb-2">
                    <Instagram className="w-5 h-5 text-[#D4AF7A]" />
                  </div>
                )}
                <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-[#D4AF7A] font-medium">
                  {post.likes} Likes
                </span>
                <p className="text-[10px] text-[#EFE7DA] font-sans font-light mt-1 line-clamp-2">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
