import React from 'react'
// import Dashboard from './Pages/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Products from './Pages/Products/Products'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Products/>}/>
      </Routes>
      
    </div>
  )
}

export default App