import { useState } from "react";
import "./SectiondePortfol.css";
import imgewoman from "../../assets/woman.jpg";
import imghomme from "../../assets/homme.jpg";
const SectiondePortfol = () => {
  // Définir l'état initial de la valeur horizontale de la variable --translate
  const [translateX, setTranslateX] = useState(0);

  // Fonction pour modifier la valeur horizontale de la variable --translate
  const handleMouseEnter = () => {
    setTranslateX(100); // Déplacer l'image de 100 pixels vers la droite
  };

  // Réinitialiser la valeur de translation lorsque la souris quitte l'image
  const handleMouseLeave = () => {
    setTranslateX(0); // Réinitialiser la translation
  };

  return (
    <div className="pppppppp">
      <div className="img-container">
        {/* Appliquer la valeur de translation horizontale en tant que style en utilisant JavaScript */}
        <img 
        className="imghomme"
        src={imghomme}
        alt="homme"
        />
        <img
          className="imgewoman"
          src={imgewoman}
          alt="Femme"
          style={{ "--translate": `${translateX}px, 0` }} // Ignorer la translation verticale
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
     


      </div>
    </div>
  );
};

export default SectiondePortfol;
