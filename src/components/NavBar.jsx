import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import "../components/NavBar.css";
import logo from "../assets/ilyessexpress.webp";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="info">
          <img className="logo" src={logo} alt="Description of the logo" />
          <nav>
            <ul>
              <li>
                <Link to="/">Landing</Link>
              </li>
              <li>
                <Link to="/aboOther pages">Other pages</Link>
              </li>
              <li>
                <Link to="/Templatet">Templatet</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="navbar-buttons">
          <span>
            <Link to="/Sing up">Sing up</Link>
          </span>
          <div className="icon-container">
            <MdShoppingCart className="icons-shopping-cart" />
          </div>

          <button> Purchase template </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
