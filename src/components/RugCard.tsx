import React from 'react';
import { User } from 'lucide-react';

interface RugCardProps {
  name: string;
  price: string;
  holders: number;
  marketCap: string;
  volume: string;
  challengedUser: string;
  challengedUserAvatar: string; // URL to the avatar image
}

export default function RugCard({
  name,
  price,
  holders,
  marketCap,
  volume,
  challengedUser,
  challengedUserAvatar,
}: RugCardProps) {
  return (
    <div className="bg-white text-black rounded-xl p-4 shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-gray-500" />
        </div>
        <div>
          <h3 className="font-semibold">{name} challenges</h3>
          <div className="text-sm text-gray-500 flex items-center">
            <img
              src={challengedUserAvatar}
              alt={`${challengedUser} avatar`}
              className="w-4 h-4 rounded-full mr-1"
            />
            <span className="font-semibold">{challengedUser}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-500">Price</span>
        <span className="font-medium">{price} ETH</span>
      </div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-500">Holders</span>
        <span className="font-medium">{holders}</span>
      </div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-500">Market Cap</span>
        <span className="font-medium">{marketCap}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Volume</span>
        <span className="font-medium">{volume}</span>
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
          Yes
        </button>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
          No
        </button>
      </div>
    </div>
  );
}
