import "./Feature.css";
import logofeature from "../../assets/ilyesexpresss.png";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const Feature = () => {
  const { t } = useTranslation();

  return (
    <>
    <div className="feature-highlight">
      <img className="logofeature" src={logofeature} alt="logo-feature" />
      <div className="footer-text">
        <h3>{t('feature:easeOfPurchase')}</h3>
        <p>
        {t('feature:makeYourPurchasesWithEase')}
        </p>
        <div className="reserved">
       <h6>{t('feature:allRightsReserved')}</h6>      
      </div>
        </div>
        <div className="about">
        <h3>{t('feature:about')} </h3>
        <Link to="/methodesdepayement">
        <h4>{t('feature:paymentMethods')}</h4>
        </Link>
        <Link to="/quisommesnous">
        <h7>{t('feature:whoAreWe')}</h7>
        </Link>
        <Link to="/delivery">
        <h4>{t('feature:delivery')}</h4>
        </Link>
        </div>
        <div className="/help">
          <h3>{t('feature:help')}</h3>
        <Link to="/return">
        <h4>{t('feature:howToMakeAReturn')}</h4>
        </Link>
        <Link to="/Pricesdeliverytimes">
        <h4> {t('feature:pricesDeliveryTimes')}</h4>
        </Link>
        </div>
        
    </div>
    
    </>
    
  );
};
export default Feature;
