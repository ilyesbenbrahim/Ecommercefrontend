import "./Topbar.css";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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
          <FaFacebookF className="icon" color="blue"  />
          <FaInstagramSquare className="icon" color="red"  />
          <FaLinkedin className="icon" color="blue" />

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
