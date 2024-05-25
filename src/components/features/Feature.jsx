import "./Feature.css";
import logofeature from "../../assets/ilyesexpresss.png"

const Feature = () => {
  return (
    <div className="feature-highlight">
        <img className="logofeature" src={logofeature} alt="logo-feature"/>
        <div className="footer-text">
         <h3>Ease of purchase</h3>
         <p>Make your purchases with ease thanks to our smooth and secure ordering process.</p> 
         </div>
    </div>
  );
};

export default Feature;




