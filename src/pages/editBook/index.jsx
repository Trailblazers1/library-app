import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants";
import axios from "axios";

const EditBook = ({ bookId }) => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState({
    author: "",
    title: "",
    year: "",
    genre: "",
    content: "",
    cover: "",
    summary: "",
  });

  const [message, setMessage] = useState("");

  // Fetch the current book details when the component mounts
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`${BASE_URL}/books/${id}`); // Replace with your API URL
        const data = await response.json();
        setBookDetails(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `${BASE_URL}/books/${bookDetails._id}`,
        bookDetails
      );
      if (response.ok) {
        setMessage("Book updated successfully!");
      } else {
        setMessage("Failed to update the book.");
      }
    } catch (error) {
      console.error("Error updating book:", error);
      setMessage("An error occurred while updating the book.");
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center w-full h-[15vh] items-center">
        <h1 className="font-extrabold text-2xl">EDIT BOOK DETAILS</h1>
      </div>
      {message && (
        <div className="text-green-500 text-center mb-4">{message}</div>
      )}
      <form
        className="mb-[10vh] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] container mx-auto p-4 border border-gray-300 rounded-lg"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Author"
          required
          name="author"
          value={bookDetails.author}
          onChange={handleChange}
          className="border p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Title"
          required
          name="title"
          value={bookDetails.title}
          onChange={handleChange}
          className="border p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="number"
          placeholder="Year"
          required
          name="year"
          value={bookDetails.year}
          onChange={handleChange}
          className="border p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Genre"
          required
          name="genre"
          value={bookDetails.genre}
          onChange={handleChange}
          className="border p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Content"
          required
          name="content"
          value={bookDetails.content}
          onChange={handleChange}
          className="border p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Cover"
          required
          name="cover"
          value={bookDetails.cover}
          onChange={handleChange}
          className="border p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Summary"
          required
          name="summary"
          value={bookDetails.summary}
          onChange={handleChange}
          className="border p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Update
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default EditBook;
