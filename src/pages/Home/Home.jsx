import React from 'react';
import Slider from '../../components/Home/slider/Slider';
import CustomerReviews from '../../components/Home/Review/CustomerReviews';
import RecentBills from '../../components/Home/RecentBills/RecentBills';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <RecentBills></RecentBills>
            <CustomerReviews></CustomerReviews>
        </div>
    );
};

export default Home;