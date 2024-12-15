import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import napolitana from "../assets/img/pizza-napólitana.jpg";
import española from "../assets/img/pizza-española.jpg";
import pepperoni from "../assets/img/pizza-pepperoni.jpg";

const Home = () => (
  <div className="container">
    <Header />
    <div className="row">
      <div className="col-md-4">
        <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img={napolitana}
        />
      </div>
      <div className="col-md-4">
        <CardPizza
          name="Española"
          price={6950}
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img={española}
        />
      </div>
      <div className="col-md-4">
        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          img={pepperoni}
        />
      </div>
    </div>
  </div>
);

export default Home;
