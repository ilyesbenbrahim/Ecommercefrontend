import NavBar from "../../components/NavBar";
import Feature from "../../components/features/Feature";
import Topbar from "../../components/topbare/Topbar";
import "./Avantages.css"
import { useTranslation } from 'react-i18next';

const Avantages = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Topbar />
      <NavBar />
<div className="paragraphe-avantager"> 
      <p>
      {t('contact:paragrapheone')}
       
      </p>
      <p>
      {t('contact:paragraphetwo')}
      </p>
      <p>
      {t('contact:paragraphethree')}
      </p>
      </div>
      <Feature></Feature>
    </div>
  );
};

export default Avantages;
