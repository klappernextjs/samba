import { useState } from 'react';
import { rugData } from '../data/rugs';
import type { Rug } from '../types';

export function useFilters() {
  const [activeFilter, setActiveFilter] = useState<keyof typeof rugData>('trending');

  const getFilteredRugs = (): Rug[] => {
    return rugData[activeFilter];
  };

  return {
    activeFilter,
    setActiveFilter,
    getFilteredRugs,
  };
}