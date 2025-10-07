import React, { useEffect, useState } from 'react'

export default function DigitalClock() {
  const time=new Date().toLocaleTimeString()  
  useEffect()
  // const [clock,setClock]=useState(time)
  return (
    <section className='bg-gray-800 text-gray-300 h-[100vh] grid justify-center items-center text-center'>
      <div>
        <div className='text-8xl'>{time}</div>
        <div className='text-6xl'>Sun,October 30</div>

      </div>
    </section>
  )
}
