import { useState } from "react";
import { pizzaCart } from "../utils/pizzas"; // Importamos el array simulado de carrito
import { useCart } from '../hooks/useCart';
import { useUser } from '../hooks/useUser';
//import { useUser } from '../context/UserContext';

const Cart = () => {
  const [cart, setCart] = useCart(pizzaCart);
  const { token } = useUser();
  const [message, setMessage] = useState("");
  

  // Función para aumentar la cantidad
  const increaseCount = (id) => {
    const updatedCart = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    );
    setCart(updatedCart);
  };

  // Función para disminuir la cantidad
  const decreaseCount = (id) => {
    const updatedCart = cart
      .map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
      )
      .filter((pizza) => pizza.count > 0); // Filtra pizzas con cantidad mayor a 0
    setCart(updatedCart);
  };
  
  // Nueva función handleCheckout
  const handleCheckout = async () => {
    if (!token) {
      setMessage("Debes iniciar sesión para realizar la compra.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          cart: cart,
        }),
      });

      if (!response.ok) {
        throw new Error('Checkout failed');
      }

      setMessage("¡Compra realizada con éxito!");
      setCart([]); // Vaciar el carrito después de la compra exitosa
    } catch (error) {
      console.error('Error during checkout:', error);
      setMessage("Error al procesar la compra. Por favor, intente de nuevo.");
    }
  };

  // Calcular el total
  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

  return (
    <div className="container mt-4">
      <h2>Carrito de Compras</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <div className="row">
        {cart.map((pizza) => (
          <div className="col-md-4 mb-4" key={pizza.id}>
            <div className="card">
              <img
                src={pizza.img}
                className="card-img-top"
                alt={`Imagen de ${pizza.name}`}
              />
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">
                  <strong>Precio:</strong> ${pizza.price}
                </p>
                <p className="card-text">
                  <strong>Cantidad:</strong> {pizza.count}
                </p>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-danger"
                    onClick={() => decreaseCount(pizza.id)}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => increaseCount(pizza.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h3>Total: ${total.toLocaleString()}</h3>
        <button 
          className="btn btn-primary" 
          onClick={handleCheckout}
          disabled={!token || cart.length === 0}
        >
          {token ? "Pagar" : "Inicia sesión para pagar"}
        </button>
      </div>
    </div>
  );
};

export default Cart;