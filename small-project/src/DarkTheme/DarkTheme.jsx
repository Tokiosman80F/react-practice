import React, { useState } from 'react'

export default function DarkTheme() {
  const [isToogle,setIsToggle]=useState(false);

    return (
    <div className={isToogle? 'dark' : ""}>
        <button onClick={()=>setIsToggle(!isToogle)} className='border bg-gray-400' >Toogle btn</button>
      <h1 className='text-4xl bg-primary dark:bg-primary-dark dark:text-white' >Hello World</h1>
    </div>
  )
}
