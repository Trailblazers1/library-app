 import pic from "./head.png"
//  import picc from "./dot.png"
const Hero = () => {
  return (
    <div className="font-serif">
      <div className="bg-[#D0E1E7] w-full h-full">
        
         <div className="overlay">
         <div className="py-[35vh]">
          <h1 className="text-[70px] text-start font-extrabold text-[#829263]">
            Get Your New Book With The Best Price</h1>
          <input type="text" 
                placeholder="Search for a book" 
                className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
          {/* <img src={picc} alt="" /> */}
          <img src={pic} alt="" />

        </div> 

      </div>
    </div>
  );
};

export default Hero;
