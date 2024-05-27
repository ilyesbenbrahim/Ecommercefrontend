import "./Feature.css";
import logofeature from "../../assets/ilyesexpresss.png";
import { Link } from "react-router-dom";

const Feature = () => {
  return (
    <>
    <div className="feature-highlight">
      <img className="logofeature" src={logofeature} alt="logo-feature" />
      <div className="footer-text">
        <h3>Ease of purchase</h3>
        <p>
          Make your purchases with ease thanks to our smooth and secure
          ordering process.
        </p>
        <div className="reserved">
<h6>© 2024 Nike, Inc. All Rights Reserved</h6>      
    </div>
        </div>
        <div className="about">
        <h3>about </h3>
        <Link to="/methodesdepayement">
        <h4>Payment methods</h4>
        </Link>
        <Link to="/quisommesnous">
        <h7>Who are we</h7>
        </Link>
        <Link to="/delivery">
        <h4>Delivery</h4>
        </Link>
        </div>
        <div className="/help">
          <h3>Help</h3>
        <Link to="/return">
        <h4>How to make a return</h4>
        </Link>
        <Link to="/Pricesdeliverytimes">
        <h4> Prices & delivery times</h4>
        </Link>
        </div>
        
    </div>
    
    </>
    
  );
};
export default Feature;
