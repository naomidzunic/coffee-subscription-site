import { useState } from "react";
import logo from "../icons/logo.svg";
import CSS from "../styles/Navigation.css";
import hamburger from "../icons/icon-hamburger.svg";
import hamburgerClose from "../icons/icon-close.svg";
// import { MobileMenu } from "../components/MobileMenu";


export function navigation () {

  return (
    <>
      <div className="navigation">
        <img className="logo" src={logo} />

        <img className="hamburger-open" src={hamburger} />
        

        <div className="navigation-menu">
          <ul>
            <li><a href="#"></a>About</li>
            <li><a href="#"></a>Contact</li>
            <li><a href="#"></a>Create Your Plan</li>
          </ul>
        </div>
      </div>
    </>
  )
}


export default navigation;


{/* <div className="navigation-menu">
<ul>
  {MobileMenu.map((item, index) => {
    return (
      <li key={index}>
        <a className={item.className} href={item.url}>
          {item.title}
        </a>
      </li>
    );
  })}
</ul>
</div> */}
