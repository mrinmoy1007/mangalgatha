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
  const { founder, philosophy, team, closing } = aboutData;

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
                'WHERE SACRED TRADITIONS',
                'INTO ENDURING FOLKLORE.'
              ]}
              tag="h1"
              lineClassName="font-serif text-4xl sm:text-6xl lg:text-7xl font-light uppercase tracking-tight text-[#1C1C1C] leading-[1.08]"
            />
          </div>

          <p className="mt-8 font-serif italic text-xl sm:text-2xl text-[#5C1A1B] max-w-2xl font-light">
           Born from a deep reverence for Indian traditions and an eye for refined detail, Mangalgatha crafts extraordinary wedding experiences that honour where you come from while celebrating where your story is going.
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
                OUR PHILOSOPHY
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
                              OUR APPROACH
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl uppercase tracking-tight font-light text-[#1C1C1C]">
              FROM FIRST CONVERSATION TO LAST DANCE
            </h2>
            <div className="w-16 h-[1px] bg-[#B08D57] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophy.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.1}>
                <div className="border border-[#B08D57]/40 bg-[#F8F4EC] p-8 h-full space-y-4 hover:border-[#5C1A1B] transition-colors">
                  {/* <span className="font-serif text-4xl text-[#B08D57] font-light block">
                    {item.number}
                  </span> */}
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
      {/* <section className="py-24 lg:py-36 px-6 sm:px-10 lg:px-14 border-b border-[#B08D57]/20">
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
      </section> */}

      {/* Closing Story Section */}
      <section className="py-24 lg:py-36 px-6 sm:px-10 lg:px-14 text-center bg-[#1C1C1C] text-[#F8F4EC]">
        <div className="max-w-2xl mx-auto space-y-6">
          <Reveal>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight font-light text-[#F8F4EC] leading-[1.15]">
              {closing.heading}
            </h2>
            <div className="w-16 h-[1px] bg-[#B08D57] mx-auto mt-6" />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4 pt-2">
              {closing.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className={
                    p === 'But you will remember how it felt.'
                      ? 'font-serif italic text-xl sm:text-2xl text-[#D4AF7A] font-light'
                      : 'text-sm sm:text-base text-[#EFE7DA]/80 font-sans font-light leading-relaxed'
                  }
                >
                  {p}
                </p>
                
                
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="pt-6">
              <MagneticButton>
                <Link href="/contact" className="btn-luxury-light">
                  {closing.cta}
                </Link>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
