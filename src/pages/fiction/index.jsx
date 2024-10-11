import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Fiction = () => {
  return (
    <div>
        <Navbar/>
    <div
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?library,books')",
      }}
    >
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-4">
        <h2 className="text-5xl font-extrabold tracking-wide mb-6 drop-shadow-lg">
          Fiction Books
        </h2>
        <p className="text-xl font-light max-w-xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
          Dive into a world of imagination and explore the best collection of
          fiction books in our library. From timeless classics to modern
          masterpieces, there's something for everyone.
        </p>

        {/* Button wrapped with Link to make it functional */}
        <Link to="/getbooks">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-800 transition-colors rounded-full text-lg font-semibold shadow-lg">
            Explore Collection
          </button>
        </Link>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Fiction;
