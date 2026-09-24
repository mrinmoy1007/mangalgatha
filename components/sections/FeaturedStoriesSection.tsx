'use client';

import Image from 'next/image';
import Link from 'next/link';
import { weddingStoriesData } from '@/data/stories';
import MagneticButton from '@/components/animations/MagneticButton';
import Reveal from '@/components/animations/Reveal';

export default function FeaturedStoriesSection() {
  // Take first 5-6 stories
  const featuredStories = weddingStoriesData.slice(0, 6);

  return (
    <section className="relative bg-[#EFE7DA] text-[#1C1C1C] py-28 lg:py-40 overflow-hidden border-b border-[#B08D57]/20">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#B08D57]/30 pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans">
                Real Auspicious Chronicles
              </span>
              <div className="w-12 h-[1px] bg-[#B08D57]" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight font-light text-[#1C1C1C]">
              Our Wedding Stories
            </h2>
          </div>

          <div className="hidden sm:block">
            <MagneticButton>
              <Link href="/stories" className="btn-luxury">
                View All Chronicles
              </Link>
            </MagneticButton>
          </div>
        </div>

        {/* Asymmetric Masonry-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {featuredStories.map((story, index) => {
            // Asymmetric layout span
            // Item 0: 7 cols
            // Item 1: 5 cols (offset)
            // Item 2: 4 cols
            // Item 3: 4 cols
            // Item 4: 4 cols
            // Item 5: 6 cols or 12 cols
            const colSpan =
              index === 0
                ? 'md:col-span-7'
                : index === 1
                ? 'md:col-span-5'
                : index === 2
                ? 'md:col-span-4'
                : index === 3
                ? 'md:col-span-4'
                : index === 4
                ? 'md:col-span-4'
                : 'md:col-span-6';

            const aspect =
              index === 0 ? 'aspect-[4/3] sm:aspect-[16/11]' : index === 1 ? 'aspect-[3/4]' : 'aspect-[4/5]';

            return (
              <div key={story.slug} className={colSpan}>
                <Reveal delay={index * 0.1}>
                  <Link
                    href={`/stories/${story.slug}`}
                    className="group block relative overflow-hidden border border-[#B08D57]/30 shadow-lg bg-[#F8F4EC]"
                    data-cursor="view"
                    data-cursor-text="VIEW"
                  >
                    {/* Image Container with 1.2s smooth scale on hover */}
                    <div className={`relative w-full ${aspect} overflow-hidden`}>
                      <Image
                        src={story.coverImage}
                        alt={`${story.couple} — ${story.location}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.08]"
                        referrerPolicy="no-referrer"
                      />

                      {/* Dark gradient overlay that deepens on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/90 via-[#1C1C1C]/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500" />

                      {/* Content overlay sliding up */}
                      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-[#F8F4EC]">
                        <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]">
                          {/* Location kicker */}
                          <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF7A] font-sans font-medium block mb-1">
                            {story.location} · {story.date}
                          </span>

                          {/* Couple Names */}
                          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wide font-light">
                            {story.couple}
                          </h3>

                          {/* Venue & Excerpt that reveals on hover */}
                          <p className="text-xs text-[#EFE7DA]/90 font-sans font-light mt-2 line-clamp-2 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            {story.excerpt}
                          </p>

                          {/* Read Story Link */}
                          <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#D4AF7A]">
                            <span>Read Story</span>
                            <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              </div>
            );
          })}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center sm:hidden">
          <Link href="/stories" className="btn-luxury w-full">
            View All Chronicles
          </Link>
        </div>
      </div>
    </section>
  );
}
