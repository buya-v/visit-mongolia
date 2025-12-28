export interface Destination {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  location: string;
}

export interface CultureFact {
  id: string;
  title: string;
  description: string;
  icon: 'tent' | 'music' | 'horse';
}

export interface NavLink {
  label: string;
  href: string;
}