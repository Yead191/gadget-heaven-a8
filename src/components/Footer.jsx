import React from 'react';

const Footer = () => {
    return (
        <div className='bg-white md:items-center md:justify-center'>
            <div className='md:text-center p-2'>
                <h1 className='font-bold text-4xl pt-16'>Gadget Heaven</h1>
                <p className='text-base text-gray-500 leading-4 mt-3 mb-7 '>Leading the way in cutting-edge technology and innovation.</p>

                <p className='text-xs'>Copyright © {new Date().getFullYear()} - All right reserved by yead.</p>

            </div>
            <div className='border border-base-200 mt-2'></div>
            <footer className="footer bg-white text-base-content p-10 md:items-center md:justify-around mb-0">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>


        </div>
    );
};

export default Footer;