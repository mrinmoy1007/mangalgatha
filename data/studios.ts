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
    badge: 'Headquarters & Studio',
    name: 'Mangalgatha Delhi Studio',
    address: 'The Dhan Mill, 100 Feet Road, Chhatarpur',
    landmark: 'New Delhi, Delhi 110074, India',
    phone: '+918595319969',
    displayPhone: '+91 8595 319969',
    email: 'info@mangalgatha.in',
    hours: 'Monday – Saturday: 10:30 AM – 7:30 PM (By Private Appointment)',
    mapUrl: 'https://maps.google.com/?q=The+Dhan+Mill+Chhatarpur+New+Delhi',
    image: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=1000&auto=format&fit=crop'
  },
  {
    city: 'Kolkata',
    badge: 'Eastern India Studio',
    name: 'Mangalgatha Kolkata Studio',
    address: 'Park Street Area',
    landmark: 'Kolkata, West Bengal 700016, India',
    phone: '+918595319969',
    displayPhone: '+91 8595 319969',
    email: 'info@mangalgatha.in',
    hours: 'Monday – Saturday: 10:30 AM – 7:30 PM (By Private Appointment)',
    mapUrl: 'https://maps.google.com/?q=Park+Street+Kolkata',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop'
  },
  {
    city: 'Pune',
    badge: 'Western India Operations',
    name: 'Mangalgatha Pune Office',
    address: 'Koregaon Park',
    landmark: 'Pune, Maharashtra 411001, India',
    phone: '+918595319969',
    displayPhone: '+91 8595 319969',
    email: 'info@mangalgatha.in',
    hours: 'Monday – Saturday: 10:00 AM – 7:00 PM (By Private Appointment)',
    mapUrl: 'https://maps.google.com/?q=Koregaon+Park+Pune',
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=1000&auto=format&fit=crop'
  }
];
