import React, { useState } from 'react';

export default function PrescriptionModal({ isOpen, onClose }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [note, setNote] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleWhatsAppSend = () => {
    const fileName = selectedFile ? selectedFile.name : 'Doctor Prescription Slip Photo';
    const noteText = note ? `Note: ${note}` : '';
    const msg = encodeURIComponent(
      `Hello Pharmacist, I want to order/refill my doctor's prescription slip.\n\nFile/Photo Attached: ${fileName}\n${noteText}\n\nPlease check stock and calculate total cost for pickup/delivery.`
    );
    window.open(`https://wa.me/2348138994905?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl z-10 space-y-5 border border-slate-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📸</span>
            <div>
              <h3 className="font-black text-blue-950 text-base">Snap Doctor Prescription</h3>
              <p className="text-xs text-slate-500">Zero typing needed — sent straight to Pharmacist</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 text-base font-bold"
          >
            ✕
          </button>
        </div>

        {/* Upload Zone */}
        <div className="space-y-3">
          <label className="block border-2 border-dashed border-emerald-400 hover:border-emerald-600 rounded-2xl p-6 text-center cursor-pointer bg-emerald-50/40 hover:bg-emerald-50 transition group">
            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">📷</div>
            <div className="font-bold text-blue-950 text-xs sm:text-sm">
              {selectedFile ? selectedFile.name : 'Click to Snap Photo or Choose Slip File'}
            </div>
            <div className="text-slate-500 text-[11px] mt-1">
              Supports JPG, PNG, or camera photo on mobile devices
            </div>
          </label>

          {/* Patient Note */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Optional Patient Note or Dosage Questions:
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="e.g. Please include 1 month supply, or I prefer brand name..."
              rows={2}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white transition"
            ></textarea>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <button
            onClick={handleWhatsAppSend}
            className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 transition transform active:scale-95"
          >
            <span>💬</span>
            <span>Send Prescription Photo via WhatsApp</span>
          </button>

          <p className="text-[10px] text-slate-500 text-center">
            🔒 Your medical information is handled confidentially by our licensed dispensary team.
          </p>
        </div>

      </div>
    </div>
  );
}
