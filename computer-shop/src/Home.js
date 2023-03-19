import React from 'react';
import Navbar from "./NavBar.js";
import Hero from './Hero.js';
import HomeImg from "../src/Components/i8.jpg";
import Window from './Window.js';
import Window1 from './Window1.js';
import News from './News.js';
import Footer from './Footer.js';
import "./Home.css";


function Home() {
  return (
  <div className="Home">
      <Navbar/>
      <Hero 
      cName="hero-mid"
      heroImg={HomeImg}
      title="Welcome to Our Computer Shop"
      text="We are providing you the best products for competitive prices"
      buttonText="Let's build your own PC with Us"
      url="#description"
      btnClass="show"
      />
      <Window/>
      <Window1/>
      <News/>
      <Footer/>
  </div>
  

)
}
export default Home;
