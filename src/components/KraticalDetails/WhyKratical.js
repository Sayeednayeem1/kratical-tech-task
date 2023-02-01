import React from 'react';
import'animate.css';
import WhyKraticalImage from '../../assets/images/Why Kratikal.webp';

const WhyKratical = () => {
    return (
        <div className='container mx-auto mt-10 py-20'>
            <div className='flex justify-between items-center'>
                <div>
                    <img className='w-36 md:w-60 lg:w-96' src={WhyKraticalImage} alt="" />
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>Why Kratical</h2>
                    <hr className='h-1 w-16 bg-orange-600 mb-4 mt-2' />
                    <p><span className='font-bold'>Kratical Tech</span>offers manual and automated penetration testing services <br/> to identify vulnerabilities in your system. Our manual testing team uses <br/> techniques like social engineering, pishing and physical security testing <br/> for a more in-depth evaluation. Our automated testing approach uses <br/> software tools to simulate an attack, but many not detect all <br/> vulnerabilities. Together, both methods provide a comprehensive and <br/> thorough security assessment.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyKratical;