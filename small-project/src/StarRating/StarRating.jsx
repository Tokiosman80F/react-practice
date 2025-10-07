import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

export default function StarRating({noOfStar=5}) {

    const [rating,setRating]=useState(0);
    const [hover,setHover]=useState(0)

    function handleClick(getCurrentIndex){
        console.log("Handle Click :",getCurrentIndex);
        setRating(getCurrentIndex)
        
    }
    function handleMouseEnter(getCurrentIndex){
        console.log("handle Mouse Enter:",getCurrentIndex);
        setHover(getCurrentIndex)
        
    }
    function handleMouseLeave(getCurrentIndex){
        console.log("handle Mourse leage:",getCurrentIndex);
        setHover(rating)
    }

    return (
    <div className='flex items-center justify-center h-dvh gap-3'>
      {
        [...Array(noOfStar)].map((_,index)=>{
            index+=1
            return <FaStar className={index <= (hover|| rating)? "text-amber-300": "text-gray-600" } key={index} onClick={()=>handleClick(index)} onMouseMove={()=>handleMouseEnter(index)} onMouseLeave={()=>handleMouseLeave(index)} size={40}/>
        })
      }
    </div>
  )
}
