import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";
import CartItem from "../components/CartItem";
import NavbarLink from "../components/NavbarLink";
import { restaurants} from "../data";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      
      <div className="p-4">
        <div className="flex w-full justify-between">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        <div>
              <NavbarLink />
        </div>
        </div>
        
        <div className="space-y-4">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} restaurantname={restaurants[item.restaurantId].name} />
          ))}
        </div>
        <div className="mt-4">
          <p className="text-lg font-bold">Total: ${totalPrice.toFixed(2)}</p>
          <button
            onClick={() => dispatch(clearCart())}
            className="bg-red-500 text-white px-4 py-2 rounded-full w-full hover:bg-red-600 transition-colors"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;