import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ErrorPage = () => {
    return (
        <div className='flex flex-col min-h-screen bg-base-200'>
            <div className=''>
                <Navbar></Navbar>

            </div>

            <div className='w-11/12 mx-auto flex-grow  justify-center items-center place-content-center '>
                <h1 className=' text-center text-5xl text-red-200 font-bold '>Page Not Found</h1>


            </div>
            <Footer></Footer>

        </div>
    );
};

export default ErrorPage;