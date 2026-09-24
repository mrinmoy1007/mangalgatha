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
    heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
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
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: '02',
    slug: 'destination-weddings',
    number: '02',
    title: 'Destination Weddings',
    shortDesc: 'Palatial forts of Rajasthan, Mediterranean seaside villas, and tropical sanctuaries transformed into royal empires.',
    fullDesc: 'Whether commanding a 16th-century fortress in Udaipur, an oceanfront palace in Bali, or an Amalfi Coast estate, Mangalgatha commands global destination logistics with unmatched cultural nuance and logistical mastery.',
    heroImage: 'https://images.unsplash.com/photo-1565492179225-f3d21a6e996f?q=80&w=1600&auto=format&fit=crop',
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
      'https://images.unsplash.com/photo-1519225424982-f5f4b5952f53?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1546815140-6927d6c6ffc6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: '03',
    slug: 'decor-and-design',
    number: '03',
    title: 'Décor & Event Design',
    shortDesc: 'Custom spatial design blending heritage motifs, architectural floristry, and sculptural lighting.',
    fullDesc: 'We treat every venue as a sacred theatrical canvas. Our in-house event designers, lighting designers, and botanical artists sculpt immersive environments that evoke romantic nostalgia while defying ordinary conventions.',
    heroImage: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=1600&auto=format&fit=crop',
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
      'https://images.unsplash.com/photo-1525258946800-98cfd34727e6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: '04',
    slug: 'mehendi-haldi-and-sangeet',
    number: '04',
    title: 'Mehendi, Haldi & Sangeet',
    shortDesc: 'Vibrant daytime rituals steeped in joyful tradition, transforming into electrifying theatrical evening soirees.',
    fullDesc: 'From sundrenched yellow courtyards infused with chandan and rose petals to Broadway-grade Sangeet stages featuring international choreographers and concert audio, we craft the pulse of pre-wedding revelry.',
    heroImage: 'https://images.unsplash.com/photo-1611042553365-9b101441c135?q=80&w=1600&auto=format&fit=crop',
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
      'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: '05',
    slug: 'venue-and-hospitality-management',
    number: '05',
    title: 'Venue & Hospitality Management',
    shortDesc: 'Hospitality redefined with custom concierge desks, private butler wings, and premium protocol.',
    fullDesc: 'Warm Indian hospitality executed with five-star precision. We manage high-profile guest registries, private flight charters, personalized welcome suites, dietary curations, and round-the-clock room concierges.',
    heroImage: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=1600&auto=format&fit=crop',
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
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: '06',
    slug: 'photography-and-entertainment-curation',
    number: '06',
    title: 'Photography & Entertainment Curation',
    shortDesc: 'Legendary editorial storytellers, heritage classical maestros, and headline musical acts tailored for your legacy.',
    fullDesc: 'We collaborate with the world’s most celebrated wedding filmmakers and fashion photographers, coupled with legendary Sufi vocalists, classical sitar masters, and Bollywood headliners to curate unforgettable moments.',
    heroImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop',
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
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519225424980-975ab3be0a70?q=80&w=1200&auto=format&fit=crop'
    ]
  }
];
