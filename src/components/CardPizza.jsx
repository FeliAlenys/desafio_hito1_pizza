//import { useState } from "react";
import { Card, Button } from 'react-bootstrap';
import { /*useNavigate,*/ Link } from 'react-router-dom';
//import { formatPrice } from "../utils/helpers";
//import { useCart } from '../context/CartContext';
import PropTypes from "prop-types";
import { useCart } from '../hooks/useCart';

const CardPizza = ({ pizza }) => {
  const { addToCart } = useCart();
  //const navigate = useNavigate();

  /*
  const handleViewDetails = () => {
    navigate(`/pizza/${pizza.id}`);
  };
  */

  const handleAddToCart = () => {
    addToCart(pizza);
  };

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text><strong>Ingredientes:</strong></Card.Text>
        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <Card.Text className="mt-auto">
          <strong>Precio: ${pizza.price}</strong>
        </Card.Text>
        <div className="mt-auto d-flex justify-content-between">
        <Link to={`/pizza/${pizza.id}`} className="btn btn-primary">Ver Más</Link>
        <Button variant="danger" onClick={handleAddToCart}>Añadir al carrito</Button>
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
