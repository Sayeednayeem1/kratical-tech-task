import React from 'react';

const Footer = () => {
    return (
        <div className='bg-neutral'>
            <div className='max-w-5xl mx-auto'>
                <footer className="footer grid grid-cols-1 lg:grid-cols-3 p-10 text-neutral-content">
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;