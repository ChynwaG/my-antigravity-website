import { createContext, useContext, useState, useCallback } from 'react';
import { DELIVERY_FEE, WHATSAPP_PRIMARY } from '../data/inventory';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [fulfillment, setFulfillment] = useState('pickup');
  const [branch, setBranch] = useState('Head Office (1A Chief Akude Street)');
  const [deliveryAddress, setDeliveryAddress] = useState('');

  const addToCart = useCallback((item) => {
    setCart(prev => {
      const existing = prev.find(c => c.id === item.id);
      if (existing) {
        return prev.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setIsOpen(true);
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart(prev => prev.filter(c => c.id !== id));
  }, []);

  const updateQty = useCallback((id, delta) => {
    setCart(prev => prev.map(c => {
      if (c.id !== id) return c;
      const newQty = c.qty + delta;
      return newQty < 1 ? null : { ...c, qty: newQty };
    }).filter(Boolean));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const subtotal = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  const deliveryFee = fulfillment === 'delivery' ? DELIVERY_FEE : 0;
  const total = subtotal + deliveryFee;

  const submitOrder = useCallback(() => {
    if (cart.length === 0) return;
    const itemLines = cart.map(c => `• ${c.brandName} (${c.packSize}) x${c.qty} = ₦${(c.price * c.qty).toLocaleString()}`).join('\n');
    const locationLine = fulfillment === 'pickup'
      ? `Pickup Branch: ${branch}`
      : `Home Delivery to: ${deliveryAddress || 'Address to be confirmed'}`;
    const msg = [
      '🏥 *New Order — Oracle of God Pharmacy*',
      '',
      itemLines,
      '',
      `Subtotal: ₦${subtotal.toLocaleString()}`,
      fulfillment === 'delivery' ? `Delivery Fee: ₦${DELIVERY_FEE.toLocaleString()}` : 'Fulfillment: Free Store Pickup',
      `*Total Payable: ₦${total.toLocaleString()}*`,
      '',
      locationLine,
      '',
      '💳 Payment via bank transfer. Proof of payment will be sent to confirm dispatch.'
    ].join('\n');
    window.open(`https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent(msg)}`, '_blank');
  }, [cart, fulfillment, branch, deliveryAddress, subtotal, total]);

  return (
    <CartContext.Provider value={{
      cart, isOpen, setIsOpen,
      fulfillment, setFulfillment,
      branch, setBranch,
      deliveryAddress, setDeliveryAddress,
      addToCart, removeFromCart, updateQty, clearCart,
      subtotal, deliveryFee, total,
      submitOrder,
      count: cart.reduce((s, c) => s + c.qty, 0),
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
