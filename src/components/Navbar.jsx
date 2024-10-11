import pic from "../assets/images/log.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <nav className="flex justify-around ml-[10px] ">
        <div className="flex items-center gap-5 font-bold text-[50px]">
          <img src={pic} alt="" />
          <Link to="/">Bookle</Link>
        </div>
        <div className="ml-[200px]">
          <div className="w-[40%] bg-white">
            <ul className="flex justify-evenly w-[70vw] bg-[#036CDB] h-[10vh] items-center text-white">
              <FontAwesomeIcon icon={faPhone} />
              <li>+233240095799 </li>
              <FontAwesomeIcon icon={faEnvelope} />
              <li>info@bookle.com </li>
              <FontAwesomeIcon icon={faClock} />
              <li>
                {currentTime.toLocaleDateString()} -{" "}
                {currentTime.toLocaleTimeString()}
              </li>
              <FontAwesomeIcon icon={faMessage} />
              <li>Live chat</li>
              <FontAwesomeIcon icon={faUser} />
              <Link to="/authForm">Sign Up</Link>
            </ul>
          </div>
          <div className="flex justify-evenly w-[70vw] h-[8vw] items-center sticky top-0 bg-white z-10">
            <Link to="/">Home</Link>
            <div className="dropdown">
              <div className="dropdown-button flex gap-5 align-middle items-center bg-transparent border-none">
                <span>Books</span> <IoIosArrowDown />
              </div>
              <div className="dropdown-content">
                <Link to="/getbooks">Books</Link>
                <Link to="/journals">Journals</Link>
                <Link to="/nonFiction">Non-fiction</Link>
                <Link to="/fiction">Fiction</Link>
              </div>
            </div>
            <div className="dropdown">
              <div className="dropdown-button flex gap-5 align-middle items-center bg-transparent border-none">
                <span>Collection</span> <IoIosArrowDown />
              </div>
              <div className="dropdown-content">
                <Link to="/getbooks">Collection</Link>
                <Link to="/viewAllBooks">View All Books</Link>
                <Link to="/add-new">Add Book</Link>
              </div>
            </div>

            <Link to="/about">About Us</Link>
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
