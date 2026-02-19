
export interface Stat {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

export interface Product {
  name: string;
  description: string;
  image: string;
}

export interface Milestone {
  year: string;
  event: string;
}

export interface VideoItem {
  title: string;
  url: string;
  id: string;
}
