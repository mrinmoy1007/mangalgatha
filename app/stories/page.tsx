import type { Metadata } from 'next';
import SplitTextReveal from '@/components/animations/SplitTextReveal';
import Reveal from '@/components/animations/Reveal';
import GalleryLightbox from '@/components/ui/GalleryLightbox';
import { galleryImages } from '@/data/gallery';

export const metadata: Metadata = {
  title: 'Gallery | Mangalgatha Luxury Wedding Planners',
  description:
    'A visual archive of the celebrations, details and destinations brought to life by Mangalgatha.',
};

export default function StoriesPage() {
  const galleryItems = galleryImages.map((img) => ({ ...img, aspect: '3/4' }));

  return (
    <div className="pt-24 bg-[#F8F4EC] text-[#1C1C1C]">
      {/* Header Banner */}
      <section className="py-20 lg:py-32 px-6 sm:px-10 lg:px-14 border-b border-[#B08D57]/20">
        <div className="max-w-[1520px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans font-medium">
              Visual Archives
            </span>
            <div className="w-12 h-[1px] bg-[#B08D57]" />
          </div>

          <div className="max-w-5xl">
            <SplitTextReveal
              lines={[
                'A GALLERY OF',
                'AUSPICIOUS MOMENTS.'
              ]}
              tag="h1"
              lineClassName="font-serif text-4xl sm:text-6xl lg:text-7xl font-light uppercase tracking-tight text-[#1C1C1C] leading-[1.08]"
            />
          </div>

          <p className="mt-8 font-serif italic text-xl sm:text-2xl text-[#5C1A1B] max-w-2xl font-light">
            A curated look into the celebrations, details and destinations we&apos;ve brought to life.
          </p>
        </div>
      </section>

      {/* Full Image Gallery */}
      <section className="py-20 lg:py-32 px-6 sm:px-10 lg:px-14">
        <div className="max-w-[1520px] mx-auto">
          <Reveal>
            <GalleryLightbox items={galleryItems} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
