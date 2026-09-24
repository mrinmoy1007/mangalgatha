'use client';

import Link from 'next/link';
import { studiosData } from '@/data/studios';
import { servicesData } from '@/data/services';
import RotatingBadge from './RotatingBadge';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#5C1A1B] text-[#F8F4EC] bg-maroon-pattern overflow-hidden pt-24 pb-12 border-t border-[#B08D57]/30">
      {/* Decorative Gold Hairline */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-[#B08D57]" />

      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Top Feature: Massive GET IN TOUCH Callout */}
        <div className="text-center pb-20 border-b border-[#B08D57]/20 relative">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#B08D57] block mb-4">
            Start Your Wedding Journey
          </span>

          <Link
            href="/contact"
            className="group inline-block font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight font-light text-[#F8F4EC] hover:text-[#D4AF7A] transition-colors duration-500"
          >
            GET IN TOUCH
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-3 group-hover:-translate-y-2 text-[#B08D57] ml-3 text-3xl sm:text-5xl">
              ↗
            </span>
          </Link>

          <div className="mt-6 flex flex-col items-center justify-center gap-2 sm:gap-4 sm:flex-row">
            <a
              href="mailto:info@mangalgatha.in"
              className="font-serif italic text-lg sm:text-2xl text-[#EFE7DA]/80 hover:text-[#B08D57] tracking-wider transition-colors"
            >
              info@mangalgatha.in
            </a>
            <span className="hidden sm:block text-[#B08D57] text-lg">|</span>
            <a
              href="tel:+918595319969"
              className="font-serif italic text-lg sm:text-2xl text-[#EFE7DA]/80 hover:text-[#B08D57] tracking-wider transition-colors"
            >
              +91 8595 319969
            </a>
          </div>

          {/* Gold Rotating Badge positioned on top-right of the CTA banner */}
          <div className="hidden lg:block absolute right-4 top-0">
            <RotatingBadge size={140} textColor="#B08D57" subColor="#D4AF7A" />
          </div>
        </div>

        {/* 4 Main Columns: Quick Links, Services, Social, Studios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 py-16 border-b border-[#B08D57]/20">
          {/* Col 1: Brand & Philosophy (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-1">
              <img src="/images/mglogo.png" alt="Mangalgatha Logo" className="h-20 w-auto mb-4 object-contain" />
            </div>
            <p className="text-xs text-[#EFE7DA]/70 leading-relaxed font-light font-sans max-w-xs">
              Every wedding is a story. We design yours with elegant simplicity, authentic traditions, and breathtaking spaces.
            </p>
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B08D57] block">
                Headquarters
              </span>
              <span className="text-xs text-[#EFE7DA]/80 block mt-1">
                Delhi NCR
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.28em] text-[#B08D57] font-medium">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs tracking-widest uppercase">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/stories', label: 'Stories' },
                { href: '/destinations', label: 'Destinations' },
                { href: '/journal', label: 'Journal' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#EFE7DA]/80 hover:text-[#B08D57] transition-colors block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Curated Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.28em] text-[#B08D57] font-medium">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase">
              {servicesData.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-[#EFE7DA]/80 hover:text-[#B08D57] transition-colors block py-0.5 line-clamp-1"
                  >
                    {svc.number}. {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Studio Locations (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.28em] text-[#B08D57] font-medium">
              Our Studios
            </h4>
            <div className="space-y-6">
              {studiosData.map((st) => (
                <div key={st.city} className="border-l border-[#B08D57]/40 pl-4 py-0.5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#F8F4EC]">
                      {st.city}
                    </span>
                    <a
                      href={st.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[9px] uppercase tracking-[0.2em] text-[#B08D57] hover:text-[#F8F4EC] flex items-center gap-0.5 transition-colors"
                    >
                      Get Directions <ArrowUpRight className="w-2.5 h-2.5" />
                    </a>
                  </div>
                  <p className="text-xs text-[#EFE7DA]/70 font-light">
                    {st.address}, {st.landmark}
                  </p>
                  <a
                    href={`tel:${st.phone}`}
                    className="font-serif text-xs tracking-wider text-[#D4AF7A] hover:underline block"
                  >
                    {st.displayPhone}
                  </a>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-[#B08D57]/20">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B08D57] block mb-2">
                Social Media
              </span>
              <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-[#EFE7DA]/80">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B08D57] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B08D57] transition-colors"
                >
                  Pinterest
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B08D57] transition-colors"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Logo, Copyright, Privacy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EFE7DA]/50 font-light gap-4">
          <div className="flex items-center gap-3">
            <span className="font-serif tracking-widest text-[#B08D57]">MANGALGATHA</span>
            <span>·</span>
            <span>© {currentYear} All Rights Reserved</span>
          </div>

          <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.2em]">
            <Link href="/privacy" className="hover:text-[#B08D57] transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-[#B08D57] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
