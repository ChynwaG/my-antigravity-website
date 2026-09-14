import React from 'react';

export default function StoreLocations() {
  return (
    <section className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 border border-blue-200 text-xs font-bold">
              <span>📍</span> Physical Pharmacy Premises
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight">
              Two Convenient Branches in Ago Palace Way
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
              Pick up your pre-packed medications without waiting in queues, or visit us for complimentary Blood Pressure &amp; BMI health screenings.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
              <div className="bg-slate-50 p-4 rounded-xl border border-blue-200 space-y-2">
                <div className="font-bold text-blue-950 flex items-center justify-between">
                  <span className="flex items-center gap-1.5"><span>🏢</span> Head Office</span>
                  <span className="text-[10px] bg-blue-100 px-2 py-0.5 rounded text-blue-800 font-bold">Dispensary</span>
                </div>
                <div className="text-slate-700 font-semibold">
                  1A Chief Akude street, off Dr Fasheun avenue, Ago palace-way Lagos State.
                </div>
                <div className="text-blue-700 font-bold">📞 0813 899 4905</div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-emerald-200 space-y-2">
                <div className="font-bold text-blue-950 flex items-center justify-between">
                  <span className="flex items-center gap-1.5"><span>🏪</span> Owolabi Branch</span>
                  <span className="text-[10px] bg-emerald-100 px-2 py-0.5 rounded text-emerald-800 font-bold">Branch Mart</span>
                </div>
                <div className="text-slate-700 font-semibold">
                  47, Owolabi Street, Ago Palace way, Lagos.
                </div>
                <div className="text-emerald-700 font-bold">📞 0806 477 7021</div>
              </div>
            </div>

            <div className="bg-blue-50 p-3.5 rounded-xl border border-blue-200 text-xs text-blue-950 flex items-center gap-3">
              <span className="text-blue-700 text-base">⏰</span>
              <div>
                <strong>Dispensary Working Hours:</strong>
                <div>Monday – Saturday: 8:00 AM – 10:00 PM • Sunday: 2:30 PM – 10:00 PM</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-tr from-blue-900 to-blue-950 text-white p-6 rounded-2xl text-center space-y-4 shadow-xl">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-300 rounded-2xl flex items-center justify-center mx-auto text-2xl font-black border border-emerald-400/40">
              🩺
            </div>
            <h3 className="font-bold text-white text-base">Free Blood Pressure &amp; BMI Checks</h3>
            <p className="text-xs text-blue-200 leading-relaxed">
              Cardiovascular health and weight management start with regular monitoring. Walk into either branch for professional, complimentary checks by our pharmacist.
            </p>
            <a
              href="https://wa.me/2348138994905?text=Hello%20Oracle%20of%20God%20Pharmacy,%20I%20am%20coming%20for%20a%20Blood%20Pressure%20and%20BMI%20checkup."
              target="_blank"
              rel="noreferrer"
              className="inline-block px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow-md shadow-emerald-900/50"
            >
              Chat on WhatsApp Before Coming →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
