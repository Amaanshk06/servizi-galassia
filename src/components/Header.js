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
                            <nav className="mobile-hide">
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const section = document.getElementById("products-section");
                                        if (section) {
                                            const yOffset = -100;
                                            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                            window.scrollTo({ top: y, behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    PRODUCTS
                                </a>

                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const section = document.getElementById("categories-section");
                                        if (section) {
                                            const yOffset = -100;
                                            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                            window.scrollTo({ top: y, behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    CATEGORIES
                                </a>

                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const section = document.getElementById("aboutus-section");
                                        if (section) {
                                            const yOffset = -100;
                                            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                            window.scrollTo({ top: y, behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    ABOUT US
                                </a>
                            </nav>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="txt">
                            <div className="num mobile-hide">
                                <a href="tel:+91 87 7992 3972">
                                    <span><img className="pulse-border" src="/assets/images/header-img/call-icon.webp" /></span>
                                    <span >+91 87 7992 3972</span>
                                </a>
                            </div>
                            <p className="plus-sign1 mobile-hide">+</p>
                            <a className="enquire-button mobile-hide" onClick={openPopup}>
                                <span>Enquire Now</span>
                            </a>
                            <p className="plus-sign2 mobile-hide">+</p>
                            <div className="menu">
                                <BurgerMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        </>

    );
};

export default Header;