import NavBar from "../src/components/NavBar";
import Hero from "../src/components/Hero";
import Shipping from "./components/shippinge/Shipping";
import Topbar from "./components/topbare/Topbar";
import PromotionalBanner from "./components/PromotionalBannere/PromotionalBanner";
import Feature from "./components/features/Feature";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18';
import SectiondePortfol from "./components/home-woman/SectiondePortfol";
const App = () => {
  return (
    <>
        <I18nextProvider i18n={i18n}>
      <div>
        <Topbar></Topbar>
        <NavBar></NavBar>
        <Hero></Hero>
        <SectiondePortfol></SectiondePortfol>

        <Shipping></Shipping>
        <PromotionalBanner></PromotionalBanner>

        <Feature></Feature>
      </div>
          </I18nextProvider>
    </>
  );
};
export default App;
