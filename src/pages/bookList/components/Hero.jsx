 import pic from "./head.png"
//  import picc from "./dot.png"
const Hero = () => {
  return (
    <div className="font-serif">
      <div className="bg-[#e4ebf0] w-full h-full">
        
         <div className="overlay">
         <div className="py-[35vh]">
          <h1 className="text-[70px] text-start font-extrabold text-[#334412]">
            Get Your New Book With The Best Price</h1>
          <input type="text" 
                placeholder="Search for a book" 
                className="pl-10 pr-4 py-2 w-full  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E56F47]" />
        </div>
          {/* <img src={picc} alt="" /> */}
          <img src={pic} alt="" />

        </div> 

      </div>

      <section className="sec">
      

      </section>
    </div>
  );
};

export default Hero;
