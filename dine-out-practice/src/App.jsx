import React, { useState } from "react";
import OrderCreatationPanel from "./components/order-creation/OrderCreatationPanel";
import OrderSummary from "./components/order-summary/OrderSummary";
import OrderReport from "./components/order-report/OrderReport";

export default function App() {
  const [orders,setOrders]=useState([ { id: 21, name: "Sumit Saha", items: 5, amount: 123123, status: "PENDING" },
  { id: 22, name: "Akash Ahmed", items: 5, amount: 123123, status: "DELIVERED" },])
  

  const handlePlaceOrder=(data)=>{
    console.log("set order from app:",data);
    setOrders([data,...orders])
    
}


  return (
    <div className="text-white bg-background">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
        <OrderCreatationPanel setOrder={handlePlaceOrder} />

        <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
          <OrderSummary />

          <OrderReport orders={orders} />
        </div>
      </div>
    </div>
  );
}
