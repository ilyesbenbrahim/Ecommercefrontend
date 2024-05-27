import Topbar from "../topbare/Topbar";
import NavBar from "../NavBar";
import Feature from "../features/Feature";
import "./Quisommesnous.css";
import imgquisommesnous from "../../assets/quisommenous.webp";
const Quisommesnous = () => {
  return (
    <div>
      <Topbar></Topbar>
      <NavBar></NavBar>
      <div className="mode_Delivery">
        <h2>Who are we ?</h2>
      </div>
      <div className="accueil_Delivery">
        <span>Home / Who are we?</span>
      </div>
      <div className="Ligne_droite_centre"></div>
      <div className="img_Delivery">
        <img className="image_Delivery" src={imgquisommesnous} alt="Delivery" />
      </div>
      <div className="paragraph-container">
        <p>
          Welcome to our online store dedicated to the whole family! Since our
          beginnings in 2019, after graduating from the École Supérieure de
          Commerce, our passion for mens, womens and childrens fashion has
          continued to grow. Every piece we select reflects our commitment to
          providing an incomparable shopping experience. Our journey is marked
          by particular attention to emerging trends and the specific needs of
          our diverse clientele. Whether you are looking for timeless classics
          or the latest trends, our diverse collection will meet your
          expectations. Explore our clothing selection today and find the
          perfect expression of your unique style. In addition, we ensure fast
          home delivery throughout Algeria, in just 24 hours.
        </p>
      </div>
      <Feature></Feature>
    </div>
  );
};

export default Quisommesnous;
