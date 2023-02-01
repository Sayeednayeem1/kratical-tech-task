import React from 'react';
import CodeReviewImage from '../../assets/images/Code Review.webp';

const CodeReviewCard = () => {
    return (
        <div className='bg-[#F3F3F2]'>
            <div className='container mx-auto py-10'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className='text-2xl font-bold'>Code Review</h2>
                        <hr className='h-1 w-16 bg-orange-600 mb-4 mt-2' />
                        <p>Code review examine source code directly and reveals flaws that were <br/> missed during the first development stage. It is the procedure of auditing <br/> an applications source code to make sure necessary security <br/> measures are present, performing as intended, and having been <br/> activated appropriately.<br/> They are methodical evaluation of the code made to find defects, <br/> improve the quality of the code and assist developers in learning the <br/> source code.</p>
                    </div>
                    <div>
                        <img className='w-36 md:w-60 lg:w-96' src={CodeReviewImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeReviewCard;