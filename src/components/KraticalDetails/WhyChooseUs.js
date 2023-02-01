import React from 'react';
import WhyChooseUsImage from '../../assets/images/Why Choose us.webp';

const WhyChooseUs = () => {
    return (
        <div className='container mx-auto mt-10'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-2xl font-bold'>Overview</h2>
                    <hr className='h-1 w-16 bg-orange-600 mb-4 mt-2' />
                    <p><span className='font-bold'>A pen test</span>(also known as a penetration test) i a security assessment of <br /> an IT system, where potential vulnerabilities are identified by attempting <br /> to exploit them. It can be done using human and automated methods and <br /> may includes testing servers, web app, wireless networks, and other <br /> areas of potential exposures. The <span className='font-bold'>NIST SP 800-115 guide</span> is often used to <br /> develop appropriate security process and procedures and can be a <br /> helpful resource for pen testers when assessing organization <br /> vulnerabilities.</p>
                </div>
                <div>
                    <img className='w-36 md:w-60 lg:w-96' src={WhyChooseUsImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;