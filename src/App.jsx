import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemsPage from "./pages/ItemsPage";
import CartPage from "./pages/CartPage";
import RestaurantMenu from "./pages/RestaurantMenu";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/FoodOnline" element={<ItemsPage />} />
        <Route exact path="/FoodOnline/store/:id" element={<RestaurantMenu />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;