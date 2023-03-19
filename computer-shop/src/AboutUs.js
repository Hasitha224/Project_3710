import Navbar from "./NavBar.js";
import Hero from './Hero.js';
import AboutImg from "../src/Components/i1.jpg";
import { Link } from 'react-router-dom';
import Footer from './Footer.js';
import "./AboutUs.css";

function AboutUs() {
  return (
  <div className="About">
      <Navbar/>
      <Hero 
      cName="hero-mid"
      heroImg= {AboutImg}
      title="This is about Us"
      text="Providing quality and reliable services to all its valued customers"
      buttonText="Explore More"
      url="#description"
      btnClass="show"
      />

      <div id="description">
        <div className="container">
          <h2>About Us</h2>
          <p>HashStore focuses on Providing Quality and reliable services to all its valued customers. We care and take pride in our stakeholders and as such we “HashStore” is pledge bound to ensure that the best services and solutions are extended to its customers offering them a rewarding experience along their way in purchasing and owning HashStore product.
          Flagged off in year 2022, HashStore has since connected technology solution providers with user with users nationwide, identifying markets and technologies that shape the IT industry. We believe that the solid relation that we have establish are at the nucleus of our capability to skillfully custom – made solutions for each of our customer’s specific needs.
          Since its inception, HashStore  remains a fully-fledged IT solution provider with a qualified and experience work force geared to handle and cater to the driver’s variety of needs conveyed by customers today.</p>
        </div>
      </div>

      <Link to="/contact">Go to Contact page</Link>

      <Footer/>
  </div>

)
}
export default AboutUs;