import React from 'react';
import Navbar from "./NavBar.js";
import Hero from './Hero.js';
import Window1 from './Window1.js';
import Footer from './Footer.js';
import CatImg from "../src/Components/i6.jpg";
import "./Categories.css";


function Categories() {
  return (

  <>
    <Navbar/>
    <Hero 
    cName="hero-mid"
    heroImg={CatImg}
    title=""
    text="We are providing you many varities of computer products"
    buttonText="Let's explore"
    url="/categories"
    btnClass="show"
    />
    <Window1/>
    <Footer/>
  </>



)
}
export default Categories;
