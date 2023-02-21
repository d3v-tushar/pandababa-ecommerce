import React from 'react';
import reductionCTA from '../../assets/banner/banner-21.jpg';
import speakerCTA from '../../assets/banner/banner-22.jpg';

const CtaThree = () => {
    return (
        <section className='grid grid-cols-2 gap-x-6'>
            <div>
                <img src={reductionCTA} alt="" />
            </div>
            <div>
            <img src={speakerCTA} alt="" />
            </div>
        </section>
    );
};

export default CtaThree;