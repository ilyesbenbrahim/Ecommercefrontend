import "./PromotionalBanner.css";
import imagewomen from "../../assets/woman-content.jpg";
const PromotionalBanner = () => {
  return (
    <div className="promotionalbanner">
      <div className="promotionalbanner-container">
        <div className="imgwomen">
          <img
            className="imgewome"
            src={imagewomen}
            alt="image-promotionalbanner"
          />
        </div>
        <div className="info-promotionalbanner">
            <h1>Explore our exclusive collection   of women <br></br>  clothing and discover the latest fashion trends <br></br> We have something to suit all tastes</h1>
            <p>Our selection is designed to help you express your unique style.</p>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;
