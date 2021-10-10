import React from "react";
import Contact_img from '../Svg/undraw_contact_us_15o2.svg'

export default function COntact() {
  return (
    <div className="contact_page_main">

        <div className="contact_img">
            <img src={Contact_img} className="img_contact" alt="Error" />
        </div>
      
        <form className='contact_form'>
          <div class="form-group">
           
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            
          </div>

          <div class="form-group">
           
           <input
             type="text"
             class="form-control"
             id="exampleInputEmail1"
             aria-describedby="emailHelp"
             placeholder="Enter Phone"
           />
           
         </div>

          <div class="form-group">
           
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <div className="btn_contact">
              <h5>Submit</h5>
          </div>
         
        </form>
        
    </div>
    
  );
}
