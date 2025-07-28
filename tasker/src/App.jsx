import React from 'react'
import Header from './Header'
import Footer from './Footer'
import TaskBoard from './TaskBoard'


export default function App() {
  return (
    <div className='bg-gray-900 '>
     <div > 
      <Header/>
      <TaskBoard/>
      </div>
      <Footer/>
    </div>
  )
}
