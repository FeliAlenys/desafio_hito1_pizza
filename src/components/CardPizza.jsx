//import { useState } from "react";
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
//import { formatPrice } from "../utils/helpers";
import { useCart } from '../context/CartContext.jsx';
import PropTypes from "prop-types";

const CardPizza = ({ pizza }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleViewDetails = () => {
    navigate(`/pizza/${pizza.id}`);
  };

  const handleAddToCart = () => {
    addToCart(pizza);
  };

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>
          <strong>Ingredientes:</strong>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </Card.Text>
        <Card.Text className="mt-auto">
          <strong>Precio: ${pizza.price}</strong>
        </Card.Text>
        <div className="mt-auto d-flex justify-content-between">
          <Button variant="primary" onClick={handleViewDetails}>Ver Más</Button>
          <Button variant="danger" onClick={handleAddToCart}>Añadir</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

CardPizza.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardPizza;
