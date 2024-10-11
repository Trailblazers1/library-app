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
            <form>
              <input type="text" placeholder="search for a book by Tittle/Genre/Author" className="border p-2 mb-2 w-full" required/>
                   <button type="submit" className="border-2 border-[#036CDB] w-[100px] p-1 font-bold">search</button>
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
