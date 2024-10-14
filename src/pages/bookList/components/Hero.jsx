import pic from "./head.png"
import List from "../../getBooks";
// import picc from "../"
//  import picc from "./dot.png"

const Hero = () => {
  return (
    <div className="font-serif">
      <div className="bg-[#e4ebf0] w-full h-full">

        <div className="overlay">
          <div className="py-[35vh]">
            <h1 className="text-[70px] text-start font-extrabold text-[#334412]">
              Get Your New Book With The Best Price</h1>
            <form className="flex justify-center items-center gap-2 mt-4">
  <input
    type="text"
    placeholder="Search for a book by Title/Genre/Author"
    className="border border-gray-300 rounded-full p-3 w-full max-w-[400px] focus:outline-none focus:border-blue-400 shadow-md"
    required
  />
  <button
    type="submit"
    className="bg-[#036CDB] text-white p-3 rounded-full w-[120px] font-bold hover:bg-[#024fa1] transition-all duration-300"
  >
    Search
  </button>
</form>


                </div>
                {/* { <img src={picc} alt="" /> } */}
                <img src={pic} alt="" />

              </div>

          </div>



          {/* <section >
      <div className="w-[100vw] h-[60vh]">
       <div className="w-[300px] h-[300px]"> <img src={picc} alt="" /></div>
      </div>
      </section> */}
      <List/>
        </div>
        );
};

        export default Hero;
