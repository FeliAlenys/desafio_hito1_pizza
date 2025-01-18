//import Header from '../components/Header';
import { Container, Row, Col } from "react-bootstrap";
import CardPizza from "../components/CardPizza";
import { usePizzas } from "../context/PizzaContext";
//import { pizzas } from "../utils/pizzas"; // Importamos el array de pizzas desde pizzas.js


const Home = () => {
  const { pizzas, loading, error } = usePizzas();

  if (loading) return <div>Cargando pizzas...</div>;
  if (error) return <div>Error al cargar las pizzas: {error}</div>;

  return (
    <Container>
      <h1 className="text-center my-4">Nuestras Pizzas</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {pizzas.map((pizza) => (
          <Col key={pizza.id}>
            <CardPizza pizza={pizza} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
