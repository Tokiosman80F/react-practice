import React, { useState } from "react";

import hamburgerICon from "../../assets/hamburger.svg";
import chickenIcon from "../../assets/chicken.svg";
import submarinIcon from "../../assets/submarine.svg";
import { FaMinus, FaPlus } from "react-icons/fa";


const initialItems = [
  {id:1,  title: "Hamburger", price: "300", icon: hamburgerICon,quantity:0 },
  {id:2, title: "Chicken Nuggets", price: "200", icon: chickenIcon,quantity:0 },
  {id:3, title: "Sandwich", price: "100", icon: submarinIcon,quantity:0 },
  {id:4, title: "Chicken", price: "50", icon: chickenIcon,quantity:0 },
];

function FoodItemCard({item,onChange}) {
  
  const handleIncrease=()=>{
    onChange(item.id,item.quantity+1)
  }

  const handleDecrease=()=>{
    if(item.quantity>0){
      onChange(item.id,item.quantity-1)
    }
  }

  return (
    <div className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
      <div className="flex items-center">
        <div className="w-12 h-12   flex items-center justify-center mr-3">
          <img src={item.icon} alt="Hamburger" className="w-10 h-10" />
        </div>
        <div>
          <h3 className="font-medium">{item.title}</h3>
          <p className="text-xs text-gray-400">BDT {item.price}</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <button onClick={handleIncrease}
         className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300 ">
        <FaPlus color="lightGreen" />
      </button>
      <span>{item.quantity}</span>
      <button onClick={handleDecrease} className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
        <FaMinus color="red"/>
      </button>
      </div>
    </div>
  );
}

export default function OrderCreatationPanel({setOrder}) {

 const [customerName,setCustomerName]=useState("")
 const [foodState,setFoodState]=useState(initialItems)

const handleQuantityChange=(id,newQty)=>{
  setFoodState((prev)=> prev.map((item)=>item.id===id?{...item,quantity:newQty}:item))
}

const calculateTotal=()=>{
  return foodState.reduce(
    (total,item)=>total+item.quantity*item.price,0)
}

const handlePlaceOrder=()=>{
  const selectedItems=foodState.filter((item)=>item.quantity>0)
  const order={
    id:Date.now(),
    name:customerName,
    items:selectedItems.length,
    amount:calculateTotal(),
    status:"pending",
  }

  setOrder(order)
  
  // reset 
  setCustomerName("")
  setFoodState(initialItems)
  
}

  return (
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>

         <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Customer Name</label>
                    <input type="text"
                      value={customerName}
                      onChange={(e)=>setCustomerName(e.target.value)}
                        className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"/>
                </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        <div className="items-container">
          {foodState.map((item) => (
            <FoodItemCard
              key={item.id}
              item={item}
              onChange={handleQuantityChange}
            />
          ))}
        </div>
      </div>

      <button 
      onClick={handlePlaceOrder} 
      disabled={!customerName|| calculateTotal()===0} 
      className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
        Place Order BDT {calculateTotal()}
      </button>
    </div>
  );
}
