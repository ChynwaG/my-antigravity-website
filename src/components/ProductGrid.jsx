import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ items, searchQuery, onResetFilters }) {
  if (items.length === 0) {
    return (
      <div className="text-center py-16 bg-white border border-slate-200 rounded-2xl p-8 space-y-3 mt-6">
        <div className="text-4xl">🔍</div>
        <h3 className="font-black text-blue-950 text-base">No matching medications found</h3>
        <p className="text-xs text-slate-500 max-w-md mx-auto">
          We couldn't find any drug matching "{searchQuery}". Try searching for generic active names, symptoms, or clear your filters.
        </p>
        <button
          onClick={onResetFilters}
          className="mt-2 px-4 py-2 bg-blue-900 text-white text-xs font-bold rounded-xl hover:bg-blue-800 transition"
        >
          Reset All Filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-6">
      {items.map(item => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}
