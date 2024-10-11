import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Journals = () => {
  return (
    <div>
        <Navbar/>
    <div className="relative min-h-screen bg-cover bg-center text-white" 
         style={{ backgroundImage: "url('https://www.freepik.com/free-photo/book-library-with-open-textbook_3737790.htm#query=library%20background&position=3&from_view=keyword&track=ais_hybrid&uuid=60fc86ed-f993-4652-976e-7f7b82bd18a8')" }}>
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-4">
        <h2 className="text-5xl font-extrabold tracking-wide mb-6 drop-shadow-lg">
          Journals Collection
        </h2>
        <p className="text-xl font-light max-w-xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
          Explore our wide range of academic journals across various disciplines. Stay informed with the latest research and publications.
        </p>

        {/* Button to Explore Journals */}
        <Link to="/journals-collection">
          <button className="px-8 py-4 bg-blue-600 hover:bg-orange-300 transition-colors rounded-full text-lg font-semibold shadow-lg animate-bounce">
            Explore Journals
          </button>
        </Link>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Journals;
