function Banner() {
    return (
        <>
           <div className="banner">
           <img className="banner-img" src="assets/images/banner-img/banner-img.webp" />
            <div className="banner-content">
                <div className="bounce">
                    <img className="laptop-image" src="assets/images/banner-img/laptop.webp" />
                </div>
                <h1 className="heading-02">Affordable & Trusted <br />  That's SG! </h1>
                <p className="p1">Your Partner in Quality Without Compromise!</p>
                <p className="p2">Hassle-Free 1-Year Warranty <br />  Affordable Prices, No Hidden Costs <br />  Quick Support, Always Ready</p>
            </div>
            <div className="btn">
                <a className="a1" href="">SHOP NOW</a>
                <a className="a2" href="">CHAT NOW</a>
            </div>
           </div>
        </>
    );
}
export default Banner