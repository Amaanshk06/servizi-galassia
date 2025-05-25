import React, { useState } from 'react';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => {
        setIsOpen(true);
    };

    const closeNav = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div id="myNav" className={`overlayM ${isOpen ? 'open' : ''}`}>
                <a className="closebtn" onClick={closeNav}>
                    CLOSE
                </a>
                <div className="overlay-content">
                    <a href="#usp" onClick={closeNav}>USP </a>
                    <a href="#products-section" onClick={closeNav}>Products</a>
                    <a href="#video" onClick={closeNav}>Video</a>
                    <a href="#categories-section" onClick={closeNav}>Categories</a>
                    <a href="#aboutus-section" onClick={closeNav}>About Us</a>
                    <a href="#shopby" onClick={closeNav}>Shop By</a>
                    <a href="#testimonials" onClick={closeNav}>Testimonials</a>
                    <a href="#contactus" onClick={closeNav}>Contact Us</a>
                    <a href="#faq" onClick={closeNav}>FAQ's</a>
                </div>
            </div>
            <span
                className="open-button"
                style={{ fontSize: '14px', fontWeight: 'bold', cursor: 'pointer',marginTop:'3px' }}
                onClick={openNav}>MENU
            </span>
        </div>
    );
};

export default BurgerMenu;