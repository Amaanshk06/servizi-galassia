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
                    <a href="#">USP </a>
                    <a href="#">Products</a>
                    <a href="#">Video</a>
                    <a href="#">Categories</a>
                    <a href="#">About Us</a>
                    <a href="#">Shop By</a>
                    <a href="#">Testimonials</a>
                    <a href="#">Contact Us</a>
                    <a href="#">FAQ's</a>
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