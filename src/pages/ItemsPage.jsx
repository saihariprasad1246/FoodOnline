import React, { useState } from "react";
import Header from "../components/Header";
import FoodCard from "../components/FoodCard";
import CardScroller from "../components/CardScroller";
import ExploreDivider from "../components/ExplorerDivider"
import { restaurants} from "../data";



const ItemsPage = () => {
 return (
    <div>
      <Header />

<div>
  <ExploreDivider />
</div>


    


      <CardScroller />
      
      
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Popular Items</h2>
        <div className="grid grid-cols-1 gap-4">
          {restaurants.map((food) => (

            <FoodCard name={food.name} items={food.items} id={food.id}/>
          ))}
        </div>
      </div>
    </div>

       
       
  );
};

export default ItemsPage;