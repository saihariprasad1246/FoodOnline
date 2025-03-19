import React from "react";

const Category = ({ category }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={category.image} alt={category.name} className="w-full h-16 object-cover rounded-lg" />
      <h2 className="text-lg font-semibold mt-2 text-center">{category.name}</h2>
    </div>
  );
};

export default Category;