import React from 'react';
import { Home, Search, TrendingUp, Wallet, User } from 'lucide-react';

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
      <div className="flex justify-around items-center p-3">
        <NavItem icon={<Home size={20} />} label="Home" active />
        <NavItem icon={<Search size={20} />} label="Search" />
        <NavItem icon={<TrendingUp size={20} />} label="Trending" />
        <NavItem icon={<Wallet size={20} />} label="Wallet" />
        <NavItem icon={<User size={20} />} label="Profile" />
      </div>
    </nav>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button className={`flex flex-col items-center gap-1 ${active ? 'text-blue-500' : 'text-gray-500'}`}>
      {icon}
      <span className="text-xs">{label}</span>
    </button>
  );
}