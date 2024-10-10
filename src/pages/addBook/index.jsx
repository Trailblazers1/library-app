import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Form, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { useEffect, useState } from "react";

const AddBook = () => {
  const [authors, setAuthors] = useState([]);

  const getAuthors = async () => {
    const response = await axios.get(`${BASE_URL}/authors`);
    setAuthors(response.data);
  }

  useEffect(() => {
    getAuthors()
  }, []);

  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      //collect form data
      const formData = new FormData(event.target);

      //post data to api

      const response = await axios.post(`${BASE_URL}/books`, {
        title: formData.get('title'),
        author: formData.get('author'),
        year: formData.get('year'),
        genre: formData.get('genre'),
        content: formData.get('content'),
        cover: formData.get('cover'),
        summary: formData.get('summary'),
      })

    } catch (error) {
      console.log(error)

    }
  }

  return (
    <div>
      <Navbar />
      <div className="flex justify-center w-full h-[15vh] items-center">
        <h1 className="font-extrabold text-2xl">ADD A NEW BOOK</h1>
      </div>
      <form className="mb-[10vh] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] container mx-auto p-4 border border-gray-300 rounded-lg" onSubmit={handleSubmit}>

        {/* <input
           placeholder="Author" required name="author"
          className="border p-2 mb-2 w-full"
        /> */}
        {/* <div  className="border p-2 mb-2 w-full"> */}
        <select name="author" id="" className="border p-2 mb-2 w-full">
          {authors.map((author) => {
            return <option key={author._id} value={author._id}>{author.name}</option>
          })}
        </select>

        <input type="text" placeholder="Title" required name="title"
          className="border p-2 mb-2 w-full"
        />
        <input type="text" placeholder="Year" required name="year"
          className="border p-2 mb-2 w-full"
        />
        <input type="text" placeholder="Genre" required name="genre"
          className="border p-2 mb-2 w-full"
        />
        <input type="text" placeholder="Content" required name="content"
          className="border p-2 mb-2 w-full"
        />
        <input type="text" placeholder="Cover" required name="cover"
          className="border p-2 mb-2 w-full"
        />
        <input type="text" placeholder="Summary" required name="summary"
          className="border p-2 mb-2 w-full"
        />

        <button
          type="submit"
          className="w-full bg-[#036CDB] text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Update
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default AddBook;