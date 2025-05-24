import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Categories = () => {
  const swiperRef = useRef(null); // To control Swiper programmatically

  // Automatically slide every 3 seconds
  // useEffect(() => {
  //     const interval = setInterval(() => {
  //         if (swiperRef.current) {
  //             swiperRef.current.swiper.slideNext();
  //         }
  //     }, 2000); // Changed to 3000 milliseconds (3 seconds)

  //     // Clean up the interval on component unmount
  //     return () => clearInterval(interval);
  // }, []);

  return (
    <section className="trending" id="categories-section">
      <h3>CATEGORIES</h3>
      <h2 className="heading">TRENDING CATEGORIES</h2>
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        // grabCursor={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="categories-swiper"
        pagination={{
          clickable: true,
          el: '.custom-pagination2',
          renderBullet: (index, className) => {
            if (index < 8) {
              return `<span class="${className}"></span>`;
            }
            return "";
          }
        }}
        // 🔘 Enable bullets
        modules={[Pagination, Autoplay]} // 🧩 Register the Pagination module
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >

        {/* Card 1 */}
        <SwiperSlide>
          <div className="card1"
            onMouseEnter={() => {
              const swiper = swiperRef.current?.swiper;
              if (swiper && swiper.autoplay && typeof swiper.autoplay.stop === 'function') {
                swiper.autoplay.stop();
              }
            }}
            onMouseLeave={() => {
              const swiper = swiperRef.current?.swiper;
              if (swiper && swiper.autoplay && typeof swiper.autoplay.start === 'function') {
                swiper.autoplay.start();
              }
            }}

          >
            <div className="image">
              <div className="card-content">
                <div className="text">
                  <h3>Laptop/Refurbished Laptop</h3>
                  <button >Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Card 2 */}
        <SwiperSlide>
          <div className="card2"
            onMouseEnter={() => {
              const swiper = swiperRef.current?.swiper;
              if (swiper && swiper.autoplay && typeof swiper.autoplay.stop === 'function') {
                swiper.autoplay.stop();
              }
            }}
            onMouseLeave={() => {
              const swiper = swiperRef.current?.swiper;
              if (swiper && swiper.autoplay && typeof swiper.autoplay.start === 'function') {
                swiper.autoplay.start();
              }
            }}

          >
              <div className="card-content">
                <div className="text">
                  <h3 style={{marginBottom:"0px"}}>Desktop/Refurbished <br />Desktop</h3>
                  <button  >Shop Now</button>
                </div>
              </div>
            </div>
        </SwiperSlide>

        {/* Card 3 */}
        <SwiperSlide>
          <div className="card3"
            onMouseEnter={() => {
              const swiper = swiperRef.current?.swiper;
              if (swiper && swiper.autoplay && typeof swiper.autoplay.stop === 'function') {
                swiper.autoplay.stop();
              }
            }}
            onMouseLeave={() => {
              const swiper = swiperRef.current?.swiper;
              if (swiper && swiper.autoplay && typeof swiper.autoplay.start === 'function') {
                swiper.autoplay.start();
              }
            }}

          >
            <div className="image">
              <div className="card-content">
                <div className="text">
                  <h3>Accessories</h3>
                  <button >Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Card 4 */}
        <SwiperSlide>
          <div className="card4"
            onMouseEnter={() => {
              const swiper = swiperRef.current?.swiper;
              if (swiper && swiper.autoplay && typeof swiper.autoplay.stop === 'function') {
                swiper.autoplay.stop();
              }
            }}
            onMouseLeave={() => {
              const swiper = swiperRef.current?.swiper;
              if (swiper && swiper.autoplay && typeof swiper.autoplay.start === 'function') {
                swiper.autoplay.start();
              }
            }}

          >
            <div className="image">
              <div className="card-content">
                <div className="text">
                  <h3>RAM</h3>
                  <button >Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Card 5 */}
        <SwiperSlide>
          <div className="card5"
            onMouseEnter={() => {
              const swiper = swiperRef.current?.swiper;
              if (swiper && swiper.autoplay && typeof swiper.autoplay.stop === 'function') {
                swiper.autoplay.stop();
              }
            }}
            onMouseLeave={() => {
              const swiper = swiperRef.current?.swiper;
              if (swiper && swiper.autoplay && typeof swiper.autoplay.start === 'function') {
                swiper.autoplay.start();
              }
            }}

          >
            <div className="image">
              <div className="card-content">
                <div className="text">
                  <h3>Display</h3>
                  <button >Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Card 6 */}
        <SwiperSlide>
          <div className="card6"
            onMouseEnter={() => {
              const swiper = swiperRef.current?.swiper;
              if (swiper && swiper.autoplay && typeof swiper.autoplay.stop === 'function') {
                swiper.autoplay.stop();
              }
            }}
            onMouseLeave={() => {
              const swiper = swiperRef.current?.swiper;
              if (swiper && swiper.autoplay && typeof swiper.autoplay.start === 'function') {
                swiper.autoplay.start();
              }
            }}

          >
            <div className="image">
              <div className="card-content">
                <div className="text">
                  <h3>SSD</h3>
                  <button >Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Card 7 */}
        <SwiperSlide>
          <div className="card7"
            onMouseEnter={() => {
              const swiper = swiperRef.current?.swiper;
              if (swiper && swiper.autoplay && typeof swiper.autoplay.stop === 'function') {
                swiper.autoplay.stop();
              }
            }}
            onMouseLeave={() => {
              const swiper = swiperRef.current?.swiper;
              if (swiper && swiper.autoplay && typeof swiper.autoplay.start === 'function') {
                swiper.autoplay.start();
              }
            }}

          >
            <div className="image">
              <div className="card-content">
                <div className="text">
                  <h3>Charger</h3>
                  <button >Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Card 8 */}
        <SwiperSlide>
          <div className="card8"
            onMouseEnter={() => {
              const swiperInstance = swiperRef.current?.swiper;
              if (swiperInstance?.autoplay?.running) {
                swiperInstance.autoplay.stop();
              }
            }}
            onMouseLeave={() => {
              const swiperInstance = swiperRef.current?.swiper;
              if (swiperInstance?.autoplay && !swiperInstance.autoplay.running) {
                swiperInstance.autoplay.start();
              }
            }}

          >
            <div className="image">
              <div className="card-content">
                <div className="text">
                  <h3>Battery</h3>
                  <button >Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="custom-pagination2"></div>
    </section>
  );
};

export default Categories;
