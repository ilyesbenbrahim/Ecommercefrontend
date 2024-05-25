import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import "../components/NavBar.css";
import logo from "../assets/ilyesexpresss.png";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="info">
          <img className="logo" src={logo} alt="Description of the logo" />
          <nav>
            <ul>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/Advantages">Advantages</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="navbar-buttons">
          <span>
            <Link to="/signUp">Sing up</Link>
          </span>
          <div className="icon-container">
            <MdShoppingCart className="icons-shopping-cart" />
          </div>

          <button> Product </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
