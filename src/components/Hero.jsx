import { Link } from "react-router-dom";
import "../components/Hero.css";
import imageshoping from "../assets/heroshopping.webp";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="info-hero">
          <h1>
            Discover the Style <br></br> That Suits You <br></br>with
            IlyesExpress
          </h1>
          <p>
            Welcome to ilyesexpress our dedicated team is here to help you find{" "}
            <br></br> the clothes that reflect your individuality.
          </p>
          <div className="buttons-container">
            <Link to="product" >
            <button className="b">More Product</button>
            </Link>
            <Link to="singin">
              <button className="c">Sign In</button>
            </Link>
          </div>
          <div className="line-container">
            <div className="line-un"></div>
            <div className="line-deux"></div>
          </div>
          <div className="revenue-Increase">
            <div className="revenue">
              <h4>+150,000</h4>
              <div className="revenue-one-year">Total revenue in 1 year</div>
            </div>
            <div className="Increase ">
              <h4>200%</h4>
              <div className="Increase-one-year">Increase in sales</div>
            </div>
          </div>
        </div>
        <div className="imghero">
          <img
            className="imagehero"
            src={imageshoping}
            alt="imageheroshoping"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
