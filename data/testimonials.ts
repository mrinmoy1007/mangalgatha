export interface Testimonial {
  id: string;
  quote: string;
  couple: string;
  location: string;
  venue: string;
  date: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    quote: 'Mangalgatha did not merely organize our wedding; they authored a family heirloom. Every single guest from across 14 countries commented that they had never witnessed hospitality so deeply gracious and design so breathtaking.',
    couple: 'Aditi Singhania & Karan Goenka',
    location: 'Udaipur, Rajasthan',
    venue: 'Taj Lake Palace',
    date: 'Winter 2025'
  },
  {
    id: '2',
    quote: 'Planning a palace wedding for 450 guests while living in London felt impossible until Mangalgatha stepped in. Their taste is immaculate—never ostentatious, always deeply regal, effortless, and soulful.',
    couple: 'Meera & Siddharth Mehta',
    location: 'Jodhpur, Rajasthan',
    venue: 'Umaid Bhawan Palace',
    date: 'January 2026'
  },
  {
    id: '3',
    quote: 'When the monsoon winds shifted during our beach pheras in Goa, their team reacted with military calm and poetic flair. Within minutes, the entire pavilion transformed into an intimate candlelit glass sanctuary.',
    couple: 'Ananya Roy & Dev Rathore',
    location: 'Morjim, Goa',
    venue: 'Taj Exotica',
    date: 'January 2026'
  },
  {
    id: '4',
    quote: 'To orchestrate a true Vedic wedding on the shores of Lake Como with authentic Indian musicians and sacred fire rituals was a monumental feat. Mangalgatha executed it with couture perfection.',
    couple: 'Tara & Arjun Talwar',
    location: 'Lake Como, Italy',
    venue: 'Villa Balbiano',
    date: 'Autumn 2025'
  }
];
