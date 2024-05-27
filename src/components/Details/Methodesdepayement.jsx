import Topbar from "../topbare/Topbar";
import NavBar from "../NavBar";
import Feature from "../features/Feature"
import "./Methodesdepayement.css";
import imgModalitedepaiement from "../../assets/Modalitedepaiement.webp";

const Methodesdepayement = () => {
  return (
    <div>
      <Topbar />
      <NavBar />
      <div className="mode_paiemant">
        <h2>Payment Methods</h2>
      </div>
      <div className="accueil_paiement">
        <span>Home / Payment Methods</span>
      </div>
      <div className="Ligne_droite_centre"></div>
      <div className="img_paiement">
        <img
          className="image_paiment"
          src={imgModalitedepaiement}
          alt="Payment Methods"
        />
      </div>
      <div className="paragraph-container">
        <p>We offer cash on delivery payment (COD).</p>
        <p>
          On our e-commerce site, you can easily order clothing for men, women,
          and children. To place an order, please contact us via Facebook,
          Instagram, LinkedIn, email, or use the Contact section of our site.
          This method allows you to receive your items before paying for them,
          providing a hassle-free shopping experience. Order now and enjoy
          fashion delivered straight to your door.
        </p>
        <p>
          <span>Important:</span> Please keep your phone turned on so the
          delivery person can contact you when they are near your address.
        </p>
      </div>
      <Feature></Feature>
    </div>
   
  );
};

export default Methodesdepayement;
