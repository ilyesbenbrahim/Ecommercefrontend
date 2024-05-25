import "./Topbar.css";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="contact-one">
          <IoCall className="icon" color="blue"  />
          <div className="phone-number">+213776494897</div>

          <MdEmail className="icon" color="orange"/>
          <div className="mail-address">benbrahim1.ilyes@gmail.com</div>
        </div>
        <div className="contact-two">
        <Link to="https://www.facebook.com/profile.php?id=61560006480207" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="icon" color="blue" />
          </Link>
          <Link to="https://www.instagram.com/ilyesexpress5/" target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare className="icon" color="red"  />
          </Link>
          <Link to="https://www.linkedin.com/in/benbrahim-ilyes-6b187630b/" target="_blank" rel="noopener noreferrer">

          <FaLinkedin className="icon" color="blue" />
          </Link>


          <select className="langSelect">
            <option value="English">En</option>
            <option value="Français">Fr</option>
            <option value="Arabic">Ar</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
