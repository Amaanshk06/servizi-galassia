function Brand(){
    return(
        <>
        <div className="brand">
        <h6>SHOP BY</h6>
        <h2>BRANDS</h2>
        </div>
        <div className="container2">
            <div className="row">
                <div className="col-md-4">
                    <div className="shop-card-brands">
                        <img src="/assets/images/Brand-img/dell.webp" />
                        <p>Dell Refurbished Laptops</p>
                        <a className="b1" href="">SHOP NOW</a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="shop-card-brands">
                        <img src="/assets/images/Brand-img/hp.webp"/>
                        <p>HP Refurbished Laptops</p>
                        <a className="b1" href="">SHOP NOW</a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="shop-card-brands">
                        <img src="/assets/images/Brand-img/lenovo.webp"/>
                        <p>Lenovo Refurbished Laptops</p>
                        <a className="b1" href="">SHOP NOW</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Brand;