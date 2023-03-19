import React from "react";
import SearchIcon from "../src/Components/buscar.png";
import cartIcon from "../src/Components/carrito-de-compras.png";
import categoriesIcon from "../src/Components/menu.png";
import logo from "../src/Components/1.png";
import "./Header.css"
import { Link } from 'react-router-dom';


function Header(){
    return(
        <nav className = "header">
            <img src={logo} className="header__logo" alt="logo" />
            <h1 className="header__name"> HashStore</h1>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <img src={SearchIcon} className="header__searchIcon" alt="SearchIcon"/>
            </div>
            
            <div className="header__nav">
            <Link to ="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionline1"> Home </span>
                </div> 
            </Link>

            <Link to ="/" className="header__link"> 
                <div className="header__option">       
                    <span className="header__optionline2"> About Us </span>
                </div> 
            </Link>    
            
            <Link to ="/" className="header__link"> 
                <div className="header__option">           
                    <span className="header__optionline3"> SignUp </span>
                </div> 
            </Link>     
                    
            <Link to ="/Cart" className="header__link"> 
                <div className="header__option">        
                    <span className="header__optionline4">
                        <img src={cartIcon} alt="Cart Icon" className="header__optionIcon1" />
                    </span>    
                </div> 
            </Link>         
                        
            <Link to ="/Categories" className="header__link"> 
                <div className="header__option">        
                    <span className="header__optionline4">            
                        <img src={categoriesIcon} alt="Categories Icon" className="header__optionIcon2" />
                    </span>
                </div>
            </Link>
            </div>
        </nav>

    )
}
export default Header;