import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import logo from '../assets/logo_transparent.png';

export default function Navbar({ searchQuery, setSearchQuery, onOpenRxModal, onOpenAdmin }) {
  const { count, setIsOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-40">

      {/* ── Tier 1: Announcement Ribbon ── */}
      <div className="bg-blue-950 text-white text-[11px] font-semibold py-1.5 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Scrolling announcement */}
          <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap">
            <span className="shrink-0 text-emerald-400 font-bold">📢</span>
            <span className="animate-[marquee_25s_linear_infinite] inline-block">
              Free In-Store BP & BMI Check-Up Every Visit &nbsp;•&nbsp; Order via WhatsApp & Pay by Bank Transfer &nbsp;•&nbsp; Delivery within Ago Palace Way: ₦1,500 &nbsp;•&nbsp; Mon–Sat: 8am–10pm &nbsp; Sun: 2:30pm–10pm
            </span>
          </div>
          {/* Quick contact & admin */}
          <div className="shrink-0 hidden sm:flex items-center gap-3">
            <a
              href="tel:+2348138994905"
              className="flex items-center gap-1.5 text-emerald-300 hover:text-white transition"
            >
              <span>📞</span>
              <span>0813 899 4905</span>
            </a>
            <span className="text-blue-700">|</span>
            <button
              onClick={onOpenAdmin}
              className="bg-blue-900 hover:bg-blue-700 text-blue-100 px-2 py-0.5 rounded border border-blue-700 text-[10px] font-bold transition flex items-center gap-1"
            >
              <span>⚙️</span> Staff Admin
            </button>
          </div>
        </div>
      </div>

      {/* ── Tier 2: Main Navigation Bar ── */}
      <header
        className={`bg-white border-b border-slate-200 transition-shadow duration-200 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-3 sm:gap-4">

            {/* Logo & Brand */}
            <a href="#" className="flex items-center gap-2.5 group shrink-0">
              <img
                src={logo}
                alt="Oracle of God Pharmacy Logo"
                className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="hidden xs:block sm:block">
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-blue-950 text-sm sm:text-lg leading-tight tracking-tight">
                    ORACLE OF GOD
                  </span>
                  <span className="bg-emerald-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded tracking-widest uppercase">
                    PHARMACY
                  </span>
                </div>
                <div className="text-[10px] text-emerald-700 font-bold italic flex items-center gap-1.5 mt-0.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                  </span>
                  <span>Where God Heals...</span>
                </div>
              </div>
            </a>

            {/* Search Bar (Desktop) */}
            <div className="hidden md:flex flex-1 max-w-lg">
              <div className="relative w-full">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none">🔍</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search drug name, generic name, or symptom..."
                  className="w-full bg-slate-50 border-2 border-slate-200 hover:border-blue-300 focus:border-blue-600 rounded-full py-2.5 pl-10 pr-10 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 font-bold text-xs"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={onOpenRxModal}
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow-sm shadow-emerald-700/30 active:scale-95"
              >
                <span>📸</span>
                <span className="hidden sm:inline">Snap Prescription</span>
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className="relative bg-blue-900 hover:bg-blue-800 text-white px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow-sm active:scale-95"
              >
                <span>🛒</span>
                <span className="hidden sm:inline">Basket</span>
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow font-mono">
                    {count > 9 ? '9+' : count}
                  </span>
                )}
              </button>
            </div>

          </div>

          {/* Mobile Search Bar */}
          <div className="mt-2.5 md:hidden">
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none">🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search drug, generic name, or symptom..."
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-blue-600 rounded-full py-2 pl-10 pr-9 text-xs focus:outline-none focus:bg-white transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 font-bold text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

    </div>
  );
}
