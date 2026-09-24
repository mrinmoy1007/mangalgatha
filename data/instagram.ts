export interface InstagramPost {
  id: string;
  image: string;
  alt: string;
  caption: string;
  likes: string;
  type: 'image' | 'reel';
  url: string;
}

export const instagramData: InstagramPost[] = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',
    alt: 'Bridal couture veil in gold and vermillion lehenga',
    caption: 'When sunlight dances across hand-stitched Zardozi. A private moment before the pheras in Udaipur.',
    likes: '4,820',
    type: 'image',
    url: 'https://instagram.com'
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    alt: 'Illuminated golden wedding mandap overlooking palace waters',
    caption: 'Twenty thousand fragrant tuberose stems and three thousand brass lamps under the Mewar moon.',
    likes: '6,140',
    type: 'reel',
    url: 'https://instagram.com'
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=800&auto=format&fit=crop',
    alt: 'Botanical centerpiece with Indian marigolds and brass urns',
    caption: 'Scenography rooted in tradition: wild Rajnigandha, antique copper urulis, and pure beeswax candles.',
    likes: '3,910',
    type: 'image',
    url: 'https://instagram.com'
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=800&auto=format&fit=crop',
    alt: 'Royal Indian bride wearing emerald heirloom polki jewelry',
    caption: 'The quiet poetry of heritage jewelry passed down through five generations. Rhea at The City Palace.',
    likes: '5,500',
    type: 'image',
    url: 'https://instagram.com'
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop',
    alt: 'Palace wedding banquet dining under arches with candlelight',
    caption: 'Dining under 18th-century sandstone jharokhas with live Santoor melodies drifting through the night.',
    likes: '4,280',
    type: 'reel',
    url: 'https://instagram.com'
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1611042553365-9b101441c135?q=80&w=800&auto=format&fit=crop',
    alt: 'Haldi ceremony with golden marigold petals and turmeric shower',
    caption: 'Pure uninhibited laughter: golden haldi paste, yellow marigold cascades, and folk dhol beats.',
    likes: '7,120',
    type: 'reel',
    url: 'https://instagram.com'
  }
];
