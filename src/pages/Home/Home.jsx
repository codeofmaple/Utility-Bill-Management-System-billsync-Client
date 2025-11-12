import React from 'react';
import Slider from '../../components/Home/slider/Slider';
import CustomerReviews from '../../components/Home/Review/CustomerReviews';
import RecentBills from '../../components/Home/RecentBills/RecentBills';
import CategorySection from '../../components/Home/CategorySection';

const Home = () => {
    return (
        <div className='bg-base-100 py-10 space-y-8 md:space-y-16'>
            <Slider></Slider>
            <CategorySection></CategorySection>
            <RecentBills></RecentBills>
            <CustomerReviews></CustomerReviews>
        </div>
    );
};

export default Home;