import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const PizzaContext = createContext();

export const usePizzas = () => useContext(PizzaContext);

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
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

  return (
    <PizzaContext.Provider value={{ pizzas, loading, error }}>
      {children}
    </PizzaContext.Provider>
  );
};

PizzaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PizzaContext };