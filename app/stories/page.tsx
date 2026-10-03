import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import SplitTextReveal from '@/components/animations/SplitTextReveal';
import Reveal from '@/components/animations/Reveal';
import GalleryLightbox from '@/components/ui/GalleryLightbox';

export const metadata: Metadata = {
  title: 'Gallery | Mangalgatha Luxury Wedding Planners',
  description:
    'A visual archive of the celebrations, details and destinations brought to life by Mangalgatha.',
};

const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp']);
const EXCLUDED_PREFIXES = ['mglogo'];

function filenameToCaption(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, '');
  if (/^untitled design/i.test(base)) {
    return 'Mangalgatha Celebration';
  }
  return base
    .replace(/[-_]+/g, ' ')
    .replace(/decore/gi, 'décor')
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function getGalleryImages() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const files = fs.readdirSync(imagesDir);

  return files
    .filter((file) => {
      const ext = path.extname(file).toLowerCase();
      if (!IMAGE_EXTENSIONS.has(ext)) return false;
      const lower = file.toLowerCase();
      return !EXCLUDED_PREFIXES.some((prefix) => lower.startsWith(prefix));
    })
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
    .map((file) => ({
      url: `/images/${file}`,
      caption: filenameToCaption(file),
      aspect: '3/4',
    }));
}

export default function StoriesPage() {
  const galleryItems = getGalleryImages();

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
