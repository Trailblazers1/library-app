import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const NonFiction = () => {
  return (
    <div>
        <Navbar/>
    <div className="relative min-h-screen bg-cover bg-center text-white" 
         style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?nonfiction,books')" }}>
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-4">
        <h2 className="text-5xl font-extrabold tracking-wide mb-6 drop-shadow-lg">
          Non-fiction Collection
        </h2>
        <p className="text-xl font-light max-w-xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
          Discover a world of real stories, expert knowledge, and valuable insights through our non-fiction collection. From biographies to self-help books.
        </p>

        {/* Button to Explore Non-fiction */}
        <Link to="/non-fiction-collection">
          <button className="px-8 py-4 bg-green-600 hover:bg-green-800 transition-colors rounded-full text-lg font-semibold shadow-lg animate-bounce">
            Explore Non-fiction
          </button>
        </Link>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default NonFiction;
