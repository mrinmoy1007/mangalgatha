'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl = 'https://wa.me/918595319969?text=Hello%20Mangalgatha%20Studio,%20I%20would%20like%20to%20inquire%20about%20wedding%20planning%20services.';

  return (
    <aside aria-label="WhatsApp Concierge" className="fixed bottom-7 right-7 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect with Mangalgatha Concierge on WhatsApp"
        className="group flex items-center gap-3 bg-[#5C1A1B] text-[#F8F4EC] pl-4 pr-5 py-3 border border-[#B08D57]/70 shadow-2xl hover:bg-[#3D0F10] hover:border-[#B08D57] transition-all duration-300"
      >
        <div className="relative flex items-center justify-center">
          <MessageCircle className="w-4 h-4 text-[#D4AF7A] group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#B08D57] rounded-full animate-ping opacity-75" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#B08D57] rounded-full" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[9px] uppercase tracking-[0.25em] font-sans text-[#D4AF7A]">
            Concierge
          </span>
          <span className="text-[11px] font-serif tracking-wider font-light">
            WhatsApp Desk
          </span>
        </div>
      </a>
    </aside>
  );
}
