import React from 'react';
import { useCart } from '../context/CartContext';
import { CATEGORY_MAP } from '../data/categories';
import { WHATSAPP_PRIMARY } from '../data/inventory';

export default function ProductCard({ item }) {
  const { addToCart } = useCart();
  const catObj = CATEGORY_MAP[item.category];

  const inquiryMsg = encodeURIComponent(
    `Hello Oracle of God Pharmacy, I want to confirm availability/refill for ${item.brandName} (${item.genericName}, ${item.packSize}).`
  );
  const inquiryUrl = `https://wa.me/${WHATSAPP_PRIMARY}?text=${inquiryMsg}`;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              item.inStock
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : 'bg-amber-50 text-amber-800 border border-amber-200'
            }`}
          >
            {item.inStock ? '🟢 In Stock (Both Branches)' : '🟡 Call to Confirm'}
          </span>
          <span className="text-[10px] font-bold text-blue-800 bg-blue-50 border border-blue-200/70 px-2 py-0.5 rounded-full flex items-center gap-1">
            {catObj ? `${catObj.icon} ${catObj.label}` : item.category}
          </span>
        </div>

        {/* Drug Name & Generic Formulation */}
        <h3 className="font-black text-blue-950 text-base group-hover:text-blue-700 transition-colors">
          {item.brandName}
        </h3>
        <p className="text-xs text-blue-700 font-semibold mt-0.5 font-mono">
          Generic: {item.genericName}
        </p>

        {/* Pack Size & Dosage Chips */}
        <div className="flex flex-wrap items-center gap-1.5 mt-2">
          <div className="inline-block bg-slate-100 text-slate-700 text-[11px] font-medium px-2 py-0.5 rounded">
            📦 Pack: <strong className="text-slate-900">{item.packSize}</strong>
          </div>
          <div className="inline-block bg-slate-100 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded font-mono">
            💊 {item.dosageType}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
          {item.desc || 'Quality medication stocked at Oracle of God Pharmacy.'}
        </p>
      </div>

      {/* Price & Action Buttons */}
      <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-2.5">
        <div className="flex items-baseline justify-between">
          <span className="text-[10px] text-slate-500 font-bold uppercase">Price:</span>
          <span className="text-base font-black text-blue-950 font-mono">
            ₦{Number(item.price).toLocaleString()}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <a
            href={inquiryUrl}
            target="_blank"
            rel="noreferrer"
            className="py-2 px-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 font-bold text-[11px] flex items-center justify-center gap-1 transition text-center shadow-sm active:scale-95"
            title="Click to ask on WhatsApp instantly"
          >
            <span>💬</span>
            <span>Ask WhatsApp</span>
          </a>

          <button
            onClick={() => addToCart(item)}
            disabled={!item.inStock}
            className={`py-2 px-2.5 rounded-xl font-bold text-[11px] flex items-center justify-center gap-1 transition shadow-sm active:scale-95 ${
              item.inStock
                ? 'bg-blue-900 hover:bg-blue-800 text-white'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
            }`}
          >
            <span>🛒</span>
            <span>Add Basket</span>
          </button>
        </div>
      </div>
    </div>
  );
}
