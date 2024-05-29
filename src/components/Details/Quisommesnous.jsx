import Topbar from "../topbare/Topbar";
import NavBar from "../NavBar";
import Feature from "../features/Feature";
import "./Quisommesnous.css";
import imgquisommesnous from "../../assets/quisommenous.webp";
import { useTranslation } from 'react-i18next';

const Quisommesnous = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Topbar></Topbar>
      <NavBar></NavBar>
      <div className="mode_Delivery">
        <h2>{t('quisommesnous:title')}</h2>
      </div>
      <div className="accueil_Delivery">
        <span>{t('quisommesnous:breadcrumbs')}</span>
      </div>
      <div className="Ligne_droite_centre"></div>
      <div className="img_Delivery">
        <img className="image_Delivery" src={imgquisommesnous} alt="{t('quisommesnous:Delivery')}" />
      </div>
      <div className="paragraph-container">
        <p>
        {t('quisommesnous:welcomeMessage')}
        </p>
      </div>
      <Feature></Feature>
    </div>
  );
};

export default Quisommesnous;
