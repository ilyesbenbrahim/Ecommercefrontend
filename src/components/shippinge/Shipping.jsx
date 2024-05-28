import { MdOutlineHighQuality } from "react-icons/md";
import { MdOutlinePriceCheck } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import "./Shipping.css";
import { useTranslation } from 'react-i18next';

const Shipping = () => {
  const { t } = useTranslation();

  return (
    <div className="shipping">
      <div className="shipping-container">
        <div className="Feature">
          <h2> {t('shipping:featureHighlights')}</h2>
        </div>
        <div className="three-Feature">
          <div className="item-container">
            <div className="shipping-icons-container">
              <MdOutlineHighQuality className="icone-quality" color="#011f53" />
            </div>
            <h5 className="color">{t('shipping:goodQuality')}</h5>
            <div className="Lorem-one">
            {t('shipping:discoverClothing')}<br />
            {t('shipping:supeior')}

            </div>
          </div>
          <div className="item-container">
            <div className="shipping-icons-container">
              <MdOutlinePriceCheck className="icon-price" color="green" />
            </div>
            <h5 className="color">{t('shipping:goodPrice')}</h5>
            <div className="Lorem-tow">
           
            {t('shipping:styleEconomy')}<br />
            {t('shipping:modeAvailable')}
            </div>
          </div>
          <div className="item-container">
            <div className="shipping-icons-container">
              <TbTruckDelivery className="icone-delivery" color="orangered" />
            </div>
            <h5 className="color">{t('shipping:homeDelivery')}</h5>
            <div className="Lorem-three">
          
            { t('shipping:rapidReliable')}<br />
            { t('shipping:commandour')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
