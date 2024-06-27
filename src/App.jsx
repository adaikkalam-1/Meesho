import React from 'react'
// import Dashboard from './Pages/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Products from './Pages/Products/Products'
import Cart from './Pages/Cart/Cart'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Products/>}/>
       <Route path="/cart" element={<Cart/>}/>
      </Routes>
      
    </div>
  )
}

export default App