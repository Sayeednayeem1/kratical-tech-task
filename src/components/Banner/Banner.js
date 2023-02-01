import React from 'react';
import logo from '../../assets/images/kt logo.webp';
import test from '../../assets/images/banner (4).webp';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className=''>
                <div  class="h-4/5 w-full bg-cover test">
                    <div>
                        <img className='' src={logo} alt="" />
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;