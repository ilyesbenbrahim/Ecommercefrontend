import "./Contact.css"
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_oafxyk8",
        "template_un6ccm8",
        formRef.current,
        "_G6nIdq_I_6UonZsr"
      );
      formRef.current.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div  className="contact-container">
      <form ref={formRef} onSubmit={handleSubmit}>
        <h2>Contactez-nous</h2>
        <label>Prénom:</label>
        <input type="text" placeholder="Entrez votre prénom" name="firstName" />
        <label>Nom:</label>
        <input type="text" placeholder="Entrez votre nom" name="name" />
        <label>Numéro de téléphone:</label>
        <input type="tel" placeholder="Entrez votre numéro" name="number" />
        <label>Adresse:</label>
        <input type="text" placeholder="Entrez votre adresse" name="address" />
        <label>Adresse e-mail:</label>
        <input type="email" placeholder="Entrez votre e-mail" name="email" />
        <label>Message:</label>
        <textarea placeholder="Entrez votre message" name="message" />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
