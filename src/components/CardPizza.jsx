
import { formatPrice } from "../utils/helpers";  // Importamos la función desde helpers.js
import PropTypes from 'prop-types';

const CardPizza = ({ name, price, ingredients, img, desc }) => (
  <div className="card" style={{ width: "18rem", margin: "1rem" }}>
    <img src={img} className="card-img-top" alt={`Imagen de ${name}`} />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text text-muted">{desc}</p>
      <p className="card-text">
        <strong>Ingredientes:</strong> {ingredients.join(", ")}
      </p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p className="card-text">
        <strong>Precio:</strong> {formatPrice(price)} {/* Usamos la función formatPrice aquí */}
      </p>
      <button className="btn btn-primary me-2">Ver más</button>
      <button className="btn btn-success">Añadir</button>
    </div>
  </div>
);

CardPizza.propTypes = {
  name: PropTypes.string.isRequired, // Asegúrate de que name sea obligatorio y de tipo string
  price: PropTypes.number.isRequired, // Agrega validación para otras props
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
  desc: PropTypes.string, // Prop opcional para la descripción
};

export default CardPizza;

