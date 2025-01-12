import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/helpers";

const Cart = () => {
  const { cart, updateQuantity, calculateTotal } = useCart();

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="d-flex align-items-center mb-3">
              <img src={item.img} alt={item.name} style={{ width: "80px" }} />
              <div className="ms-3">
                <h5>{item.name}</h5>
                <p>Precio: {formatPrice(item.price)}</p>
                <p>Cantidad: {item.count}</p>
                <button
                  className="btn btn-danger me-2"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <h4>Total: {formatPrice(calculateTotal())}</h4>
          <button className="btn btn-primary">Pagar</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
