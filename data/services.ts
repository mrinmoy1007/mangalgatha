export interface ServiceExtendedContent {
  introEyebrow?: string;
  introHeading: string;
  introQuote: string;
  introParagraphs: string[];

  offeringsHeading: string;
  offerings: { number?: string; title: string; desc: string }[];
  offeringsLayout?: 'sidebar' | 'grid';

  entertainmentHeading?: string;
  entertainmentIntro?: string[];
  entertainmentListHeading?: string;
  entertainmentList?: string[];
  soundtrackHeading?: string;
  soundtrackIntro?: string[];
  moments?: { name: string; mood: string; desc: string; elements?: { title: string; desc: string }[] }[];

  journeyHeading: string;
  journeySubheading?: string;

  philosophy?: { heading: string; subheading: string; paragraphs: string[] }[];

  closing: { heading: string; subheading?: string; paragraphs: string[]; ctaText?: string };
}

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
  extended?: ServiceExtendedContent;
}

export const servicesData: Service[] = [
  {
    id: '01',
    slug: 'full-wedding-planning',
    number: '01',
    title: 'Full Wedding Planning',
    shortDesc: 'From the first idea to the last dance, we take care of it all.',
    fullDesc: 'At Mangalgatha, full wedding planning means taking care of the details you see — and even more of the ones you don\'t. We bring together the people, plans, places, timelines and possibilities that make your celebration happen, while keeping your story at the centre of every decision.',
    heroImage: '/images/Untitled design 21.png',
    alt: 'Grand royal Indian wedding mandap ceremony at twilight',
    features: [
      'Wedding Vision & Concept Design',
      'Venue & Destination Planning',
      'Vendor & Partner Curation',
      'Guest Experience Curation',
      'Timelines, Logistics & On-Ground Execution'
    ],
    process: [
      { step: '01', title: 'Discover', desc: 'We listen to your story — your people, your traditions, your personalities, your dreams and your vision for the celebration.' },
      { step: '02', title: 'Define', desc: 'We shape the vision. The destination, venues, design direction, celebrations, guest experience and overall wedding aesthetic begin to take form.' },
      { step: '03', title: 'Plan', desc: 'We bring the pieces together. Budgets, vendors, timelines, logistics, hospitality and every important detail are thoughtfully coordinated.' },
      { step: '04', title: 'Create', desc: 'We bring the vision to life. Spaces are designed, experiences are curated and every celebration is prepared down to the smallest detail.' },
      { step: '05', title: 'Celebrate', desc: 'You step into the moment. While you celebrate with your favourite people, we remain behind the scenes, making sure everything flows beautifully.' }
    ],
    gallery: [
      '/images/Untitled design 23.png',
      '/images/Untitled design 14.png',
      '/images/Untitled design 7.png',
      '/images/Untitled design 35.png'
    ],
    extended: {
      introEyebrow: 'The Art of Full-Service Planning',
      introHeading: 'Behind Every Effortless Wedding Is a Beautifully Planned One',
      introQuote: 'There is a certain magic to a wedding that feels effortless.',
      introParagraphs: [
        'The flowers arrive exactly when they should. The music begins at the perfect moment. Every guest knows where to go. Every ceremony flows naturally into the next.',
        'And you? You are present.',
        "At Mangalgatha, full wedding planning means taking care of the details you see — and even more of the ones you don't.",
        'We bring together the people, plans, places, timelines and possibilities that make your celebration happen, while keeping your story at the centre of every decision.',
        'Because the best-planned wedding is not the one where everything looks organised. It is the one where everything simply feels right.'
      ],
      offeringsHeading: 'What We Do',
      offeringsLayout: 'grid',
      offerings: [
        { number: '01', title: 'Wedding Vision & Concept', desc: 'We begin by understanding you — your story, your personalities, your families, your traditions and the feeling you want your wedding to leave behind. From there, we develop a cohesive wedding vision that gives every celebration its own identity.' },
        { number: '02', title: 'Venue & Destination Planning', desc: "The right setting can transform the way a celebration feels. Whether it's a heritage palace, an intimate resort, a modern city venue or a destination far from home, we help curate the setting around your wedding vision and guest experience." },
        { number: '03', title: 'Budget & Planning', desc: 'Beautiful weddings need thoughtful planning behind them. We help structure priorities, allocate budgets and make considered decisions throughout the planning journey — ensuring that every investment contributes meaningfully to the overall celebration.' },
        { number: '04', title: 'Vendor & Partner Curation', desc: 'The people behind the celebration matter. From décor artists and florists to photographers, entertainment, culinary teams and production partners, we bring together the right creative specialists for your wedding. Every collaboration is chosen with your vision in mind.' },
        { number: '05', title: 'Wedding Design & Décor', desc: 'Your wedding should have a visual language of its own. We translate your story into colour, texture, florals, lighting, spaces and details — creating environments that feel immersive, intentional and unmistakably yours.' },
        { number: '06', title: 'Guest Experience', desc: 'A wedding is also a journey for everyone who comes to celebrate with you. From arrival and accommodation to welcome experiences, hospitality and farewell moments, we thoughtfully curate the guest journey so that your loved ones feel cared for at every step.' },
        { number: '07', title: 'Timelines & Logistics', desc: 'Behind the beauty is precision. We coordinate schedules, ceremonies, vendors, transportation, setup, rehearsals and countless moving parts to ensure the celebration flows seamlessly from one moment to the next.' },
        { number: '08', title: 'On-Ground Execution', desc: 'When the celebrations begin, our planning becomes presence. Our team coordinates the details behind the scenes, works with vendors and manages the flow of each event — allowing you and your family to step away from the logistics and into the celebration.' }
      ],
      journeyHeading: 'The Wedding Journey',
      closing: {
        heading: 'Let the Planning Be Ours. Let the Memories Be Yours.',
        paragraphs: [
          'Your wedding will pass in a beautiful blur of music, laughter, rituals, hugs and happy tears.',
          'Let us take care of everything that makes that moment possible.',
          'You bring the love.',
          "We'll create the celebration around it."
        ],
        ctaText: 'Plan Your Wedding With Mangalgatha'
      }
    }
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
    shortDesc: "We don't just decorate spaces. We create worlds for your story.",
    fullDesc: 'At Mangalgatha, we turn your story into immersive wedding décor and event design — thoughtfully bringing together florals, textures, lighting, architecture, colour and detail to create celebrations that feel extraordinary and entirely yours.',
    heroImage: '/images/mandap decore.png',
    alt: 'Botanical floral mandap adorned with fresh blossoms and brass lamps',
    features: [
      'Concept & Creative Direction',
      'Venue Transformation & Floral Design',
      'Mandap & Ceremony Design',
      'Reception & Tablescape Design',
      'Lighting, Entrances & Custom Artistry'
    ],
    process: [
      { step: '01', title: 'Discover', desc: 'We listen. Your story, inspirations, traditions, personalities and the feeling you want your celebration to create.' },
      { step: '02', title: 'Imagine', desc: 'We build the vision. Mood, colour, materials, florals, architecture and atmosphere begin coming together.' },
      { step: '03', title: 'Design', desc: 'We refine every detail. From the largest installation to the smallest table detail, every element is considered as part of one cohesive experience.' },
      { step: '04', title: 'Create', desc: 'We bring the vision to life. Our creative partners and production teams transform the space into the world we imagined together.' },
      { step: '05', title: 'Experience', desc: 'You step into it. The lights come on. The music begins. Your guests arrive. And the space becomes part of your story.' }
    ],
    gallery: [
      '/images/decore.png',
      '/images/flower decore.png',
      '/images/Untitled design 24.png',
      '/images/venue decore 4.png'
    ],
    extended: {
      introEyebrow: 'The Art of Wedding Design',
      introHeading: 'Beauty Is in the Details. Magic Is in How They Come Together.',
      introQuote: 'A wedding venue is simply a space when you first walk into it.',
      introParagraphs: [
        'Then the transformation begins.',
        'The light changes. Flowers begin to bloom. Textures create depth. Music fills the air. A colour palette starts telling a story.',
        'And suddenly, the space feels different. It feels like you.',
        "That's the art of event design.",
        'At Mangalgatha, we look beyond individual décor elements to create a complete visual and sensory experience — one where every celebration has its own personality and every detail belongs to the larger story.'
      ],
      offeringsHeading: 'What We Create',
      offeringsLayout: 'grid',
      offerings: [
        { number: '01', title: 'Concept & Creative Direction', desc: 'The idea that brings everything together. We develop the creative direction for your celebration — exploring mood, colour, materials, textures, inspiration and the emotional character you want your wedding to have.' },
        { number: '02', title: 'Venue Transformation', desc: "From four walls to an entire experience. We study the architecture, landscape and natural character of your venue before designing around it. The goal isn't to hide the space — it is to make it part of the story." },
        { number: '03', title: 'Floral Design', desc: 'Flowers with a point of view. From abundant floral installations to understated botanical details, we use flowers to create atmosphere, movement and emotion throughout your celebration.' },
        { number: '04', title: 'Mandap & Ceremony Design', desc: 'Where your most sacred moments take place. The mandap is more than a focal point — it is where vows are made, blessings are given and families come together. We create ceremony spaces that honour their significance while expressing your aesthetic.' },
        { number: '05', title: 'Reception & Tablescape Design', desc: 'Where every guest has a front-row seat to the beauty. Tables, menus, linens, florals, candles, tableware and details come together to create dining experiences that feel intimate, elegant and memorable.' },
        { number: '06', title: 'Lighting & Ambience', desc: 'The light that changes the mood. Warm candlelight, dramatic architectural lighting, soft evening illumination — we use light as part of the design, shaping atmosphere, highlighting details and transforming the way a space feels from day to night.' },
        { number: '07', title: 'Entrances & Installations', desc: 'Make the first moment count. Your entrance is the first chapter of the celebration. From statement installations and floral pathways to immersive arrival experiences, we create moments that make guests stop, look and feel.' },
        { number: '08', title: 'Custom Details & Artistry', desc: "The little things they didn't expect. Personalised stationery, custom signage, handcrafted elements, family-inspired details, bespoke installations — these are often the details that make a wedding feel truly yours." }
      ],
      journeyHeading: 'The Design Journey',
      journeySubheading: "An idea. A sketch. A space. A moment you'll never forget.",
      philosophy: [
        {
          heading: 'The Mangalgatha Design Philosophy',
          subheading: 'We believe in creating a visual language.',
          paragraphs: [
            "We don't believe in choosing a wedding theme and filling a venue with matching elements.",
            'Maybe your story calls for old-world Indian grandeur. Maybe it is contemporary minimalism softened with flowers. Maybe it is a riot of colour inspired by the traditions you grew up with. Or maybe it is something no one has seen before.',
            'Whatever your vision, we translate it into a cohesive design language that flows across your wedding — from the invitation and entrance to the mandap, tablescape, lighting and final detail.',
            "The result isn't simply beautiful. It feels intentional."
          ]
        }
      ],
      closing: {
        heading: "Let's Create a Place Where Your Story Can Live.",
        paragraphs: [
          'Tell us what you imagine.',
          "The colours you've saved. The places you love. The traditions you want to honour. The feeling you want your guests to take home.",
          "We'll turn those fragments into a world.",
          'A world that exists for one celebration. Yours.'
        ],
        ctaText: 'Create Your Wedding Design'
      }
    }
  },
  {
    id: '04',
    slug: 'mehendi-haldi-and-sangeet',
    number: '04',
    title: 'Mehendi, Haldi & Sangeet',
    shortDesc: 'The celebrations before the "I do."',
    fullDesc: 'From sunlit Haldi ceremonies and intimate Mehendi celebrations to high-energy Sangeet nights, Mangalgatha creates pre-wedding experiences that feel every bit as special as the wedding itself.',
    heroImage: '/images/Untitled design 39.png',
    alt: 'Joyful Haldi ceremony flower shower with yellow marigold petals',
    features: [
      'Concept & Creative Direction',
      'Décor & Florals',
      'Entertainment',
      'Food & Beverage Experiences',
      'Lighting & Production'
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
    ],
    extended: {
      introEyebrow: 'The Pre-Wedding Magic',
      introHeading: 'Because Some of the Best Wedding Memories Happen Before the Wedding',
      introQuote: 'There is something wonderfully different about the celebrations that lead up to the wedding.',
      introParagraphs: [
        "The bride isn't quite a bride yet. The groom isn't quite a groom yet.",
        'Everyone is relaxed. Everyone is together. And there is still time to simply have fun.',
        'These are the mornings filled with teasing and turmeric. The afternoons filled with mehendi and music. The evenings where cousins rehearse until midnight and parents secretly practise their dance steps.',
        'At Mangalgatha, we believe these moments deserve just as much thought and creativity as the wedding itself.',
        "So we create celebrations that don't simply fill the calendar. They build the story."
      ],
      offeringsHeading: 'What We Curate',
      offeringsLayout: 'grid',
      offerings: [
        { number: '01', title: 'Concept & Creative Direction', desc: 'A distinct creative identity for each celebration.' },
        { number: '02', title: 'Décor & Florals', desc: 'Spaces designed to reflect the mood, season and personality of the event.' },
        { number: '03', title: 'Entertainment', desc: 'From live music and DJs to performances and interactive experiences.' },
        { number: '04', title: 'Food & Beverage Experiences', desc: 'Menus and presentation that become part of the celebration.' },
        { number: '05', title: 'Lighting & Production', desc: 'Creating atmosphere, energy and those unforgettable evening moments.' },
        { number: '06', title: 'Guest Experiences', desc: 'Thoughtful details that give your guests something to talk about long after the celebration.' }
      ],
      soundtrackHeading: 'Mehendi · Haldi · Sangeet',
      soundtrackIntro: ['Different moods. Different stories. One unforgettable celebration.'],
      moments: [
        {
          name: 'Mehendi',
          mood: 'A little ink. A lot of memories.',
          desc: 'The Mehendi is where conversations stretch for hours, music starts playing in the background and everyone gathers a little closer.',
          elements: [
            { title: 'Mehendi Design & Setting', desc: 'A beautiful environment designed around the mood of the celebration.' },
            { title: 'Florals & Décor', desc: 'Colour, texture and floral details that create an inviting atmosphere.' },
            { title: 'Guest Experiences', desc: 'Thoughtful activities and entertainment that keep everyone involved.' },
            { title: 'Food & Hospitality', desc: 'Menus and service designed to complement the mood of the celebration.' }
          ]
        },
        {
          name: 'Haldi',
          mood: 'A little turmeric. A lot of joy.',
          desc: 'Yellow everywhere. Flowers everywhere. Laughter everywhere.',
          elements: [
            { title: 'Vibrant Design', desc: 'Marigolds, florals, colour and textures that bring the celebration to life.' },
            { title: 'Playful Experiences', desc: 'Music, entertainment and interactive moments designed for your people.' },
            { title: 'Ceremony & Flow', desc: 'Keeping the traditional elements meaningful while making the celebration feel effortless.' },
            { title: 'Photographic Moments', desc: 'Beautifully designed spaces that become part of your memories.' }
          ]
        },
        {
          name: 'Sangeet',
          mood: 'The night when everyone has a story to tell.',
          desc: "The Sangeet isn't just an evening of performances. It is your story told through music, movement, laughter and a little theatrical magic.",
          elements: [
            { title: 'Concept & Storyline', desc: 'A creative direction that turns your relationship and family stories into the heart of the evening.' },
            { title: 'Stage & Set Design', desc: 'Designed to complement the performances and create a visual centrepiece.' },
            { title: 'Lighting & Production', desc: 'Dynamic production that brings energy, drama and atmosphere to the celebration.' },
            { title: 'Entertainment', desc: 'From choreography and live performances to DJs and curated entertainment experiences.' },
            { title: 'Guest Participation', desc: 'Because the best Sangeet is the one where everyone eventually ends up on the dance floor.' }
          ]
        }
      ],
      journeyHeading: 'How We Bring Each Celebration to Life',
      closing: {
        heading: 'Because the Wedding May Be One Day. The Memories Begin Much Earlier.',
        paragraphs: [],
        ctaText: 'Plan Your Pre-Wedding Celebrations'
      }
    }
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
    shortDesc: "The best photographs don't just show you what happened. They bring you back to how it felt.",
    fullDesc: 'We believe wedding photography should feel as personal as the celebration itself. Whether your aesthetic is editorial and sophisticated, candid and intimate, cinematic and dramatic, or deeply rooted in Indian traditions, we help curate the right creative team for your story.',
    heroImage: '/images/Untitled design 13.png',
    alt: 'Editorial portrait of an Indian couture bride in regal lehenga',
    features: [
      'Wedding Photography & Cinematography',
      'Pre-Wedding Photography & Films',
      'Editorial & Fine-Art Photography',
      'Traditional & Cultural Documentation',
      'Drone & Aerial Storytelling'
    ],
    process: [
      { step: '01', title: 'Discover', desc: 'We understand your story, personalities, preferences and celebration.' },
      { step: '02', title: 'Curate', desc: 'We identify photographers, filmmakers, artists and entertainment experiences aligned with your vision.' },
      { step: '03', title: 'Refine', desc: 'We bring together the right creative direction, music, performances and production requirements.' },
      { step: '04', title: 'Coordinate', desc: 'We work with the chosen teams to ensure every element fits seamlessly into your wedding timeline.' },
      { step: '05', title: 'Experience', desc: 'You step into the celebration knowing the moments are being captured and the atmosphere is being created with intention.' }
    ],
    gallery: [
      '/images/Untitled design 16.png',
      '/images/Untitled design 27.png',
      '/images/entertainment.png',
      '/images/entertainment 2.png'
    ],
    extended: {
      introEyebrow: 'Photography & Entertainment Curation',
      introHeading: 'The Art of Capturing a Wedding',
      introQuote: "The best photographs don't just show you what happened. They bring you back to how it felt.",
      introParagraphs: [
        'We believe wedding photography should feel as personal as the celebration itself.',
        'Whether your aesthetic is editorial and sophisticated, candid and intimate, cinematic and dramatic, or deeply rooted in Indian traditions, we help curate the right creative team for your story.'
      ],
      offeringsHeading: 'Our Photography & Film Curation Includes',
      offerings: [
        { title: 'Wedding Photography', desc: 'Candid moments, portraits, details and the beautifully unscripted moments in between.' },
        { title: 'Wedding Cinematography', desc: 'Films that transform your celebrations into a story you can return to, again and again.' },
        { title: 'Pre-Wedding Photography & Films', desc: 'Creating visual stories that feel like you — rather than another staged photoshoot.' },
        { title: 'Editorial & Fine-Art Photography', desc: 'For couples who want their wedding memories to feel timeless, refined and beautifully composed.' },
        { title: 'Traditional & Cultural Documentation', desc: 'Honouring the rituals, people and traditions that make an Indian wedding meaningful.' },
        { title: 'Drone & Aerial Storytelling', desc: 'A larger perspective on spectacular venues, celebrations and destination weddings.' }
      ],
      entertainmentHeading: 'Entertainment, Curated Around Your Celebration',
      entertainmentIntro: [
        'The right artist can transform a room. The right band can change the energy of an evening. The right performance can become the story everyone talks about afterwards.',
        'Mangalgatha curates entertainment that fits your people, your personality and your celebration.'
      ],
      entertainmentListHeading: 'We Can Curate',
      entertainmentList: [
        'Live Bands & Musicians',
        'DJs & Music Experiences',
        'Celebrity & Artist Performances',
        'Classical & Folk Performances',
        'Sufi & Fusion Artists',
        'Dance Performances',
        'Wedding Choreography',
        'Emcees & Hosts',
        'Special Guest Performances',
        'Cultural & Regional Artists',
        'Interactive Entertainment',
        'Custom Wedding Performances'
      ],
      soundtrackHeading: "Your Wedding Has a Soundtrack. Let's Make It Yours.",
      soundtrackIntro: [
        'Every celebration has its own rhythm. The soft music during a welcome evening. The first beat of the Sangeet. The song your family has danced to for generations. The unexpected performance that brings everyone to their feet.',
        'We curate entertainment around the mood and story of each celebration, rather than simply filling a stage.'
      ],
      moments: [
        { name: 'Mehendi', mood: 'Colour. Laughter. Easygoing energy.', desc: 'Music and entertainment that make the afternoon feel effortless and alive.' },
        { name: 'Haldi', mood: 'Playful. Vibrant. Unfiltered.', desc: 'High-energy entertainment for a celebration that was never meant to be quiet.' },
        { name: 'Sangeet', mood: 'Drama. Music. Emotion. Magic.', desc: 'From choreography and performers to stage entertainment and musical experiences, we create an evening worth remembering.' },
        { name: 'Wedding', mood: 'Grace. Emotion. Grandeur.', desc: 'Entertainment that complements the ceremony without taking away from its significance.' },
        { name: 'Reception', mood: 'Elegance. Energy. Celebration.', desc: 'A carefully curated soundtrack to take the evening from beautiful to unforgettable.' }
      ],
      journeyHeading: 'From the First Frame to the Final Note',
      journeySubheading: 'Our curation follows the same philosophy as every Mangalgatha experience:',
      philosophy: [
        {
          heading: 'Photography That Feels Like You',
          subheading: "Your memories shouldn't look like everyone else's.",
          paragraphs: [
            'There is no single definition of beautiful wedding photography. Some couples want cinematic grandeur. Some want quiet intimacy. Some want fashion-forward portraits. Some want nothing but candid moments.',
            'We help you discover the visual language that feels most authentic to your story and curate the creative team around it.'
          ]
        },
        {
          heading: 'Entertainment That Becomes Part of the Story',
          subheading: 'When the right music plays, everyone has a memory.',
          paragraphs: [
            'From the first note to the final encore, entertainment should feel like an extension of the celebration.',
            'We bring together artists and experiences that create atmosphere, encourage connection and give your guests something to remember long after the wedding ends.'
          ]
        }
      ],
      closing: {
        heading: 'Some memories deserve to be frame-worthy. Some deserve an encore.',
        subheading: "Let's create both.",
        paragraphs: ["Tell us your story, your style and the celebration you're imagining. We'll help bring together the people who can capture it beautifully — and the ones who can make it unforgettable."]
      }
    }
  }
];
