// import React, { useRef } from 'react';
import React, { useEffect, useRef } from "react";
import BurgerMenu from "./BurgerMenu";
import { effectTarget } from "swiper/effect-utils";
import { usePopup } from './PopupContext';



function Header() {
  const { openPopup } = usePopup();

  const headerRef = useRef(null); // Using useRef to reference the header

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        headerRef.current.classList.add("scrolled");
      } else {
        headerRef.current.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    return (
        <>
            <header id="header" ref={headerRef}> 
                <div className="row">
                    <div className="col-md-6">
                        <div className="head">
                            <img className="logo" src="/assets/images/header-img/logo 512.png" />
                            <nav>
                                <a href="">PRODUCTS</a>
                                <a href="">CATEGORIES</a>
                                <a href="">ABOUT US</a>
                            </nav>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="txt">
                            <div className="num">
                                <a href="tel:+91 87 7992 3972">
                                    <span><img className="pulse-border" src="/assets/images/header-img/call-icon.webp" /></span>
                                    <span >+91 87 7992 3972</span>
                                </a>
                            </div>
                            <p className="plus-sign">+</p>
                            <a className="enquire-button"  onClick={openPopup}>
                                <span>Enquire Now</span>
                            </a>
                            <p className="plus-sign">+</p>
                            <div className="menu">
                               <BurgerMenu/>
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        </>

    );
};

export default Header;