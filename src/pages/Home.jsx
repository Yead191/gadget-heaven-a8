import React, { useEffect } from 'react';
import BannerHome from '../components/BannerHome';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../components/Categories';

const Home = () => {
    const categories = useLoaderData()
    useEffect(()=>{
        document.title = 'Gadgets | Gadget Heaven'
    },[])
    return (
        <div>
            <BannerHome></BannerHome>
            <div className='md:flex my-12 md:w-10/12 mx-auto gap-4  '>
                <div className='md:w-1/4 border border-[#9538E2] bg-white rounded-xl p-6 md:sticky md:top-32 h-max'>
                <Categories categories={categories}></Categories>

                </div>
                <div className='md:w-3/4 '>
                    <Outlet></Outlet>

                </div>

            </div>
        </div>
    );
};

export default Home;