import React from 'react'
import './App.css'
import Footer1 from './components/Footer1'
import Home1 from './components/Home1'
import Navbar1 from './components/Navbar1'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About1 from './components/About1'
import Service from './components/Service'
import Contact from './components/Contact'
import Moremenu from './components/Moremenu'
import Order from './components/Order'



function App() {
  

  return (
    
    <BrowserRouter>
   <Navbar1/>
    
      <Routes>
       
       
        <Route path="/" element={<Home1/>} />
        <Route path="about" element= {<About1/>} />
         <Route path='service' element={<Service/>}/>
         <Route path='contact' element={<Contact/>}/>
          <Route path='explore' element={<Moremenu/>}/>
         <Route path='order' element={<Order/>}/>
        
       
      </Routes>
      <Footer1/>
    </BrowserRouter>
    
  )
}

export default App
