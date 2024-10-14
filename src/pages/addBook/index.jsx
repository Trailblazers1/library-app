import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { useEffect, useState } from "react";

const AddBook = () => {
  const [authors, setAuthors] = useState([]);
  const [feedbackMessage, setFeedbackMessage] = useState(""); // State for feedback messages
  const [isSuccess, setIsSuccess] = useState(false); // State to check if the operation was successful

  const getAuthors = async () => {
    const response = await axios.get(`${BASE_URL}/authors`);
    setAuthors(response.data);
  };

  useEffect(() => {
    getAuthors();
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Collect form data
      const formData = new FormData(event.target);

      // Post data to API
      const response = await axios.post(`${BASE_URL}/books`, {
        title: formData.get("title"),
        author: formData.get("author"),
        year: formData.get("year"),
        genre: formData.get("genre"),
        content: formData.get("content"),
        cover: formData.get("cover"),
        summary: formData.get("summary"),
      });

      // Display success feedback
      setFeedbackMessage("Book added successfully!");
      setIsSuccess(true);
      setTimeout(() => {
        setFeedbackMessage(""); // Clear feedback message after 2 seconds
        navigate("/getbooks"); // Redirect to book list
      }, 2000);
    } catch (error) {
      console.log(error);
      setFeedbackMessage("Failed to add book. Please try again.");
      setIsSuccess(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center w-full h-[15vh] items-center">
        <h1 className="font-extrabold text-2xl">ADD A NEW BOOK</h1>
      </div>
      <form
        className="mb-[10vh] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] container mx-auto p-4 border border-gray-300 rounded-lg"
        onSubmit={handleSubmit}
      >
        {/* Select Author */}
        <select name="author" id="" className="border p-2 mb-2 w-full">
          {authors.map((author) => (
            <option key={author._id} value={author._id}>
              {author.name}
            </option>
          ))}
        </select>

        {/* Book Information */}
        <input
          type="text"
          placeholder="Title"
          required
          name="title"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Year"
          required
          name="year"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Genre"
          required
          name="genre"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Content"
          required
          name="content"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Cover URL"
          required
          name="cover"
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Summary"
          required
          name="summary"
          className="border p-2 mb-2 w-full"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#036CDB] text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200 font-bold"
        >
          Add Book
        </button>
      </form>

      {/* Feedback Message */}
      {feedbackMessage && (
        <div
          className={`mt-4 p-2 text-center font-bold ${
            isSuccess
              ? "bg-green-100 border-l-4 border-green-500 text-green-700"
              : "bg-red-100 border-l-4 border-red-500 text-red-700"
          }`}
        >
          {feedbackMessage}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default AddBook;
