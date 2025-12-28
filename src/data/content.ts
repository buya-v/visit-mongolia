import { Destination, CultureFact } from '../types';

export const destinations: Destination[] = [
  {
    id: '1',
    title: 'Gobi Desert',
    description: 'Experience the vast expanse of the Gobi, home to singing dunes, rare camels, and dinosaur fossils.',
    location: 'Southern Mongolia',
    imageUrl: 'https://images.unsplash.com/photo-1612870196720-352d76378e90?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Lake Khövsgöl',
    description: 'Known as the "Blue Pearl", this ancient lake is surrounded by lush forests and mountains.',
    location: 'Northern Mongolia',
    imageUrl: 'https://images.unsplash.com/photo-1594140818228-56df85c7b39f?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Terelj National Park',
    description: 'Famous for its massive rock formations, including the Turtle Rock, and the Ariyabal Meditation Temple.',
    location: 'Near Ulaanbaatar',
    imageUrl: 'https://images.unsplash.com/photo-1558359738-92c42c75a408?q=80&w=2070&auto=format&fit=crop'
  }
];

export const cultureFacts: CultureFact[] = [
  {
    id: 'c1',
    title: 'Nomadic Lifestyle',
    description: 'A significant portion of the population still lives in Gers (yurts), moving seasonally with their herds.',
    icon: 'tent'
  },
  {
    id: 'c2',
    title: 'Throat Singing',
    description: 'Khoomei is a unique art form where singers produce two distinct pitches simultaneously.',
    icon: 'music'
  },
  {
    id: 'c3',
    title: 'Horse Culture',
    description: 'Horses are central to Mongolian identity. Children learn to ride before they can walk properly.',
    icon: 'horse'
  }
];