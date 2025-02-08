import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPizza(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching pizza:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPizza();
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!pizza) return <div>No se encontró la pizza</div>;

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title><h2>{pizza.name}</h2></Card.Title>
              <Card.Text>{pizza.desc}</Card.Text>
              <Card.Text>
                <strong>Ingredientes:</strong>
                <ul>
                  {pizza.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </Card.Text>
              <Card.Text>
                <strong>Precio: ${pizza.price}</strong>
              </Card.Text>
              <Button 
                variant="danger" 
                onClick={() => addToCart(pizza)}
              >
                Añadir al Carrito
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Pizza;