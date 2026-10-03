import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { weddingStoriesData } from '@/data/stories';
import SplitTextReveal from '@/components/animations/SplitTextReveal';
import Reveal from '@/components/animations/Reveal';
import MagneticButton from '@/components/animations/MagneticButton';

export const metadata: Metadata = {
  title: 'Wedding Stories & Chronicles | Mangalgatha Luxury Wedding Planners',
  description:
    'Step inside the real royal celebrations orchestrated by Mangalgatha across Udaipur, Jodhpur, Jaipur, Goa, and Mussoorie.',
};

export default function StoriesPage() {
  return (
    <div className="pt-24 bg-[#F8F4EC] text-[#1C1C1C]">
      {/* Header Banner */}
      <section className="py-20 lg:py-32 px-6 sm:px-10 lg:px-14 border-b border-[#B08D57]/20">
        <div className="max-w-[1520px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans font-medium">
              Real Auspicious Chronicles
            </span>
            <div className="w-12 h-[1px] bg-[#B08D57]" />
          </div>

          <div className="max-w-5xl">
            <SplitTextReveal
              lines={[
                'EVERY WEDDING IS A STORY.',
                'HERE ARE SOME WE WROTE.'
              ]}
              tag="h1"
              lineClassName="font-serif text-4xl sm:text-6xl lg:text-7xl font-light uppercase tracking-tight text-[#1C1C1C] leading-[1.08]"
            />
          </div>

          <p className="mt-8 font-serif italic text-xl sm:text-2xl text-[#5C1A1B] max-w-2xl font-light">
            An intimate anthology of unions forged within centuries-old citadels, lakeside palaces, and secluded shores.
          </p>
        </div>
      </section>

      {/* Stories Archive Masonry Grid */}
      <section className="py-20 lg:py-32 px-6 sm:px-10 lg:px-14">
        <div className="max-w-[1520px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {weddingStoriesData.map((story, idx) => (
            <Reveal key={story.slug} delay={idx * 0.1}>
              <Link
                href={`/stories/${story.slug}`}
                className="group block bg-[#EFE7DA]/50 border border-[#B08D57]/30 shadow-md hover:border-[#5C1A1B] transition-colors overflow-hidden"
                data-cursor="view"
                data-cursor-text="VIEW"
              >
                {/* Tall Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={story.coverImage}
                    alt={`${story.couple} — ${story.location}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#5C1A1B]/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.25em] text-[#8E7145] font-sans">
                    <span>{story.location}</span>
                    <span>{story.date}</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-wide font-light text-[#1C1C1C] group-hover:text-[#5C1A1B] transition-colors">
                    {story.couple}
                  </h2>

                  <p className="text-xs uppercase tracking-wider text-[#5C1A1B] font-sans">
                    {story.venue} · {story.guestCount}
                  </p>

                  <p className="text-xs text-[#555555] font-sans font-light leading-relaxed pt-2 line-clamp-2">
                    {story.excerpt}
                  </p>

                  <div className="pt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#5C1A1B] font-medium">
                    <span>Read Chronicle</span>
                    <span className="transform group-hover:translate-x-1.5 transition-transform">&rarr;</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 sm:px-10 lg:px-14 text-center bg-[#5C1A1B] text-[#F8F4EC] border-t border-[#B08D57]/30">
        <div className="max-w-2xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF7A] font-sans block">
            Your Auspicious Tale
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl uppercase tracking-tight font-light text-[#F8F4EC]">
            Ready to Write Your Wedding Story?
          </h2>
          <p className="text-xs sm:text-sm text-[#EFE7DA]/80 font-sans font-light leading-relaxed">
            We accept fifteen unions per year. Inquire early to secure your auspicious dates.
          </p>
          <div className="pt-4">
            <MagneticButton>
              <Link href="/contact" className="btn-luxury-light">
                Consult With Our Planners
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
