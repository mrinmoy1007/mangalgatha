export interface JournalArticle {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  excerpt: string;
  coverImage: string;
  content: string[];
}

export const journalArticlesData: JournalArticle[] = [
  {
    slug: 'the-art-of-the-palace-mandap',
    title: 'The Art of the Palace Mandap: Sacred Geometry Meets Floral Architecture',
    category: 'Scenography',
    readTime: '6 min read',
    publishedDate: 'January 2026',
    excerpt: 'How we deconstruct Vedic geometry and reassemble it with architectural botanicals to preserve the sanctity of the sacred fire.',
    coverImage: '/images/Untitled design 10.png',
    content: [
      'In Vedic philosophy, the mandap is not merely a stage; it is the micro-cosmos of the universe. The four pillars represent the four stages of human life and the four parents who nurture the union.',
      'When designing within heritage palace courtyards—where ancient sandstone and marble jharokhas possess their own formidable voice—the mandap must never compete. It must emerge organically, as though grown from the earth centuries ago.',
      'We favor zero-floral-foam architecture using wet moss matrices, pure brass armatures, and night-blooming Rajnigandha that releases intoxicating perfume precisely as the muhurat begins.'
    ]
  },
  {
    slug: 'navigating-destination-logistics-in-rajasthan',
    title: 'Navigating Destination Logistics in Royal Rajasthan: The Master Playbook',
    category: 'Heritage Logistics',
    readTime: '8 min read',
    publishedDate: 'February 2026',
    excerpt: 'Behind the velvet curtain: charter coordination, private fort access, and the silent choreography of 500 guests across centuries-old citadels.',
    coverImage: '/images/Untitled design 30.png',
    content: [
      'Transporting five hundred discerning international guests into a 16th-century clifftop fort requires the precision of a diplomatic summit disguised as royal celebration.',
      'From custom airstrip welcomes in Jodhpur and Udaipur to dedicated fleet liaisons managing luggage drops directly into suites before guests finish their first glass of saffron lassi, every touchpoint must breathe effortless calm.',
      'The secret lies in the unseen layer: redundant sound engines, on-site backup master generators, and diplomatic-grade protocol teams that resolve challenges before families even know they existed.'
    ]
  },
  {
    slug: 'couture-tasting-menus-regional-royal-feasts',
    title: 'Reviving Royal Banquets: The Return of Lost Regional Gastronomy',
    category: 'Culinary Curation',
    readTime: '5 min read',
    publishedDate: 'March 2026',
    excerpt: 'Why the era of generic multi-cuisine buffets is over, and how bespoke royal thalis and forgotten nizami recipes are reclaiming the wedding feast.',
    coverImage: '/images/Untitled design 40.png',
    content: [
      'True luxury in hospitality is hyper-locality. When guests travel across oceans to Rajasthan or Goa, they yearn for culinary authenticity elevated to Michelin standards.',
      'We collaborate directly with royal culinary historians and khansamas whose lineages served the royal kitchens of Rampur, Mewar, and Hyderabad to recreate slow-smoked meats and silver-leaf desserts.'
    ]
  }
];
