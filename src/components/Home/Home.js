import React from 'react';
import Banner from '../Banner/Banner';
import BenefitsOfCodeReview from '../BenefitsOfCodeReview/BenefitsOfCodeReview';
import ParentFolder from '../KraticalDetails/ParentFolder';
import Overview from '../Overview/Overview';

const Home = () => {
    return (
        <div>
            <Banner />
            <Overview />
            <ParentFolder />
            <BenefitsOfCodeReview />
        </div>
    );
};

export default Home;