import React from 'react';
import MainLayout from './components/layout/MainLayout';
import FilterTabs from './components/filters/FilterTabs';
import RugCard from './components/cards/RugCard';
import { useFilters } from './hooks/useFilters';

function App() {
  const { getFilteredRugs } = useFilters();
  const rugs = getFilteredRugs();

  return (
    <MainLayout>
      <FilterTabs />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-20 md:mb-4">
        {rugs.map((rug) => (
          <RugCard key={rug.id} rug={rug} />
        ))}
      </div>
    </MainLayout>
  );
}

export default App;