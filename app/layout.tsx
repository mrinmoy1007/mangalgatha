import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost, Tiro_Devanagari_Hindi } from 'next/font/google';
// @ts-ignore -- Next.js processes this global stylesheet at build time.
import './globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Preloader from '@/components/animations/Preloader';
import CustomCursor from '@/components/animations/CustomCursor';
import SmoothScroll from '@/components/animations/SmoothScroll';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
});

const tiroHindi = Tiro_Devanagari_Hindi({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-hindi',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mangalgatha | Luxury Indian Wedding Planner | Delhi, Udaipur & Global',
  description:
    'Mangalgatha is India’s premier luxury wedding company crafting timeless celebrations, destination weddings, and couture experiences across Delhi, Rajasthan, Goa, and Mussoorie.',
  keywords: [
    'luxury indian wedding planner',
    'destination wedding planner delhi',
    'udaipur palace wedding planner',
    'royal rajasthan wedding',
    'mangalgatha',
    'best wedding decorator india'
  ],
  authors: [{ name: 'Mangalgatha' }],
  metadataBase: new URL(process.env.APP_URL || 'https://mangalgatha.com'),
  openGraph: {
    title: 'Mangalgatha | Luxury Indian Wedding Planner',
    description:
      'Every wedding is a story. We write yours with couture restraint, sacred Vedic authenticity, and monumental spatial poetry.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Mangalgatha',
    images: [
      {
        url: '/images/pre-wedd-shoot.png',
        width: 1200,
        height: 630,
        alt: 'Mangalgatha Luxury Indian Wedding Scenography'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mangalgatha | Luxury Indian Wedding Planner',
    description:
      'Every wedding is a story. We write yours with couture restraint, sacred Vedic authenticity, and monumental spatial poetry.',
    images: ['/images/Untitled design 6.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Structured data for EventPlanner / LocalBusiness
const JSON_LD_SCRIPT = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'EventVenue',
  name: 'Mangalgatha Luxury Wedding Planners',
  description: 'Premier luxury Indian wedding planning and event design company.',
  url: 'https://mangalgatha.com',
  telephone: '+911149208000',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'The Dhan Mill, 100 Feet Road, Chhatarpur',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    postalCode: '110074',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.5085,
    longitude: 77.1724,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:30',
      closes: '19:30',
    },
  ],
  sameAs: [
    'https://www.instagram.com',
    'https://www.pinterest.com',
    'https://www.youtube.com',
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${tiroHindi.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON_LD_SCRIPT }}
        />
      </head>
      <body className="font-sans antialiased bg-[#F8F4EC] text-[#1C1C1C] min-h-screen">
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
