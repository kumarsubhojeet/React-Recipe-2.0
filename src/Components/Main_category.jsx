import React from 'react'

import indian_food from '../Country-img/india.webp'
import china_food from '../Country-img/chinese-food-dumplings.jpg'
import burger from '../Country-img/usa.jpg'
import Pizza from '../Country-img/pizza.gif'
import fish from "../Country-img/fish.jpg"
import south from '../Country-img/south.jpg'
import mocktail from '../Country-img/mocktail.jpg'
import dessert from '../Country-img/dessert.jpg'
import Dosa from '../Country-img/dosa.jpg'
import PanCakes from '../Country-img/pancakes.jpg'
import Carousel from "react-elastic-carousel";
import paratha from '../Country-img/paratha.jpg'
import kabab from '../Country-img/kabab.jpg'
import sandwich from '../Country-img/sandwich.jpg'
import eggs from '../Country-img/eggs.jpg'
import { Link } from "react-router-dom";


export default function Main_category() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 4 },
  ];
  
    return (

        <div >

            <h2>Popular Category</h2>

        <div className="cat_main">
            <Carousel breakPoints={breakPoints} enableAutoPlay={true}  easing="cubic-bezier(1,.15,.55,1.54)"
  tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
  transitionMs={800} infinite={true}>


           
            <div class="card-cat" style={{ borderRadius:'11px' }}>
            <Link to={`/Home/indian`}>
             <img
               class="card-img-top-cat"
               src={indian_food}
               alt=""
             />
             
               </Link>
               <div class="">
               <p className="">Indian Food</p>
               </div>
               
           </div>
          
           

      
         <div class="card-cat" style={{ borderRadius:'11px' }}>
         <Link to={`/Home/chinese`}>
             <img
               class="card-img-top-cat"
               src={china_food}
               alt=""
             />
             
              </Link>
              <div class="">
               <p className="">Chinese</p>
               </div>
           </div>
        

     
        <div class="card-cat" style={{ borderRadius:'11px' }}>
        <Link to={`/Home/burger`}>
             <img
               class="card-img-top-cat"
               src={burger}
               alt=""
             />
           
             </Link>
             <div class="">
               <p className="">Burgers</p>
               </div>
           </div>
        

     
        <div class="card-cat" style={{ borderRadius:'11px' }}>
        <Link to={`/Home/pizza`}>
             <img
               class="card-img-top-cat"
               src={Pizza}
               alt=""
             />
            
             </Link>
             <div class="">
               <p className="">Pizza</p>
               </div>
           </div>
        

       
          <div class="card-cat" style={{ borderRadius:'11px' }}>
                 <Link to={`/Home/fish`}>
             <img
               class="card-img-top-cat"
               src={fish}
               alt=""
             />
            
                </Link>
                <div class="">
               <p className="">Fish</p>
               </div>
           </div>
       

         <div class="card-cat" style={{ borderRadius:'11px' }}>

        <Link to={`/Home/southindian`}>
             <img
               class="card-img-top-cat"
               src={south}
               alt=""
               />
              
            </Link>
            <div class="">
               <p className="">South-Inidan</p>
               </div>
           </div>
        

          <div class="card-cat" style={{ borderRadius:'11px' }}>

           <Link to={`/Home/mocktail`}>
             <img
               class="card-img-top-cat"
               src={mocktail}
               alt=""
             />
         
             </Link>
             <div class="">
               <p className="">Mocktail</p>
               </div>
           </div>
           


             <div class="card-cat" style={{ borderRadius:'11px' }}>
           <Link to={`/Home/dessert`}>
               
             <img
               class="card-img-top-cat"
               src={dessert}
               alt=""
             />
             
             </Link>
             <div class="">
               <p className="">Dessert</p>
               </div>
           </div>

           
           <div class="card-cat" style={{ borderRadius:'11px' }}>
           <Link to={`/Home/PanCakes`}>
               
             <img
               class="card-img-top-cat"
               src={PanCakes}
               alt=""
             />
             
             </Link>
             <div class="">
               <p className="">PanCakes</p>
               </div>
           </div>

           
           <div class="card-cat" style={{ borderRadius:'11px' }}>
           <Link to={`/Home/Dosa`}>
               
             <img
               class="card-img-top-cat"
               src={Dosa}
               alt=""
             />
             
             </Link>
             <div class="">
               <p className="">Dosa</p>
               </div>
           </div>

           <div class="card-cat" style={{ borderRadius:'11px' }}>
           <Link to={`/Home/paratha`}>
               
             <img
               class="card-img-top-cat"
               src={paratha}
               alt=""
             />
             
             </Link>
             <div class="">
               <p className="">Indian-Paratha</p>
               </div>
           </div>

           <div class="card-cat" style={{ borderRadius:'11px' }}>
           <Link to={`/Home/kabab`}>
               
             <img
               class="card-img-top-cat"
               src={kabab}
               alt=""
             />
             
             </Link>
             <div class="">
               <p className="">kababs</p>
               </div>
           </div>

           <div class="card-cat" style={{ borderRadius:'11px' }}>
           <Link to={`/Home/sandwich`}>
               
             <img
               class="card-img-top-cat"
               src={sandwich}
               alt=""
             />
             
             </Link>
             <div class="">
               <p className="">sandwichs</p>
               </div>
           </div>

           <div class="card-cat" style={{ borderRadius:'11px' }}>
           <Link to={`/Home/Eggs`}>
               
             <img
               class="card-img-top-cat"
               src={eggs}
               alt=""
             />
             
             </Link>
             <div class="">
               <p className="">Eggs</p>
               </div>
           </div>


           
           </Carousel>
           </div>

           
     
        </div>
    )
}
