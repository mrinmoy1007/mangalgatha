'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import { servicesData } from '@/data/services';
import { studiosData } from '@/data/studios';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [phoneOpen, setPhoneOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const phoneRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Determine if this is a dark background page (like home top hero)
  // On home, the hero is full viewport with white text until scrolled.
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 80px threshold for background color change
      setIsScrolled(currentScrollY > 80);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY.current && !mobileMenuOpen) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Close menus on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (phoneRef.current && !phoneRef.current.contains(e.target as Node)) {
        setPhoneOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Close mobile menu & dropdowns on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setPhoneOpen(false);
    setServicesOpen(false);
  }

  // Color logic
  const isTransparent = isHome && !isScrolled;
  const textColor = isTransparent ? 'text-[#F8F4EC]' : 'text-[#1C1C1C]';
  const logoSubColor = isTransparent ? 'text-[#D4AF7A]' : 'text-[#B08D57]';
  const borderBottom = isScrolled ? 'border-b border-[#B08D57]/20 shadow-xs' : 'border-b border-transparent';
  const bgColor = isScrolled ? 'bg-[#F8F4EC]/95 backdrop-blur-md' : 'bg-transparent';

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${bgColor} ${borderBottom}`}
      >
        <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 h-24 flex items-center justify-between">
          {/* Left Navigation: ABOUT, SERVICES, STORIES */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link
              href="/about"
              className={`font-sans text-[11px] uppercase tracking-[0.24em] font-normal transition-colors relative py-1 hover:text-[#B08D57] ${textColor} ${
                pathname === '/about' ? 'text-[#B08D57]' : ''
              }`}
            >
              About Us
            </Link>

            {/* SERVICES WITH DROPDOWN */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className={`font-sans text-[11px] uppercase tracking-[0.24em] font-normal transition-colors py-1 flex items-center gap-1.5 hover:text-[#B08D57] ${textColor} ${
                  pathname.startsWith('/services') ? 'text-[#B08D57]' : ''
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </Link>

              {/* Submenu */}
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-80 bg-[#F8F4EC] text-[#1C1C1C] border border-[#B08D57]/30 shadow-2xl py-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-6 pb-3 mb-2 border-b border-[#B08D57]/15">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#8E7145] font-semibold">
                      Our Services
                    </span>
                  </div>
                  <div className="flex flex-col">
                    {servicesData.map((svc) => (
                      <Link
                        key={svc.slug}
                        href={`/services/${svc.slug}`}
                        className="px-6 py-2.5 hover:bg-[#EFE7DA] transition-colors flex items-center justify-between group"
                      >
                        <span className="font-sans text-[11px] uppercase tracking-[0.16em] group-hover:text-[#5C1A1B] text-[#1C1C1C] transition-colors">
                          {svc.title}
                        </span>
                        {/* <span className="font-serif text-[11px] text-[#B08D57] group-hover:translate-x-1 transition-transform">
                          {svc.number}
                        </span> */}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 px-6 border-t border-[#B08D57]/15">
                    <Link
                      href="/services"
                      className="text-[10px] uppercase tracking-[0.2em] text-[#5C1A1B] hover:text-[#B08D57] flex items-center gap-1 font-medium transition-colors"
                    >
                      View All Services &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/stories"
              className={`font-sans text-[11px] uppercase tracking-[0.24em] font-normal transition-colors relative py-1 hover:text-[#B08D57] ${textColor} ${
                pathname.startsWith('/stories') ? 'text-[#B08D57]' : ''
              }`}
            >
              Gallery
            </Link>
          </nav>

          {/* Center Logo */}
          <div className="flex flex-col items-center justify-center text-center">
            <Link href="/" className="group flex flex-col items-center">
              <img
                src={isTransparent ? '/images/mglogow.png' : '/images/mglogo.png'}
                alt="Mangalgatha Logo"
                className="h-12 sm:h-16 w-auto object-contain transition-all"
              />
            </Link>
          </div>

          {/* Right Navigation: DESTINATIONS, JOURNAL, CONTACT + PHONE */}
          <div className="hidden lg:flex items-center gap-9">
            <nav className="flex items-center gap-9">
              <Link
                href="/destinations"
                className={`font-sans text-[11px] uppercase tracking-[0.24em] font-normal transition-colors relative py-1 hover:text-[#B08D57] ${textColor} ${
                  pathname === '/destinations' ? 'text-[#B08D57]' : ''
                }`}
              >
                Destinations
              </Link>
              <Link
                href="/journal"
                className={`font-sans text-[11px] uppercase tracking-[0.24em] font-normal transition-colors relative py-1 hover:text-[#B08D57] ${textColor} ${
                  pathname.startsWith('/journal') ? 'text-[#B08D57]' : ''
                }`}
              >
                Journal
              </Link>
              <Link
                href="/contact"
                className={`font-sans text-[11px] uppercase tracking-[0.24em] font-normal transition-colors relative py-1 hover:text-[#B08D57] ${textColor} ${
                  pathname === '/contact' ? 'text-[#B08D57]' : ''
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Direct Studio Phone Dropdown */}
            <div ref={phoneRef} className="relative">
              <button
                onClick={() => setPhoneOpen(!phoneOpen)}
                aria-label="Direct studio contact numbers"
                className={`p-2 border transition-all duration-300 rounded-none flex items-center justify-center ${
                  isTransparent
                    ? 'border-[#F8F4EC]/40 text-[#F8F4EC] hover:border-[#B08D57] hover:text-[#B08D57]'
                    : 'border-[#B08D57]/50 text-[#1C1C1C] hover:border-[#5C1A1B] hover:text-[#5C1A1B]'
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
              </button>

              {phoneOpen && (
                <div className="absolute right-0 top-full mt-3 w-72 bg-[#F8F4EC] text-[#1C1C1C] border border-[#B08D57]/30 shadow-2xl p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-[9px] uppercase tracking-[0.25em] text-[#8E7145] font-semibold pb-3 border-b border-[#B08D57]/20 mb-3">
                    Studio Concierge Desks
                  </div>
                  <div className="space-y-3.5">
                    {studiosData.map((studio) => (
                      <div key={studio.city} className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#5C1A1B]">
                          {studio.city}
                        </span>
                        <a
                          href={`tel:${studio.phone}`}
                          className="font-serif text-sm tracking-wide text-[#1C1C1C] hover:text-[#B08D57] transition-colors mt-0.5"
                        >
                          {studio.displayPhone}
                        </a>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#B08D57]/20">
                    <Link
                      href="/contact"
                      className="block text-center text-[9px] uppercase tracking-[0.22em] text-[#5C1A1B] hover:text-[#B08D57] font-semibold"
                    >
                      Book Private Consultation
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Actions: Phone + Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="tel:+918595319969"
              aria-label="Call +91 8595 319969"
              className={`p-2 border transition-all flex items-center justify-center ${
                isTransparent ? 'border-[#F8F4EC]/50 text-[#F8F4EC]' : 'border-[#B08D57] text-[#1C1C1C]'
              }`}
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className={`p-2 transition-all ${
                isTransparent ? 'text-[#F8F4EC]' : 'text-[#1C1C1C]'
              }`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Maroon Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#5C1A1B] text-[#F8F4EC] flex flex-col justify-between p-8 sm:p-12 overflow-y-auto animate-in fade-in duration-300">
          {/* Top Bar with Close Button */}
          <div className="flex items-center justify-between border-b border-[#B08D57]/30 pb-6">
            <div className="flex items-center">
              <img src="/images/mglogow.png" alt="Mangalgatha Logo" className="h-10 sm:h-12 w-auto object-contain" />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 text-[#F8F4EC] hover:text-[#B08D57] border border-[#B08D57]/40 rounded-none transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Staggered Navigation Links */}
          <nav className="my-auto py-10 flex flex-col space-y-6 text-center">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About Us' },
              { href: '/services', label: 'Our Services' },
              { href: '/stories', label: 'Gallery' },
              { href: '/destinations', label: 'Wedding Destinations' },
              { href: '/journal', label: 'Journal & Stories' },
              { href: '/contact', label: 'Book Consultation' },
            ].map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-serif text-2xl sm:text-3xl tracking-[0.18em] uppercase hover:text-[#B08D57] transition-all hover:scale-105"
                style={{
                  animationDelay: `${idx * 60}ms`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Studio Quick Dial on Mobile */}
          <div className="border-t border-[#B08D57]/30 pt-6">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#B08D57] text-center mb-4">
              Private Lines
            </p>
            <div className="flex flex-wrap justify-around text-center gap-3 text-xs tracking-wider">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#EFE7DA]/70 block">Delhi NCR</span>
                <a href="tel:+918595319969" className="hover:text-[#B08D57]">+91 8595 319969</a>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#EFE7DA]/70 block">Kolkata</span>
                <a href="tel:+918595319969" className="hover:text-[#B08D57]">+91 8595 319969</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
