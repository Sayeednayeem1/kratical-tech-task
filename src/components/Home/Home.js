import React from 'react';
import Banner from '../Banner/Banner';
import BenefitsOfCodeReview from '../BenefitsOfCodeReview/BenefitsOfCodeReview';
import CodeReviewCard from '../CodeReviewCard/CodeReviewCard';
import ParentFolder from '../KraticalDetails/ParentFolder';
import Overview from '../Overview/Overview';

const Home = () => {
    return (
        <div>
            <Banner />
            <Overview />
            <ParentFolder />
            <BenefitsOfCodeReview />
            <CodeReviewCard />
        </div>
    );
};

export default Home;