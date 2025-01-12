import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { pizzas } from "../utils/pizzas"; // Importamos el array de pizzas desde pizzas.js
// import napolitana from "../assets/img/pizza-napólitana.jpg";
// import española from "../assets/img/pizza-española.jpg";
// import pepperoni from "../assets/img/pizza-pepperoni.jpg";

const Home = () => (
  <div className="container">
    <Header />
    <h2 className="text-center my-4">¡Elige tus pizzas favoritas!</h2>
    <div className="row">
      {pizzas.map((pizza) => (
        <div className="col-md-4 mb-4" key={pizza.id}>
          <CardPizza
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            desc={pizza.desc}
          />
        </div>
      ))}
    </div>
  </div>
);

export default Home;
