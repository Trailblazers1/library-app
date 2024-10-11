import pic from "../assets/images/log.jpeg";
import { BsChevronDoubleRight } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { IoMdTimer } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#012E4A] text-white leading-8">
        <div className="flex flex-row justify-evenly pt-10 font-bold text-[20px] font-[roboto]">
          <div className="poppins-light-italic">
            <span className="flex ml-8">
              <IoCall />
            </span>
            <h3>Call Us 24/7</h3>
            <h2>+2332090945586</h2>
          </div>

          <div className="poppins-light-italic leading-8">
            <span className="flex ml-8">
              <BsEnvelopeAtFill />
            </span>
            <h3>Make a Quote</h3>
            <h2>info@bookle.com</h2>
          </div>

          <div className="poppins-light-italic">
            <span className="flex ml-8">
              <IoMdTimer />
            </span>
            <h3>Opening Hour</h3>
            <h2>Sunday - Fri: 9 aM - 6 pM</h2>
          </div>

          <div className="poppins-light-italic">
            <span className="flex ml-5">
              <IoLocationOutline />
            </span>
            <h3>Location</h3>
            <h2>4517 Esther Ocloo ave</h2>
          </div>
        </div>
        <div>
          <hr className="flex-1 border-1 border-white-300 w-[30%] ml-96 mb-8 mt-20" />
        </div>
        <div className="flex flex-row justify-evenly pt-15 mr-[10%] ml-[10%] pb-10">
          <div className="w-[25vw]">
            <div className="flex items-center gap-5 font-bold text-[50px]">
              <img src={pic} alt="" />
              <h1>Bookle</h1>
            </div>
            <p>
              Phasellus ultricies aliquam volutpat <br /> ullamcorper laoreet
              neque, a lacinia curabitur lacinia mollis
            </p>
            <div className="flex w-[20hw] gap-5">
              <div>
                <span>
                  <FaFacebookF />
                </span>
              </div>
              <div>
                <span>
                  <FaTwitter />
                </span>
              </div>
              <div>
                <span>
                  <FaYoutube />
                </span>
              </div>
              <div>
                <span>
                  <FaLinkedin />
                </span>
              </div>
            </div>
          </div>
          <div className="w-[25vw]">
            <h1 className="text-[25px] font-bold pb-5">Costumers Support</h1>
            <div>
              <hr className="flex-1 border-1 border-orange-300 w-[30%] ml-12 mb-8" />
            </div>
            <div className="pb-1.5">
              <div className="flex gap-2">
                <span className="pt-2">
                  <BsChevronDoubleRight />
                </span>
                <span>Store List</span>
              </div>
              <div className="flex gap-2">
                <span className="pt-2">
                  <BsChevronDoubleRight />
                </span>
                <span>Opening Hours</span>
              </div>
              <div className="flex gap-2">
                <span className="pt-2">
                  <BsChevronDoubleRight />
                </span>
                <span>Contact Us</span>
              </div>
              <div className="flex gap-2">
                <span className="pt-2">
                  <BsChevronDoubleRight />
                </span>
                <span>Return Policy</span>
              </div>
            </div>
          </div>
          <div className="w-[25vw]">
            <h1 className="text-[25px] font-bold pb-5">Categories</h1>
            <div>
              <hr className="flex-1 border-1 border-orange-300 w-[30%] ml-6 mb-8" />
            </div>
            <div className="pb-1.5">
              <div className="flex gap-2">
                <span className="pt-2">
                  <BsChevronDoubleRight />
                </span>
                <span>Novel Books</span>
              </div>
              <div className="flex gap-2">
                <span className="pt-2">
                  <BsChevronDoubleRight />
                </span>
                <span>Poetry Books</span>
              </div>
              <div className="flex gap-2">
                <span className="pt-2">
                  <BsChevronDoubleRight />
                </span>
                <span>Political Books</span>
              </div>
              <div className="flex gap-2">
                <span className="pt-2">
                  <BsChevronDoubleRight />
                </span>
                <span>History Books</span>
              </div>
            </div>
          </div>

          <div className="w-[25vw]">
            <h1 className="text-[25px] font-bold pb-5">Newsletter</h1>
            <div>
              <hr className="flex-1 border-1 border-orange-300 w-[30%] ml-6 mb-8" />
            </div>
            <p className="text-[#FFFCDC] mb-4">
              Sign up to our weekly newsletter to get the latest updates
            </p>
            <form className="mt-5 flex flex-col">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4 text-black" // Added text-black
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#036CDB] text-white font-bold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#036CDB] h-[8vh] text-white pt-4">
        <p id="copyright">Copyright &copy; 2024 Bookle. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
