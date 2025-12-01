import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { CartItem, MealItem } from '../types';

// --- Custom Router Implementation (Shim for missing react-router-dom) ---
const NavigationContext = createContext<{path: string; navigate: (p: string) => void} | null>(null);

export const BrowserRouter: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // Default to '/' to ensure the app renders the home page initially, 
  // ignoring the actual browser URL which might be an iframe path or blob URL.
  const [path, setPath] = useState('/');

  useEffect(() => {
    // Optional: Sync with browser back button if the environment supports it
    const onPopState = () => {
        // In some preview environments, pathname might not map cleanly to app routes.
        // We keep the state-based routing as the source of truth.
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (newPath: string) => {
    try {
        window.history.pushState({}, '', newPath);
    } catch (e) {
        // Ignore history errors in restricted environments
    }
    setPath(newPath);
    window.scrollTo(0, 0);
  };

  return (
    <NavigationContext.Provider value={{ path, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useLocation = () => {
  const ctx = useContext(NavigationContext);
  return { pathname: ctx?.path || '/' };
};

export const useNavigate = () => {
  const ctx = useContext(NavigationContext);
  return ctx ? ctx.navigate : (to: string) => { window.location.href = to; };
};

export const Link: React.FC<{to: string; children: React.ReactNode; className?: string; onClick?: () => void}> = ({ to, children, className, onClick }) => {
  const navigate = useNavigate();
  return (
    <a 
      href={to} 
      className={className} 
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
        if (onClick) onClick();
      }}
    >
      {children}
    </a>
  );
};

export const Routes: React.FC<{children: React.ReactNode}> = ({ children }) => <>{children}</>;

export const Route: React.FC<{path: string; element: React.ReactNode}> = ({ path, element }) => {
  const { pathname } = useLocation();
  // Simple exact match
  return pathname === path ? <>{element}</> : null;
};
// --------------------------------------------------------------------

interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  cartTotal: number;
  cartCount: number;
  addToCart: (item: MealItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, delta: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('moriso_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart from local storage");
      }
    }
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('moriso_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: MealItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const clearCart = () => setCartItems([]);
  const toggleCart = () => setIsCartOpen(prev => !prev);

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      isCartOpen,
      cartTotal,
      cartCount,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      toggleCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};