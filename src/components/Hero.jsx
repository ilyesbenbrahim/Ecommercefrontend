import { Link } from "react-router-dom";
import "../components/Hero.css";
import imageshoping from "../assets/heroshopping.webp";
import { useTranslation } from 'react-i18next';


const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="info-hero">
          <h1>
          {t('hero:DiscovertheStyle')} <br />
            {t('hero:ThatSuitsYou')} <br />
            {t('hero:withIlyesExpress')}
          </h1>
          <p>
          {t('hero:welcomeWelcometoilyesexpressourdedicatedteamisheretohelpyoufind')}<br />
           {t('hero:theclothesthatreflectyourindividuality.')}
          </p>
          <div className="buttons-container">
            <Link to="productClient" >
            <button className="b">{t('hero:moreProduct')}</button>
            </Link>
            <Link to="singin">
            <button className="c">{t('hero:signIn')}</button>
            </Link>
          </div>
          <div className="line-container">
            <div className="line-un"></div>
            <div className="line-deux"></div>
          </div>
          <div className="revenue-Increase">
            <div className="revenue">
              <h4>+150,000</h4>
              <div className="revenue-one-year">{t('hero:totalRevenue')}</div>
            </div>
            <div className="Increase ">
              <h4>200%</h4>
              <div className="Increase-one-year">{t('hero:increaseSales')}</div>
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
