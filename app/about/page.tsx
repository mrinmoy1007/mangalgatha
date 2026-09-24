import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { aboutData } from '@/data/about';
import SplitTextReveal from '@/components/animations/SplitTextReveal';
import Reveal from '@/components/animations/Reveal';
import Parallax from '@/components/animations/Parallax';
import MagneticButton from '@/components/animations/MagneticButton';
import RotatingBadge from '@/components/ui/RotatingBadge';

export const metadata: Metadata = {
  title: 'About Us | Mangalgatha Luxury Wedding Planners',
  description:
    'Discover the philosophy, founders, and master team behind Mangalgatha, India’s premier luxury wedding planning company based in Delhi.',
};

export default function AboutPage() {
  const { founder, philosophy, team, milestones } = aboutData;

  return (
    <div className="pt-24 bg-[#F8F4EC] text-[#1C1C1C]">
      {/* Hero Banner */}
      <section className="relative py-20 lg:py-32 px-6 sm:px-10 lg:px-14 border-b border-[#B08D57]/20 overflow-hidden">
        <div className="max-w-[1520px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans font-medium">
              About Mangalgatha
            </span>
            <div className="w-12 h-[1px] bg-[#B08D57]" />
          </div>

          <div className="max-w-5xl">
            <SplitTextReveal
              lines={[
                'SHEPHERDING SACRED TRADITION',
                'INTO ENDURING FOLKLORE.'
              ]}
              tag="h1"
              lineClassName="font-serif text-4xl sm:text-6xl lg:text-7xl font-light uppercase tracking-tight text-[#1C1C1C] leading-[1.08]"
            />
          </div>

          <p className="mt-8 font-serif italic text-xl sm:text-2xl text-[#5C1A1B] max-w-2xl font-light">
            Founded in Delhi on the tenets of Vedic sanctity, architectural restraint, and couture sophistication.
          </p>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-24 lg:py-36 px-6 sm:px-10 lg:px-14 border-b border-[#B08D57]/20">
        <div className="max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative">
            <Parallax speed={0.2}>
              <div
                className="relative w-full aspect-[3/4] overflow-hidden shadow-2xl border border-[#B08D57]/40"
                data-cursor="view"
                data-cursor-text="FOUNDERS"
              >
                <Image
                  src={founder.portrait}
                  alt={founder.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#5C1A1B]/10 pointer-events-none" />
              </div>
            </Parallax>
            <div className="absolute -bottom-6 -right-6 hidden sm:block">
              <RotatingBadge size={130} textColor="#B08D57" subColor="#5C1A1B" />
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-8 lg:pl-6">
            <Reveal delay={0.1}>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans font-medium block">
                The Founders’ Genesis
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight font-light text-[#1C1C1C] mt-2">
                {founder.name}
              </h2>
              <span className="text-xs uppercase tracking-[0.22em] text-[#5C1A1B] font-sans block mt-1">
                {founder.title}
              </span>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-sm sm:text-base text-[#444444] font-sans font-light leading-relaxed">
                {founder.story}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <blockquote className="border-l-2 border-[#B08D57] pl-6 py-2 my-6 font-serif italic text-xl text-[#5C1A1B] leading-relaxed">
                &ldquo;{founder.quote}&rdquo;
              </blockquote>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="pt-2">
                <MagneticButton>
                  <Link href="/contact" className="btn-luxury">
                    Request Consultation
                  </Link>
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The Four Pillars Philosophy */}
      <section className="py-24 lg:py-32 px-6 sm:px-10 lg:px-14 bg-[#EFE7DA] border-b border-[#B08D57]/20">
        <div className="max-w-[1520px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans block">
              Guiding Ethos
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl uppercase tracking-tight font-light text-[#1C1C1C]">
              Our Four Tenets
            </h2>
            <div className="w-16 h-[1px] bg-[#B08D57] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophy.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.1}>
                <div className="border border-[#B08D57]/40 bg-[#F8F4EC] p-8 h-full space-y-4 hover:border-[#5C1A1B] transition-colors">
                  <span className="font-serif text-4xl text-[#B08D57] font-light block">
                    {item.number}
                  </span>
                  <h3 className="font-serif text-2xl uppercase tracking-wider text-[#1C1C1C] font-light">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#555555] font-sans font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Master Team Grid */}
      <section className="py-24 lg:py-36 px-6 sm:px-10 lg:px-14 border-b border-[#B08D57]/20">
        <div className="max-w-[1520px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#B08D57]/30 pb-8 mb-16 gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans block mb-2">
                Curators &amp; Architects
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl uppercase tracking-tight font-light text-[#1C1C1C]">
                The Leadership Team
              </h2>
            </div>
            <p className="text-xs font-sans tracking-widest uppercase text-[#5C1A1B] max-w-xs sm:text-right">
              Multidisciplinary masters of architecture, protocol, and floral design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <Reveal key={member.name} delay={idx * 0.1}>
                <div className="group space-y-4">
                  <div
                    className="relative w-full aspect-[3/4] overflow-hidden border border-[#B08D57]/30 shadow-md"
                    data-cursor="view"
                    data-cursor-text="TEAM"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-[#5C1A1B]/15 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#8E7145] font-sans block">
                      {member.location}
                    </span>
                    <h3 className="font-serif text-xl uppercase tracking-wider text-[#1C1C1C] font-light">
                      {member.name}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#5C1A1B] font-sans font-medium">
                      {member.role}
                    </p>
                    <p className="text-xs text-[#666666] font-sans font-light leading-relaxed pt-1">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline Animated on Scroll */}
      <section className="py-24 lg:py-36 px-6 sm:px-10 lg:px-14 bg-[#1C1C1C] text-[#F8F4EC] border-b border-[#B08D57]/20">
        <div className="max-w-[1520px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF7A] font-sans block">
              Historic Lineage
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl uppercase tracking-tight font-light text-[#F8F4EC]">
              A Decade of Auspicious Stories
            </h2>
            <div className="w-16 h-[1px] bg-[#B08D57] mx-auto mt-4" />
          </div>

          <div className="relative border-l border-[#B08D57]/40 ml-4 sm:ml-32 md:ml-48 space-y-16 pl-8 sm:pl-16">
            {milestones.map((m, idx) => (
              <Reveal key={m.year} delay={idx * 0.1}>
                <div className="relative group">
                  {/* Timeline Gold Pin Node */}
                  <div className="absolute -left-[41px] sm:-left-[73px] top-1.5 w-4 h-4 rounded-full bg-[#1C1C1C] border-2 border-[#B08D57] group-hover:bg-[#B08D57] transition-colors" />

                  {/* Year display */}
                  <span className="font-serif text-3xl sm:text-4xl text-[#D4AF7A] font-light block mb-2">
                    {m.year}
                  </span>

                  <h3 className="font-serif text-xl sm:text-2xl uppercase tracking-wide text-[#F8F4EC] font-light">
                    {m.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#EFE7DA]/75 font-sans font-light max-w-2xl leading-relaxed mt-2">
                    {m.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 sm:px-10 lg:px-14 text-center bg-[#EFE7DA]">
        <div className="max-w-2xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans block">
            Begin With Us
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl uppercase tracking-tight text-[#1C1C1C] font-light">
            Your Story Deserves Haute Couture
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] font-sans font-light leading-relaxed">
            Schedule a private consultation at our Delhi NCR, Kolkata, or Pune studio.
          </p>
          <div className="pt-4">
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
