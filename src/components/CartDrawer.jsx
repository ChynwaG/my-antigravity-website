import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { DELIVERY_FEE } from '../data/inventory';

export default function CartDrawer() {
  const {
    cart,
    isOpen,
    setIsOpen,
    fulfillment,
    setFulfillment,
    branch,
    setBranch,
    deliveryAddress,
    setDeliveryAddress,
    removeFromCart,
    updateQty,
    subtotal,
    deliveryFee,
    total,
    submitOrder,
    count
  } = useCart();

  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyAccount = () => {
    navigator.clipboard.writeText('1029384756');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-full max-w-md bg-white border-l border-slate-200 shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-4 bg-blue-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">🛒</span>
              <h3 className="font-black text-white text-base">Your Order Basket</h3>
              <span className="text-xs bg-blue-800 text-emerald-300 px-2 py-0.5 rounded font-mono font-bold">
                {count} {count === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-blue-200 hover:text-white p-1 text-base font-bold"
            >
              ✕
            </button>
          </div>

          {/* Cart Items Scroll Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 thin-scrollbar">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="text-4xl">🛍️</div>
                <div className="text-blue-950 font-bold text-sm">Your order basket is empty</div>
                <p className="text-xs text-slate-500">
                  Search items or snap a prescription to add medications.
                </p>
              </div>
            ) : (
              <>
                {/* Items List */}
                <div className="space-y-3">
                  {cart.map(item => (
                    <div
                      key={item.id}
                      className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-blue-950 truncate">{item.brandName}</div>
                        <div className="text-[10px] text-slate-500 truncate">{item.packSize}</div>
                        <div className="font-mono font-bold text-blue-900 mt-0.5">
                          ₦{Number(item.price * item.qty).toLocaleString()}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg p-1">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 flex items-center justify-center text-xs"
                        >
                          -
                        </button>
                        <span className="font-mono font-bold px-1 text-xs">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 flex items-center justify-center text-xs"
                        >
                          +
                        </button>
                      </div>

                      {/* Delete */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 font-bold text-xs p-1"
                        title="Remove item"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                {/* Fulfillment Selection */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3 text-xs">
                  <div className="font-bold text-blue-950 flex items-center justify-between">
                    <span>Choose Pickup or Delivery:</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFulfillment('pickup')}
                      className={`p-2.5 rounded-lg border text-left transition flex flex-col ${
                        fulfillment === 'pickup'
                          ? 'border-2 border-blue-600 bg-blue-50'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <span className="font-bold text-blue-950">🏪 Store Pickup</span>
                      <span className="text-[10px] text-emerald-700 font-bold mt-0.5">
                        FREE (Ready in 15m)
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFulfillment('delivery')}
                      className={`p-2.5 rounded-lg border text-left transition flex flex-col ${
                        fulfillment === 'delivery'
                          ? 'border-2 border-blue-600 bg-blue-50'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <span className="font-bold text-slate-800">🛵 Home Delivery</span>
                      <span className="text-[10px] text-amber-700 font-bold mt-0.5">
                        + ₦1,500 dispatch
                      </span>
                    </button>
                  </div>

                  {/* Branch Select */}
                  {fulfillment === 'pickup' && (
                    <div className="space-y-1.5 pt-2 border-t border-slate-200">
                      <label className="text-slate-700 font-semibold">Select Pickup Branch:</label>
                      <select
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-800 text-xs focus:outline-none focus:border-blue-600"
                      >
                        <option value="Head Office (1A Chief Akude Street, off Dr Fasheun Ave)">
                          Head Office (1A Chief Akude Street)
                        </option>
                        <option value="Branch (47 Owolabi Street, Ago Palace Way)">
                          Branch (47 Owolabi Street)
                        </option>
                      </select>
                    </div>
                  )}

                  {/* Delivery Address Input */}
                  {fulfillment === 'delivery' && (
                    <div className="space-y-1.5 pt-2 border-t border-slate-200">
                      <label className="text-slate-700 font-semibold">Street Address in Ago Palace Way:</label>
                      <input
                        type="text"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        placeholder="e.g. 14 Grace Avenue, near Central Church, Ago"
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-800 text-xs focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  )}
                </div>

                {/* Bank Payment Card */}
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 space-y-2.5 text-xs">
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-blue-950 flex items-center gap-1.5">
                      <span className="text-blue-700">💳</span> Official Bank Payment Account
                    </div>
                    <span className="text-[10px] bg-blue-200/80 text-blue-900 px-2 py-0.5 rounded font-mono font-bold">
                      Business Account
                    </span>
                  </div>

                  <div className="space-y-1 bg-white p-3 rounded-lg border border-blue-100 font-mono text-[11px]">
                    <div className="text-slate-500 text-[10px]">ACCOUNT NAME:</div>
                    <div className="text-blue-950 font-bold">Oracle of God Pharmacy Ltd</div>
                    <div className="text-slate-500 text-[10px] mt-1">ACCOUNT NUMBER (Zenith / Access):</div>
                    <div className="flex items-center justify-between text-blue-900 font-black text-sm">
                      <span>1029384756</span>
                      <button
                        onClick={copyAccount}
                        className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-800 px-2.5 py-1 rounded font-sans font-bold transition"
                      >
                        {copied ? '✓ Copied!' : 'Copy'}
                      </button>
                    </div>
                  </div>

                  <p className="text-[10px] text-slate-600">
                    💡 Transfer total amount. Click below to send order + transfer receipt directly to our WhatsApp dispatch line!
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Footer Checkout Button */}
          {cart.length > 0 && (
            <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-3">
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal:</span>
                  <span className="font-mono text-slate-900 font-bold">
                    ₦{subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Fulfillment:</span>
                  <span className="font-mono text-emerald-700 font-bold">
                    {fulfillment === 'delivery' ? `+ ₦${DELIVERY_FEE.toLocaleString()}` : 'FREE'}
                  </span>
                </div>
                <div className="flex justify-between text-blue-950 font-black text-sm pt-2 border-t border-slate-200">
                  <span>Total Payable:</span>
                  <span className="text-blue-900 font-mono text-base font-black">
                    ₦{total.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={submitOrder}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-800/30 transition transform active:scale-95"
              >
                <span className="text-base">💬</span>
                <span>Send Multi-Item Order to WhatsApp</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
