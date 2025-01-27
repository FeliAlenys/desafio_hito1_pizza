import { Container, Row, Col } from "react-bootstrap";
import Header from '../components/Header';
import CardPizza from "../components/CardPizza";
//import { useCart } from '../context/CartContext';
import { usePizzas } from '../context/PizzaContext'; 

const Home = () => {
  const { pizzas, loading, error } = usePizzas(); // Usa el contexto de pizzas

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Header />
      <Container>
        <Row>
          {pizzas.map((pizza) => (
            <Col key={pizza.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <CardPizza pizza={pizza} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;