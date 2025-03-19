import React from "react";
import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem } from "../store/cartSlice";

const CartItem = ({ item,restaurantname }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between mb-4">
      <div>
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <h2 className="text-lg font-bold">{restaurantname}</h2>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => dispatch(decrementQuantity(item))}
          className="bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-600 transition-colors"
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => dispatch(incrementQuantity(item))}
          className="bg-green-500 text-white px-2 py-1 rounded-full hover:bg-green-600 transition-colors"
        >
          +
        </button>
        <button
          onClick={() => dispatch(removeItem(item))}
          className="bg-gray-500 text-white px-2 py-1 rounded-full hover:bg-gray-600 transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;