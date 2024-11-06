import React, { useEffect, useState } from 'react';
import { getStoredWishList, removeWishlist } from './utilities';
import CartDetails from './CartDetails';

const Wishlist = () => {

    const [products, setProducts] = useState([])
    useEffect(()=>{
        const Wishlist = getStoredWishList()
        setProducts(Wishlist)
    } ,[])

    const handleRemove = (id)=>{
        removeWishlist(id)
        const Wishlist = getStoredWishList()
        setProducts(Wishlist)


    }
    
    
    return (
        <div className='w-10/12 mx-auto my-12 '>
            <div className='items-center'>
            <h1 className='text-2xl lg:text-3xl font-semibold'>Wishlist</h1>
            </div>
            <div className='my-12'>
                {
                    products.map(product=> <CartDetails key={product.product_id} product={product} handleRemove={handleRemove} ></CartDetails>)
                }

            </div>
        </div>
        
    );
};

export default Wishlist;