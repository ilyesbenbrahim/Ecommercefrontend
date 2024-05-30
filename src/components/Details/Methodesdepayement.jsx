import Topbar from "../topbare/Topbar";
import NavBar from "../NavBar";
import Feature from "../features/Feature";
import "./Methodesdepayement.css";
import imgModalitedepaiement from "../../assets/Modalitedepaiement.webp";
import { useTranslation } from 'react-i18next';

const Methodesdepayement = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Topbar />
      <NavBar />
      <div className="mode_paiemant">
        <h2>{t('methodesdepayement:paymentMethods')}</h2>
      </div>
      <div className="accueil_paiement">
        <span>{t('methodesdepayement:homeBreadcrumb')}</span>
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
        <p>{t('methodesdepayement:cashOnDelivery')}</p>
        <p>
        <p>{t('methodesdepayement:ecommerceDescription')}</p>

        </p>
        <p>
          <span>{t('methodesdepayement:important')}</span> {t('methodesdepayement:importantNote')}
        </p>
      </div>
      <Feature></Feature>
    </div>
   
  );
};

export default Methodesdepayement;
