import React from 'react';
import Banner from '../Banner/Banner';
import FeatureItem from '../FeatureItem/FeatureItem';
import HomeRating from '../HomeRating/HomeRating';
import Summury from '../Summury/Summury';

const Home = () => {
    return (
        <div>
            <Banner />
            <Summury />
            <FeatureItem />
            <HomeRating />
        </div>
    );
};

export default Home;