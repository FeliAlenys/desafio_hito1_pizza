import { useCart } from "../context/CartContext";
import { useState } from "react";
import { formatPrice } from "../utils/helpers";
import PropTypes from "prop-types";

const CardPizza = ({ name, price, ingredients, img, desc, id }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);
  const { addToCart } = useCart(); // Usamos el hook personalizado

  const toggleDescription = () => setShowFullDesc(!showFullDesc);

  return (
    <div className="card" style={{ width: "18rem", margin: "1rem" }}>
      <img src={img} className="card-img-top" alt={`Imagen de ${name}`} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Descripción:</strong>{" "}
          {showFullDesc ? desc : `${desc.substring(0, 60)}...`}
        </p>
        <p className="card-text">
          <strong>Ingredientes:</strong> {/*ingredients.join(", ")*/}
        </p>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
        ))}
        </ul>
        <button className="btn btn-link p-0" onClick={toggleDescription}>
          {showFullDesc ? "Ver menos" : "Ver más"}
        </button>
        <p className="card-text">
          <strong>Precio:</strong> {formatPrice(price)}
        </p>
        <button
          className="btn btn-success mt-2"
          onClick={() => addToCart({ id, name, price, img })}
        >
          Añadir
        </button>
      </div>
    </div>
  );
};

CardPizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CardPizza;
