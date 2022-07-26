import React from 'react'
import logo from '../icons/logo.svg';
import CSS from './Navigation.css';
import hamburger from '../icons/icon-hamburger.svg';



function navigation() {
  return (
    <nav>
      <div className='container'>
      <img className='logo' src={logo} alt="logo" />
      <img className='hamburger' src={hamburger} alt="hamburger-icon" />
      <div className='nav-container'>
        <div className="nav-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Create Your Plan</a></li>
          </ul>
        </div>
      </div>
      </div>


    </nav>
  )
}

export default navigation


// MISSING: JAVASCRIPT NAVIGATION FOR MOBILE

