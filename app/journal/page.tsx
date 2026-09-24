import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { journalArticlesData } from '@/data/journal';
import SplitTextReveal from '@/components/animations/SplitTextReveal';
import Reveal from '@/components/animations/Reveal';

export const metadata: Metadata = {
  title: 'The Wedding Journal & Editorial Archives | Mangalgatha',
  description:
    'Essays and insights on palace scenography, royal Rajasthan logistics, and heritage Indian wedding gastronomy from the curators of Mangalgatha.',
};

export default function JournalPage() {
  return (
    <div className="pt-24 bg-[#F8F4EC] text-[#1C1C1C]">
      {/* Header Banner */}
      <section className="py-20 lg:py-32 px-6 sm:px-10 lg:px-14 border-b border-[#B08D57]/20">
        <div className="max-w-[1520px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans font-medium">
              The Wedding Journal
            </span>
            <div className="w-12 h-[1px] bg-[#B08D57]" />
          </div>

          <div className="max-w-5xl">
            <SplitTextReveal
              lines={[
                'DISCOURSES ON SCENOGRAPHY,',
                'HERITAGE & SACRED REVERENCE.'
              ]}
              tag="h1"
              lineClassName="font-serif text-4xl sm:text-6xl lg:text-7xl font-light uppercase tracking-tight text-[#1C1C1C] leading-[1.08]"
            />
          </div>

          <p className="mt-8 font-serif italic text-xl sm:text-2xl text-[#5C1A1B] max-w-2xl font-light">
            Reflections from behind the velvet curtain on the craftsmanship of India’s grandest celebrations.
          </p>
        </div>
      </section>

      {/* Journal Articles List */}
      <section className="py-20 lg:py-32 px-6 sm:px-10 lg:px-14">
        <div className="max-w-[1520px] mx-auto space-y-16">
          {journalArticlesData.map((article, idx) => (
            <Reveal key={article.slug} delay={idx * 0.1}>
              <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center border-b border-[#B08D57]/20 pb-16">
                <div
                  className="lg:col-span-5 relative aspect-[16/10] overflow-hidden border border-[#B08D57]/30 shadow-md group"
                  data-cursor="view"
                  data-cursor-text="READ"
                >
                  <Link href={`/journal/${article.slug}`}>
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-[#5C1A1B]/10 group-hover:bg-transparent transition-colors duration-300" />
                  </Link>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#8E7145] font-sans">
                    <span>{article.category}</span>
                    <span>·</span>
                    <span>{article.publishedDate}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wide font-light text-[#1C1C1C] hover:text-[#5C1A1B] transition-colors leading-tight">
                    <Link href={`/journal/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-[#555555] font-sans font-light leading-relaxed max-w-2xl">
                    {article.excerpt}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/journal/${article.slug}`}
                      className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#5C1A1B] font-medium hover:text-[#B08D57] transition-colors"
                    >
                      <span>Read Full Essay</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
