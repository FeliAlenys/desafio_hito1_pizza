import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Container, Row, Col } from "react-bootstrap";
import CardPizza from "../components/CardPizza";
//import { usePizzas } from "../context/PizzaContext";
//import { pizzas } from "../utils/pizzas"; // Importamos el array de pizzas desde pizzas.js


const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        console.log('Iniciando solicitud a la API...');
        const response = await fetch('http://localhost:5000/api/pizzas');
        console.log('Respuesta recibida:', response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Datos recibidos:', data);
        setPizzas(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener las pizzas:', error);
        setError(error.message);
        setLoading(false);
      }
    };
  
    fetchPizzas();
  }, []);

  if (loading) return <div>Cargando pizzas...</div>;
  if (error) return <div>Error al cargar las pizzas: {error}</div>;

  return (
    <>
      <Header />
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
    </>
  );
};

export default Home;