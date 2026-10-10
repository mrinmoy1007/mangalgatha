export interface Studio {
  city: string;
  badge: string;
  name: string;
  address: string;
  landmark: string;
  phone: string;
  displayPhone: string;
  email: string;
  hours: string;
  mapUrl: string;
  image: string;
}

export const studiosData: Studio[] = [
  {
    city: 'Gurgaon',
    badge: 'Registered Office',
    name: 'Zovent Private Limited',
    address: 'EPO-07, Unit No. 012-014, 7th Floor, Emerald Plaza, Sector-65',
    landmark: 'Gurgaon, Haryana 122101, India',
    phone: '+918595319969',
    displayPhone: '+91 8595 319969',
    email: 'info@mangalgatha.in',
    hours: 'Monday - Saturday: 10:30 AM - 7:30 PM ',
    mapUrl: 'https://maps.google.com/?q=Emerald+Plaza+Sector+65+Gurgaon',
    image: '/images/Untitled design 6.png'
  },
  {
    city: 'Kolkata',
    badge: 'Corporate Office',
    name: 'Zovent Private Limited',
    address: '13th Floor, Unit No. 1319, Bengal Eco Intelligent Park, EM Block, Sector V, Salt Lake',
    landmark: 'Bidhannagar, Kolkata, West Bengal 700091, India',
    phone: '+918595319969',
    displayPhone: '+91 8595 319969',
    email: 'info@mangalgatha.in',
    hours: 'Monday - Saturday: 10:30 AM - 7:30 PM',
    mapUrl: 'https://maps.google.com/?q=Bengal+Eco+Intelligent+Park+Salt+Lake+Kolkata',
    image: '/images/Untitled design 9.png'
  }
];
