
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

export interface Work {
  id: string;
  title: string;
  category: 'animation' | 'vfx' | 'ads' | 'visualization';
  imageUrl: string;
  videoUrl?: string;
  client?: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  category: 'assets' | 'tutorials' | 'designs';
  imageUrl: string;
}

export interface Course {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  description: string;
  outline: string[];
  objectives: string[];
  imageUrl: string;
  price?: string;
}
