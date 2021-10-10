import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div>
      <div className="navbar_section">
        <nav class="navbar navbar-expand-lg navbar-light Navbar_bg">
          <Link class="navbar-brand" to="#">
            React Recipes
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="About" smooth={true} duration={1000}>
                About 
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="contact" smooth={true} duration={1000}>
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="search" smooth={true} duration={1000}>
                  Search
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
