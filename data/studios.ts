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
    city: 'Gurugram',
    badge: 'Headquarters ',
    name: 'Mangalgatha Gurugram office',
    address: 'Sector-65',
    landmark: 'Gurugram, Haryana 122001, India',
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
    address: 'Saltlake City, Sector 5',
    landmark: 'Kolkata, West Bengal 700016, India',
    phone: '+918595319969',
    displayPhone: '+91 8595 319969',
    email: 'info@mangalgatha.in',
    hours: 'Monday - Saturday: 10:30 AM - 7:30 PM (By Private Appointment)',
    mapUrl: 'https://maps.google.com/?q=Saltlake+City+Kolkata',
    image: '/images/Untitled design 9.png'
  }
];
