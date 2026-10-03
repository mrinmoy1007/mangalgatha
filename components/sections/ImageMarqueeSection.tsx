import fs from 'fs';
import path from 'path';
import ImageMarquee from '@/components/animations/ImageMarquee';
import Reveal from '@/components/animations/Reveal';

const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp']);
const EXCLUDED_PREFIXES = ['mglogo'];

function filenameToAlt(filename: string): string {
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

function getMarqueeImages() {
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
      alt: filenameToAlt(file),
    }));
}

export default function ImageMarqueeSection() {
  const images = getMarqueeImages();

  return (
    <section className="relative bg-[#EFE7DA] text-[#1C1C1C] py-20 lg:py-28 overflow-hidden border-b border-[#B08D57]/20">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 mb-10">
        <Reveal>
          <div className="flex items-center gap-3 justify-center">
            <div className="w-12 h-[1px] bg-[#B08D57]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans font-medium">
              Moments We&apos;ve Captured
            </span>
            <div className="w-12 h-[1px] bg-[#B08D57]" />
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <ImageMarquee images={images} direction="left" speed={55} />
      </Reveal>
    </section>
  );
}
