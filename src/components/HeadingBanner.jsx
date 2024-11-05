import React from 'react';



const HeadingBanner = ({ title, subtitle, button, height }) => {
    return (
        <div className={`mt-16 h-[300px] ${height} bg-[#9538E2] text-center `}>
            <h1 className='text-2xl md:text-4xl text-white pt-20 mb-4'>{title}</h1>
            <p className='lg:w-[800px] w-full mx-auto text-white font-light'>{subtitle}</p>

            {button && (
                <div className='mt-5 '>
                    <button className='btn rounded-full px-14 mr-5 '>{button[0]}</button>
                    <button className='btn rounded-full px-14'>{button[1]}</button>
                </div>
            )}
        </div>

    );
};

export default HeadingBanner;