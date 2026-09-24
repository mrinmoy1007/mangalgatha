import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { destinationsData } from '@/data/destinations';
import SplitTextReveal from '@/components/animations/SplitTextReveal';
import Reveal from '@/components/animations/Reveal';
import MagneticButton from '@/components/animations/MagneticButton';

export const metadata: Metadata = {
  title: 'Royal Destinations | Mangalgatha Luxury Wedding Planners',
  description:
    'Discover our global destination wedding portfolios across Udaipur, Jaipur, Jodhpur, Goa, the Himalayas, Lake Como, and Dubai.',
};

export default function DestinationsPage() {
  return (
    <div className="pt-24 bg-[#F8F4EC] text-[#1C1C1C]">
      {/* Header Banner */}
      <section className="py-20 lg:py-32 px-6 sm:px-10 lg:px-14 border-b border-[#B08D57]/20">
        <div className="max-w-[1520px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans font-medium">
              Geographies of Reverence
            </span>
            <div className="w-12 h-[1px] bg-[#B08D57]" />
          </div>

          <div className="max-w-5xl">
            <SplitTextReveal
              lines={[
                'PALATIAL CITADELS AND',
                'SECLUDED COASTAL SANCTUARIES.'
              ]}
              tag="h1"
              lineClassName="font-serif text-4xl sm:text-6xl lg:text-7xl font-light uppercase tracking-tight text-[#1C1C1C] leading-[1.08]"
            />
          </div>

          <p className="mt-8 font-serif italic text-xl sm:text-2xl text-[#5C1A1B] max-w-2xl font-light">
            We command vetted palace protocols, private island buyouts, and global logistical mastery across India and beyond.
          </p>
        </div>
      </section>

      {/* Destinations Grid with Hover Reveal */}
      <section className="py-20 lg:py-32 px-6 sm:px-10 lg:px-14">
        <div className="max-w-[1520px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {destinationsData.map((dest, idx) => (
            <Reveal key={dest.slug} delay={idx * 0.08}>
              <div
                className="group relative bg-[#EFE7DA]/50 border border-[#B08D57]/30 shadow-md hover:border-[#5C1A1B] transition-all duration-500 overflow-hidden"
                data-cursor="view"
                data-cursor-text="DESTINATION"
              >
                {/* Image Frame */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/90 via-[#1C1C1C]/40 to-transparent" />

                  {/* Kicker badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF7A] font-sans bg-[#1C1C1C]/70 backdrop-blur-xs px-3 py-1 border border-[#B08D57]/40">
                      {dest.region} · {dest.country}
                    </span>
                  </div>

                  {/* Bottom Text and Hover Reveal Details */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-[#F8F4EC] z-10">
                    <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                      <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-wide font-light text-[#F8F4EC]">
                        {dest.name}
                      </h2>
                      <p className="font-serif italic text-sm text-[#D4AF7A] mt-1">
                        {dest.tagline}
                      </p>

                      {/* Expandable info on hover */}
                      <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-64 transition-all duration-500 ease-in-out overflow-hidden pt-3 space-y-3">
                        <p className="text-xs text-[#EFE7DA]/85 font-sans font-light leading-relaxed line-clamp-3">
                          {dest.description}
                        </p>

                        <div className="pt-2 border-t border-[#B08D57]/30 text-[10px] uppercase tracking-wider text-[#D4AF7A] font-sans">
                          Best Season: {dest.bestSeason}
                        </div>

                        <div className="text-[10px] text-[#EFE7DA]/70 font-sans">
                          Venues: {dest.featuredVenues.slice(0, 3).join(', ')}
                        </div>

                        <div className="pt-2">
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#F8F4EC] hover:text-[#D4AF7A] underline underline-offset-4"
                          >
                            Plan Here &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Destination Concierge CTA */}
      <section className="py-24 px-6 sm:px-10 lg:px-14 text-center bg-[#5C1A1B] text-[#F8F4EC] border-t border-[#B08D57]/30">
        <div className="max-w-2xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF7A] font-sans block">
            Custom Scenography Worldwide
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl uppercase tracking-tight font-light text-[#F8F4EC]">
            Dreaming of an Uncharted Destination?
          </h2>
          <p className="text-xs sm:text-sm text-[#EFE7DA]/80 font-sans font-light leading-relaxed">
            Our team travels internationally to scout private estates, ancient convents, and secluded shores tailored exclusively for your family.
          </p>
          <div className="pt-4">
            <MagneticButton>
              <Link href="/contact" className="btn-luxury-light">
                Consult With Our Destination Desk
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
