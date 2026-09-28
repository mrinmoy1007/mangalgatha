export interface TeamMember {
  name: string;
  role: string;
  location: string;
  bio: string;
  image: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const aboutData = {
  founder: {
    name: 'Radhika Suryavanshi & Vikramaditya Rathore',
    title: 'Founders & Creative Directors',
    story: 'Mangalgatha was founded in 2014 out of an unyielding reverence for India’s grand ceremonial heritage and an insistence on couture minimalism. Having witnessed weddings drown in synthetic props and disorganized commotion, Radhika (a spatial architect trained in Milan) and Vikramaditya (a former diplomatic attaché with royal heritage roots in Mewar) united to establish a company where age-old Vedic sanctity merges seamlessly with high-fashion restraint.',
    quote: 'We do not sell stages or timelines; we shepherd sacred milestones into enduring folklore.',
    portrait: '/images/Untitled design 6.png'
  },
  philosophy: [
    {
      number: '01',
      title: 'Sacred Authenticity',
      desc: 'Every wedding honors the spiritual soul of Vedic traditions without performative ostentation.'
    },
    {
      number: '02',
      title: 'Couture Restraint',
      desc: 'True luxury whispers. We celebrate architectural space, noble materials, natural candlelight, and pristine botanical compositions.'
    },
    {
      number: '03',
      title: 'Flawless Sanctuary',
      desc: 'The bride, groom, and their families are never treated as event hosts—they are guests of honor in their own love story.'
    },
    {
      number: '04',
      title: 'Bespoke Provenance',
      desc: 'We never duplicate a single mandap, carpet, or sensory narrative. Each wedding is custom forged and retired thereafter.'
    }
  ],
  team: [
    {
      name: 'Radhika Suryavanshi',
      role: 'Co-Founder & Head of Scenography',
      location: 'Delhi',
      bio: 'Architectural graduate of Politecnico di Milano, bringing sculptural form and lighting depth to wedding pavilions.',
      image: '/images/Untitled design 9.png'
    },
    {
      name: 'Vikramaditya Rathore',
      role: 'Co-Founder & Chief of Protocol',
      location: 'Jaipur / Delhi',
      bio: 'Former diplomatic protocol advisor commanding multi-fleet logistics, private charters, and heritage palace operations.',
      image: '/images/udaipur wedding.png'
    },
    {
      name: 'Devika Singhal',
      role: 'Director of Guest Experience & Hospitality',
      location: 'Mumbai',
      bio: 'Alumna of Swiss hospitality academy with fifteen years leading private concierge desks for global dynasties.',
      image: '/images/Untitled design 30.png'
    },
    {
      name: 'Kabir Sen',
      role: 'Master of Technical Production & Sound',
      location: 'Delhi',
      bio: 'Pioneered acoustic spatial staging and architectural illumination for international festival stages and royal forts.',
      image: '/images/Untitled design 40.png'
    }
  ],
  milestones: [
    {
      year: '2014',
      title: 'Inception in Delhi',
      description: 'Mangalgatha opens its private studio doors in Chhatarpur, planning its first five bespoke heritage weddings.'
    },
    {
      year: '2017',
      title: 'The Mewar Royal Commission',
      description: 'Entrusted with orchestrating a three-day celebration across Lake Pichola for 700 guests, establishing a benchmark for palace logistics.'
    },
    {
      year: '2020',
      title: 'Expansion to Mumbai & Jaipur',
      description: 'Inauguration of the South Mumbai studio in Colaba and dedicated palace heritage operations team in Jaipur.'
    },
    {
      year: '2023',
      title: 'European & Global Destinations',
      description: 'Expanded full-scale production to Lake Como, Tuscany, the French Riviera, and the Arabian Gulf.'
    },
    {
      year: '2026',
      title: 'A Decade of Auspicious Stories',
      description: 'Over 220 singular wedding stories crafted with zero compromise, setting the global gold standard for Indian wedding haute couture.'
    }
  ]
};
