import React from 'react';

const FAQ = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <div className='flex justify-center items-center mt-8 mb-10'>
                <hr className='h-1 w-16 bg-orange-600 mb-4 mt-2' />
                <h1 className='text-2xl font-bold px-4'>FAQ'S</h1>
                <hr className='h-1 w-16 bg-orange-600 mb-4 mt-2' />
            </div>

            <div>
                <div tabIndex={0} className="collapse collapse-arrow  bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What are the benefits of penetration Testing?
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How does a penetration test work?
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What are the factors while Performing open testing?
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;