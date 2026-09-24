import HeroSection from '@/components/sections/HeroSection';
import IntroSection from '@/components/sections/IntroSection';
import ServicesSliderSection from '@/components/sections/ServicesSliderSection';
import SplitCTASection from '@/components/sections/SplitCTASection';
import MarqueeAndSignatureSection from '@/components/sections/MarqueeAndSignatureSection';
import FeaturedStoriesSection from '@/components/sections/FeaturedStoriesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import InstagramSection from '@/components/sections/InstagramSection';
import LocationsSection from '@/components/sections/LocationsSection';

export default function HomePage() {
  return (
    <>
      {/* 1. Pinned Cinematic Hero */}
      <HeroSection />

      {/* 2. Introduction */}
      <IntroSection />

      {/* 3. Services Slider */}
      <ServicesSliderSection />

      {/* 4. Split CTA */}
      <SplitCTASection />

      {/* 5. Infinite Marquee + Signature Experience */}
      <MarqueeAndSignatureSection />

      {/* 6. Featured Wedding Stories */}
      <FeaturedStoriesSection />

      {/* 7. Testimonials */}
      <TestimonialsSection />

      {/* 8. Instagram Feed */}
      <InstagramSection />

      {/* 9. Locations / Contact CTA */}
      <LocationsSection />
    </>
  );
}
