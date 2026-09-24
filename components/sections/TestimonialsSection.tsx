'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import { testimonialsData } from '@/data/testimonials';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-[#F8F4EC] text-[#1C1C1C] py-28 lg:py-36 overflow-hidden border-b border-[#B08D57]/20">
      {/* Subtle background monogram watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#B08D57]/5 font-serif text-[280px] pointer-events-none select-none">
        M
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center relative z-10">
        {/* Large Gold Quotation Marks */}
        <div className="font-serif text-7xl sm:text-8xl text-[#B08D57] leading-none mb-4 select-none opacity-80">
          &ldquo;
        </div>

        {/* Testimonial Quote Slider */}
        <Swiper
          modules={[EffectFade, Autoplay, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          pagination={{
            clickable: true,
            el: '.testimonial-dots',
            bulletClass: 'w-2 h-2 rounded-full bg-[#B08D57]/30 inline-block mx-1.5 cursor-pointer transition-all duration-300',
            bulletActiveClass: '!w-6 !bg-[#5C1A1B]',
          }}
          className="w-full"
        >
          {testimonialsData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="space-y-8 py-2">
                {/* Centered Serif Quote */}
                <p className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-3xl font-light leading-relaxed text-[#1C1C1C] italic">
                  {item.quote}
                </p>

                {/* Couple and Location Details */}
                <div className="pt-4 space-y-1">
                  <h4 className="font-sans text-xs uppercase tracking-[0.25em] font-medium text-[#5C1A1B]">
                    {item.couple}
                  </h4>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#8E7145] font-sans font-light">
                    {item.venue} · {item.location}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dot Pagination */}
        <div className="testimonial-dots mt-10 flex items-center justify-center" />
      </div>
    </section>
  );
}
