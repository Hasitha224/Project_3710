import React from 'react';
import Navbar from "./NavBar.js";
import Hero from './Hero.js';
import CartImg from "../src/Components/c10.jpg";
import Footer from './Footer.js';
import "./Cart.css";

function Cart() {
  return (

  <>
    <Navbar/>
    <Hero 
      cName="hero-mid"
      heroImg= {CartImg}
      title="This is about Us"
      text="Providing quality and reliable services to all its valued customers"
      buttonText="Explore More"
      url="#description"
      btnClass="show"
    />
    <Footer/>
    
  </>



)
}
export default Cart;
