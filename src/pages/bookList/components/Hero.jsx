import pic from "./head.png";
import List from "../../getBooks";
import axios from "axios";
import { BASE_URL } from "../../../constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import debounce from "lodash.debounce"; // Import debounce from lodash for optimization

const Hero = () => {
  // Declare states for books, filtered books, search query, and suggestions
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Fetch books from the API
  const fetchBooks = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/books`);
      setBooks(response.data);
      setFilteredBooks(response.data); // Set filteredBooks to all books initially
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Fetch books on component mount
  useEffect(() => {
    fetchBooks();
  }, []);

  // Debounced search to avoid triggering search on every keystroke
  const debouncedSearch = debounce((query) => {
    const filtered = books.filter((book) => {
      return (
        book.title.toLowerCase().includes(query) ||
        book.genre.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
      );
    });

    setFilteredBooks(filtered);
    setShowSuggestions(true);
  }, 300);

  // Handle search input changes
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    debouncedSearch(query);
  };

  // Hide suggestions when user selects or submits
  const handleBookClick = () => {
    setShowSuggestions(false);
  };

  return (
    <div className="font-serif">
      <div className="bg-[#e4ebf0] w-full h-full">
        <div className="overlay">
          <div className="py-[35vh]">
            <h1 className="text-[60px] text-start font-extrabold text-[#334412]">
              Get Your New Book With The Best Price
            </h1>
            <form className="flex justify-center items-center gap-2 mt-4 relative">
              <input
                type="text"
                placeholder="Search for a book by Title/Genre/Author"
                className="border border-gray-300 rounded-full p-3 w-full max-w-[400px] focus:outline-none focus:border-blue-400 shadow-md"
                value={searchQuery}
                onChange={handleSearch}
              />
              <button
                type="submit"
                className="bg-[#036CDB] text-white p-3 rounded-full w-[120px] font-bold hover:bg-[#024fa1] transition-all duration-300"
                disabled // Search happens automatically with debounce
              >
                Search
              </button>
            </form>

            {/* Display Suggestions while typing */}
            {showSuggestions && searchQuery && (
              <ul className="absolute z-10 bg-white border border-gray-300 shadow-md rounded-md mt-2 w-full max-w-[400px]">
                {filteredBooks.slice(0, 5).map((book, index) => (
                  <li
                    key={index}
                    className="p-3 hover:bg-blue-100 cursor-pointer"
                    onClick={handleBookClick}
                  >
                    <span className="font-semibold">{book.title}</span> by {book.author}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <img src={pic} alt="Hero" />
        </div>
      </div>

      {/* Stylish Book List */}
      <div className="py-10 px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Available Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Show the book cover image if available */}
              {book.cover && (
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              )}

              <h3 className="text-2xl font-bold text-[#036CDB] mb-2">{book.title}</h3>
              <p className="text-gray-600">Author: {book.author}</p>
              <p className="text-gray-500">Genre: {book.genre}</p>
              
              {/* Link to book details using React Router */}
              <Link to={`/books/${book._id}`}>
                <button className="mt-4 bg-[#036CDB] text-white py-2 px-4 rounded-full hover:bg-[#024fa1] transition-all duration-300">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
