import { useCart } from '../context/CartContext';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (cart.length === 0) {
    return <div>Tu carrito está vacío</div>;
  }

  return (
    <Container>
      <h2>Carrito de Compras</h2>
      {cart.map((item) => (
        <Card key={item.id} className="mb-3">
          <Row className="no-gutters">
            <Col md={4}>
              <Card.Img src={item.img} alt={item.name} />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Precio: ${item.price}</Card.Text>
                <Card.Text>Cantidad: {item.quantity}</Card.Text>
                <Button variant="danger" onClick={() => removeFromCart(item.id)}>Eliminar</Button>
                <Button variant="secondary" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                <Button variant="secondary" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
      <div>
        <h3>Total: ${calculateTotal()}</h3>
        <Button variant="primary" onClick={clearCart}>Vaciar Carrito</Button>
        <Button variant="success">Ir a Pagar</Button>
      </div>
    </Container>
  );
};

export default Cart;
