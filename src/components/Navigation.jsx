import { useState } from "react";
import logo from "../icons/logo.svg";
import CSS from "../styles/Navigation.css";
import hamburger from "../icons/icon-hamburger.svg";
import hamburgerClose from "../icons/icon-close.svg";
import { MobileMenu } from "../components/MobileMenu";

function navigation() {
  state = { clicked: false }

  handleClick = ( => {
    this.setState({ clicked: !this.state.clicked })
  })

  return (
    <>
      <div className="navigation">
        <img className="logo" src={logo} />

        <button className="hamburger" onClick={this.handleClick}>

          <img className={this.state.clicked ? {hamburger} : {hamburgerClose}}/>
        </button>

        <div className="navigation-menu">
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
        </div>
      </div>
    </>
  );
}

export default navigation;
