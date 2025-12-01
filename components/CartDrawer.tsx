import React from 'react';
import { X, Plus, Minus, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import { useCart, useNavigate } from '../context/CartContext';

const CartDrawer: React.FC = () => {
  const { 
    isCartOpen, 
    toggleCart, 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    cartTotal,
    clearCart 
  } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    alert("Redirecting to secure payment gateway...");
    // Logic for checkout would go here
  };

  const handleBrowseMenu = () => {
    toggleCart();
    navigate('/menu');
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={toggleCart}
      ></div>

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-md w-full flex">
        <div className="h-full w-full bg-white shadow-2xl flex flex-col transform transition-transform animate-slide-in-right">
          
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white">
            <h2 className="text-xl font-bold text-moriso-navy flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-moriso-teal" />
              Your Cart
            </h2>
            <button 
              onClick={toggleCart}
              className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 bg-gray-50/50">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 bg-moriso-light rounded-full flex items-center justify-center mb-2">
                    <ShoppingBag className="w-10 h-10 text-moriso-teal/50" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Your cart is empty</h3>
                <p className="text-gray-500 max-w-xs">Looks like you haven't added any healthy meals yet.</p>
                <button 
                  onClick={handleBrowseMenu}
                  className="mt-4 text-moriso-teal font-bold hover:underline"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-3 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    {/* Image */}
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-gray-50 border border-gray-100">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col justify-between py-1">
                      <div>
                          <div className="flex justify-between items-start">
                              <h3 className="text-sm font-bold text-gray-900 line-clamp-2 leading-tight pr-2">{item.name}</h3>
                              <div className="text-right">
                                  <p className="font-bold text-moriso-teal text-sm">₹{item.price * item.quantity}</p>
                                  {item.quantity > 1 && (
                                      <p className="text-[10px] text-gray-400">₹{item.price} ea</p>
                                  )}
                              </div>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                              <span className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded text-nowrap">
                                  {item.calories} kcal
                              </span>
                          </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-2">
                          {/* Qty Controls */}
                          <div className="flex items-center bg-gray-50 rounded-lg h-8 border border-gray-200">
                              <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-moriso-teal hover:bg-white rounded-l-lg transition-all"
                              >
                              <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="w-8 text-center text-sm font-bold text-gray-800">{item.quantity}</span>
                              <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-moriso-teal hover:bg-white rounded-r-lg transition-all"
                              >
                              <Plus className="w-3.5 h-3.5" />
                              </button>
                          </div>

                          {/* Remove */}
                          <button
                              type="button"
                              onClick={() => removeFromCart(item.id)}
                              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                              title="Remove Item"
                          >
                              <Trash2 className="w-4 h-4" />
                          </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-100 px-6 py-6 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
              <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                <p>Subtotal</p>
                <p>₹{cartTotal}</p>
              </div>
              <p className="mt-0.5 text-xs text-gray-500 mb-6">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="space-y-3">
                  <button 
                    onClick={handleCheckout}
                    className="flex w-full items-center justify-center rounded-xl border border-transparent bg-moriso-navy px-6 py-4 text-base font-bold text-white shadow-lg hover:bg-moriso-teal transition-all hover:shadow-moriso-teal/30 transform active:scale-95"
                  >
                    Checkout <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button 
                    onClick={clearCart}
                    className="w-full text-center text-sm text-gray-500 hover:text-red-500 transition-colors"
                  >
                    Clear Cart
                  </button>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or{' '}
                  <button
                    type="button"
                    className="font-bold text-moriso-teal hover:text-moriso-navy transition-colors"
                    onClick={handleBrowseMenu}
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;