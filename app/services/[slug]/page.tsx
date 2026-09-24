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
            <span className="font-serif text-3xl text-[#D4AF7A] font-light">
              {service.number}
            </span>
            <div className="w-12 h-[1px] bg-[#B08D57]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF7A] font-sans">
              Curated Discipline
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

      {/* Overview & Core Offerings */}
      <section className="py-24 lg:py-32 px-6 sm:px-10 lg:px-14 border-b border-[#B08D57]/20">
        <div className="max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans font-medium block">
              Discipline Architectural Scope
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-wide text-[#1C1C1C] font-light">
              End-to-End Haute Execution
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
              Bespoke commissions across India
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
          <h2 className="font-serif text-4xl sm:text-5xl uppercase tracking-tight font-light text-[#F8F4EC]">
            Inquire About {service.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#EFE7DA]/80 font-sans font-light leading-relaxed">
            Our creative directors are at your service for private appointments in Delhi NCR, Kolkata, or Pune.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5">
            <MagneticButton>
              <Link href="/contact" className="btn-luxury-light">
                Consult Us
              </Link>
            </MagneticButton>
            <Link
              href="/services"
              className="text-[11px] uppercase tracking-[0.22em] text-[#D4AF7A] hover:text-[#F8F4EC] transition-colors"
            >
              &larr; Return to All Disciplines
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
