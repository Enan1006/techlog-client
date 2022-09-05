import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./HomeRating.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const HomeRating = () => {

    return (
        <div className='mx-auto md:mx-40 md:my-40'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                <div>
                    <h2 className='text-green-600 text-4xl font-bold text-center mb-10'>Client's Review</h2>
                </div>
                <div>
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className='bg-green-600 text-white p-10'>
                            <h2>Hello</h2>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default HomeRating;