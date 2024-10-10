import pic from "../assets/images/log.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-around ml-[10px] ">
        <div className="flex items-center gap-5 font-bold text-[50px]">
          <img src={pic} alt="" />
          <Link to="/">Bookle</Link>
        </div>
        <div className=" ml-[200px]">
          <div className="w-[40%] bg-white">
            <ul className="flex justify-evenly w-[70vw] bg-[#036CDB] h-[10vh] items-center text-white">
              <FontAwesomeIcon icon={faPhone} />
              <li>+233240095799 </li>
              <FontAwesomeIcon icon={faEnvelope} />
              <li>info@bookle.com </li>
              <FontAwesomeIcon icon={faClock} />
              <li>Sunday - Fri: 9 aM - 6 pm</li>
              <FontAwesomeIcon icon={faMessage} />
              <li>Live chat</li>
              <FontAwesomeIcon icon={faUser} />
              <Link to="/authForm">Sign Up</Link>
            </ul>
          </div>
          <div className="flex justify-evenly w-[70vw] h-[8vw] items-center ">
            <Link to="/">Home</Link>
            <select name="" id="">
              <option value="">Books</option>
              <option value="">Journals</option>
              <option value="">Non-fiction</option>
              <option value="">Fiction</option>
            </select>
            <select name="" id="">
              <option value="">Collection</option>
              <option value="">View All Books</option>
            </select>
            <Link to="/aboutUs">About Us</Link>
            <Link to="/contactUs"> Contact</Link>
            <div className="flex justify-evenly w-[15vw]">
              <Link to="/wishList">Wishlist</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
