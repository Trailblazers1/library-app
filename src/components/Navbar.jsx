import pic from "../assets/images/log.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-around ml-[80px] ">
        <div className="flex items-center gap-5 bg-[#012E4A]">
          <img src={pic} alt=""  className=""/>
          <h1>Bookle</h1>
        </div>
        <div className=" ml-[280px]"> 
        {/* <div className="bg-red-500 w-[100%]">  */}
          <div className="w-[40%]">
            {/* <ul className="flex justify-evenly w-[99vw] bg-[#036280] h-[10vh] items-center text-white"> */}
            <ul className="flex justify-evenly w-[70vw] bg-[#036280] h-[10vh] items-center text-white">
              <li>+233240095799 </li>
              <li>info@bookle.com </li>
              <li>Sunday - Fri: 9 aM - 6 pm</li>
              <li>Live chat</li>
              <li>Login</li>
            </ul>
          </div>
          {/* <div className="flex justify-evenly w-[99vw] h-[8vw] items-center bg-slate-400"> */}
          <div className="flex justify-evenly w-[70vw] h-[8vw] items-center bg-slate-400">
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
