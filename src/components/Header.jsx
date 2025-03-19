import React, { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
   
  };

  return (
    <div className="bg-red-500 p-4 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold cursor-pointer hover:text-gray-200 transition duration-300">
          Use Location 
        </h1>
        <ul className="flex gap-3 items-baseline justify-between">
            <li className="text-amber-700"><a href="#">Login</a></li>
            <li className="text-amber-700"><a href="#">SignUp</a></li>
        </ul>
        
      </div>
      <div className="mt-4">
        <motion.input
          type="text"
          placeholder="Search food..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-2 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300 shadow-sm"
          whileFocus={{ scale: 1.05 }}
        />
      </div>
      
    </div>
  );
};

export default Header;
