import React, { useState } from 'react';
import Chatbot from './Chatbot';

function Banner() {
      const [showChat, setShowChat] = useState(false)
     const handleScrollToProducts = (e) => {
        e.preventDefault();
        const section = document.getElementById("products-section");
        section?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <>
            <div className="banner">
                <picture>
                    {/* Mobile Banner */}
                    <source 
                        media="(max-width: 768px)" 
                        srcSet="/assets/images/banner-img/banner-mobile.webp"
                    />
                    {/* Default Banner (Desktop) */}
                    <img
                        className="banner-img"
                        src="/assets/images/banner-img/banner-img.webp"
                        alt="Banner"
                    />
                </picture>
                <div className="banner-content">
                    <div className="bounce">
                        <img className="laptop-image" src="assets/images/banner-img/laptop.webp" />
                    </div>
                    <h1 className="heading-02">Affordable & Trusted <br />  That's SG! </h1>
                    <p className="p1">Your Partner in Quality Without Compromise!</p>
                    <p className="p2">Hassle-Free 1-Year Warranty <br />  Affordable Prices, No Hidden Costs <br />  Quick Support, Always Ready</p>
                </div>
                <div className="banner-button">
                    <a className="shop-btn" href="products-section" onClick={handleScrollToProducts}>SHOP NOW</a>
                    <a className="chat-btn" href="#" onClick={(e) => { e.preventDefault(); setShowChat(true); }}>CHAT NOW</a>
                </div>
                {showChat && <Chatbot onClose={() => setShowChat(false)} />}
            </div>
        </>
    );
}
export default Banner