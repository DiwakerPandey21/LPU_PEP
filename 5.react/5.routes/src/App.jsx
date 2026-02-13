import React from 'react'
import {Routes, Route, Link}from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/product">Product</Link>
      </nav>

      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product' element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App