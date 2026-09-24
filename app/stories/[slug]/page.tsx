import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { weddingStoriesData } from '@/data/stories';
import GalleryLightbox from '@/components/ui/GalleryLightbox';
import MagneticButton from '@/components/animations/MagneticButton';
import Reveal from '@/components/animations/Reveal';

interface StoryDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return weddingStoriesData.map((st) => ({
    slug: st.slug,
  }));
}

export async function generateMetadata({
  params,
}: StoryDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = weddingStoriesData.find((s) => s.slug === slug);
  if (!story) return { title: 'Story Not Found | Mangalgatha' };

  return {
    title: `${story.couple} — ${story.location} | Mangalgatha Stories`,
    description: story.excerpt,
  };
}

export default async function StoryDetailPage({ params }: StoryDetailPageProps) {
  const { slug } = await params;
  const story = weddingStoriesData.find((s) => s.slug === slug);

  if (!story) {
    notFound();
  }

  return (
    <div className="pt-24 bg-[#F8F4EC] text-[#1C1C1C]">
      {/* Hero Section */}
      <section className="relative min-h-[700px] lg:min-h-[800px] flex items-end pb-20 px-6 sm:px-10 lg:px-14 overflow-hidden border-b border-[#B08D57]/20">
        <Image
          src={story.coverImage}
          alt={story.couple}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-75 filter"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/50 to-transparent" />

        <div className="relative z-10 max-w-[1520px] mx-auto w-full text-[#F8F4EC]">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF7A] font-sans">
              {story.location}
            </span>
            <div className="w-12 h-[1px] bg-[#B08D57]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF7A] font-sans">
              {story.date}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight font-light text-[#F8F4EC] max-w-4xl leading-[1.05]">
            {story.couple}
          </h1>

          <p className="mt-4 font-sans text-xs sm:text-sm uppercase tracking-[0.2em] text-[#D4AF7A] font-light">
            Venue: {story.venue} · Attendance: {story.guestCount}
          </p>
        </div>
      </section>

      {/* Story Narrative & Quote */}
      <section className="py-24 lg:py-32 px-6 sm:px-10 lg:px-14 border-b border-[#B08D57]/20">
        <div className="max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Main Story Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans font-medium block">
              The Narrative
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-wide text-[#1C1C1C] font-light leading-snug">
              {story.excerpt}
            </h2>
            <div className="w-16 h-[1px] bg-[#B08D57] my-4" />
            <p className="text-sm sm:text-base text-[#444444] font-sans font-light leading-relaxed">
              {story.story}
            </p>

            {/* Testimonial Quote Callout */}
            <div className="pt-6">
              <blockquote className="border-l-2 border-[#5C1A1B] bg-[#EFE7DA]/50 p-6 sm:p-8 space-y-3">
                <span className="font-serif text-4xl text-[#B08D57] leading-none block">&ldquo;</span>
                <p className="font-serif italic text-xl text-[#5C1A1B] leading-relaxed">
                  {story.quote}
                </p>
                <cite className="block not-italic text-[10px] uppercase tracking-[0.25em] text-[#8E7145] font-sans font-medium pt-2">
                  — {story.quoteAuthor}
                </cite>
              </blockquote>
            </div>
          </div>

          {/* Highlights Box (5 cols) */}
          <div className="lg:col-span-5 border border-[#B08D57]/40 bg-[#EFE7DA]/40 p-8 sm:p-10 space-y-6 h-fit">
            <h3 className="font-serif text-2xl uppercase tracking-wider text-[#5C1A1B] font-light border-b border-[#B08D57]/30 pb-4">
              Curatorial Highlights
            </h3>
            <ul className="space-y-4">
              {story.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs uppercase tracking-[0.16em] text-[#1C1C1C]">
                  <span className="w-2 h-2 bg-[#B08D57] rotate-45 mt-0.5 inline-block shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-[#B08D57]/30">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#8E7145] font-sans block mb-1">
                Lead Planner
              </span>
              <span className="text-xs font-serif tracking-wider text-[#1C1C1C] block">
                Radhika Suryavanshi &amp; Master Floral Team
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Full Gallery with Lightbox */}
      <section className="py-24 lg:py-36 px-6 sm:px-10 lg:px-14 border-b border-[#B08D57]/20">
        <div className="max-w-[1520px] mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#B08D57]/30 pb-6 gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans block mb-1">
                Curated Frames
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-tight text-[#1C1C1C] font-light">
                {story.couple} Gallery
              </h2>
            </div>
            <span className="text-xs font-sans tracking-widest uppercase text-[#5C1A1B]">
              Click any image to enter full-screen lightbox
            </span>
          </div>

          <GalleryLightbox items={story.gallery} />
        </div>
      </section>

      {/* Return & Enquire CTA */}
      <section className="py-24 px-6 sm:px-10 lg:px-14 text-center bg-[#5C1A1B] text-[#F8F4EC]">
        <div className="max-w-2xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF7A] font-sans block">
            Your Auspicious Beginning
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl uppercase tracking-tight font-light text-[#F8F4EC]">
            Craft Your Tale With Mangalgatha
          </h2>
          <p className="text-xs sm:text-sm text-[#EFE7DA]/80 font-sans font-light leading-relaxed">
            Begin the conversation with our design directors.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5">
            <MagneticButton>
              <Link href="/contact" className="btn-luxury-light">
                Reserve Consultation
              </Link>
            </MagneticButton>
            <Link
              href="/stories"
              className="text-[11px] uppercase tracking-[0.22em] text-[#D4AF7A] hover:text-[#F8F4EC] transition-colors"
            >
              &larr; View All Wedding Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
