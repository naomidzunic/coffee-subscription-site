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
      </div>


    </nav>
  )
}

export default navigation


// Logo can be found in coffee starter stuff > assets > shared > desktop


