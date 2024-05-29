import Topbar from "../topbare/Topbar";
import NavBar from "../NavBar";
import Feature from "../features/Feature";
import "./Expedition.css";
import imgshippingdelivery from "../../assets/shipping-delivery.webp";
import { useTranslation } from 'react-i18next';

const Expedition = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Topbar></Topbar>
      <NavBar></NavBar>
      <div className="mode_Delivery">
        <h2>{t('Expedition:mode_Delivery')}</h2>
      </div>
      <div className="accueil_Delivery">
        <span>{t('Expedition:accueil_Delivery')}</span>
      </div>
      <div className="Ligne_droite_centre"></div>
      <div className="img_Delivery">
        <img
          className="image_Delivery"
          src={imgshippingdelivery}
          alt="{t('Expedition:deliveryImageAlt')}"
        />
      </div>
      <div className="paragraph-container">
        <p>
        {t('Expedition:deliveryParagraph1')}
        </p>
        <p>
        {t('Expedition:deliveryParagraph2')}
        </p>
      </div>
      <Feature></Feature>
    </div>
  );
};

export default Expedition;
