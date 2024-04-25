// NavBar.js
import { Link } from "react-router-dom";
import "../components/NavBar.css";
import logo from "../assets/ilyessexpress.png";

const NavBar = () => {
  return (
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
            <li>
              <Link to="/Sing up">Sing up</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="navbar-buttons">
        <button> purchase template </button>
      </div>
    </div>
  );
};

export default NavBar;
