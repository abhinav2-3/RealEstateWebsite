import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import "./Header.css";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyle = (menuOpened) => {
    if (document.documentElement.clientWidth <= 768) {
      return { right: !menuOpened && "-100%" };
    }
  };

  return (
    <section classname="h_wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyle(menuOpened)}>
            <a href="#Residencies">Residencies</a>
            <a href="#Values">Our Value</a>
            <a href="#Contact">Contact Us</a>
            <a href="#GetStarted">Get Started</a>
            <button className="button">
              <a href="mailto:abhinavmaurya476@gmail.com">Contact</a>
            </button>
          </div>
          <div
            className="menuicon"
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={30} />
          </div>
        </OutsideClickHandler>
      </div>
    </section>
  );
};

export default Header;
