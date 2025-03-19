import React, { useState } from "react";
import { FaStar, FaPlus, FaMinus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux"; 
import { restaurants } from './../data';
import { addItem,decrementQuantity } from "../store/cartSlice";
import { IoMdArrowRoundBack } from "react-icons/io";

const RestaurantMenu = () => {
  
  const {id}=useParams()
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const restaurant=restaurants[id-1]

  console.log(cartItems)


  function findItemLength(id){
    const item= cartItems.find(item => item.id === id) 
    if(item){
      return item.quantity
    }
    return 0
  }

  const handleAddToCart = (item) => {
    dispatch(addItem({...item,restaurantId:restaurant.id}))
  };

  const handleRemoveFromCart = (item) => {
    dispatch(decrementQuantity({...item,restaurantId:restaurant.id}))
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Restaurant Details */}
      <div className="flex  justify-start gap-4 mb-6">
        <div className="pt-3 scale-120 hover:cursor-pointer">
          <Link to="/FoodOnline" className="scale-150"><IoMdArrowRoundBack /></Link>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{restaurant.name}</h2>
          <p className="text-gray-600 flex items-center">
            <FaStar className="text-yellow-400 mr-1" /> {restaurant.rating} • {restaurant.deliveryTime}
          </p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {restaurant.items.map((item, index) => (
          <div key={index} className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm relative">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-20 h-20 rounded-lg object-cover mr-4"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.category}</p>
              <p className="text-green-600 font-bold">₹{item.price}</p>
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.round(item.rating) ? "" : "text-gray-300"} />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {findItemLength(item.id) > 0 && (
                <button
                  onClick={() => handleRemoveFromCart(item)}
                  className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                >
                  <FaMinus />
                </button>
              )}
              <span className="text-lg font-bold text-gray-800">{findItemLength(item.id) || 0}</span>
              <button
                onClick={() => handleAddToCart(item)}
                className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
              >
                <FaPlus />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
