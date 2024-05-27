import Topbar from "../topbare/Topbar";
import NavBar from "../NavBar";
import Feature from "../features/Feature";
import "./Expedition.css";
import imgshippingdelivery from "../../assets/shipping-delivery.webp";

const Expedition = () => {
  return (
    <div>
      <Topbar></Topbar>
      <NavBar></NavBar>
      <div className="mode_Delivery">
        <h2>Delivery</h2>
      </div>
      <div className="accueil_Delivery">
        <span>Home / Delivery</span>
      </div>
      <div className="Ligne_droite_centre"></div>
      <div className="img_Delivery">
        <img
          className="image_Delivery"
          src={imgshippingdelivery}
          alt="Delivery"
        />
      </div>
      <div className="paragraph-container">
        <p>
          After confirming the purchase by telephone, we ship and send the
          product via the available delivery services.
        </p>
        <p>
          Nous assurons la livraison de vos colis dans un délai maximal de 48
          heures. Vous pouvez opter soit pour une livraison à domicile, soit
          pour une livraison au bureau.
        </p>
      </div>
      <Feature></Feature>
    </div>
  );
};

export default Expedition;
