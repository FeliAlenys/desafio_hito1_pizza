import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (pizza) => {
    setCart((currentCart) => {
      const existingPizza = currentCart.find((item) => item.id === pizza.id);
      if (existingPizza) {
        return currentCart.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...currentCart, { ...pizza, quantity: 1 }];
    });
  };

  const removeFromCart = (pizzaId) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== pizzaId));
  };

  const updateQuantity = (pizzaId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(pizzaId);
    } else {
      setCart((currentCart) =>
        currentCart.map((item) =>
          item.id === pizzaId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};