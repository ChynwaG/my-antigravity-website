import React from 'react';
import { useCart } from '../context/CartContext';
import { CATEGORY_MAP } from '../data/categories';
import { WHATSAPP_PRIMARY } from '../data/inventory';

export default function ProductModal({ product, onClose }) {
  const { addToCart } = useCart();

  if (!product) return null;

  const catObj = CATEGORY_MAP[product.category] || { icon: '📦', label: product.category };
  
  const inquiryMsg = encodeURIComponent(
    `Hello Oracle of God Pharmacy, I want to order/confirm stock for ${product.brandName} (${product.genericName}, ${product.packSize}).`
  );
  const inquiryUrl = `https://wa.me/${WHATSAPP_PRIMARY}?text=${inquiryMsg}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl z-10 flex flex-col sm:flex-row overflow-hidden max-h-[90vh]">
        
        {/* Left Side: Product Image (Category Placeholder) */}
        <div className="sm:w-2/5 bg-gradient-to-br from-blue-50 to-emerald-50 border-b sm:border-b-0 sm:border-r border-slate-200 flex flex-col items-center justify-center p-8 relative min-h-[200px]">
          <button
            onClick={onClose}
            className="absolute top-3 left-3 sm:hidden w-8 h-8 rounded-full bg-white/80 text-slate-800 font-bold shadow flex items-center justify-center z-10"
          >
            ✕
          </button>
          
          <div className="text-8xl sm:text-9xl transform hover:scale-110 transition-transform duration-300 drop-shadow-xl">
            {catObj.icon}
          </div>
          <div className="absolute bottom-4 left-0 right-0 text-center text-xs font-bold text-slate-400 tracking-widest uppercase">
            {catObj.label}
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="sm:w-3/5 p-6 sm:p-8 flex flex-col overflow-y-auto thin-scrollbar">
          <div className="flex justify-between items-start mb-4">
            <span
              className={`text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full ${
                product.inStock
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                  : 'bg-amber-100 text-amber-800 border border-amber-200'
              }`}
            >
              {product.inStock ? '🟢 In Stock (Both Branches)' : '🟡 Call to Confirm Availability'}
            </span>
            <button
              onClick={onClose}
              className="hidden sm:block text-slate-400 hover:text-slate-600 font-bold text-lg p-1"
            >
              ✕
            </button>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-blue-950 mb-1 leading-tight">
            {product.brandName}
          </h2>
          <p className="text-sm text-blue-700 font-bold mb-4 font-mono">
            Generic: {product.genericName}
          </p>

          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="bg-slate-100 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200">
              📦 {product.packSize}
            </span>
            <span className="bg-slate-100 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 font-mono">
              💊 {product.dosageType}
            </span>
          </div>

          <div className="flex-grow">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Clinical Description</h4>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {product.desc || `Premium quality ${product.genericName} stocked at Oracle of God Pharmacy.`}
            </p>
          </div>

          <div className="border-t border-slate-200 pt-5 mt-auto">
            <div className="flex items-end justify-between mb-5">
              <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Retail Price</span>
              <span className="text-3xl font-black text-blue-950 font-mono">
                ₦{Number(product.price).toLocaleString()}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={inquiryUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-300 text-emerald-800 font-bold text-sm flex items-center justify-center gap-2 transition active:scale-95"
              >
                <span>💬</span>
                <span>Ask on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  if (product.inStock) {
                    addToCart(product);
                    onClose();
                  }
                }}
                disabled={!product.inStock}
                className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition active:scale-95 ${
                  product.inStock
                    ? 'bg-blue-900 hover:bg-blue-800 text-white shadow-lg shadow-blue-900/30'
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed border-2 border-slate-200'
                }`}
              >
                <span>🛒</span>
                <span>Add to Basket</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
