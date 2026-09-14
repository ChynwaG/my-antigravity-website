import React, { useState, useMemo } from 'react';
import { InventoryProvider, useInventory } from './context/InventoryContext';
import { CartProvider } from './context/CartContext';
import TopNoticeBar from './components/TopNoticeBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScreeningBanner from './components/ScreeningBanner';
import CategoryFilterBar from './components/CategoryFilterBar';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import PrescriptionModal from './components/PrescriptionModal';
import AdminModal from './components/AdminModal';
import StoreLocations from './components/StoreLocations';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function PharmacyApp() {
  const { inventory } = useInventory();

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [isRxModalOpen, setIsRxModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  // Filter inventory based on active category & search query
  const filteredItems = useMemo(() => {
    return inventory.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch = !q ||
        item.brandName.toLowerCase().includes(q) ||
        item.genericName.toLowerCase().includes(q) ||
        (item.desc && item.desc.toLowerCase().includes(q)) ||
        (item.symptoms && item.symptoms.some(s => s.toLowerCase().includes(q)));
      return matchesCategory && matchesSearch;
    });
  }, [inventory, activeCategory, searchQuery]);

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-500 selection:text-white">
      {/* Top Notice Bar */}
      <TopNoticeBar onOpenAdmin={() => setIsAdminModalOpen(true)} />

      {/* Main Header / Sticky Navbar */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenRxModal={() => setIsRxModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero onOpenRxModal={() => setIsRxModalOpen(true)} />

      {/* Free Health Screening Banner */}
      <ScreeningBanner />

      {/* Searchable Medicine Directory Section */}
      <main id="catalog" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <CategoryFilterBar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          inventory={inventory}
        />

        <ProductGrid
          items={filteredItems}
          searchQuery={searchQuery}
          onResetFilters={handleResetFilters}
        />
      </main>

      {/* Physical Locations & Hours */}
      <StoreLocations />

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingWhatsApp />

      {/* Modals & Drawers */}
      <CartDrawer />
      <PrescriptionModal
        isOpen={isRxModalOpen}
        onClose={() => setIsRxModalOpen(false)}
      />
      <AdminModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <InventoryProvider>
      <CartProvider>
        <PharmacyApp />
      </CartProvider>
    </InventoryProvider>
  );
}
