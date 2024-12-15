
import { formatPrice } from "../utils/helpers";  // Importamos la función desde helpers.js

const CardPizza = ({ name, price, ingredients, img }) => (
  <div className="card" style={{ width: "18rem", margin: "1rem" }}>
    <img src={img} className="card-img-top" alt={`Imagen de ${name}`} />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">
        <strong>Ingredientes:</strong> {ingredients.join(", ")}
      </p>
      <p className="card-text">
        <strong>Precio:</strong> {formatPrice(price)} {/* Usamos la función formatPrice aquí */}
      </p>
      <button className="btn btn-primary me-2">Ver más</button>
      <button className="btn btn-success">Añadir</button>
    </div>
  </div>
);

export default CardPizza;

