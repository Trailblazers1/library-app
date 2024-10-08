import pic from "../assets/images/log.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-around ml-[10px] ">
        <div className="flex items-center gap-5 font-bold text-[50px]">
          <img src={pic} alt="" className="" />
          <h1>Bookle</h1>
        </div>
        <div className=" ml-[200px]">
          {/* <div className="bg-red-500 w-[100%]">  */}
          <div className="w-[40%]">
            {/* <ul className="flex justify-evenly w-[99vw] bg-[#036280] h-[10vh] items-center text-white"> */}
            <ul className="flex justify-evenly w-[70vw] bg-[#E56F47] h-[10vh] items-center text-white">
              <FontAwesomeIcon icon={faPhone} />
              <li>+233240095799 </li>
              <FontAwesomeIcon icon={faEnvelope} />
              <li>info@bookle.com </li>
              <FontAwesomeIcon icon={faClock} />
              <li>Sunday - Fri: 9 aM - 6 pm</li>
              <FontAwesomeIcon icon={faMessage} />
              <li>Live chat</li>
              <FontAwesomeIcon icon={faUser} />
              <li>Login</li>
            </ul>
          </div>
          {/* <div className="flex justify-evenly w-[99vw] h-[8vw] items-center bg-slate-400"> */}
          <div className="flex justify-evenly w-[70vw] h-[8vw] items-center">
            <a href="">Home</a>
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
            <a href="">About Us</a>
            <a href="">Contact</a>
            <div className="flex justify-evenly w-[15vw]">
              <FontAwesomeIcon icon={faHeart} />
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
