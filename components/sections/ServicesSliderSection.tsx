'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { EffectFade, Navigation, Autoplay } from 'swiper/modules';
import { servicesData } from '@/data/services';
import MagneticButton from '@/components/animations/MagneticButton';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function ServicesSliderSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const totalSlides = servicesData.length;

  return (
    <section className="relative w-full py-28 lg:py-36 bg-[#1C1C1C] text-[#F8F4EC] overflow-hidden">
      {/* Darkened Full-Width Atmospheric Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Untitled design 30.png"
          alt="Palace heritage architecture"
          fill
          sizes="100vw"
          className="object-cover opacity-20 filter grayscale contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C] via-[#1C1C1C]/90 to-[#1C1C1C]" />
      </div>

      <div className="relative z-10 max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#B08D57]/30 pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF7A] font-sans">
                Curated Disciplines
              </span>
              <div className="w-12 h-[1px] bg-[#B08D57]" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight font-light text-[#F8F4EC]">
              What We Curate
            </h2>
          </div>

          {/* Fraction Counter and Custom SVG Arrow Navigation */}
          <div className="flex items-center gap-8">
            <div className="font-serif text-lg tracking-widest text-[#D4AF7A]">
              <span>{String(activeIndex + 1).padStart(2, '0')}</span>
              <span className="text-[#B08D57]/40 mx-2">/</span>
              <span className="text-[#EFE7DA]/50">{String(totalSlides).padStart(2, '0')}</span>
            </div>

            {/* Custom SVG Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous Service"
                className="w-12 h-12 border border-[#B08D57]/40 flex items-center justify-center hover:border-[#D4AF7A] hover:bg-[#B08D57]/10 transition-all text-[#F8F4EC]"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next Service"
                className="w-12 h-12 border border-[#B08D57]/40 flex items-center justify-center hover:border-[#D4AF7A] hover:bg-[#B08D57]/10 transition-all text-[#F8F4EC]"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Swiper Slider with Fade Effect */}
        <Swiper
          modules={[EffectFade, Navigation, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
          loop={true}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          className="w-full"
        >
          {servicesData.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-4">
                {/* Left Content Column (7 cols) */}
                <div className="lg:col-span-7 space-y-8">
                  {/* Gold Number */}
                  <div className="font-serif text-6xl sm:text-7xl lg:text-8xl font-light text-[#B08D57]/80 leading-none">
                    {service.number}
                  </div>

                  {/* Service Title */}
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide text-[#F8F4EC] font-light">
                    {service.title}
                  </h3>

                  {/* Two-line Description */}
                  <p className="text-sm sm:text-base text-[#EFE7DA]/80 leading-relaxed font-sans font-light max-w-xl">
                    {service.shortDesc}
                  </p>

                  {/* Key Highlights list */}
                  <ul className="space-y-2 pt-2 border-t border-[#B08D57]/20 max-w-lg">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="text-xs uppercase tracking-[0.18em] text-[#D4AF7A] flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-[#B08D57] rotate-45 inline-block" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Explore Button */}
                  <div className="pt-4">
                    <MagneticButton>
                      <Link
                        href={`/services/${service.slug}`}
                        className="btn-luxury-light"
                      >
                        Explore Discipline
                      </Link>
                    </MagneticButton>
                  </div>
                </div>

                {/* Right Column: Tall Image with Clip-Path Reveal (5 cols) */}
                <div className="lg:col-span-5 relative" data-cursor="view" data-cursor-text="EXPLORE">
                  <div className="relative w-full aspect-[3/4] overflow-hidden shadow-2xl border border-[#B08D57]/30 group">
                    <Image
                      src={service.heroImage}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {/* Subtle aesthetic overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/60 via-transparent to-transparent pointer-events-none" />

                    {/* Corner accents */}
                    <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#D4AF7A]/60 pointer-events-none" />
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#D4AF7A]/60 pointer-events-none" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
