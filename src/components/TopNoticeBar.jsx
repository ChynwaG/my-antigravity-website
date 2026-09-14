import React from 'react';

export default function TopNoticeBar({ onOpenAdmin }) {
  return (
    <div className="bg-blue-950 text-white text-[11px] sm:text-xs py-2 px-4 border-b border-blue-900">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-blue-200">
          <span className="flex items-center gap-1">
            <span className="text-emerald-400 font-bold">⏰ Hours:</span>
            <span>Mon–Sat 8:00 AM – 10:00 PM • Sun 2:30 PM – 10:00 PM</span>
          </span>
          <span className="hidden md:inline text-blue-800">|</span>
          <span className="flex items-center gap-1 text-emerald-300 font-semibold">
            <span>🩺 Free In-Store BP &amp; BMI Screenings</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a href="tel:+2348138994905" className="hover:text-emerald-300 transition font-mono font-semibold">
            📞 0813 899 4905
          </a>
          <span className="text-blue-800">|</span>
          <button
            onClick={onOpenAdmin}
            className="bg-blue-900 hover:bg-blue-800 text-blue-100 px-2.5 py-0.5 rounded border border-blue-700 text-[10px] font-bold transition flex items-center gap-1"
          >
            <span>⚙️</span> Staff Admin Portal
          </button>
        </div>
      </div>
    </div>
  );
}
