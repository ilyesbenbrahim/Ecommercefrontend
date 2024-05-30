import Topbar from "../topbare/Topbar";
import NavBar from "../NavBar";
import Feature from "../features/Feature";
import imgcommentfaireunretour from "../../assets/customer-header.webp";
import { useTranslation } from 'react-i18next';
const Commentfaireunretour = () => {
    const { t } = useTranslation();
    return (
        <div>
          <Topbar></Topbar>
          <NavBar></NavBar>
          <div className="mode_Delivery">
            <h2>{t('quisommesnous:howtomakeareturn')}</h2>
          </div>
          <div className="accueil_Delivery">
            <span>{t('quisommesnous:howtrturn')}</span>
          </div>
          <div className="Ligne_droite_centre"></div>
          <div className="img_Delivery">
            <img className="image_Delivery" src={imgcommentfaireunretour} alt="{t('quisommesnous:Delivery')}" />
          </div>
          <div className="paragraph-container">
            <p>
            {t('quisommesnous:welcomereturn')}
            </p>
          </div>
          <Feature></Feature>
        </div>
      );
    };

export default Commentfaireunretour;