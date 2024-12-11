import { Rug } from '../types';

const generateRugs = (count: number, status: Rug['status']): Rug[] => {
  const avatars = [
    'https://images.unsplash.com/photo-1614853316476-de00d14cb1fc?w=50&h=50&fit=crop',
    'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=50&h=50&fit=crop',
    'https://images.unsplash.com/photo-1614853316476-de00d14cb1fc?w=50&h=50&fit=crop',
    'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=50&h=50&fit=crop'
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: `${status}-${i + 1}`,
    name: `${status} Project ${i + 1}`,
    price: `${(Math.random() * 5).toFixed(2)} ETH`,
    holders: Math.floor(Math.random() * 1000),
    marketCap: `$${(Math.random() * 1000).toFixed(0)}K`,
    volume: `$${(Math.random() * 100).toFixed(0)}K`,
    avatar: avatars[i % avatars.length],
    status,
    username: `user_${Math.random().toString(36).substring(7)}`
  }));
};

export const rugData = {
  trending: generateRugs(9, 'Active'),
  recent: generateRugs(9, 'Rugged'),
  new: generateRugs(9, 'New'),
  holders: generateRugs(9, 'Active')
};