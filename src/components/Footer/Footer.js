import React from 'react';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='bg-neutral'>
            <div className='max-w-5xl mx-auto'>
                <footer className="footer grid grid-cols-1 lg:grid-cols-3 p-10 text-neutral-content">
                    <div>
                        <span className=" font-bold text-lg "> <span class="fi fi-us mr-2"></span>UNITED STATES</span>
                        <p>400 W Peachtree St LW Atlanta <br /> GA, 30303, USA</p>
                    </div>
                    <div>
                        <span className=" font-bold text-lg "> <span class="fi fi-in mr-2"></span> INDIA</span>
                        <p>B-70, second floor-67.<br />Noida - 201301</p>
                    </div>
                    <div>
                        <div className='flex justify-center items-center font-bold text-lg'>
                            <AiOutlineMail className='mr-2' />
                            <h2>For Sales:</h2>
                        </div>
                        <p>Email: sales@kratical.com</p>
                        <div className='flex justify-center items-center'>
                            <span class="fi fi-in mr-2" />
                            <p>(+91)9289192210</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;