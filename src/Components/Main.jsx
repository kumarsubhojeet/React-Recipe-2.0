import React from "react";
import Navbar from "../Components/Navbar";

import Crousal from "../Components/Crousal";
import undraw_breakfast_psiw from '../Svg/undraw_breakfast_psiw.svg'
import {Link} from 'react-router-dom'
import Contact from '../Components/COntact'
import Footer from '../Components/footer'
import { BackTop } from "antd";


export default function Main() {

  const style = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 50,
    backgroundColor: "#8d0801",
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
  };

  return (
    <div className="Main">
      <div className="main">
        <div className="header_top">
          <Navbar />
          <p
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "22px",
            }}
          >
            <i class="fas fa-utensils"></i> Search Your Favorite Recipies{" "}
            <i class="fas fa-utensils"></i>{" "}
          </p>
        </div>
      </div>

      <div className="body-section">
     <Crousal />

     <h2 style={{textAlign: 'center' , fontWeight: '600'}}>About Us</h2>

     <div className="about" id='About'>
         
         <div className="img-about">
             <img src={undraw_breakfast_psiw} className="about-img" alt="Error" />
         </div>
         <div className="para-about">
             <h5>
                 Welcome to Best Recipe website, Here you will find your favorite recipes with its ingredients and proper quantity to use.
                 This website is completely build on React and latest stack of technologies.
             </h5>
         </div>
     </div>

     <div className="Search-btn" id='search'>
     <Link to="/Home" className="search">Click to Search</Link>
     </div>

     <div className="contact_main" id="contact">
     <h2 style={{textAlign: 'center' , fontWeight:'600'}}>Contact Us</h2>
     <Contact />
     </div>

     <div className="footer">
       <Footer />
     </div>
     <BackTop>
          <div style={style}>
            <i class="fas fa-angle-up"></i>
          </div>
        </BackTop>
      </div>
    </div>
  );
}
