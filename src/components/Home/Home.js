import React from 'react';
import Banner from '../Banner/Banner';
import ParentFolder from '../KraticalDetails/ParentFolder';
import Overview from '../Overview/Overview';

const Home = () => {
    return (
        <div>
            <Banner />
            <Overview />
            <ParentFolder />
        </div>
    );
};

export default Home;