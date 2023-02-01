import React from 'react';

const FAQ = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <div className='flex justify-center items-center mt-8 mb-10'>
                <hr className='h-1 w-16 bg-orange-600' />
                <h1 className='text-2xl font-bold px-4'>FAQ'S</h1>
                <hr className='h-1 w-16 bg-orange-600 ' />
            </div>

            <div>
                <div tabIndex={0} className="collapse collapse-arrow  bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What are the benefits of penetration Testing?
                    </div>
                    <div className="collapse-content">
                        <p>A pen test(also known as a penetration test) i a security assessment of
                            an IT system, where potential vulnerabilities are identified by attempting
                            to exploit them. It can be done using human and automated methods and
                            may includes testing servers, web app, wireless networks, and other
                            areas of potential exposures. The NIST SP 800-115 guide is often used to
                            develop appropriate security process and procedures and can be a
                            helpful resource for pen testers when assessing organization
                            vulnerabilities.</p>
                    </div>
                </div>
                <div tabIndex={2} className="collapse collapse-arrow bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How does a penetration test work?
                    </div>
                    <div className="collapse-content">
                        <p> A pen test(also known as a penetration test) i a security assessment of
                            an IT system, where potential vulnerabilities are identified by attempting
                            to exploit them. It can be done using human and automated methods and
                            may includes testing servers, web app, wireless networks, and other
                            areas of potential exposures. The NIST SP 800-115 guide is often used to
                            develop appropriate security process and procedures and can be a
                            helpful resource for pen testers when assessing organization
                            vulnerabilities.</p>
                    </div>
                </div>
                <div tabIndex={4} className="collapse collapse-arrow bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What are the factors while Performing open testing?
                    </div>
                    <div className="collapse-content">
                        <p>A pen test(also known as a penetration test) i a security assessment of
                            an IT system, where potential vulnerabilities are identified by attempting
                            to exploit them. It can be done using human and automated methods and
                            may includes testing servers, web app, wireless networks, and other
                            areas of potential exposures. The NIST SP 800-115 guide is often used to
                            develop appropriate security process and procedures and can be a
                            helpful resource for pen testers when assessing organization
                            vulnerabilities.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;