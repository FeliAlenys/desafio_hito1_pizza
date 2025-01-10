import { useState } from "react";
import { pizzaCart } from "../utils/pizzas"; // Importamos el array simulado de carrito

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

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

  // Calcular el total
  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

  return (
    <div className="container mt-4">
      <h2>Carrito de Compras</h2>
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
        <button className="btn btn-primary">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;
