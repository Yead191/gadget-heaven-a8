import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


const Root = () => {
    return (
        <div className='flex flex-col min-h-screen bg-base-200'>
            <Toaster position="	bottom-right"></Toaster>
            <Navbar></Navbar>
            <div className='flex-grow'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;