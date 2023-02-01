import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import WhyChooseUsImage from '../../assets/images/Why Choose us.webp';

const WhyChooseUs = () => {
    return (
        <div className='container mx-auto  py-10'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-2xl font-bold'>Why Choose Us </h2>
                    <hr className='h-1 w-16 bg-orange-600 mb-4 mt-2' />
                    <p> <span className='text-4xl text-green-700'>&#x2713;</span> Creating Compliance Policies and Security Strategies</p>
                    <p> <span className='text-4xl text-green-700'>&#x2713;</span> Sound record of delivering excellent cyber security solutions</p>
                    <p> <span className='text-4xl text-green-700'>&#x2713;</span> Precise Gap Analysis by our expert Pentesters</p>
                    <p> <span className='text-4xl text-green-700'>&#x2713;</span> Thorough SEcurity Assessment</p>
                    <p> <span className='text-4xl text-green-700'>&#x2713;</span> Safeguard people, process and technologies</p>
                </div>
                <div>
                    <img className='w-36 md:w-60 lg:w-96' src={WhyChooseUsImage} alt="" />
                </div>
            </div>
            <div className='flex justify-center'>
                <button className='btn bg-[#F60062] mt-6 border-none rounded-3xl px-16'> <FaPhoneAlt className='mr-4'/>  Book A Call</button>
            </div>
        </div>
    );
};

export default WhyChooseUs;