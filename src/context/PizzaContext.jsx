import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { pizzas as pizzasData } from '../utils/pizzas';

const PizzaContext = createContext();

export const usePizzas = () => useContext(PizzaContext);

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulando una carga asíncrona
    setTimeout(() => {
      try {
        setPizzas(pizzasData);
        setLoading(false);
      } catch (err) {
        setError(`Error al cargar las pizzas: ${err.message}`);
        setLoading(false);
      }
    }, 1000);
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