
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer style={{ background: "#333", color: "#fff", padding: "1rem 0", textAlign: "center" }}>
    <div>
      <p>&copy; {new Date().getFullYear()} Pizzería Mamma Mia. Todos los derechos reservados.</p>
    </div>
    <div style={{ margin: "1rem 0" }}>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 1rem", color: "#fff" }}>
        <FontAwesomeIcon icon={faFacebookF} size="2x" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 1rem", color: "#fff" }}>
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 1rem", color: "#fff" }}>
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
    <div>
      <a href="/terms" style={{ color: "#fff", margin: "0 1rem" }}>Términos y condiciones</a>
      <a href="/privacy" style={{ color: "#fff", margin: "0 1rem" }}>Política de privacidad</a>
    </div>
  </footer>
);

export default Footer;

