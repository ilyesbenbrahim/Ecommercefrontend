import NavBar from "../src/components/NavBar";
import Hero from "../src/components/Hero";
import Shipping from "./components/shippinge/Shipping";
import Topbar from "./components/topbare/Topbar";
import PromotionalBanner from "./components/PromotionalBannere/PromotionalBanner";
import Feature from "./components/features/Feature";
const App = () => {
  return (
    <>
      <div>
        <Topbar></Topbar>
        <NavBar></NavBar>
        <Hero></Hero>
        <Shipping></Shipping>
        <PromotionalBanner></PromotionalBanner>
        <Feature></Feature>
        

      
      </div>
    </>
  );
};

export default App;
