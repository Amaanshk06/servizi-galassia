// import React from 'react';

import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './Testimonials.css';


// ✅ Only one declaration here!
const testimonials = [
  {
    name: "Fatma sara khan",
    feedback: "A& Tservices is very customer friendly and providing best quality products in reasonable price.there sales person or It person is very humble for their customers.",
    rating: 5,
    image: "assets/images/test-img/test2.webp", // Profile Image URL
  },
  {
    name: "Moses Jena",
    feedback: "I recently tried out their service, and honestly, they're pretty solid! Their tech team knows their stuff—quick fixes, smooth setups and all-around good support. As for their refurbished products? Total win. Everything I got was in great condition and worked perfectly Plus, it's budget-friendly, which is always a bonus. Their customer service was super friendly and helpful, answering all my random questions without a hitch. If you're looking for affordable tech solutions and solid service, I'd definitely recommend checking them out.",
    rating: 4,
    image: "assets/images/test-img/test1.webp", // Profile Image URL
  },
  {
    name: "Inderdeep Kaur",
    feedback: "Quality is very good of laptops and desktops. It's really good products.",
    rating: 3,
    image: "assets/images/test-img/test3.webp", // Profile Image URL
  },
  {
    name: "Aspirants Classes",
    feedback: "I purchase laptops and desktops both from A & T Services Inc. regularly, All systems are good in performance and conditions. And also service is too good delivery and support. Thanks A & T SERVICES for best price and good service",
    rating: 3,
    image: "assets/images/test-img/test5.webp", // Profile Image URL
  },
  {
    name: "Yogesh Kumar",
    feedback: "I recently purchased a refurbished laptop from A&T Services Inc., and I am thoroughly impressed! The quality of the product was outstanding, and the price was incredibly affordable. Their expert technical team provided excellent support, answering all my queries and ensuring a smooth setup.What stood out the most was their timely service and genuine focus on customer satisfaction. It's clear that they value their clients and strive to deliver the best experience possible. I highly recommend A&T Services Inc. to anyone looking for reliable IT solutions at great prices!",
    rating: 3,
    image: "assets/images/test-img/test4.webp", // Profile Image URL
  }
];

// Render stars based on the rating
const renderStars = (rating) => {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    stars += i < rating ? '★' : '☆'; // Use filled star for rating, empty for others
  }
  return stars;
};

const Testimonials = () => {
  const swiperRef = useRef(null); // ✅ this line is essential

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Shift' && swiperRef.current) {
        swiperRef.current.mousewheel.enable();
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'Shift' && swiperRef.current) {
        swiperRef.current.mousewheel.disable();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
  return (
    <div className='testimonials'>
      <div className='container6'>
        <div className="testimonials-section">
          <p>Customer's</p>
          <h2> Testimonials</h2>
        </div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            swiper.mousewheel.disable(); // optional: disable scroll if not needed
          }}
          modules={[Autoplay, Pagination, Mousewheel]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          loop={true}
          grabCursor={false}              // 👈 this makes the cursor look like a hand and enables drag
          simulateTouch={true}          // 👈 enables dragging with mouse/finger
          className="testimonials-swiper"
        >

          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="rating">{renderStars(t.rating)}</div>
                <div className="feedback-section">
                  <p className="feedback">“{t.feedback}”</p>
                </div>
                <div className="testimonial-footer">
                  <img src={t.image} alt={`${t.name}'s image`} className="testimonial-image" />
                  <h className="name">{t.name}</h>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination"></div>
      </div>
    </div>
  );
};

export default Testimonials;