import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { servicesData } from '@/data/services';
import Reveal from '@/components/animations/Reveal';
import SplitTextReveal from '@/components/animations/SplitTextReveal';
import MagneticButton from '@/components/animations/MagneticButton';

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((svc) => ({
    slug: svc.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found | Mangalgatha' };

  return {
    title: `${service.title} | Mangalgatha Luxury Wedding Planning`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-24 bg-[#F8F4EC] text-[#1C1C1C]">
      {/* Service Hero Banner */}
      <section className="relative min-h-[650px] lg:min-h-[750px] flex items-end pb-20 px-6 sm:px-10 lg:px-14 overflow-hidden border-b border-[#B08D57]/20">
        <Image
          src={service.heroImage}
          alt={service.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-75 filter"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/60 to-transparent" />

        <div className="relative z-10 max-w-[1520px] mx-auto w-full text-[#F8F4EC]">
          <div className="flex items-center gap-3 mb-4">
            {/* <span className="font-serif text-3xl text-[#D4AF7A] font-light">
              {service.number}
            </span> */}
            <div className="w-12 h-[1px] bg-[#B08D57]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF7A] font-sans">
              services
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight font-light text-[#F8F4EC] max-w-4xl leading-[1.05]">
            {service.title}
          </h1>

          <p className="mt-6 font-serif italic text-xl sm:text-2xl text-[#EFE7DA]/90 max-w-2xl font-light">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {service.extended ? (
        <>
          {/* Extended Intro */}
          <section className="py-24 lg:py-32 px-6 sm:px-10 lg:px-14 border-b border-[#B08D57]/20">
            <div
              className={
                service.extended.offeringsLayout === 'grid'
                  ? 'max-w-3xl mx-auto'
                  : 'max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20'
              }
            >
              <div className={service.extended.offeringsLayout === 'grid' ? 'space-y-6' : 'lg:col-span-6 space-y-6'}>
                {service.extended.introEyebrow && (
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans font-medium block">
                    {service.extended.introEyebrow}
                  </span>
                )}
                <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-wide text-[#1C1C1C] font-light">
                  {service.extended.introHeading}
                </h2>
                <p className="font-serif italic text-xl sm:text-2xl text-[#5C1A1B] font-light leading-snug">
                  {service.extended.introQuote}
                </p>
                {service.extended.introParagraphs.map((p, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-[#555555] font-sans font-light leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {service.extended.offeringsLayout !== 'grid' && (
                <div className="lg:col-span-6 border border-[#B08D57]/40 bg-[#EFE7DA]/40 p-8 sm:p-10 space-y-6">
                  <h3 className="font-serif text-2xl uppercase tracking-wider text-[#5C1A1B] font-light border-b border-[#B08D57]/30 pb-4">
                    {service.extended.offeringsHeading}
                  </h3>
                  <ul className="space-y-5">
                    {service.extended.offerings.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#B08D57] rotate-45 mt-1.5 inline-block shrink-0" />
                        <div>
                          <span className="text-xs uppercase tracking-[0.16em] text-[#1C1C1C] font-medium block">
                            {item.title}
                          </span>
                          <span className="text-xs text-[#555555] font-sans font-light leading-relaxed">
                            {item.desc}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>

          {/* Offerings Grid (full-width numbered layout) */}
          {service.extended.offeringsLayout === 'grid' && (
            <section className="py-24 lg:py-32 px-6 sm:px-10 lg:px-14 bg-[#EFE7DA] border-b border-[#B08D57]/20">
              <div className="max-w-[1520px] mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                  <h2 className="font-serif text-4xl sm:text-5xl uppercase tracking-tight font-light text-[#1C1C1C]">
                    {service.extended.offeringsHeading}
                  </h2>
                  <div className="w-16 h-[1px] bg-[#B08D57] mx-auto mt-4" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {service.extended.offerings.map((item, idx) => (
                    <div
                      key={idx}
                      className="border border-[#B08D57]/40 bg-[#F8F4EC] p-8 space-y-3 hover:border-[#5C1A1B] transition-colors"
                    >
                      {/* {item.number && (
                        <span className="font-serif text-3xl text-[#B08D57] font-light block">
                          {item.number}
                        </span>
                      )} */}
                      <h3 className="font-serif text-lg uppercase tracking-wider text-[#1C1C1C] font-light">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#555555] font-sans font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Entertainment Curation */}
          {service.extended.entertainmentHeading && (
            <section className="py-24 lg:py-32 px-6 sm:px-10 lg:px-14 bg-[#EFE7DA] border-b border-[#B08D57]/20">
              <div className="max-w-[1520px] mx-auto space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                  <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-wide text-[#1C1C1C] font-light">
                    {service.extended.entertainmentHeading}
                  </h2>
                  <div className="w-16 h-[1px] bg-[#B08D57] mx-auto" />
                  {service.extended.entertainmentIntro?.map((p, idx) => (
                    <p key={idx} className="text-sm sm:text-base text-[#555555] font-sans font-light leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                <div className="space-y-6">
                  <h3 className="text-center font-serif text-xl uppercase tracking-wider text-[#5C1A1B] font-light">
                    {service.extended.entertainmentListHeading}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {service.extended.entertainmentList?.map((item, idx) => (
                      <div
                        key={idx}
                        className="border border-[#B08D57]/40 bg-[#F8F4EC] py-4 px-5 text-center text-xs uppercase tracking-[0.14em] text-[#1C1C1C] hover:border-[#5C1A1B] transition-colors"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Soundtrack / Moments */}
          {service.extended.moments && service.extended.moments.length > 0 && (
            <section className="py-24 lg:py-32 px-6 sm:px-10 lg:px-14 border-b border-[#B08D57]/20">
              <div className="max-w-[1520px] mx-auto space-y-16">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                  <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-wide text-[#1C1C1C] font-light">
                    {service.extended.soundtrackHeading}
                  </h2>
                  <div className="w-16 h-[1px] bg-[#B08D57] mx-auto" />
                  {service.extended.soundtrackIntro?.map((p, idx) => (
                    <p key={idx} className="text-sm sm:text-base text-[#555555] font-sans font-light leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${
                    service.extended.moments.length >= 4 ? 'lg:grid-cols-5' : 'lg:grid-cols-3'
                  }`}
                >
                  {service.extended.moments.map((moment) => (
                    <div
                      key={moment.name}
                      className="border border-[#B08D57]/40 bg-[#EFE7DA]/40 p-7 space-y-3 hover:border-[#5C1A1B] transition-colors"
                    >
                      <h3 className="font-serif text-xl uppercase tracking-wider text-[#5C1A1B] font-light">
                        {moment.name}
                      </h3>
                      <p className="font-serif italic text-sm text-[#1C1C1C]">
                        {moment.mood}
                      </p>
                      <p className="text-xs text-[#555555] font-sans font-light leading-relaxed">
                        {moment.desc}
                      </p>
                      {moment.elements && moment.elements.length > 0 && (
                        <ul className="space-y-3 pt-2 border-t border-[#B08D57]/20">
                          {moment.elements.map((el, elIdx) => (
                            <li key={elIdx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-[#B08D57] rotate-45 mt-1 inline-block shrink-0" />
                              <div>
                                <span className="text-[11px] uppercase tracking-[0.14em] text-[#1C1C1C] font-medium block">
                                  {el.title}
                                </span>
                                <span className="text-xs text-[#555555] font-sans font-light leading-relaxed">
                                  {el.desc}
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Process / Journey Steps */}
          <section className="py-24 lg:py-32 px-6 sm:px-10 lg:px-14 bg-[#EFE7DA] border-b border-[#B08D57]/20">
            <div className="max-w-[1520px] mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans block">
                  Methodology
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl uppercase tracking-tight text-[#1C1C1C] font-light">
                  {service.extended.journeyHeading}
                </h2>
                <div className="w-16 h-[1px] bg-[#B08D57] mx-auto mt-4" />
                {service.extended.journeySubheading && (
                  <p className="text-sm text-[#555555] font-sans font-light leading-relaxed pt-2">
                    {service.extended.journeySubheading}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                {service.process.map((step) => (
                  <div
                    key={step.step}
                    className="border border-[#B08D57]/40 bg-[#F8F4EC] p-8 space-y-4 hover:border-[#5C1A1B] transition-colors"
                  >
                    <span className="font-serif text-4xl text-[#B08D57] font-light block">
                      {step.step}
                    </span>
                    <h3 className="font-serif text-xl uppercase tracking-wider text-[#1C1C1C] font-light">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#555555] font-sans font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Philosophy */}
          {service.extended.philosophy && service.extended.philosophy.length > 0 && (
            <section className="py-24 lg:py-32 px-6 sm:px-10 lg:px-14 border-b border-[#B08D57]/20">
              <div
                className={`max-w-[1520px] mx-auto grid grid-cols-1 gap-16 ${
                  service.extended.philosophy.length > 1 ? 'lg:grid-cols-2' : 'max-w-3xl text-center'
                }`}
              >
                {service.extended.philosophy.map((block, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-wide text-[#1C1C1C] font-light">
                      {block.heading}
                    </h2>
                    <p className="font-serif italic text-lg text-[#5C1A1B] font-light">
                      {block.subheading}
                    </p>
                    {block.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-sm text-[#555555] font-sans font-light leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          )}
        </>
      ) : (
        <>
          {/* Overview & Core Offerings */}
          <section className="py-24 lg:py-32 px-6 sm:px-10 lg:px-14 border-b border-[#B08D57]/20">
            <div className="max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans font-medium block">
                  We believe wedding photography should feel as personal as the celebration itself.
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-wide text-[#1C1C1C] font-light">
                  End-to-End  Execution
                </h2>
                <p className="text-sm sm:text-base text-[#555555] font-sans font-light leading-relaxed">
                  {service.fullDesc}
                </p>
              </div>

              <div className="lg:col-span-6 border border-[#B08D57]/40 bg-[#EFE7DA]/40 p-8 sm:p-10 space-y-6">
                <h3 className="font-serif text-2xl uppercase tracking-wider text-[#5C1A1B] font-light border-b border-[#B08D57]/30 pb-4">
                  Signature Inclusions
                </h3>
                <ul className="space-y-4">
                  {service.features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs uppercase tracking-[0.16em] text-[#1C1C1C]">
                      <span className="w-2 h-2 bg-[#B08D57] rotate-45 mt-0.5 inline-block shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Process Steps */}
          <section className="py-24 lg:py-32 px-6 sm:px-10 lg:px-14 bg-[#EFE7DA] border-b border-[#B08D57]/20">
            <div className="max-w-[1520px] mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans block">
                  Methodology
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl uppercase tracking-tight text-[#1C1C1C] font-light">
                  The Four-Phase Orchestration
                </h2>
                <div className="w-16 h-[1px] bg-[#B08D57] mx-auto mt-4" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {service.process.map((step) => (
                  <div
                    key={step.step}
                    className="border border-[#B08D57]/40 bg-[#F8F4EC] p-8 space-y-4 hover:border-[#5C1A1B] transition-colors"
                  >
                    <span className="font-serif text-4xl text-[#B08D57] font-light block">
                      {step.step}
                    </span>
                    <h3 className="font-serif text-xl uppercase tracking-wider text-[#1C1C1C] font-light">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#555555] font-sans font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Gallery Section */}
      <section className="py-24 lg:py-36 px-6 sm:px-10 lg:px-14 border-b border-[#B08D57]/20">
        <div className="max-w-[1520px] mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#B08D57]/30 pb-6 gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans block mb-1">
                Visual Archives
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-tight text-[#1C1C1C] font-light">
                {service.title} Gallery
              </h2>
            </div>
            <span className="text-xs font-sans tracking-widest uppercase text-[#5C1A1B]">
             Exquisite Celebrations Across India
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.gallery.map((img, i) => (
              <div
                key={i}
                className="relative aspect-[3/4] overflow-hidden border border-[#B08D57]/30 shadow-md group"
                data-cursor="view"
                data-cursor-text="ARCHIVE"
              >
                <Image
                  src={img}
                  alt={`${service.title} archival photo ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#5C1A1B]/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="py-24 px-6 sm:px-10 lg:px-14 text-center bg-[#5C1A1B] text-[#F8F4EC]">
        <div className="max-w-2xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF7A] font-sans block">
            Private Studio Advisory
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-tight font-light text-[#F8F4EC]">
            {service.extended ? service.extended.closing.heading : `Inquire About ${service.title}`}
          </h2>
          {service.extended?.closing.subheading && (
            <p className="font-serif italic text-xl text-[#D4AF7A] font-light">
              {service.extended.closing.subheading}
            </p>
          )}
          {service.extended ? (
            service.extended.closing.paragraphs.map((p, idx) => (
              <p key={idx} className="text-xs sm:text-sm text-[#EFE7DA]/80 font-sans font-light leading-relaxed">
                {p}
              </p>
            ))
          ) : (
            <p className="text-xs sm:text-sm text-[#EFE7DA]/80 font-sans font-light leading-relaxed">
              Our creative directors are at your service for private appointments in Delhi NCR, Kolkata, or Pune.
            </p>
          )}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5">
            <MagneticButton>
              <Link href="/contact" className="btn-luxury-light">
                {service.extended?.closing.ctaText ?? 'Consult Us'}
              </Link>
            </MagneticButton>
            <Link
              href="/services"
              className="text-[11px] uppercase tracking-[0.22em] text-[#D4AF7A] hover:text-[#F8F4EC] transition-colors"
            >
              &larr; Return to All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
