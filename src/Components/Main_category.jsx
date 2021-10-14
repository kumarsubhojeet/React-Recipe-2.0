import React from 'react'

import indian_food from '../Country-img/india.webp'
import china_food from '../Country-img/chinese-food-dumplings.jpg'
import burger from '../Country-img/usa.jpg'
import Pizza from '../Country-img/pizza.gif'
import fish from "../Country-img/fish.jpg"
import south from '../Country-img/south.jpg'
import mocktail from '../Country-img/mocktail.jpg'
import dessert from '../Country-img/dessert.jpg'

import { Link } from "react-router-dom";


export default function Main_category() {
    return (
        <div >

            <h2>Popular Category</h2>
            <div className="row" >
             

           
            <div class="card" style={{ width: "18rem" , borderRadius:'11px' }}>
            <Link to={`/Home/indian`}>
             <img
               class="card-img-top"
               src={indian_food}
               alt=""
             />
             
               </Link>
               <div class="">
               <p className="card_main_para">Indian Food</p>
               </div>
               
           </div>
          
           

      
         <div class="card" style={{ width: "18rem" , borderRadius:'11px' }}>
         <Link to={`/Home/chinese`}>
             <img
               class="card-img-top"
               src={china_food}
               alt=""
             />
             
              </Link>
              <div class="">
               <p className="card_main_para">Chinese</p>
               </div>
           </div>
        

     
        <div class="card" style={{ width: "18rem" , borderRadius:'11px' }}>
        <Link to={`/Home/burger`}>
             <img
               class="card-img-top"
               src={burger}
               alt=""
             />
           
             </Link>
             <div class="">
               <p className="card_main_para">Burgers</p>
               </div>
           </div>
        

     
        <div class="card" style={{ width: "18rem" , borderRadius:'11px' }}>
        <Link to={`/Home/pizza`}>
             <img
               class="card-img-top"
               src={Pizza}
               alt=""
             />
            
             </Link>
             <div class="">
               <p className="card_main_para">Pizza</p>
               </div>
           </div>
        

       
          <div class="card" style={{ width: "18rem" , borderRadius:'11px' }}>
                 <Link to={`/Home/fish`}>
             <img
               class="card-img-top"
               src={fish}
               alt=""
             />
            
                </Link>
                <div class="">
               <p className="card_main_para">Fish</p>
               </div>
           </div>
       

         <div class="card" style={{ width: "18rem" , borderRadius:'11px' }}>

        <Link to={`/Home/southindian`}>
             <img
               class="card-img-top"
               src={south}
               alt=""
               />
              
            </Link>
            <div class="">
               <p className="card_main_para">South-Inidan</p>
               </div>
           </div>
        

          <div class="card" style={{ width: "18rem" , borderRadius:'11px' }}>

           <Link to={`/Home/mocktail`}>
             <img
               class="card-img-top"
               src={mocktail}
               alt=""
             />
         
             </Link>
             <div class="">
               <p className="card_main_para">Mocktail</p>
               </div>
           </div>
           


             <div class="card" style={{ width: "18rem" }}>
           <Link to={`/Home/dessert`}>
               
             <img
               class="card-img-top"
               src={dessert}
               alt=""
             />
             
             </Link>
             <div class="">
               <p className="card_main_para">Dessert</p>
               </div>
           </div>
           

             
            </div>
        </div>
    )
}
