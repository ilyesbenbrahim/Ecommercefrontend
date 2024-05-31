import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import "../components/NavBar.css";
import logo from "../assets/ilyesexpresss.png";
const NavBar = () => {
  const { t } = useTranslation();

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="info">
          <img className="logo" src={logo} alt="Description of the logo" />
          <nav>
            <ul>
              <li>
              <Link to="/">{t('navbar:Home')}</Link>
              </li>
              <li>
              <Link to="/Advantages">{t('navbar:advantages')}</Link>
              </li>
              <li>
              <Link to="/Contact">{t('navbar:contact')}</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="navbar-buttons">
          <span>
          <Link to="/signUp">{t('navbar:signUp')}</Link>
          </span>
          <div className="icon-container">
            <MdShoppingCart className="icons-shopping-cart" />
          </div>
          <Link to="/productClient" >
          <button>{t('navbar:product')}</button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default NavBar;
