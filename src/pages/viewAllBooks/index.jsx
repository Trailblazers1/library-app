import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import { BASE_URL } from "../../constants";

const ViewAllBooks = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]); // State for filtered books
  const [query, setQuery] = useState(""); // State for search query
  const [suggestions, setSuggestions] = useState([]); // State for live suggestions

  // Fetch books from the API
  const fetchBooks = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/books`);
      setBooks(response.data);
      setFilteredBooks(response.data); // Initialize filteredBooks with the fetched data
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Function to filter books based on query
  const filterBooks = (searchQuery) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(lowerCaseQuery) ||
        book.author.toLowerCase().includes(lowerCaseQuery) ||
        book.isbn.toLowerCase().includes(lowerCaseQuery)
    );
  };

  // Update suggestions while typing
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSuggestions(filterBooks(value));
  };

  // Handler for search functionality (on form submit)
  const handleSearch = (e) => {
    e.preventDefault();
    const results = filterBooks(query);
    setFilteredBooks(results); // Update the filtered books based on search
    setSuggestions([]); // Clear suggestions after search
  };

  // Handle Enter key press for search
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-4xl font-bold mb-8 text-center">View All Books</h2>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex justify-center mb-8">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN..."
              value={query}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown} // Listen for Enter key
              className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-2 mr-3 text-blue-500 hover:text-blue-700 transition duration-300"
              title="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 animate-pulse"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Live suggestions dropdown */}
            {suggestions.length > 0 && (
              <ul className="absolute left-0 right-0 mt-1 max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setQuery(suggestion.title);
                      setSuggestions([]); // Clear suggestions after selecting
                    }}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                  >
                    <span className="font-semibold">{suggestion.title}</span> by{" "}
                    <span className="italic">{suggestion.author}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </form>

        {/* Slider Wrapper for Top 5 Books */}
        {filteredBooks.slice(0, 5).length > 0 ? (
          <div className="relative w-full overflow-hidden mb-12">
            <div className="slider flex gap-4">
              {filteredBooks.slice(0, 5).map((book, index) => (
                <div
                  key={index}
                  className="min-w-[200px] md:min-w-[250px] lg:min-w-[300px] p-2"
                >
                  <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-40 object-cover md:h-48 lg:h-56 rounded-t-lg"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-lg md:text-xl font-semibold">
                        {book.title}
                      </h3>
                      <p className="text-sm text-gray-600">{book.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No books found.</p>
        )}

        {/* Remaining 10 Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredBooks.slice(5, 15).length > 0 ? (
            filteredBooks.slice(5, 15).map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-40 object-cover md:h-48 lg:h-56 rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{book.title}</h3>
                  <p className="text-sm text-gray-600">by {book.author}</p>
                  <p className="text-xs text-gray-500">ISBN: {book.isbn}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No books found.
            </p>
          )}
        </div>

        <style>{`
          .slider {
            display: flex;
            animation: scroll 15s linear infinite;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .slider div {
            flex-shrink: 0;
          }

          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
      <Footer />
    </div>
  );
};

export default ViewAllBooks;
