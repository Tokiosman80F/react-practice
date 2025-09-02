import React, { useState } from 'react'

export default function CounterApp() {
  
    const [count,setCount]=useState(0)

    const handlePlus=()=>{
        setCount(count+1)
    }
    const handleMinus=()=>{
        if(count===0){
            alert('Cannt go below 0')
            return
        }
        setCount(count-1)
    }
    const handleReset=()=>{
        setCount(0)
    }
    

    const btnClass='bg-gray-700 text-white px-4 py-1 text-2xl border rounded-xl'
    return (
    <div className='bg-gray-100 w-full h-[100vh] flex flex-col items-center justify-center gap-20' >
      <h1 className='text-5xl font-light '>Counter App</h1>
      <div className='text-6xl'>{count}</div>
      <div>
        <button onClick={handlePlus} className={btnClass} >Increase +</button>    
        <button onClick={handleMinus} className={btnClass} >Decrease -</button>    
        <button onClick={handleReset} className={btnClass} >Reset ♻️ </button>     
      </div>
    </div>
  )
}
