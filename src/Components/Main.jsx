import React, { useState } from "react";
import { Link } from "react-router-dom";

import Maincategory from '../Components/Main_category'
import Discover from '../Components/Discover'
import Footer from '../Components/footer'


export default function Main() {
  const [search, setsearch] = useState("");

  return (
    <div>
      <div className="Main_page">
        <section>
          <div className="heading_main_page">
            <div class="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 style={{ color: "white", fontWeight: "700" }}>
                  React Recipies
                </h1>
                <p style={{ color: "white" }}>
                  Fast & Easy way to view and download wallpapers for free.
                </p>
              </div>

              <div className="search_main_page">
                <div class="input">
                  <input
                    type="text"
                    style={{ textAlign: "center" }}
                    class="form-control"
                    value={search}
                    onChange={(e) => setsearch(e.target.value)}
                    placeholder="Find Your Recipies..."
                  />

                  <Link
                    to={`/Home/${search}`}
                    style={{ margin: "8px auto" }}
                    class="btn btn-success"
                  >
                    Search
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="catrgories_main">
            <Maincategory />
          </div>
          <h2>Popular tags</h2>
          <div className="tags_main">
           
          <Link to={`/Home/Noodles`} style={{textDecoration:'none'}}><p>Noodles</p></Link>
             <Link to={`/Home/Cakes`} style={{textDecoration:'none'}}><p>Cakes</p></Link>
             <Link to={`/Home/icecream`} style={{textDecoration:'none'}}><p>Ice-cream</p></Link>
            <Link to={`/Home/Pasta`} style={{textDecoration:'none'}}> <p>Pasta</p></Link>
            <Link to={`/Home/Mutton`} style={{textDecoration:'none'}}> <p>Mutton</p></Link>
           <Link to={`/Home/salad`} style={{textDecoration:'none'}}>  <p>Salad</p></Link>
             <Link to={`/Home/Chicken`} style={{textDecoration:'none'}}><p>Chicken</p></Link>
           <Link to={`/Home/Biryani`} style={{textDecoration:'none'}}>  <p>Biryani</p></Link>
             <Link to={`/Home/Soup`} style={{textDecoration:'none'}}><p>Soup</p></Link>
             <Link to={`/Home/Bread`} style={{textDecoration:'none'}}><p>Bread</p></Link>
             <Link to={`/Home/Cheese`} style={{textDecoration:'none'}}><p>Cheese</p></Link>
             <Link to={`/Home/Milk`} style={{textDecoration:'none'}}><p>Milk</p></Link>
             <Link to={`/Home/cookies`} style={{textDecoration:'none'}}><p>Cookies</p></Link>
            <Link to={`/Home/Pizza`} style={{textDecoration:'none'}}> <p>Pizza</p></Link>
          </div>

<h2>Discover Random Recipies</h2>
          <div className="discover_main">
            <Discover />
          </div>

          <div className="footer_main">
          <Footer />
          </div>


        </section>
      </div>
    </div>
  );
}
