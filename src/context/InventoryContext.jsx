import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { INITIAL_INVENTORY, STORAGE_KEY } from '../data/inventory';

const InventoryContext = createContext(null);

export function InventoryProvider({ children }) {
  const [inventory, setInventory] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.length >= 50) return parsed;
      }
    } catch {}
    return [...INITIAL_INVENTORY];
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(inventory));
    } catch {}
  }, [inventory]);

  const updatePrice = useCallback((id, price) => {
    setInventory(prev => prev.map(item => item.id === id ? { ...item, price: Number(price) } : item));
  }, []);

  const toggleStock = useCallback((id) => {
    setInventory(prev => prev.map(item => item.id === id ? { ...item, inStock: !item.inStock } : item));
  }, []);

  const addDrug = useCallback((drug) => {
    const newDrug = { ...drug, id: `custom_${Date.now()}` };
    setInventory(prev => [...prev, newDrug]);
  }, []);

  const deleteDrug = useCallback((id) => {
    setInventory(prev => prev.filter(item => item.id !== id));
  }, []);

  const resetToDefaults = useCallback(() => {
    setInventory([...INITIAL_INVENTORY]);
  }, []);

  return (
    <InventoryContext.Provider value={{ inventory, updatePrice, toggleStock, addDrug, deleteDrug, resetToDefaults }}>
      {children}
    </InventoryContext.Provider>
  );
}

export function useInventory() {
  const ctx = useContext(InventoryContext);
  if (!ctx) throw new Error('useInventory must be used within InventoryProvider');
  return ctx;
}
