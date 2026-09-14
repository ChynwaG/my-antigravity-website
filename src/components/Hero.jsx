import React from 'react';
import pharmacistImg from '../assets/pharmacist_dispensary.jpg';

export default function Hero({ onOpenRxModal }) {
  const scrollToCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-b from-blue-900 via-blue-900 to-blue-950 text-white py-10 md:py-14 relative overflow-hidden">
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-800/80 border border-blue-700/80 text-white text-xs font-semibold shadow-inner">
              <span className="text-emerald-300 font-bold">ORACLE OF GOD PHARMACY</span>
              <span className="text-blue-400">•</span>
              <span className="text-emerald-300 italic font-medium">Where God Heals...</span>
              <span className="text-blue-400">•</span>
              <span className="text-blue-200">Ago Palace Way, Lagos</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Reliable Medicines In Stock, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-white">
                Instant 1-Click Refills.
              </span>
            </h1>

            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-xl">
              Browse verified community drug availability and real-time prices across our two Ago Palace Way branches. Order for instant pickup or local dispatch delivery.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={scrollToCatalog}
                className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-blue-950 font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-md transition transform active:scale-95"
              >
                <span>🔍</span> Browse Drug Catalog
              </button>
              <button
                onClick={onOpenRxModal}
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-950/40 transition transform active:scale-95"
              >
                <span>📸</span> Snap Doctor Slip
              </button>
              <a
                href="https://wa.me/2348138994905?text=Hello%20Oracle%20of%20God%20Pharmacy,%20I%20want%20to%20consult%20with%20the%20pharmacist%20on%20duty."
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 rounded-xl bg-blue-800/80 hover:bg-blue-700 text-emerald-300 font-bold text-xs sm:text-sm flex items-center gap-1.5 transition"
              >
                <span>💬</span> Chat Pharmacist
              </a>
            </div>

            {/* Quick Branch Summary Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] text-blue-200">
              <span className="bg-blue-800/60 px-2.5 py-1 rounded-lg border border-blue-700/60 flex items-center gap-1">
                <span>🏢</span> <strong>Head Office:</strong> 1A Chief Akude St.
              </span>
              <span className="bg-blue-800/60 px-2.5 py-1 rounded-lg border border-blue-700/60 flex items-center gap-1">
                <span>🏪</span> <strong>Branch:</strong> 47 Owolabi St.
              </span>
              <span className="bg-emerald-900/60 text-emerald-300 px-2.5 py-1 rounded-lg border border-emerald-700/60 font-semibold">
                ✓ Mon–Sat 8AM–10PM, Sun 2:30PM–10PM
              </span>
            </div>
          </div>

          {/* Right Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-900 group">
              
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={pharmacistImg}
                  alt="Oracle of God Pharmacist on Duty"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/40 to-transparent"></div>
                
                {/* Floating Status Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-blue-950 px-3 py-1.5 rounded-full text-xs font-extrabold flex items-center gap-1.5 shadow-md border border-white/60">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                  </span>
                  <span>👩‍⚕️ Pharmacist on Duty</span>
                  <span className="text-slate-300">|</span>
                  <span className="text-emerald-700 font-bold">Licensed Dispenser</span>
                </div>

                {/* 15-Min Prep Pill */}
                <div className="absolute top-3 right-3 bg-blue-900/90 backdrop-blur-md text-emerald-300 px-2.5 py-1 rounded-full text-[11px] font-bold border border-blue-700 shadow-md flex items-center gap-1">
                  <span>⚡</span>
                  <span>15-Min Prep</span>
                </div>

                {/* Caption */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="font-black text-base sm:text-lg tracking-tight leading-snug drop-shadow-sm">
                    Snap &amp; Order Doctor Prescription
                  </h3>
                  <p class="text-xs text-blue-200 mt-0.5 leading-relaxed">
                    Zero typing needed — our pharmacist verifies stock and prepares your pack immediately.
                  </p>
                </div>
              </div>

              {/* Action Trigger Card */}
              <div className="p-4 bg-white text-slate-800 space-y-3">
                <div
                  onClick={onOpenRxModal}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-emerald-50 via-blue-50 to-emerald-50 border-2 border-dashed border-emerald-400/80 hover:border-emerald-600 cursor-pointer transition shadow-sm group/rx"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xl shadow-md group-hover/rx:scale-110 transition-transform">
                      📸
                    </div>
                    <div>
                      <div className="font-black text-blue-950 text-xs sm:text-sm">Click to Upload / Snap Doctor Slip</div>
                      <div className="text-[11px] text-slate-500">Camera snap or image file from phone</div>
                    </div>
                  </div>
                  <span className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow transition group-hover/rx:bg-emerald-700">
                    Upload ↗
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-600 font-bold">📞 Hotlines:</span>
                    <span className="font-mono text-slate-800 font-bold text-[11px]">0813 899 4905 / 0806 477 7021</span>
                  </div>
                  <a href="tel:+2348138994905" className="text-blue-700 hover:text-blue-900 font-bold hover:underline flex items-center gap-0.5">
                    <span>Call Store</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
