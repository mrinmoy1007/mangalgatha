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
    image: '/images/DSC_1.JPG.png',
    alt: 'Bridal couture veil in gold and vermillion lehenga',
    caption: 'When sunlight dances across hand-stitched Zardozi. A private moment before the pheras in Udaipur.',
    likes: '1,820',
    type: 'image',
    url: 'https://instagram.com'
  },
  {
    id: 'ig-2',
    image: '/images/Untitled design 30.png',
    alt: 'Illuminated golden wedding mandap overlooking palace waters',
    caption: 'Twenty thousand fragrant tuberose stems and three thousand brass lamps under the Mewar moon.',
    likes: '1,140',
    type: 'reel',
    url: 'https://instagram.com'
  },
  {
    id: 'ig-3',
    image: '/images/DSC_4.JPG.png',
    alt: 'Botanical centerpiece with Indian marigolds and brass urns',
    caption: 'Scenography rooted in tradition: wild Rajnigandha, antique copper urulis, and pure beeswax candles.',
    likes: '2,910',
    type: 'image',
    url: 'https://instagram.com'
  },
  {
    id: 'ig-4',
    image: '/images/DSC_6.JPG.png',
    alt: 'Royal Indian bride wearing emerald heirloom polki jewelry',
    caption: 'The quiet poetry of heritage jewelry passed down through five generations. Rhea at The City Palace.',
    likes: '1,500',
    type: 'image',
    url: 'https://instagram.com'
  },
  {
    id: 'ig-5',
    image: '/images/Untitled design 6.png',
    alt: 'Palace wedding banquet dining under arches with candlelight',
    caption: 'Dining under 18th-century sandstone jharokhas with live Santoor melodies drifting through the night.',
    likes: '2,280',
    type: 'reel',
    url: 'https://instagram.com'
  },
  {
    id: 'ig-6',
    image: '/images/Untitled design 9.png',
    alt: 'Haldi ceremony with golden marigold petals and turmeric shower',
    caption: 'Pure uninhibited laughter: golden haldi paste, yellow marigold cascades, and folk dhol beats.',
    likes: '1,120',
    type: 'reel',
    url: 'https://instagram.com'
  }
];
