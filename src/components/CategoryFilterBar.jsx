import React from 'react';
import { CATEGORIES } from '../data/categories';

export default function CategoryFilterBar({ activeCategory, setActiveCategory, inventory }) {
  const getCategoryCount = (key) => {
    if (key === 'all') return inventory.length;
    return inventory.filter(item => item.category === key).length;
  };

  const activeCategoryObj = CATEGORIES.find(c => c.key === activeCategory) || CATEGORIES[0];

  return (
    <div className="space-y-4 pb-4 border-b border-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 uppercase tracking-wider">
            <span>💊</span> Searchable Medicine Directory
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight mt-0.5">
            Browse Medications &amp; Live Stock
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Real-time prices, pack sizes, and instant 1-click WhatsApp inquiries across 98 verified medications.
          </p>
        </div>

        <div className="text-xs text-slate-500 self-start sm:self-auto bg-slate-100 px-3 py-1.5 rounded-lg">
          Category: <strong className="text-blue-900 font-bold">{activeCategoryObj.icon} {activeCategoryObj.label}</strong>
        </div>
      </div>

      {/* Scrollable Category Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs pt-1 no-scrollbar">
        {CATEGORIES.map(cat => {
          const isActive = activeCategory === cat.key;
          const count = getCategoryCount(cat.key);

          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`shrink-0 px-3.5 py-1.5 rounded-full font-semibold transition flex items-center gap-1 ${
                isActive
                  ? 'bg-blue-700 text-white font-bold shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:text-blue-900 hover:border-blue-300'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                isActive ? 'bg-blue-800 text-blue-100' : 'bg-slate-100 text-slate-500'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
