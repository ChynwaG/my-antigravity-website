import React from 'react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/2348138994905?text=Hello%20Oracle%20of%20God%20Pharmacy,%20I%20want%20to%20inquire%20about%20medication%20availability."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 border-2 border-white group"
      title="Chat with Pharmacist on WhatsApp"
    >
      <span className="text-2xl">💬</span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs pl-0 group-hover:pl-2">
        Chat Pharmacist
      </span>
    </a>
  );
}
