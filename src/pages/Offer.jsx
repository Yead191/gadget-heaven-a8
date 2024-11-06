import React, { useEffect } from 'react';
import HeadingBanner from '../components/HeadingBanner';
import { useLoaderData } from 'react-router-dom';
import OfferCard from '../components/OfferCard';

const Offer = () => {
    useEffect(()=>{
        document.title = 'Offers | Gadget Heaven'
    },[])

    const offers = useLoaderData()
    // console.log(data);
    return (
        <div>
            <HeadingBanner title='Offers' subtitle='Do not Miss Out on Our Latest Deals! Explore limited-time offers on top gadgets and accessories—grab yours before they are gone!' height={'h-[280px]'}></HeadingBanner>

            <div className='my-12 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full justify-center gap-4'>
            {
                offers.map(offer=> <OfferCard key={offer.id} offer={offer}></OfferCard>)
            }
            

            </div>
        </div>
    );
};

export default Offer;