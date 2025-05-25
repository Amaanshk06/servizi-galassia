import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function Usp() {
    const imgRef1 = useRef(null); 
    const imgRef2 = useRef(null); 
    const swiperRef = useRef(null); // For controlling autoplay

    useEffect(() => {
        const Img1 = imgRef1.current;
        const Img2 = imgRef2.current;
        if (!Img1 || !Img2) return;

        let lastScrollY = window.scrollY;
        let currentY1 = 0;
        let currentY2 = 0;
        let targetY1 = 0;
        let targetY2 = 0;
        let ticking = false;
        let animationFrameId;

        const onScroll = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY ? 'down' : 'up';

            if (direction === 'down') {
                targetY1 -= 1;
                targetY2 += 1;
            } else {
                targetY1 += 1;
                targetY2 -= 1;
            }

            targetY1 = Math.max(-100, Math.min(100, targetY1));
            targetY2 = Math.max(-100, Math.min(100, targetY2));

            lastScrollY = scrollY;
            requestTick();
        };

        const requestTick = () => {
            if (!ticking) {
                animationFrameId = requestAnimationFrame(update);
                ticking = true;
            }
        };

        const update = () => {
            currentY1 += (targetY1 - currentY1) * 0.1;
            currentY2 += (targetY2 - currentY2) * 0.1;

            Img1.style.transform = `translateY(${currentY1}px)`;
            Img2.style.transform = `translateY(${currentY2}px)`;

            ticking = false;
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const handleMouseEnter = () => {
        swiperRef.current?.autoplay?.stop();
    };

    const handleMouseLeave = () => {
        swiperRef.current?.autoplay?.start();
    };

    const sliderItems = [
        { src: "/assets/images/usp-img/72-Qualitty-check.webp", text: "72 QUALITY CHECKS", alt: "Shield with check mark icon" },
        { src: "/assets/images/usp-img/10-day-replacement.webp", text: "10 DAY REPLACEMENT", alt: "Circular arrow icon" },
        { src: "/assets/images/usp-img/amc.webp", text: "RELIABLE AFTER-SALES SERVICE", alt: "Tools icon" },
        { src: "/assets/images/usp-img/free-delivery.webp", text: "FREE DELIVERY", alt: "Delivery truck icon" },
        { src: "/assets/images/usp-img/1-year-warranty.webp", text: "1 YEAR WARRANTY", alt: "Warranty badge icon" },
    ];

    return (
        <>
            <section id='usp'>
                            <div className="usp">
                <img ref={imgRef1} className="usp-object1" src="assets/images/usp-img/object-03.svg" alt="object1" />
                <img ref={imgRef2} className="usp-object2" src="assets/images/usp-img/object-02.svg" alt="object2" />
                <p>Unique Selling Proposition</p>
                <h2>WE ARE SPECIALIZED IN</h2>
            </div>

            <div className="container">
                <div 
                    className="slider"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Swiper
                        className="slider-track"
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView="auto"
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        {[...sliderItems, ...sliderItems].map((item, index) => (
                            <SwiperSlide className="slider-item" key={index}>
                                <img alt={item.alt} className="mx-auto mb-2" height="70" width="70" src={item.src} />
                                <p className="text-sm">{item.text}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            </section>
        </>
    );
}

export default Usp;
