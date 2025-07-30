import React from 'react'
import OrderCreatationPanel from './components/order-creation/OrderCreatationPanel'
import OrderSummary from './components/order-summary/OrderSummary'
import OrderReport from './components/order-report/OrderReport'


export default function App() {
  return (
    <div className='text-white bg-background'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
            
        <OrderCreatationPanel/>

            
            <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
                
              <OrderSummary/>

                
               <OrderReport/>
            </div>
        </div>
        </div>
  )
}
