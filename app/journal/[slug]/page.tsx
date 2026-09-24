import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { journalArticlesData } from '@/data/journal';
import MagneticButton from '@/components/animations/MagneticButton';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return journalArticlesData.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = journalArticlesData.find((a) => a.slug === slug);
  if (!article) return { title: 'Article Not Found | Mangalgatha' };

  return {
    title: `${article.title} | Mangalgatha Journal`,
    description: article.excerpt,
  };
}

export default async function JournalDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = journalArticlesData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="pt-24 bg-[#F8F4EC] text-[#1C1C1C]">
      {/* Article Header */}
      <section className="py-20 lg:py-28 px-6 sm:px-10 lg:px-14 border-b border-[#B08D57]/20 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#8E7145] font-sans mb-6">
          <span>{article.category}</span>
          <span>·</span>
          <span>{article.publishedDate}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#1C1C1C] font-light leading-tight">
          {article.title}
        </h1>

        <p className="mt-6 font-serif italic text-xl sm:text-2xl text-[#5C1A1B] font-light leading-relaxed">
          {article.excerpt}
        </p>
      </section>

      {/* Featured Cover Image */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 my-12">
        <div className="relative aspect-[16/9] overflow-hidden border border-[#B08D57]/40 shadow-xl">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Article Body Prose */}
      <section className="py-12 px-6 sm:px-10 max-w-3xl mx-auto space-y-6 border-b border-[#B08D57]/20 pb-20">
        {article.content.map((paragraph, index) => (
          <p key={index} className="text-base sm:text-lg text-[#333333] font-sans font-light leading-relaxed">
            {paragraph}
          </p>
        ))}

        <div className="pt-8 border-t border-[#B08D57]/30 flex items-center justify-between text-xs font-sans text-[#8E7145] uppercase tracking-widest">
          <span>Authored by Radhika Suryavanshi</span>
          <Link href="/journal" className="text-[#5C1A1B] hover:text-[#B08D57] underline">
            &larr; Back to Journal
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 sm:px-10 text-center bg-[#EFE7DA]">
        <div className="max-w-2xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans block">
            The Studio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-tight text-[#1C1C1C] font-light">
            Commission Mangalgatha for Your Celebration
          </h2>
          <div className="pt-2">
            <MagneticButton>
              <Link href="/contact" className="btn-luxury-maroon">
                Reserve A Consultation
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
