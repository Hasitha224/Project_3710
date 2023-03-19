import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from './Home.js';
import AboutUs from './AboutUs.js';
import Categories from './Categories.js';
import Cart from './Cart.js'
import SignUp from './SignUp.js';
import Contact from './Contact.js';

export default function App() {
  return (
    <div className='App'>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<AboutUs/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/checkout" element={<Cart/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes> 
        

    </div>
  );
}




