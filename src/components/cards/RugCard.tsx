import React from 'react';
import type { Rug } from '../../types';
import CardHeader from './CardHeader';
import CardStats from './CardStats';

export default function RugCard({ rug }: { rug: Rug }) {
  return (
    <div className="border border-gray-200 rounded-xl p-3 hover:shadow-lg transition-shadow bg-white">
      <CardHeader
        name={rug.name}
        status={rug.status}
        avatar={rug.avatar}
        username={rug.username}
      />
      <CardStats
        price={rug.price}
        holders={rug.holders}
        marketCap={rug.marketCap}
        volume={rug.volume}
      />
    </div>
  );
}