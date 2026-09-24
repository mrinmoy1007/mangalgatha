export interface WeddingStory {
  slug: string;
  couple: string;
  location: string;
  venue: string;
  date: string;
  guestCount: string;
  coverImage: string;
  excerpt: string;
  story: string;
  quote: string;
  quoteAuthor: string;
  highlights: string[];
  gallery: { url: string; caption: string; aspect: string }[];
}

export const weddingStoriesData: WeddingStory[] = [
  {
    slug: 'aditi-and-karan-udaipur',
    couple: 'Aditi & Karan',
    location: 'Udaipur, Rajasthan',
    venue: 'Taj Lake Palace & Jagmandir Island',
    date: 'November 2025',
    guestCount: '350 Guests',
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1400&auto=format&fit=crop',
    excerpt: 'A three-day royal odyssey on the shimmering waters of Lake Pichola, featuring floating floral mandaps and candlelit flotillas.',
    story: 'Aditi and Karan envisioned a celebration that honored old Mewar royalty without sacrificing modern editorial elegance. Over three days, guests arrived via ceremonial royal boats adorned with marigold garlands. The Sangeet was hosted on Jagmandir Island under a starry sky illuminated by five thousand beeswax pillar candles and a bespoke Mughal brass chandelier specially forged in Moradabad.',
    quote: 'Mangalgatha transformed Lake Pichola into our personal fairy tale. Every moment felt majestic yet intimate, effortless yet immaculately timed.',
    quoteAuthor: 'Aditi Singhania',
    highlights: [
      'Ceremonial boat procession with classical shehnai players',
      'Floating lotus mandap with 40,000 handpicked Rajnigandha blooms',
      'Royal Mewari feast curated with heritage recipes from palace chefs',
      'Fireworks symphony across the Udaipur skyline'
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop', caption: 'The bride in custom crimson Sabyasachi couture', aspect: 'portrait' },
      { url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop', caption: 'Sunset pheras and sacred vows overlooking the lake', aspect: 'landscape' },
      { url: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=1200&auto=format&fit=crop', caption: 'Sculptural floral mandap with fresh tuberoses and brass lanterns', aspect: 'portrait' },
      { url: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=1200&auto=format&fit=crop', caption: 'Heirloom polki emerald jewelry and bridal veil', aspect: 'portrait' },
      { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop', caption: 'The illuminated courtyard of Jagmandir Island at dusk', aspect: 'landscape' },
      { url: 'https://images.unsplash.com/photo-1611042553365-9b101441c135?q=80&w=1200&auto=format&fit=crop', caption: 'Sunlit Haldi celebrations with organic saffron paste and petals', aspect: 'portrait' }
    ]
  },
  {
    slug: 'meera-and-siddharth-jodhpur',
    couple: 'Meera & Siddharth',
    location: 'Jodhpur, Rajasthan',
    venue: 'Umaid Bhawan Palace',
    date: 'January 2026',
    guestCount: '450 Guests',
    coverImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400&auto=format&fit=crop',
    excerpt: 'Art Deco splendor meets royal Rathore traditions in an opulent golden-sandstone palace ceremony.',
    story: 'At the world’s most magnificent Art Deco royal palace, Meera and Siddharth hosted an extraordinary union of families spanning London, New York, and Mumbai. The baraat arrived with royal Marwari stallions and a 60-piece brass band, followed by a Sufi night headlined in the Baradari lawns under a custom velvet canopy with gold zari embroidery.',
    quote: 'The level of discretion, creative ambition, and flawless hospitality exhibited by Mangalgatha was unmatched. Our international guests were completely spellbound.',
    quoteAuthor: 'Siddharth Mehta',
    highlights: [
      'Vintage Rolls-Royce motorcade procession',
      'Art Deco floral scenography inspired by 1930s royal architecture',
      'Intimate acoustic Qawwali performance under the stars',
      'Grand royal reception in the Grand Ballroom'
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop', caption: 'Meera in custom vintage rose gold lehenga', aspect: 'portrait' },
      { url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop', caption: 'Royal palace banquet dinner lit by candlelight', aspect: 'landscape' },
      { url: 'https://images.unsplash.com/photo-1546815140-6927d6c6ffc6?q=80&w=1200&auto=format&fit=crop', caption: 'The sacred Varmala ceremony on palace ramparts', aspect: 'portrait' },
      { url: 'https://images.unsplash.com/photo-1519225424982-f5f4b5952f53?q=80&w=1200&auto=format&fit=crop', caption: 'Sunset couple portrait overlooking Jodhpur skyline', aspect: 'landscape' },
      { url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop', caption: 'Electrifying Sangeet celebrations into the late night', aspect: 'portrait' },
      { url: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1200&auto=format&fit=crop', caption: 'Bridal hand ornaments and intricate mehendi motifs', aspect: 'portrait' }
    ]
  },
  {
    slug: 'rhea-and-armaan-jaipur',
    couple: 'Rhea & Armaan',
    location: 'Jaipur, Rajasthan',
    venue: 'Rambagh Palace & City Palace',
    date: 'December 2025',
    guestCount: '600 Guests',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop',
    excerpt: 'An imperial celebration echoing centuries of royal court heritage across emerald lawns and gilded halls.',
    story: 'Spanning four magnificent days across the erstwhile home of Jaipur royalty, Rhea and Armaan celebrated with majestic splendor. Highlights included a royal polo exhibition match, a midnight cocktail carnival under 10,000 fairy lights, and sacred pheras inside a mirror-work glass pavilion reflecting a million flickering diyas.',
    quote: 'Mangalgatha orchestrated our dream wedding with poetic poise. Not once did we feel the stress of coordinating six hundred guests across three royal venues.',
    quoteAuthor: 'Rhea Piramal',
    highlights: [
      'Royal baraat led by ceremonial bagpipers and folk dancers',
      'Sheesh Mahal-inspired mirrorwork mandap pavilion',
      'Exclusive private access to the inner courtyards of City Palace',
      'Signature Rajasthani thali banquet by royal khansamas'
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop', caption: 'Rhea adorned in heritage emeralds and royal lehenga', aspect: 'portrait' },
      { url: 'https://images.unsplash.com/photo-1565492179225-f3d21a6e996f?q=80&w=1200&auto=format&fit=crop', caption: 'The couple under the historic Mughal archways', aspect: 'landscape' },
      { url: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=1200&auto=format&fit=crop', caption: 'Floral installations with crimson and ivory blooms', aspect: 'portrait' },
      { url: 'https://images.unsplash.com/photo-1611042553365-9b101441c135?q=80&w=1200&auto=format&fit=crop', caption: 'Marigold petal shower during the joyful Haldi ceremony', aspect: 'portrait' },
      { url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop', caption: 'The imperial banquet table illuminated by crystal chandeliers', aspect: 'landscape' },
      { url: 'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?q=80&w=1200&auto=format&fit=crop', caption: 'Traditional bridal henna detailing on silk cushions', aspect: 'portrait' }
    ]
  },
  {
    slug: 'ananya-and-dev-mussoorie',
    couple: 'Ananya & Dev',
    location: 'Mussoorie, Himalayas',
    venue: 'JW Marriott Walnut Grove & Cloud’s End',
    date: 'April 2025',
    guestCount: '280 Guests',
    coverImage: 'https://images.unsplash.com/photo-1519225424982-f5f4b5952f53?q=80&w=1400&auto=format&fit=crop',
    excerpt: 'An ethereal mountain wedding surrounded by whispering deodar forests and crisp Himalayan horizons.',
    story: 'Seeking an intimate, mystical sanctuary away from urban hustle, Ananya and Dev chose the misty ridges of Mussoorie. Ceremonies were designed around natural Himalayan flora, local oak branches, and soft pastel drapery that blended seamlessly into the drifting mountain clouds.',
    quote: 'The mountain air, the scent of pine and fresh jasmine, and the serene beauty of the mandap made our wedding feel transcendent.',
    quoteAuthor: 'Ananya Roy',
    highlights: [
      'Open-air amphitheater pheras facing snow-capped peaks',
      'Farm-to-table Garhwali and Kashmiri wazwan feasts',
      'Acoustic mountain sunset concert with classical flutists',
      'Bonfire soiree with artisanal pine-smoked cocktails'
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1200&auto=format&fit=crop', caption: 'Outdoor vows facing the majestic mountain horizon', aspect: 'landscape' },
      { url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop', caption: 'Botanical pine and wild rose ceremony arch', aspect: 'portrait' },
      { url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop', caption: 'Ananya in pastel blush organza with diamond polki', aspect: 'portrait' },
      { url: 'https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1200&auto=format&fit=crop', caption: 'Fairy-lit forest banquet at twilight', aspect: 'landscape' },
      { url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop', caption: 'Sacred agni rituals performed as evening mist rolls in', aspect: 'portrait' },
      { url: 'https://images.unsplash.com/photo-1525258946800-98cfd34727e6?q=80&w=1200&auto=format&fit=crop', caption: 'Wildflower and white lily tablescape arrangements', aspect: 'portrait' }
    ]
  }
];
