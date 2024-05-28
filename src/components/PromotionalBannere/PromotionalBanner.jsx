import "./PromotionalBanner.css";
import imagewomen from "../../assets/woman-content.jpg";
import { useTranslation } from 'react-i18next';
const PromotionalBanner = () => {
  const { t } = useTranslation();
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
            <h1>{t('promotionalBanner:exploreOur')}<br></br>  {t('promotionalBanner:clothing')}<br></br>{t('promotionalBanner:weHave')}</h1>
            <p>{t('promotionalBanner:description')} </p>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;
