import "./Contact.css"
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from 'react-i18next';
import Topbar from "../../components/topbare/Topbar";
import Feature from "../../components/features/Feature";


const Contact = () => {
  const { t } = useTranslation();
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
    <>
    <Topbar></Topbar>
    <div  className="contact-container">
      <form ref={formRef} onSubmit={handleSubmit}>
        <h2>{t('contact:header')} </h2>
      
        <label>{t('contact:firstNameLabel')}</label>
        <input type="text" placeholder="Entrez votre prénom" name="firstName" />
        <label>{t('contact:lastNameLabel')}</label>
        <input type="text" placeholder={t('contact:lastNamePlaceholder')} name="name" />
        <label>{t('contact:phoneLabel')} </label>
        <input type="tel" placeholder={t('contact:phonePlaceholder')} name="number" />
        <label>{t('contact:addressLabel')}</label>
        <input type="text" placeholder={t('contact:addressPlaceholder')} name="address" />
        <label>{t('contact:emailLabel')} </label>
        <input type="email" placeholder={t('contact:emailPlaceholder')} name="email" />
        <label>{t('contact:messageLabel')}</label>
        <textarea placeholder={t('contact:messagePlaceholder')} name="message" />
        <button type="submit">{t('contact:submitButton')}</button>
      </form>
    </div>
    <Feature></Feature>

    
</>
  );
};

export default Contact;
