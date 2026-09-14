import React from 'react';
import { useCart } from '../context/CartContext';
import { CATEGORY_MAP } from '../data/categories';
import { WHATSAPP_PRIMARY } from '../data/inventory';

export default function ProductCard({ item, onSelectProduct }) {
  const { addToCart } = useCart();
  const catObj = CATEGORY_MAP[item.category];

  const inquiryMsg = encodeURIComponent(
    `Hello Oracle of God Pharmacy, I want to confirm availability/refill for ${item.brandName} (${item.genericName}, ${item.packSize}).`
  );
  const inquiryUrl = `https://wa.me/${WHATSAPP_PRIMARY}?text=${inquiryMsg}`;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between group">
      
      {/* Clickable Card Body leading to Modal */}
      <div className="cursor-pointer" onClick={() => onSelectProduct(item)}>
        
        {/* E-commerce Image Placeholder */}
        <div className="h-40 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center border-b border-slate-100 group-hover:bg-blue-50/50 transition-colors relative">
          <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
            {catObj ? catObj.icon : '📦'}
          </div>
          <div className="absolute top-2 right-2 flex flex-col gap-1">
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm ${
                item.inStock
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-amber-50 text-amber-800 border border-amber-200'
              }`}
            >
              {item.inStock ? '🟢 In Stock' : '🟡 Confirm'}
            </span>
          </div>
        </div>

        <div className="p-5 pb-0">
          <div className="mb-2">
            <span className="text-[10px] font-bold text-blue-800 bg-blue-50 border border-blue-200/70 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
              {catObj ? `${catObj.label}` : item.category}
            </span>
          </div>

          <h3 className="font-black text-blue-950 text-base group-hover:text-blue-700 transition-colors line-clamp-1">
            {item.brandName}
          </h3>
          <p className="text-xs text-blue-700 font-semibold mt-0.5 font-mono line-clamp-1">
            {item.genericName}
          </p>

          <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
            <div className="inline-block bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-1 rounded border border-slate-200">
              {item.packSize}
            </div>
          </div>
          
          <p className="text-xs text-slate-500 mt-2.5 line-clamp-2 leading-relaxed">
            {item.desc || 'Quality medication stocked at Oracle of God Pharmacy.'}
          </p>
        </div>
      </div>

      {/* Price & Actions */}
      <div className="px-5 pb-5 mt-4 pt-4 border-t border-slate-100 space-y-3">
        <div className="flex items-baseline justify-between">
          <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Price</span>
          <span className="text-lg font-black text-blue-950 font-mono">
            ₦{Number(item.price).toLocaleString()}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <a
            href={inquiryUrl}
            target="_blank"
            rel="noreferrer"
            className="py-2.5 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 font-bold text-[11px] flex items-center justify-center gap-1.5 transition text-center shadow-sm active:scale-95"
            title="Ask on WhatsApp"
            onClick={(e) => e.stopPropagation()}
          >
            <span>💬</span>
            <span>WhatsApp</span>
          </a>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(item);
            }}
            disabled={!item.inStock}
            className={`py-2.5 px-2 rounded-xl font-bold text-[11px] flex items-center justify-center gap-1.5 transition shadow-sm active:scale-95 ${
              item.inStock
                ? 'bg-blue-900 hover:bg-blue-800 text-white'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
            }`}
          >
            <span>🛒</span>
            <span>Basket</span>
          </button>
        </div>
      </div>
    </div>
  );
}
