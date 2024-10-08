import pic from "../assets/images/log.jpeg";



const Footer = () => {
  return (
    <footer>
      <div className="bg-[#012E4A] text-white">
        <div  className="flex flex-row justify-evenly pt-10 font-bold text-[20px] font-[roboto]">
          <div className="poppins-light-italic">
            <h3>Call Us 24/7</h3>
            <h2>+2332090945586</h2>
          </div>

          <div className="poppins-light-italic">
            <h3>Make a Quote</h3>
            <h2>info@bookle.com</h2>
          </div>

          <div className="poppins-light-italic">
            <h3>Opening Hour</h3>
            <h2>Sunday - Fri: 9 aM - 6 pM</h2>
          </div>

          <div className="poppins-light-italic">
            <h3>Location</h3>
            <h2>4517 Esther Ocloo ave</h2>
          </div>
        </div>
        <div className="flex flex-row justify-evenly pt-40 mr-[10%] ml-[10%]">
          <div className="w-[25vw]">
            <div className="flex items-center gap-5 font-bold text-[50px]">
              <img src={pic} alt="" />
              <h1>Bookle</h1>
            </div>
            <p>
              Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a
              lacinia curabitur lacinia mollis
            </p>
          </div>
          <div className="w-[25vw]">
            <h1>Costumers Support</h1>
            <ul>
              <a href="">Store list</a>
              <a href="">Opening Hours</a>
              <a href="">Contact Us</a>
              <a href="">Return Policy</a>
            </ul>
          </div>
          <div className="w-[25vw]">
            <h1>Categories</h1>
            <ul>
              <a href="">Novel Books</a>
              <a href="">Poetry Books</a>
              <a href="">Political Books</a>
              <a href="">History Books</a>
            </ul>
          </div>
          <div className="w-[25vw]">
            <h1>Newsletter</h1>
            <p>
              Sign up to searing weekly newsletter to get the latest updates
            </p>
            <form action=""></form>
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
