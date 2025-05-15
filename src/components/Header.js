// import React, { useRef } from 'react';
import React, { useEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";
import { effectTarget } from "swiper/effect-utils";

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 10);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <header className={scrolled ? "scrolled" : ""}> 
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
                            <a className="enquire-button" href="">
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