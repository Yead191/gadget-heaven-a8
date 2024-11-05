import React from 'react';
import bannerImage from '../assets/banner.jpg'

const BannerHome = () => {
    return (
        <div className=' w-11/12 mx-auto mt-4 '>
            <div className='bg-[#9538E2] text-white text-center rounded-xl h-[700px] '>
                <h1 className='text-4xl lg:text-6xl pt-32 mb-6'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                <p className='leading-6 mb-6'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <button className='btn rounded-full px-10'>Shop Now</button>
            </div>
            <div className={`lg:h-[500px] lg:w-[1110px] mx-auto p-6 border border-white relative -top-40 lg:-top-60 overflow-hidden rounded-xl shadow-sm`}>
                <img className='w-full h-full object-cover rounded-xl' src={bannerImage} alt="" />

            </div>
            <h1 className='text-4xl font-bold text-center -mt-44'>Explore Cutting-Edge Gadgets</h1>
        </div>
    );
};

export default BannerHome;