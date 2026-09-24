import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import SplitTextReveal from '@/components/animations/SplitTextReveal';
import Reveal from '@/components/animations/Reveal';
import MagneticButton from '@/components/animations/MagneticButton';

export const metadata: Metadata = {
  title: 'Curated Services | Mangalgatha Luxury Wedding Planners',
  description:
    'Explore Mangalgatha’s six signature wedding planning disciplines: Full Wedding Planning, Royal Destination Celebrations, Scenography, Pre-wedding revelry, Hospitality, and Entertainment.',
};

export default function ServicesPage() {
  return (
    <div className="pt-24 bg-[#F8F4EC] text-[#1C1C1C]">
      {/* Header Banner */}
      <section className="py-20 lg:py-32 px-6 sm:px-10 lg:px-14 border-b border-[#B08D57]/20">
        <div className="max-w-[1520px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans font-medium">
              Our Disciplines
            </span>
            <div className="w-12 h-[1px] bg-[#B08D57]" />
          </div>

          <div className="max-w-5xl">
            <SplitTextReveal
              lines={[
                'HAUTE ARCHITECTURE OF',
                'CELEBRATION AND REVERENCE.'
              ]}
              tag="h1"
              lineClassName="font-serif text-4xl sm:text-6xl lg:text-7xl font-light uppercase tracking-tight text-[#1C1C1C] leading-[1.08]"
            />
          </div>

          <p className="mt-8 font-serif italic text-xl sm:text-2xl text-[#5C1A1B] max-w-2xl font-light">
            Six disciplined practices calibrated to transform momentous unions into timeless royal art.
          </p>
        </div>
      </section>

      {/* Services List in Alternating Editorial Layout */}
      <section className="py-20 lg:py-32 px-6 sm:px-10 lg:px-14">
        <div className="max-w-[1520px] mx-auto space-y-28 lg:space-y-40">
          {servicesData.map((svc, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={svc.slug}
                id={svc.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center border-b border-[#B08D57]/20 pb-24"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-6 relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  data-cursor="view"
                  data-cursor-text="DISCOVER"
                >
                  <Reveal delay={0.1}>
                    <div className="relative w-full aspect-[4/5] overflow-hidden border border-[#B08D57]/40 shadow-xl group">
                      <Image
                        src={svc.heroImage}
                        alt={svc.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-[#5C1A1B]/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  </Reveal>
                </div>

                {/* Text Content Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <Reveal delay={0.1}>
                    <span className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-[#B08D57] block">
                      {svc.number}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide font-light text-[#1C1C1C] mt-2">
                      {svc.title}
                    </h2>
                  </Reveal>

                  <Reveal delay={0.2}>
                    <p className="font-serif italic text-lg sm:text-xl text-[#5C1A1B] leading-relaxed">
                      {svc.shortDesc}
                    </p>
                    <p className="text-xs sm:text-sm text-[#555555] font-sans font-light leading-relaxed mt-4">
                      {svc.fullDesc}
                    </p>
                  </Reveal>

                  {/* Highlights List */}
                  <Reveal delay={0.3}>
                    <div className="pt-2 space-y-2 border-t border-[#B08D57]/20">
                      {svc.features.map((feat, i) => (
                        <div key={i} className="text-xs uppercase tracking-[0.16em] text-[#1C1C1C] flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-[#B08D57] rotate-45 inline-block" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </Reveal>

                  {/* Explore Detail Page Link */}
                  <Reveal delay={0.4}>
                    <div className="pt-6">
                      <MagneticButton>
                        <Link
                          href={`/services/${svc.slug}`}
                          className="btn-luxury"
                        >
                          View Full Discipline
                        </Link>
                      </MagneticButton>
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 sm:px-10 lg:px-14 text-center bg-[#5C1A1B] text-[#F8F4EC] border-t border-[#B08D57]/30">
        <div className="max-w-2xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF7A] font-sans block">
            Bespoke Orchestration
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl uppercase tracking-tight font-light text-[#F8F4EC]">
            Craft Your Celebration With Our Curators
          </h2>
          <p className="text-xs sm:text-sm text-[#EFE7DA]/80 font-sans font-light leading-relaxed">
            Every union is custom mapped. Contact our studio to commence your narrative.
          </p>
          <div className="pt-4">
            <MagneticButton>
              <Link href="/contact" className="btn-luxury-light">
                Consult With A Specialist
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
