import React, { useEffect, useRef } from 'react';

function Products() {
    const obj1Ref = useRef(null); // for object-03
    const obj2Ref = useRef(null); // for object-04
  
    useEffect(() => {
      const obj1 = obj1Ref.current;
      const obj2 = obj2Ref.current;
      if (!obj1 || !obj2) return;
  
      let lastScrollY = window.scrollY;
      let currentY1 = 0;
      let currentY2 = 0;
      let targetY1 = 0;
      let targetY2 = 0;
      let ticking = false;
  
      const onScroll = () => {
        const scrollY = window.scrollY;
        const direction = scrollY > lastScrollY ? 'down' : 'up';
  
        if (direction === 'down') {
          targetY1 -= 1; // object-03 up
          targetY2 += 1; // object-04 down
        } else {
          targetY1 += 1;
          targetY2 -= 1;
        }
  
        // Clamp movement
        targetY1 = Math.max(-100, Math.min(100, targetY1));
        targetY2 = Math.max(-100, Math.min(100, targetY2));
  
        lastScrollY = scrollY;
        requestTick();
      };
  
      const requestTick = () => {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      };
  
      const update = () => {
        currentY1 += (targetY1 - currentY1) * 0.1;
        currentY2 += (targetY2 - currentY2) * 0.1;
  
        obj1.style.transform = `translateY(${currentY1}px)`;
        obj2.style.transform = `translateY(${currentY2}px)`;
  
        ticking = false;
      };
  
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
  
    return (
        <>
                        <div className="b-color" id='products-section'>
                <div className="bsp">
                    <p>Products</p>
                    <h2>BEST SELLING PRODUCTS</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="cards">
                                    <img src="/assets/images/Products-img/1.webp"/>
                                    <p className="pb">HP EliteBook 840 G5 i5-8th Gen</p>
                                    <p> ₹ 21200</p>
                                    <button className="b1">BUY NOW</button>
                                    <button className="b2">CHAT NOW</button>
                                </div>
                            </div>
                        </div>

                        <img ref={obj1Ref} className="product-object1" src="assets/images/usp-img/object-03.svg" />
                        <div className="col-md-4">
                            <div className="card">
                                <div className="cards">
                                    <img src="/assets/images/Products-img/2.webp" />
                                    <p className="pb">Lenovo ThinkPad T470 i5-7th Gen</p>
                                    <p> ₹ 13156</p>
                                    <button className="b1">BUY NOW</button>
                                    <button className="b2">CHAT NOW</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="cards">
                                    <img src="/assets/images/Products-img/3.webp" />
                                    <p className="pb">Dell Latitude 5420 i5-11th Gen</p>
                                    <p> ₹ 23300</p>
                                    <button className="b1">BUY NOW</button>
                                    <button className="b2">CHAT NOW</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="cards">
                                    <img src="/assets/images/Products-img/4.webp" />
                                    <p className="pb">Dell Latitude 5400 i5-8th Gen</p>
                                    <p> ₹ 17161</p>
                                    <button className="b1">BUY NOW</button>
                                    <button className="b2">CHAT NOW</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="cards">
                                    <img src="/assets/images/Products-img/5.webp" />
                                    <p className="pb">Lenovo ThinkPad T480 i5-8th Gen</p>
                                    <p> ₹ 14872</p>
                                    <button className="b1">BUY NOW</button>
                                    <button className="b2">CHAT NOW</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="cards">
                                    <img src="/assets/images/Products-img/6.webp" />
                                    <p className="pb">Apple Macbook Air M1 A2337</p>
                                    <p> ₹ 45000</p>
                                    <button className="b1">BUY NOW</button>
                                    <button className="b2">CHAT NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img ref={obj2Ref} className="product-object2" src="assets/images/products-img/object-04.svg" />
                    <div className="btn-km">
                        <a href="https://refurbished.antservices.in/?gad_source=1&gbraid=0AAAAApMjkFCNILc-OuQ-npuEuy3Sy_tDQ&gclid=CjwKCAjwn6LABhBSEiwAsNJrjoyjRYflOmioR7aliMtLsBlfRVYBpQWPXD3Y39jV-oa-aX-yJO3VfxoCxyEQAvD_BwE" target="_blank">
                            <button>KNOW MORE</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;