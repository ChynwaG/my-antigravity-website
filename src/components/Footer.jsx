import React from 'react';
import logo from '../assets/logo_transparent.png';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-200 border-t border-blue-900 py-10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Oracle of God Pharmacy"
                className="h-10 w-auto object-contain"
              />
              <div>
                <div className="tracking-tight font-black text-white text-base">ORACLE OF GOD PHARMACY</div>
                <div className="text-xs text-emerald-300 font-semibold italic flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse not-italic"></span>
                  Where God Heals...
                </div>
                <div className="text-[10px] text-blue-300 uppercase tracking-widest font-semibold mt-0.5">Ago Palace Way, Lagos</div>
              </div>
            </div>
            <p className="text-[11px] text-blue-300 leading-relaxed">
              Dedicated to healing, committed to care. Providing authentic medicines, 1-click availability verification, and compassionate pharmaceutical counseling in Ago Palace Way, Lagos.
            </p>
          </div>

          {/* Contact Numbers */}
          <div className="space-y-2">
            <div className="font-bold text-white text-xs uppercase tracking-wider">Contact &amp; Dispatch Numbers</div>
            <p className="text-[11px]">Head Office: <a href="tel:+2348138994905" className="text-emerald-300 font-bold hover:underline">0813 899 4905</a></p>
            <p className="text-[11px]">Owolabi Branch: <a href="tel:+234806477021" className="text-emerald-300 font-bold hover:underline">0806 477 7021</a></p>
            <p className="text-[11px]">WhatsApp Hotline: +234 813 899 4905</p>
          </div>

          {/* Medical Disclaimer */}
          <div className="space-y-2">
            <div className="font-bold text-white text-xs uppercase tracking-wider">Premises Compliance</div>
            <p className="text-[11px]">Licensed Community Pharmacy Premises</p>
            <p className="text-[11px] text-amber-200">
              ⚠️ <strong>Medical Disclaimer:</strong> Information on this website is for stock checking and convenience ordering. It does not replace clinical consultation with your doctor.
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-blue-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-blue-400">
          <div>© {new Date().getFullYear()} Oracle of God Pharmacy. All rights reserved.</div>
          <div className="flex items-center gap-4 text-emerald-300 font-semibold">
            <span>✓ Head Office (1A Chief Akude St.)</span>
            <span>✓ Owolabi Branch (47 Owolabi St.)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
