import type { Metadata } from 'next';
import { studiosData } from '@/data/studios';
import EnquiryForm from '@/components/ui/EnquiryForm';
import SplitTextReveal from '@/components/animations/SplitTextReveal';
import { ArrowUpRight, Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us & Private Consultation | Mangalgatha',
  description:
    'Schedule a confidential wedding planning consultation with Mangalgatha in Delhi NCR, Kolkata, or Pune.',
};

export default function ContactPage() {
  return (
    <div className="pt-24 bg-[#F8F4EC] text-[#1C1C1C]">
      {/* Header Banner */}
      <section className="py-20 lg:py-32 px-6 sm:px-10 lg:px-14 border-b border-[#B08D57]/20">
        <div className="max-w-[1520px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans font-medium">
              Begin Your Celebration
            </span>
            <div className="w-12 h-[1px] bg-[#B08D57]" />
          </div>

          <div className="max-w-5xl">
            <SplitTextReveal
              lines={[
                'CONNECT WITH OUR PLANNERS.',
                'WE WRITE YOUR AUSPICIOUS TALE.'
              ]}
              tag="h1"
              lineClassName="font-serif text-4xl sm:text-6xl lg:text-7xl font-light uppercase tracking-tight text-[#1C1C1C] leading-[1.08]"
            />
          </div>

          <p className="mt-8 font-serif italic text-xl sm:text-2xl text-[#5C1A1B] max-w-2xl font-light">
            We welcome couples and families by appointment at our office Across India.
          </p>
        </div>
      </section>

      {/* Main Two Column Section: Form Left, Studios & Direct Lines Right */}
      <section className="py-20 lg:py-32 px-6 sm:px-10 lg:px-14">
        <div className="max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Confidential Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>

          {/* Right Column: Studios, Contact info & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            {/* Direct Studio Phones */}
            <div className="border border-[#B08D57]/40 bg-[#EFE7DA]/50 p-8 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8E7145] font-sans block">
                Direct Studio Lines
              </span>

              <div className="space-y-6">
                {studiosData.map((st) => (
                  <div key={st.city} className="border-b border-[#B08D57]/20 pb-4 last:border-b-0 last:pb-0 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-lg uppercase tracking-wider text-[#1C1C1C] font-light">
                        {st.city} Office
                      </h4>
                      <span className="text-[9px] uppercase tracking-wider text-[#8E7145] font-sans">
                        {st.badge}
                      </span>
                    </div>

                    <p className="text-xs text-[#555555] font-sans font-light">
                      {st.address}, {st.landmark}
                    </p>

                    <div className="flex items-center gap-4 pt-1">
                      <a
                        href={`tel:${st.phone}`}
                        className="text-xs font-serif tracking-wider text-[#5C1A1B] hover:text-[#B08D57] flex items-center gap-1.5"
                      >
                        <Phone className="w-3 h-3 text-[#B08D57]" />
                        <span>{st.displayPhone}</span>
                      </a>
                      <a
                        href={st.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] uppercase tracking-wider text-[#8E7145] hover:text-[#5C1A1B] flex items-center gap-0.5"
                      >
                        Directions <ArrowUpRight className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* General Inquiries */}
              <div className="pt-4 border-t border-[#B08D57]/30 space-y-2">
                <div className="flex items-center gap-2 text-xs font-sans text-[#1C1C1C]">
                  <Mail className="w-3.5 h-3.5 text-[#B08D57]" />
                  <span>General: </span>
                  <a href="mailto:concierge@mangalgatha.com" className="text-[#5C1A1B] underline hover:text-[#B08D57]">
                    info@mangalgatha.in
                  </a>
                </div>
                <div className="flex items-center gap-2 text-xs font-sans text-[#1C1C1C]">
                  <Clock className="w-3.5 h-3.5 text-[#B08D57]" />
                  <span>Hours: Monday – Saturday, 10:30 AM – 7:30 PM</span>
                </div>
              </div>
            </div>

            {/* Embedded Stylized Map Frame */}
            <div className="border border-[#B08D57]/40 shadow-lg overflow-hidden space-y-3">
              <div className="bg-[#5C1A1B] text-[#F8F4EC] px-6 py-3 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] font-sans text-[#D4AF7A]">
                  Delhi NCR  Map
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#EFE7DA]/70 font-sans">
                  Sector-65
                </span>
              </div>
              <div className="relative w-full h-64 sm:h-72 bg-[#EFE7DA]">
                <iframe
                  title="Mangalgatha Delhi Studio Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12703.777030732695!2d77.05954469701048!3d28.403180487421295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2266ebb9a9b9%3A0xee646ae45de38202!2sSector%2065%2C%20Gurugram%2C%20Haryana!5e1!3m2!1sen!2sin!4v1791058736511!5m2!1sen!2sin"
                  className="w-full h-full border-0 filter contrast-125 saturate-50"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
