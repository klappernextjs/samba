export interface Rug {
  id: string;
  name: string;
  price: string;
  holders: number;
  marketCap: string;
  volume: string;
  avatar: string;
  status: 'Rugged' | 'Active' | 'New';
  username: string;
}