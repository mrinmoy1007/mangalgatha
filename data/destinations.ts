export interface Destination {
  slug: string;
  name: string;
  region: string;
  country: string;
  tagline: string;
  description: string;
  bestSeason: string;
  featuredVenues: string[];
  image: string;
  alt: string;
}

export const destinationsData: Destination[] = [
  {
    slug: 'udaipur',
    name: 'Udaipur',
    region: 'Rajasthan',
    country: 'India',
    tagline: 'The Venice of the East & City of Lakes',
    description: 'Floating palaces amidst sapphire waters, ornate marble courtyards, and sun-kissed Aravali peaks. Udaipur offers an ethereal, romantic royal backdrop where ceremonies unfold upon private islands and historic terraces.',
    bestSeason: 'October to March',
    featuredVenues: ['Taj Lake Palace', 'The Leela Palace Udaipur', 'Jagmandir Island Palace', 'Oberoi Udaivilas'],
    image: 'https://images.unsplash.com/photo-1593693397690-362bcfeac8d5?q=80&w=1200&auto=format&fit=crop',
    alt: 'Lake Pichola with majestic Taj Lake Palace reflecting on tranquil waters in Udaipur'
  },
  {
    slug: 'jaipur',
    name: 'Jaipur',
    region: 'Rajasthan',
    country: 'India',
    tagline: 'The Imperial Pink City',
    description: 'A city of majestic Mughal-Rajput grandeur, echoing with tales of maharajas. Jaipur provides vast heritage forts, lush polo grounds, and palatial ballrooms designed for multi-thousand guest spectacles.',
    bestSeason: 'October to April',
    featuredVenues: ['The City Palace Jaipur', 'Rambagh Palace', 'Fairmont Jaipur', 'Samode Palace', 'Jai Mahal Palace'],
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop',
    alt: 'The iconic pink sandstone Hawa Mahal and historic City Palace in Jaipur'
  },
  {
    slug: 'jodhpur',
    name: 'Jodhpur',
    region: 'Rajasthan',
    country: 'India',
    tagline: 'The Blue City of Fortresses & Sandstone',
    description: 'Dominating the golden Thar desert, Jodhpur commands raw architectural power. From the world’s most opulent Art Deco royal palace to towering Mehrangarh Fort ramparts, celebrations here feel truly historic.',
    bestSeason: 'November to February',
    featuredVenues: ['Umaid Bhawan Palace', 'Mehrangarh Fort', 'Raas Jodhpur', 'Mihir Garh'],
    image: 'https://images.unsplash.com/photo-1599661555350-9ea0617578ec?q=80&w=1200&auto=format&fit=crop',
    alt: 'Mehrangarh Fort towering above the blue city of Jodhpur, Rajasthan'
  },
  {
    slug: 'goa',
    name: 'Goa',
    region: 'Western Coast',
    country: 'India',
    tagline: 'Barefoot Luxury & Coastal Reverie',
    description: 'Where Portuguese heritage villas meet secluded Arabian Sea coves. Goa is the pinnacle of relaxed sophistication, sunset pheras on soft sands, and bohemian-luxe open-air celebrations.',
    bestSeason: 'November to March',
    featuredVenues: ['Taj Exotica Resort & Spa', 'The St. Regis Goa', 'W Goa', 'Alila Diwa'],
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop',
    alt: 'Golden hour sunset over palm-lined beach and Arabian sea in Goa'
  },
  {
    slug: 'mussoorie',
    name: 'Mussoorie & Himalayas',
    region: 'Uttarakhand',
    country: 'India',
    tagline: 'Mist, Pine Forests & Mountain Majesty',
    description: 'Perched high above the clouds with panoramic Himalayan views. Ideal for couples seeking crisp mountain air, colonial-era ballroom elegance, and mist-shrouded amphitheaters.',
    bestSeason: 'March to June, September to November',
    featuredVenues: ['JW Marriott Walnut Grove', 'Savoy Mussoorie', 'Ananda in the Himalayas'],
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
    alt: 'Misty pine-covered peaks and Himalayan mountain panorama in Mussoorie'
  }
];
