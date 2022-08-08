import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'

//components
import HomePage from './Routes/HomePage'

const App = () => {
  return (
    <>
    <Navbar/>

     <Routes>
        <Route path='/' element={<HomePage/>} />
     </Routes>
    </>
  )
}

export default App