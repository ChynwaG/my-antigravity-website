import React, { useState } from 'react';
import { useInventory } from '../context/InventoryContext';
import { CATEGORIES } from '../data/categories';

export default function AdminModal({ isOpen, onClose }) {
  const { inventory, updatePrice, toggleStock, addDrug, deleteDrug, resetToDefaults } = useInventory();
  
  const [activeTab, setActiveTab] = useState('list'); // 'list' | 'add'
  const [searchFilter, setSearchFilter] = useState('');
  
  // New drug form state
  const [brandName, setBrandName] = useState('');
  const [genericName, setGenericName] = useState('');
  const [category, setCategory] = useState('antacid');
  const [packSize, setPackSize] = useState('');
  const [dosageType, setDosageType] = useState('Oral Tablet');
  const [price, setPrice] = useState('');
  const [inStock, setInStock] = useState(true);
  const [desc, setDesc] = useState('');
  const [symptomsInput, setSymptomsInput] = useState('');

  if (!isOpen) return null;

  const filteredInventory = inventory.filter(item => {
    if (!searchFilter) return true;
    const q = searchFilter.toLowerCase();
    return (
      item.brandName.toLowerCase().includes(q) ||
      item.genericName.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!brandName || !genericName || !price) return;

    const symptoms = symptomsInput.split(',').map(s => s.trim().toLowerCase()).filter(Boolean);

    addDrug({
      brandName,
      genericName,
      category,
      packSize: packSize || 'Standard Pack',
      dosageType,
      price: Number(price),
      inStock,
      desc: desc || `${brandName} stocked at Oracle of God Pharmacy.`,
      symptoms: symptoms.length > 0 ? symptoms : ['medication']
    });

    // Reset Form
    setBrandName('');
    setGenericName('');
    setPackSize('');
    setPrice('');
    setDesc('');
    setSymptomsInput('');
    setActiveTab('list');
  };

  const handleResetConfirm = () => {
    if (window.confirm('Reset entire inventory back to all 98 verified medications across all categories? All custom edits will be lost.')) {
      resetToDefaults();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl max-w-4xl w-full p-6 shadow-2xl z-10 space-y-4 border border-slate-200 my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚙️</span>
            <div>
              <h3 className="font-black text-blue-950 text-lg">Staff Admin: Drug &amp; Price Manager</h3>
              <p className="text-xs text-slate-500">Live dispensary inventory management &amp; retail price modifier</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 text-lg font-bold"
          >
            ✕
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('list')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeTab === 'list'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              📋 Edit Prices &amp; Stock ({inventory.length})
            </button>
            <button
              onClick={() => setActiveTab('add')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeTab === 'add'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              ➕ Add New Drug
            </button>
          </div>

          <button
            onClick={handleResetConfirm}
            className="text-red-600 hover:text-red-800 text-xs font-bold hover:underline"
          >
            Reset Defaults
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto thin-scrollbar">
          
          {/* TAB 1: EDIT PRICES & STOCK TABLE */}
          {activeTab === 'list' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 bg-blue-50 p-3 rounded-xl border border-blue-100 text-xs text-blue-950">
                <span>💡 Type new prices directly in the boxes below or toggle stock status. Changes save automatically!</span>
                <input
                  type="text"
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  placeholder="🔍 Quick search table..."
                  className="bg-white border border-slate-300 rounded-lg px-2.5 py-1 text-xs text-slate-800 focus:outline-none focus:border-blue-600 w-48"
                />
              </div>

              <div className="border border-slate-200 rounded-xl overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="p-3">Drug / Brand Name</th>
                      <th className="p-3">Generic &amp; Pack Size</th>
                      <th className="p-3">Stock Status</th>
                      <th className="p-3">Price (₦)</th>
                      <th className="p-3 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {filteredInventory.map(item => (
                      <tr key={item.id} className="hover:bg-slate-50 transition">
                        <td className="p-3">
                          <div className="font-bold text-blue-950 text-xs sm:text-sm">{item.brandName}</div>
                          <span className="text-[10px] font-bold text-blue-800 bg-blue-50 border border-blue-200/70 px-2 py-0.5 rounded-full inline-block mt-1">
                            {item.category}
                          </span>
                        </td>
                        <td className="p-3 text-slate-600">
                          <div>{item.genericName}</div>
                          <div className="text-[10px] text-slate-400 font-mono">{item.packSize}</div>
                        </td>
                        <td className="p-3">
                          <button
                            type="button"
                            onClick={() => toggleStock(item.id)}
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold border transition ${
                              item.inStock
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                                : 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100'
                            }`}
                          >
                            {item.inStock ? '🟢 In Stock' : '🟡 Call to Confirm'}
                          </button>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-1 font-mono">
                            <span className="text-slate-500 font-bold">₦</span>
                            <input
                              type="number"
                              value={item.price}
                              onChange={(e) => updatePrice(item.id, e.target.value)}
                              className="w-24 bg-white border border-slate-300 rounded px-2 py-1 text-slate-900 font-bold text-xs focus:border-blue-600"
                            />
                          </div>
                        </td>
                        <td className="p-3 text-center">
                          <button
                            type="button"
                            onClick={() => deleteDrug(item.id)}
                            className="text-red-600 hover:text-red-800 font-bold text-xs hover:bg-red-50 p-1 rounded transition"
                            title="Delete from catalog"
                          >
                            🗑️ Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: ADD NEW DRUG FORM */}
          {activeTab === 'add' && (
            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Brand Name *</label>
                  <input
                    type="text"
                    required
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="e.g. Lonart Forte 80/480mg"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Generic Active Ingredient *</label>
                  <input
                    type="text"
                    required
                    value={genericName}
                    onChange={(e) => setGenericName(e.target.value)}
                    placeholder="e.g. Artemether + Lumefantrine"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Category *</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:border-blue-600"
                  >
                    {CATEGORIES.filter(c => c.key !== 'all').map(c => (
                      <option key={c.key} value={c.key}>
                        {c.icon} {c.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Pack Size *</label>
                  <input
                    type="text"
                    value={packSize}
                    onChange={(e) => setPackSize(e.target.value)}
                    placeholder="e.g. Box of 6 Tablets or 100ml Liquid"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Dosage Form</label>
                  <input
                    type="text"
                    value={dosageType}
                    onChange={(e) => setDosageType(e.target.value)}
                    placeholder="e.g. Oral Tablet, Syrup, Cream"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Retail Price (₦) *</label>
                  <input
                    type="number"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="e.g. 3500"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Stock Availability</label>
                <div className="flex items-center gap-4 pt-1">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="adminStock"
                      checked={inStock}
                      onChange={() => setInStock(true)}
                    />
                    <span className="font-bold text-emerald-700">🟢 In Stock</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="adminStock"
                      checked={!inStock}
                      onChange={() => setInStock(false)}
                    />
                    <span className="font-bold text-amber-700">🟡 Call to Confirm</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Short Description</label>
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Brief clinical indication or dosage note..."
                  rows={2}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:border-blue-600"
                ></textarea>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Search Keywords (Comma separated)</label>
                <input
                  type="text"
                  value={symptomsInput}
                  onChange={(e) => setSymptomsInput(e.target.value)}
                  placeholder="e.g. fever, headache, body pain, malaria"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md transition"
                >
                  ➕ Save &amp; Publish New Drug to Dispensary Catalog
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}
