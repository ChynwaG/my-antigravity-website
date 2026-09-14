import React from 'react';

export default function ScreeningBanner() {
  return (
    <section className="bg-emerald-50 border-b border-emerald-200 py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">
            🩺
          </span>
          <div>
            <strong className="text-emerald-950">Free Health Screenings:</strong>
            <span className="text-emerald-800 ml-1">
              Complimentary Blood Pressure (BP) &amp; BMI checkups at both branches. No appointment needed.
            </span>
          </div>
        </div>
        <a
          href="https://wa.me/2348138994905?text=Hello%20Pharmacist,%20I%20would%20like%20to%20inquire%20about%20a%20Blood%20Pressure/BMI%20screening%20at%20the%20shop."
          target="_blank"
          rel="noreferrer"
          className="text-emerald-700 hover:text-emerald-900 font-bold flex items-center gap-1 self-start sm:self-auto"
        >
          <span>Inquire on WhatsApp →</span>
        </a>
      </div>
    </section>
  );
}
