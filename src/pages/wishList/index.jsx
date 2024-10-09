import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addToWishlist = () => {
    if (newItem.trim()) {
      setWishlistItems([...wishlistItems, newItem]);
      setNewItem("");
    }
  };

  const removeFromWishlist = (itemToRemove) => {
    setWishlistItems(wishlistItems.filter((item) => item !== itemToRemove));
  };

  return (
    <div>
        <Navbar/>
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">My Wishlist</h1>

      <div className="flex justify-center mb-4">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add an item"
          className="border px-4 py-2 rounded-md w-80 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={addToWishlist}
          className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Add
        </button>
      </div>

      {wishlistItems.length > 0 ? (
        <ul className="space-y-2">
          {wishlistItems.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-white p-4 rounded-md shadow-md"
            >
              <span>{item}</span>
              <button
                onClick={() => removeFromWishlist(item)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600">Your wishlist is empty.</p>
      )}
    </div>
    <Footer/>
    </div>
    
  );
};

export default Wishlist;
