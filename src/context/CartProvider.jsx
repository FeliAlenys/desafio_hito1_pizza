import { useState } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from './CartContext'; // Importa el contexto desde el nuevo archivo

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const existingPizza = cart.find((item) => item.id === pizza.id);
    if (existingPizza) {
      setCart(
        cart.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  const removeFromCart = (pizzaId) => {
    setCart(cart.filter((item) => item.id !== pizzaId));
  };

  const updateQuantity = (pizzaId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(pizzaId);
    } else {
      setCart(
        cart.map((item) =>
          item.id === pizzaId ? { ...item, count: quantity } : item
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
