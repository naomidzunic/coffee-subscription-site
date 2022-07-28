import React from "react";
import CSS from "../styles/Collection.css";
import frenchPress from "../images/mobile/image-hero-coffeepress.jpg";
import Espresso from "../images/desktop/image-gran-espresso.png";
import Piccollo from "../images/desktop/image-piccollo.png";
import Planalto from "../images/desktop/image-planalto.png";
import Danche from "../images/desktop/image-danche.png";
// import CollectionItems from './CollectionItems';

function Collection() {
  return (
    <section>
      <div className="collection-container">
        <h1>Our Collection</h1>

        <div className="collection-item-container">
          <div className="collection-content">
            <img src={Espresso} alt="" />
            <h2>Gran Espresso</h2>
            <p>
              Light and flavorful blend with cocoa and black pepper for an
              intense experience
            </p>
          </div>

          <div className="collection-content">
            <img src={Planalto} alt="" />
            <div className="collection-content-txt">
              <h2>Planalto</h2>
              <p>
                Brazilian dark roast with rich and velvety body, and hints of
                fruits and nuts
              </p>
            </div>
          </div>

          <div className="collection-content">
            <img src={Piccollo} alt="" />
            <div className="collection-content-txt">
              <h2>Piccollo</h2>
              <p>
                Mild and smooth blend featuring notes of toasted almond and
                dried cherry
              </p>
            </div>
          </div>

          <div className="collection-content">
            <img src={Danche} alt="" />
            <div className="collection-content-txt">
              <h2>Danche</h2>
              <p>
                Ethiopian hand-harvested blend densely packed with vibrant fruit
                notes
              </p>
            </div>
          </div>
          </div>
        </div>
      
    </section>
  );
}

export default Collection;
