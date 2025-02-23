import { useCart } from '../context/CartContext';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { formatPrice } from '../utils/helpers'; 
import { useUser } from '../context/useUser'; // Paso 1: Importar el hook useUser
//import { useUser } from '../context/UserContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const { user } = useUser(); // Paso 2: Obtener el usuario del contexto

  if (cart.length === 0) {
    return <Container><h2>Tu carrito está vacío</h2></Container>;
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
                <Card.Text>Precio: {formatPrice(item.price)}</Card.Text>
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
        <h3>Total: {formatPrice(cartTotal)}</h3>
        <Button variant="primary" onClick={clearCart}>Vaciar Carrito</Button>
        {/* Paso 3: Modificar el botón de pago */}
        <Button 
          variant="success" 
          disabled={!user} // Deshabilitar si no hay usuario
          onClick={() => console.log('Procesando pago...')} // Añadir lógica de pago aquí
        >
          {user ? 'Ir a Pagar' : 'Inicia sesión para pagar'}
        </Button>
      </div>
    </Container>
  );
};

export default Cart;