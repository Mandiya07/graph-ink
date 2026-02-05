
import { Play, Layers, Film, Box, Monitor, Users, GraduationCap, ShoppingBag } from 'lucide-react';
import { Service, Work, Product, Course } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Courses', path: '/courses' },
  { name: 'Community', path: '/community' },
  { name: 'About', path: '/about' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Advertising Animations',
    description: 'Bespoke commercial animations that capture brand essence with cinematic quality.',
    icon: 'Play',
    imageUrl: 'https://picsum.photos/seed/ads/800/450'
  },
  {
    id: '2',
    title: 'Character & Motion',
    description: 'Bringing life to digital characters with industry-standard rigging and fluidity.',
    icon: 'Users',
    imageUrl: 'https://picsum.photos/seed/char/800/450'
  },
  {
    id: '3',
    title: 'VFX for Film',
    description: 'High-end visual effects, compositing, and environment design for modern cinema.',
    icon: 'Film',
    imageUrl: 'https://picsum.photos/seed/vfx/800/450'
  },
  {
    id: '4',
    title: '3D Visualization',
    description: 'Hyper-realistic architectural and product visualizations for marketing and pre-vis.',
    icon: 'Box',
    imageUrl: 'https://picsum.photos/seed/vis/800/450'
  }
];

export const WORKS: Work[] = [
  { id: '1', title: 'Cyber City 2077', category: 'animation', imageUrl: 'https://picsum.photos/seed/cyber/600/400', client: 'Neon Dynamics' },
  { id: '2', title: 'The Void VFX', category: 'vfx', imageUrl: 'https://picsum.photos/seed/void/600/400', client: 'Starlight Studios' },
  { id: '3', title: 'Beverage Ad 3D', category: 'ads', imageUrl: 'https://picsum.photos/seed/drink/600/400', client: 'Sparkle Cola' },
  { id: '4', title: 'Modern Villa Pre-Vis', category: 'visualization', imageUrl: 'https://picsum.photos/seed/arch/600/400', client: 'Modern Living' },
  { id: '5', title: 'Robotic Arm Motion', category: 'animation', imageUrl: 'https://picsum.photos/seed/robot/600/400', client: 'AutoTech' },
  { id: '6', title: 'Magic Particles', category: 'vfx', imageUrl: 'https://picsum.photos/seed/magic/600/400', client: 'Mythos Films' },
];

export const PRODUCTS: Product[] = [
  { id: '1', title: 'Sci-Fi Hard Surface Pack', description: '50+ high-quality 3D assets for kitbashing.', price: '$49', category: 'assets', imageUrl: 'https://picsum.photos/seed/kit/400/300' },
  { id: '2', title: 'Mastering Unreal Engine', description: 'A complete guide to cinematic lighting.', price: '$120', category: 'tutorials', imageUrl: 'https://picsum.photos/seed/unreal/400/300' },
  { id: '3', title: 'Procedural Texture Pack', description: 'Advanced Node-based textures for Blender.', price: '$25', category: 'designs', imageUrl: 'https://picsum.photos/seed/node/400/300' },
];

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Introduction to 3D Animation',
    level: 'Beginner',
    duration: '8 Weeks',
    price: '$299',
    description: 'Master the fundamentals of 3D space, keyframing, and basic character movement using industry-leading tools.',
    outline: [
      'Interface and Viewport Navigation',
      'Basic Primitive Modeling',
      'The 12 Principles of Animation',
      'Simple Rigging and Skinning',
      'Final Project: A Bouncing Ball and Walk Cycle'
    ],
    objectives: [
      'Understand the 3D pipeline from start to finish.',
      'Create and animate your first 3D character.',
      'Master the curve editor for fluid motion.',
      'Export high-quality video renders for portfolios.'
    ],
    imageUrl: 'https://picsum.photos/seed/course1/1200/600'
  },
  {
    id: '2',
    title: 'Elementary 3D Animation Course',
    level: 'Intermediate',
    duration: '12 Weeks',
    price: '$499',
    description: 'A deep dive into industry-standard workflows for creative professionals aiming for film and game studios.',
    outline: [
      'Advanced Character Modeling and Retopology',
      'Substance Painter Workflow for Texturing',
      'Cinematic Lighting and Composition',
      'Advanced Facial Animation and Lip Sync',
      'VFX Integration with Houdini and Unreal'
    ],
    objectives: [
      'Develop complex, studio-ready 3D characters.',
      'Master realistic lighting and post-processing techniques.',
      'Create high-end cinematic sequences.',
      'Optimize assets for real-time engines like Unreal Engine 5.'
    ],
    imageUrl: 'https://picsum.photos/seed/course2/1200/600'
  }
];
