import { useState } from "react";
import "./SectiondePortfol.css";
import imgewoman from "../../assets/woman.jpg";
import imghomme from "../../assets/homme.webp";

const SectiondePortfol = () => {
  const [translateXHomme, setTranslateXHomme] = useState(0);
  const [translateXFemme, setTranslateXFemme] = useState(0);

  const handleMouseEnterHomme = () => {
    setTranslateXHomme(-100); // Déplacer l'image de 100 pixels vers la gauche
  };

  const handleMouseEnterFemme = () => {
    setTranslateXFemme(100); // Déplacer l'image de 100 pixels vers la droite
  };

  const handleMouseLeave = () => {
    setTranslateXHomme(0); // Réinitialiser la translation
    setTranslateXFemme(0); // Réinitialiser la translation
  };

  return (
    <div className="pppppppp">
      <div className="img-container">
        <img
          className="imghomme"
          src={imghomme}
          alt="homme"
          style={{ transform: `translateX(${translateXHomme}px)` }} // Utiliser transform pour la translation horizontale
          onMouseEnter={handleMouseEnterHomme}
          onMouseLeave={handleMouseLeave}
        />
        <img
          className="imgewoman"
          src={imgewoman}
          alt="Femme"
          style={{ transform: `translateX(${translateXFemme}px)` }} // Utiliser transform pour la translation horizontale
          onMouseEnter={handleMouseEnterFemme}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};

export default SectiondePortfol;
