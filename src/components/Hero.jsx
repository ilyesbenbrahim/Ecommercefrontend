import "../components/Hero.css";
// import imageshoping from "../assets/heroshopping.webp ";
import logo from "../assets/ilyessexpress.webp";
import p from "../assets/heroshopping.webp";

const Hero = () => {
  return (
    <div>
      <h1>
        Discover the Style <br></br> That Suits You <br></br>with IlyesExpress
      </h1>
      <img className="logo" src={logo} alt="Description of the logo" />
      <img src={p} alt="ddf" />
      {/* <img src={imageshoping} alt="imageheroshoping" /> */}
    </div>
  );
};

export default Hero;
