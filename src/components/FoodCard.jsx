import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const FoodCard = ({ name, items,id }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => prevIndex + 1 >=items.length?0:prevIndex+1);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <Link className="relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105" to={`/FoodOnline/store/${id}`}>
      {/* Image Carousel */}
      <div className="relative w-full h-40 overflow-hidden">
        <div className="w-full h-full flex transition-transform duration-700 ease-in-out transform-gpu"
             style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
          {items.map((item, index) => (
            <img
              key={index}
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-full object-cover shrink-0"
            />
          ))}
        </div>
        
        {/* Overlay Information */}
        <div className="absolute bottom-2 left-2 bg-gradient-to-r from-black via-gray-900 to-transparent text-white p-3 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-yellow-300">{items[currentImageIndex].name}</h2>
          <p className="text-md font-semibold text-green-400">${items[currentImageIndex].price.toFixed(2)}</p>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className={index < Math.round(items[currentImageIndex].rating) ? "text-yellow-400" : "text-gray-500"} />
            ))}
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4">
        <h2 className="text-lg font-extrabold text-gray-800">{name}</h2>
      </div>
    </Link>
  );
};

export default FoodCard;
