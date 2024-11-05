import React, { useEffect, useState } from 'react';
import { getStoredProductList } from '../components/utilities';

import Card from './Card';




const Cart = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const cart = getStoredProductList()
        setProducts(cart)
    }, [])




    return (
        <div className='w-10/12 mx-auto my-12'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-2xl lg:text-3xl font-semibold'>Cart</h1>
                </div>
               
                    <div className='flex items-center gap-6'>
                        <h1 className='text-2xl font-semibold'>Total Cost: {money} </h1>
                        <button className='btn rounded-full border border-[#9538E2]'>Sort by Price</button>
                        <button className='btn rounded-full border border-[#9538E2]'>Purchase</button>
                    </div>

            </div>
            <div>
                <h1>Products....{products.length}</h1>
            </div>
        </div>
    );
};

export default Cart;