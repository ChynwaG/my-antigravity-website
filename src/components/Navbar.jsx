import React from 'react';
import { useCart } from '../context/CartContext';
import logo from '../assets/logo_transparent.png';

export default function Navbar({ searchQuery, setSearchQuery, onOpenRxModal }) {
  const { count, setIsOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Brand Header */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <img
              src={logo}
              alt="Oracle of God Pharmacy Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-blue-950 text-base sm:text-xl tracking-tight">
                  ORACLE OF GOD
                </span>
                <span className="bg-emerald-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded tracking-wider uppercase">
                  PHARMACY
                </span>
              </div>
              <div className="text-[11px] text-emerald-700 font-bold italic flex items-center gap-1.5 mt-0.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                <span>Where God Heals...</span>
                <span className="text-slate-300 font-normal not-italic">•</span>
                <span className="text-slate-500 font-normal not-italic text-[10px]">Ago Palace Way</span>
              </div>
            </div>
          </a>

          {/* Search Bar (Desktop/Tablet) */}
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search drug name, generic formulation, or symptom..."
                className="w-full bg-slate-100 border border-slate-200 rounded-full py-2 pl-9 pr-4 text-xs focus:outline-none focus:border-blue-600 focus:bg-white transition"
              />
              <span className="absolute left-3 top-2.5 text-slate-400 text-xs">🔍</span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2 text-slate-400 hover:text-slate-600 text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Action Triggers */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenRxModal}
              className="bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition active:scale-95"
            >
              <span>📸</span>
              <span className="hidden sm:inline">Snap Doctor Slip</span>
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="relative bg-blue-900 hover:bg-blue-800 text-white px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow-sm active:scale-95"
            >
              <span>🛒</span>
              <span className="hidden sm:inline">Basket</span>
              {count > 0 && (
                <span className="bg-emerald-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full font-mono">
                  {count}
                </span>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Search Bar */}
        <div className="mt-3 md:hidden">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search drug, generic, or symptom..."
              className="w-full bg-slate-100 border border-slate-200 rounded-full py-2 pl-9 pr-4 text-xs focus:outline-none focus:border-blue-600 focus:bg-white transition"
            />
            <span className="absolute left-3 top-2.5 text-slate-400 text-xs">🔍</span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2 text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

      </div>
    </header>
  );
}
