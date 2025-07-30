import React from "react";
import Search from "./Search";
import hamburgerICon from "../../assets/hamburger.svg";
import chickenIcon from "../../assets/chicken.svg";
import submarinIcon from "../../assets/submarine.svg";
import { FaMinus, FaPlus } from "react-icons/fa";

const foodItems = [
  { title: "Hamburger", price: "300", icon: hamburgerICon },
  { title: "Chicken Nuggets", price: "200", icon: chickenIcon },
  { title: "Sandwich", price: "100", icon: submarinIcon },
  { title: "Chicken", price: "50", icon: chickenIcon },
];

function FoodItemCard({ title, price, icon }) {
  return (
    <div className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
      <div className="flex items-center">
        <div className="w-12 h-12   flex items-center justify-center mr-3">
          <img src={icon} alt="Hamburger" className="w-10 h-10" />
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-xs text-gray-400">BDT {price}</p>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300 ">
        <FaPlus color="lightGreen" />
      </button>
      <button className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
        <FaMinus color="red"/>
      </button>
      </div>
    </div>
  );
}

export default function OrderCreatationPanel() {
  return (
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>

      <Search />

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        <div className="items-container">
          {foodItems.map((item) => (
            <FoodItemCard
              key={item.title}
              title={item.title}
              price={item.price}
              icon={item.icon}
            />
          ))}
        </div>
      </div>

      <button className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
        Place Order (BDT 100)
      </button>
    </div>
  );
}
