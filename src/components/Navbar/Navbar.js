import React from 'react';
import { Link } from "react-router-dom";
import logoImage from "../media/SuvidhaLogo.png";

export default function Navbar() {
  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/"><img src={logoImage} alt="logoImage" className="logoImage"/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className= " offcanvas offcanvas-end text-bg-dark" 
     
      tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header justify-content-end">
        
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
    </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" >
          <li class="nav-item">
            <div className="link-cover">
              <Link className="active nav-link" aria-current="page" to="/home">Home</Link>
            </div>
          
          </li>
          <li class="nav-item">
            <div className="link-cover">
              <Link className="active nav-link" aria-current="page" to="/events">Events</Link>
            </div>
          
          </li>
          <li class="nav-item">
            <div className="link-cover">
              <Link className="active nav-link" aria-current="page" to="/gallery">Gallery</Link>
            </div>
          
          </li>
           
          <li class="nav-item">
            <div className="link-cover">
              <Link className="active nav-link " aria-current="page" to="/contact">Contact</Link>
            </div>
          </li>
          <div className='nav-button'>
          <a className='btn btn-primary' href='https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform' target={"_blank"}  rel="noreferrer">Apply For Intership</a>
          <a className='btn btn-primary' href="/donate">Your Contribution</a>
          </div>
      </ul>
      
    </div>
  </div>
</div>
</nav>
  )
}


