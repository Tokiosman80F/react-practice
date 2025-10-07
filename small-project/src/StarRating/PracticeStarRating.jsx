import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

/*
    1.state: rating = hard stored 
    2.state: hover = tempory store
    3. handleClick = setRating(currentIndex) 
    4. handleMousehover= setHover(currentIndex)
    5. handleMouseLeave=setHover(rating)

*/ 
export default function PracticeStarRating({noOfStar=5}) {
    const [rating,setRating]=useState(0)
    const [hover,setHover]=useState(0)

    function handleClick(currentIndex){
       setRating(currentIndex)
        
    }

    function handleMouseLeave(){
       setHover(rating)
        
    }

    function handleMouseMove(currentIndex){
       setHover(currentIndex)
        
    }

  return (
    <div className='flex gap-3 items-center justify-center h-dvh'>
      {[...Array(noOfStar)].map((_,index)=>(
        index +=1,
         <FaStar className={index <= (hover|| rating) ? "text-amber-300": "text-gray-500"} onClick={()=>handleClick(index)} onMouseLeave={()=>handleMouseLeave()} onMouseMove={()=>handleMouseMove(index)} size={40}/>
      ))}
    </div>
  )
}
