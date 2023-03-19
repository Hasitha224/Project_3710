import React from 'react';
import Navbar from "./NavBar.js";
import Hero from './Hero.js';
import ContactImg from "../src/Components/i5.jpg";
import Footer from './Footer.js';


function Contact() {
  return (
  <>
      <Navbar/>
      <Hero 
      cName="hero"
      heroImg= {ContactImg}
      title="Contact Details"
      text={<div>
        HashStore (Pvt) Ltd<br />
        No.313, 1st Floor, Unity Plaza,<br />
        Colombo 04,<br />
        Sri Lanka.<br />
        Email : info@hashstore.lk<br />
        Whatsapp : 077 1234567<br />
        Facebook : www.facebook.com / hashstore<br />
        Working Hours : Mon – Sat : 09:30AM – 07:00PM
      </div>}
      
      />
      <Footer/>
  </>

)
}
export default Contact;