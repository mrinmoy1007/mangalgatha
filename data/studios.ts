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
    city: 'Delhi NCR',
    badge: 'Headquarters ',
    name: 'Mangalgatha Delhi-NCR office',
    address: 'Sector-65',
    landmark: 'Delhi-NCR, Delhi 122102, India',
    phone: '+918595319969',
    displayPhone: '+91 8595 319969',
    email: 'info@mangalgatha.in',
    hours: 'Monday - Saturday: 10:30 AM - 7:30 PM (By Private Appointment)',
    mapUrl: 'https://maps.google.com/?q=The+Dhan+Mill+Chhatarpur+New+Delhi',
    image: '/images/Untitled design 6.png'
  },
  {
    city: 'Kolkata',
    badge: 'Eastern India office',
    name: 'Mangalgatha Kolkata office',
    address: 'Park Street Area',
    landmark: 'Kolkata, West Bengal 700016, India',
    phone: '+918595319969',
    displayPhone: '+91 8595 319969',
    email: 'info@mangalgatha.in',
    hours: 'Monday - Saturday: 10:30 AM - 7:30 PM (By Private Appointment)',
    mapUrl: 'https://maps.google.com/?q=Park+Street+Kolkata',
    image: '/images/Untitled design 9.png'
  }
];
