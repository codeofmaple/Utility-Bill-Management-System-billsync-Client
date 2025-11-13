import React from 'react';
import Slider from '../../components/Home/slider/Slider';
import CustomerReviews from '../../components/Home/Review/CustomerReviews';
import RecentBills from '../../components/Home/RecentBills/RecentBills';
import CategorySection from '../../components/Home/CategorySection';
import CustomLoading from '../Loader/CustomLoading';
import FAQ from '../../components/Home/FAQ';

const Home = () => {
    return (
        <div className='bg-base-100 py-8 md:py-16 space-y-12 md:space-y-24'>
            {/* <CustomLoading pageName="home" /> */}
            <title>BillSync | Home</title>

            <Slider></Slider>
            <CategorySection></CategorySection>
            <RecentBills></RecentBills>
            <CustomerReviews></CustomerReviews>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;