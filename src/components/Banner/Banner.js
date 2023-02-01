import React from 'react';
import './Banner.css';
import 'animate.css';
import Logo from '../../assets/images/kt logo.webp';
import circle from '../../assets/images/circle.png';

const Banner = () => {
    return (
        <div>
            <div className="bgImage -mt-14">
                <div className='container mx-auto py-28'>
                    <img src={Logo} alt="" />
                </div>
                <div>
                    <div className='container mx-auto flex justify-between items-center animate__animated animate__backInLeft'>
                        <div>
                            <h2 className='font-bold text-orange-600'>Penetration Testing</h2>
                            <h1 className='text-2xl font-bold mt-4'>Secure Your IT systems with our <br /> expert penetration testing services</h1>
                            <p className='mt-4 font-bold'>Identify and address vulnerabilities before they <br /> become a threat</p>
                            <div className='flex mt-8'>
                                <div className='flex items-center shadow-md p-6 rounded-3xl mr-6 bg-white'>
                                    <img className='w-24 h-24 mr-4' src={circle} alt="" />
                                    <div>
                                        <h1 className='font-bold'>600+</h1>
                                        <h2 className='font-bold'>Application Tested</h2>
                                    </div>
                                </div>
                                <div className='flex items-center shadow-lg p-6 rounded-3xl bg-white'>
                                    <img className='w-24 h-24 mr-4' src={circle} alt="" />
                                    <div>
                                        <h1 className='font-bold'>100+</h1>
                                        <h2 className='font-bold'>Websites Secured</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <h1 className='font-bold text-xl'>Enhance your <a className='text-orange-600' href="/">SECURITY</a> </h1>
                                    <div className="">
                                        <input type="text" placeholder="Full Name" className=" border-b-2 p-4" />
                                    </div>
                                    <div className="">
                                        <input type="text" placeholder="Business Email" className=" border-b-2 p-4" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-orange-600">Phone Number</span>
                                        </label>
                                        <input type="text" placeholder="password" className=" border-b-2 p-4" />
                                    </div>
                                    <div className="">
                                        <input type="text" placeholder="Company Name" className=" border-b-2 p-4" />
                                    </div>
                                    <div className="">
                                        <input type="text" placeholder="Other Compliance Required" className=" border-b-2 p-4" />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-[#F60062] border-none">Request Free Consultation</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;