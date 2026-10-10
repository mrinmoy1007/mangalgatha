'use client';

export default function WhatsAppButton() {
  const whatsappUrl = 'https://wa.me/918595319969?text=Hello%20Mangalgatha%20Team,%20I%20would%20like%20to%20inquire%20about%20wedding%20planning%20services.';

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
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="w-5 h-5 text-[#D4AF7A] group-hover:scale-110 transition-transform"
          >
            <path
              d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.7a8.5 8.5 0 1 1 16.3-3.8Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.5 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c-.2.2-.2.4-.1.6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6-.1l.6-.5c.2-.2.4-.2.6-.1l1.7.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.5.3-1.1.5-1.7.4-1.3-.2-2.7-1-3.9-2.2s-2-2.6-2.2-3.9c-.1-.6.1-1.2.5-1.6Z"
              fill="currentColor"
            />
          </svg>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#B08D57] rounded-full animate-ping opacity-75" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#B08D57] rounded-full" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[9px] uppercase tracking-[0.25em] font-sans text-[#D4AF7A]">
            Contact
          </span>
          <span className="text-[11px] font-serif tracking-wider font-light">
            WhatsApp Desk
          </span>
        </div>
      </a>
    </aside>
  );
}
