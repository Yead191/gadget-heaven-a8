import React from 'react';
import { NavLink } from 'react-router-dom';



const HeadingBanner = ({ title, subtitle, button, height }) => {
    return (
        <div className={`mt-16 h-[300px] ${height} bg-[#9538E2] text-center `}>
            <h1 className='text-2xl md:text-4xl text-white pt-20 mb-4'>{title}</h1>
            <p className='lg:w-[800px] w-full mx-auto text-white font-light'>{subtitle}</p>

            {button && (
                <div className='mt-5 '>
                     <NavLink
                        to='/dashboard'
                        className={({ isActive }) =>
                            isActive ? 'btn rounded-full px-14 mr-5 ' : 'bg-[#6B2CA2] text-white btn rounded-full px-14 mr-5'
                        }
                        end
                    >
                        {button[0]}
                    </NavLink>
                    <NavLink
                        to='/dashboard/wishlist'
                        className={({ isActive }) =>
                            isActive ? 'btn rounded-full px-14 ' : 'btn rounded-full px-14 bg-[#6B2CA2] text-white'
                        }
                    >
                        {button[1]}
                    </NavLink>
                </div>
            )}
        </div>

    );
};

export default HeadingBanner;