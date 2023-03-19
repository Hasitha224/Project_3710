import React from 'react';
import Navbar from "./NavBar.js";
import Hero from './Hero.js';
import SignupImg from "../src/Components/i3.jpg";
import Footer from './Footer.js';
import Signupform from './Signupform';

function SignUp() {
  return (

  <div>
    <Navbar/>
    <Hero 
      cName="hero-mid"
      heroImg={SignupImg}
      title="Signup"
      text="Create a new account in few steps"
      buttonText="Tap Here"
      url="#description"
      btnClass="show"
    />
    <Signupform/>
    <Footer/>
  </div>





)
}
export default SignUp;
