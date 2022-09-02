import React from 'react';
import banner1 from '../../../Images/banner/banner-3.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen hero-img">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner1} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-5xl text-gray-700 font-bold md:pr-10">Get your best gadgets from Techlog</h1>
                        <p class="py-6">We provide quality electronic gadgets</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;