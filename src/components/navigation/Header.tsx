import React from 'react';
import { Home, HelpCircle, Settings } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white z-10 flex justify-between items-center p-4 border-b border-gray-200">
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="Rug.fun" className="h-6" />
        <span className="font-bold">rug.fun</span>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <Home className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors" />
        <HelpCircle className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors" />
        <Settings className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors" />
      </div>
    </header>
  );
}