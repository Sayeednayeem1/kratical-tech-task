import React from 'react';
import icon01 from '../../assets/images/icon01.webp';
import icon02 from '../../assets/images/icon02.webp';
import icon03 from '../../assets/images/icon03.webp';
import icon04 from '../../assets/images/icon04.webp';
import icon05 from '../../assets/images/icon05.webp';

const BenefitsOfCodeReview = () => {
    return (
        <div className='py-14'>
            <div>
                <h1 className='text-3xl font-bold text-center'>Benefits Associated With Code Review</h1>
                <hr className='h-1 w-20 bg-orange-600 mb-4 mt-2 mx-auto' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8  container mx-auto'>
                <div className='bg-orange-400 py-6 rounded-2xl'>
                    <img className='mx-auto bg-white p-6 rounded-full' src={icon01} alt="" />
                    <h1 className='text-center mt-3 text-white'>Cost <br /> Saving</h1>
                </div>
                <div>
                    <img className='mx-auto  bg-[#FFEEE9] p-6 rounded-full' src={icon02} alt="" />
                    <h1 className='text-center mt-3'>Improve <br /> Code Quality</h1>
                </div>
                <div >
                    <img className='mx-auto  bg-[#FFEEE9] p-6 rounded-full' src={icon03} alt="" />
                    <h1 className='text-center mt-3'>Identify and Fix <br /> Vulnerabilities</h1>
                </div>
                <div >
                    <img className='mx-auto  bg-[#FFEEE9] p-6 rounded-full' src={icon04} alt="" />
                    <h1 className='text-center mt-3'>Maintaining <br /> Consistency</h1>
                </div>
                <div >
                    <img className='mx-auto  bg-[#FFEEE9] p-6 rounded-full' src={icon05} alt="" />
                    <h1 className='text-center mt-3'>Detection <br /> of Errors</h1>
                </div>
            </div>
        </div>
    );
};

export default BenefitsOfCodeReview;