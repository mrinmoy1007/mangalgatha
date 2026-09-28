export interface Service {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  heroImage: string;
  alt: string;
  features: string[];
  process: { step: string; title: string; desc: string }[];
  gallery: string[];
}

export const servicesData: Service[] = [
  {
    id: '01',
    slug: 'full-wedding-planning',
    number: '01',
    title: 'Full Wedding Planning',
    shortDesc: 'End-to-end custom orchestration from the first sketch to the final farewell, executed with high-end precision.',
    fullDesc: 'Our flagship service conceives and executes your entire wedding journey as a singular work of art. From conceptual narrative design, venue acquisition, budget architecture, guest concierge, and vendor orchestration to 24/7 on-ground protocol, we curate every heartbeat of your celebration.',
    heroImage: '/images/Untitled design 21.png',
    alt: 'Grand royal Indian wedding mandap ceremony at twilight',
    features: [
      'Comprehensive Wedding Blueprint & Timeline',
      'Art Direction & Spatial Architecture',
      'Custom Fashion & Styling Advisory',
      'Custom VIP Guest Hospitality & Air Logistics',
      'Master Technical Production & Lighting Design'
    ],
    process: [
      { step: '01', title: 'The Prologue & Discovery', desc: 'Deep dive into your family heritage, personal aesthetic, and celebratory aspirations.' },
      { step: '02', title: 'Spatial & Visual Architecture', desc: 'Developing mood boards, floor plans, 3D renders, and sensory decor narratives.' },
      { step: '03', title: 'Vendor & Artisan Curation', desc: 'Hand-selecting Michelin-grade caterers, royal tent makers, and world-class entertainers.' },
      { step: '04', title: 'Flawless Symphony', desc: 'Multi-tiered on-ground team orchestrating every ritual with silent, flawless perfection.' }
    ],
    gallery: [
      '/images/Untitled design 23.png',
      '/images/Untitled design 14.png',
      '/images/Untitled design 7.png',
      '/images/Untitled design 35.png'
    ]
  },
  {
    id: '02',
    slug: 'destination-weddings',
    number: '02',
    title: 'Destination Weddings',
    shortDesc: 'Palatial forts of Rajasthan, Mediterranean seaside villas, and tropical sanctuaries transformed into royal empires.',
    fullDesc: 'Whether commanding a 16th-century fortress in Udaipur, an oceanfront palace in Bali, or an Amalfi Coast estate, Mangalgatha commands global destination logistics with unmatched cultural nuance and logistical mastery.',
    heroImage: '/images/udaipur wedding.png',
    alt: 'Royal Indian destination wedding couple portrait overlooking palace waters',
    features: [
      'Private Island & Heritage Palace Buyouts',
      'Charter Flights & Fleet Coordination',
      'Global Legal, Priest & Ritual Compliance',
      'Curated Destination Welcome Gift Boxes',
      'Multi-day Guest Excursions & Rehearsals'
    ],
    process: [
      { step: '01', title: 'Global Venue Scouting', desc: 'Curating vetted heritage estates, private sandbars, and fortress cloisters.' },
      { step: '02', title: 'Air & Ground Fleet Protocol', desc: 'Seamless chartering, transfers, bespoke luggage tagging, and royal welcomes.' },
      { step: '03', title: 'Cross-Border Production', desc: 'Exporting master chefs, custom floral structures, and Indian artisans worldwide.' },
      { step: '04', title: 'Destination Concierge', desc: '24/7 bilingual liaison managing room drops, styling emergencies, and excursions.' }
    ],
    gallery: [
      '/images/Untitled design 9.png',
      '/images/Untitled design 18.png',
      '/images/Untitled design 32.png',
      '/images/Untitled design 11.png'
    ]
  },
  {
    id: '03',
    slug: 'decor-and-design',
    number: '03',
    title: 'Décor & Event Design',
    shortDesc: 'Custom spatial design blending heritage motifs, architectural floristry, and sculptural lighting.',
    fullDesc: 'We treat every venue as a sacred theatrical canvas. Our in-house event designers, lighting designers, and botanical artists sculpt immersive environments that evoke romantic nostalgia while defying ordinary conventions.',
    heroImage: '/images/mandap decore.png',
    alt: 'Botanical floral mandap adorned with fresh blossoms and brass lamps',
    features: [
      'Architectural Floral Installations',
      'Custom Mughal Jaali & Textile Canopies',
      'Symphonic Architectural Lighting & Candlelight',
      'Custom Fragrance & Scent Design',
      'Handcrafted Cutlery, Linens & Calligraphy'
    ],
    process: [
      { step: '01', title: 'Narrative Storyboarding', desc: 'Mood palettes, botanical swatches, and lighting diagrams tailored to ritual moods.' },
      { step: '02', title: 'Artisan Fabrication', desc: 'Hand-carved woodwork, custom brass urns, and block-printed heritage silks.' },
      { step: '03', title: 'Botanical Curation', desc: 'Fresh morning jasmine, Dutch tuberoses, and royal Rajnigandha arrangements.' },
      { step: '04', title: 'Atmospheric Transformation', desc: 'Illuminating courtyards with thousands of wax lanterns and intelligent pin-spotting.' }
    ],
    gallery: [
      '/images/decore.png',
      '/images/flower decore.png',
      '/images/Untitled design 24.png',
      '/images/venue decore 4.png'
    ]
  },
  {
    id: '04',
    slug: 'mehendi-haldi-and-sangeet',
    number: '04',
    title: 'Mehendi, Haldi & Sangeet',
    shortDesc: 'Vibrant daytime rituals steeped in joyful tradition, transforming into electrifying theatrical evening soirees.',
    fullDesc: 'From sundrenched yellow courtyards infused with chandan and rose petals to Broadway-grade Sangeet stages featuring international choreographers and concert audio, we craft the pulse of pre-wedding revelry.',
    heroImage: '/images/Untitled design 39.png',
    alt: 'Joyful Haldi ceremony flower shower with yellow marigold petals',
    features: [
      'Thematic Haldi Poolside & Garden Sanctuaries',
      'Master Henna Artists & Ayurvedic Spa Lounges',
      'High-Energy Concert Stages & LED Scenography',
      'Custom Family Choreography & Scripted Acts',
      'Signature Street Food Bazaars & Mixology Bars'
    ],
    process: [
      { step: '01', title: 'Concept Nuancing', desc: 'Selecting playful heritage themes, Turkish souks, or floral botanical carnivals.' },
      { step: '02', title: 'Stage & Performance Direction', desc: 'Audio-visual acoustic mapping, rehearsals, and celebrity artist curation.' },
      { step: '03', title: 'Sensory Detail', desc: 'Marigold cascades, floral swings, artisanal sweets, and organic herbal gulal.' },
      { step: '04', title: 'Revelry Management', desc: 'Effortless pacing so families revel unburdened till early dawn.' }
    ],
    gallery: [
      '/images/Untitled design 17.png',
      '/images/Untitled design 18.png',
      '/images/haldi.png',
      '/images/Untitled design 29.png'
    ]
  },
  {
    id: '05',
    slug: 'venue-and-hospitality-management',
    number: '05',
    title: 'Venue & Hospitality Management',
    shortDesc: 'Hospitality redefined with custom concierge desks, private butler wings, and premium protocol.',
    fullDesc: 'Warm Indian hospitality executed with five-star precision. We manage high-profile guest registries, private flight charters, personalized welcome suites, dietary curations, and round-the-clock room concierges.',
    heroImage: '/images/Untitled design 24.png',
    alt: 'Royal Rajasthani palace courtyard and wedding hospitality pavilion',
    features: [
      'Dedicated Guest Experience App & WhatsApp Desk',
      'Custom Shadow Service for Bride, Groom & Parents',
      'Dietary Concierge & Royal Banquet Service',
      'Security Details & VVIP Protection Escorts',
      'Luggage Management & Valet Fleet Logistics'
    ],
    process: [
      { step: '01', title: 'Guest Mapping', desc: 'Collecting personalized preferences, flight schedules, and dietary restrictions.' },
      { step: '02', title: 'Royal Welcome Setup', desc: 'Shehnai welcomes, rose petal showers, and curated room hamper drops.' },
      { step: '03', title: 'Dedicated Butler Wings', desc: 'Shadows assigned to primary family members for round-the-clock assistance.' },
      { step: '04', title: 'Seamless Checkouts', desc: 'Express baggage collection, return hampers, and airport escorting.' }
    ],
    gallery: [
      '/images/Untitled design 26.png',
      '/images/Untitled design 33.png',
      '/images/Untitled design 35.png',
      '/images/car flower decore.png'
    ]
  },
  {
    id: '06',
    slug: 'photography-and-entertainment-curation',
    number: '06',
    title: 'Photography & Entertainment Curation',
    shortDesc: 'Legendary editorial storytellers, heritage classical maestros, and headline musical acts tailored for your legacy.',
    fullDesc: 'We collaborate with the world’s most celebrated wedding filmmakers and fashion photographers, coupled with legendary Sufi vocalists, classical sitar masters, and Bollywood headliners to curate unforgettable moments.',
    heroImage: '/images/Untitled design 13.png',
    alt: 'Editorial portrait of an Indian couture bride in regal lehenga',
    features: [
      'Vogue-Style Editorial Fashion Shoots',
      'Cinematic 4K/8K Film Direction & Drone Filming',
      'Curated Sufi, Qawwali & Sitar Ensembles',
      'Global DJs, Brass Bands & Percussionists',
      'Handcrafted Heirloom Leather Albums & Archives'
    ],
    process: [
      { step: '01', title: 'Style Matching', desc: 'Aligning your vision with documentary, editorial, or nostalgic film aesthetics.' },
      { step: '02', title: 'Shot List & Light Timing', desc: 'Golden hour portraits choreographed around auspicious muhurat timings.' },
      { step: '03', title: 'Artist Contracting & Riders', desc: 'Managing backstage requirements, sound engineering, and artist hospitality.' },
      { step: '04', title: 'Heirloom Archiving', desc: 'Museum-grade fine-art prints, trailer cuts, and archival master hard drives.' }
    ],
    gallery: [
      '/images/Untitled design 16.png',
      '/images/Untitled design 27.png',
      '/images/entertainment.png',
      '/images/entertainment 2.png'
    ]
  }
];
