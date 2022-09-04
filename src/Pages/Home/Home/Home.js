import React from 'react';
import Banner from '../Banner/Banner';
import FeatureItem from '../FeatureItem/FeatureItem';
import Summury from '../Summury/Summury';

const Home = () => {
    return (
        <div>
            <Banner />
            <Summury />
            <FeatureItem />
        </div>
    );
};

export default Home;