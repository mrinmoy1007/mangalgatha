export interface TeamMember {
  name: string;
  role: string;
  location: string;
  bio: string;
  image: string;
}

export const aboutData = {
  founder: {
    name: 'THE MOST BEAUTIFUL WEDDINGS ARE THE ONES THAT FEEL LIKE YOU',
    title: 'We believe a wedding should never feel like a copy of someone else\'s celebration.',
    story: 'It should carry your mother\'s traditions, your father\'s stories, your grandmother\'s blessings, your shared little rituals, your favourite flowers, your favourite people — and the magic that belongs only to the two of you.',
    quote: "At Mangalgatha, we don't begin with a template.\n\nWe begin with you.",
    portrait: '/images/Untitled design 6.png'
  },
  philosophy: [
    {
      number: '01',
      title: 'LISTEN',
      desc: 'WE BEGIN WITH YOUR STORY : Your personalities. Your families. Your traditions. Your dreams. The things you love — and the things you never want your wedding to feel like.'
    },
    {
      number: '02',
      title: 'IMAGINE',
      desc: 'THEN WE CREATE THE WORLD AROUND IT : From the visual language and décor to entertainment, culinary experiences and guest moments, every element is thoughtfully imagined around your story.'
    },
    {
      number: '03',
      title: 'CURATE',
      desc: 'EVERY DETAIL HAS A PURPOSE : We bring together trusted creative partners, artists, artisans and specialists to create a celebration that feels considered from beginning to end.'
    },
    {
      number: '04',
      title: 'CELEBRATE',
      desc: 'YOU ARRIVE. WE TAKE IT FROM HERE : While you celebrate with the people who matter most, we make sure everything behind the scenes comes together beautifully.'
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
  closing: {
    heading: 'Your Love Story Is One of One. Your Wedding Should Be Too.',
    paragraphs: [
      'No two couples are the same,',
      'So no two Mangalgatha celebrations should be either,',
      'We create weddings that carry your traditions, your personality, your people and your dreams — brought together through thoughtful planning, beautiful design and meaningful experiences,',
      'Because years from now, you may not remember every flower or every table setting.',
      'But you will remember how it felt.',
      'And that is what we are here to create.'
    ],
    cta: "Let's Begin Your Story"
  }
};
