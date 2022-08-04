import React from 'react'
import CSS from '../styles/Header.css'
import frenchPress from '../images/mobile/image-hero-coffeepress.jpg';



function Header() {
  return (
    <div>
      <div className="header-container">
        <div className="header-content">
          <div className="header-txt">
          <h1>HELLO. Great coffee made simple.</h1>
          <p>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <button>Create your plan</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header

