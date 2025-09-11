import { useState } from "react"
import MovieList from "./cine/MovieList"
import { MovieContext } from "./context"
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"

function App() {

  const [cartValue,setCartValue]=useState([])

  return (
    <>
    <MovieContext.Provider value={{cartValue,setCartValue}} >
     <Header/>
     <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar/>
        <MovieList/>
      </div>
     </main>
     <Footer/>
     </MovieContext.Provider>
      </>
    
  )
}

export default App
