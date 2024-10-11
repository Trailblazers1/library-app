import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants";
import { useState, useEffect } from "react";
import axios from "axios";


const BookDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params)
  const bookId = params.id



  //1. declare state to store the todos
  const [bookDetail, setBookDetail] = useState([]);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await axios.get(`${BASE_URL}/books/${bookId}`);
      setBookDetail(response.data)
      console.log(bookDetail)

    };
    fetchBook();
  }, []);

  const deleteBook = async () => {
    const response = await axios.delete(`${BASE_URL}/books/${bookId}`);
    navigate('/getbooks');
  }

  return <div>
    <Navbar />
    <div className="flex ml-[10vw]">
    <div className="w-[20vw]"><img src={bookDetail.cover} alt={bookDetail.title} /></div>
    <div className="w-[40vw] m-10">
      <h1 className="font-bold">{bookDetail.title}</h1>
      <h1>{bookDetail.summary}</h1>
      <h1>{bookDetail.year}</h1>
      <h1>{bookDetail.genre}</h1>
      <h1>{bookDetail.content}</h1>

      <button  onClick={deleteBook} className="border-2 border-[#036CDB] w-[100px] p-1 font-bold">DELETE</button>

    </div>
    </div>
    
    <Footer />
  </div>;
};

export default BookDetails;
