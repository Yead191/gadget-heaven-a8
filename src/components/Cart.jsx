import React, { useEffect, useState } from 'react';
import { getStoredProductList, removeCart } from '../components/utilities';
import CartDetails from './CartDetails';


const Cart = () => {


    const [products, setProducts] = useState([])
    useEffect(() => {
        const cart = getStoredProductList()
        setProducts(cart)
        totalCost(cart)
    }, [])
    const handleRemove = (id) => {
        removeCart(id)
        const cart = getStoredProductList()
        setProducts(cart)
        totalCost(cart)


    }

    const [total, setTotal] = useState(0)
    const totalCost = (carts) => {
        const total = carts.reduce((sum, item) => sum + (item.price || 0), 0);
        console.log("Calculated total cost:", total)
        setTotal(total)

    }


    return (
        <div className='w-10/12 mx-auto my-12'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-2xl lg:text-3xl font-semibold'>Cart</h1>
                </div>
                <div className='flex items-center gap-6'>
                    <h1 className='text-2xl font-semibold'>Total Cost: {total}</h1>
                    <button className='btn rounded-full border border-[#9538E2]'>Sort by Price</button>
                    <button className='btn rounded-full border border-[#9538E2]'>Purchase</button>
                </div>
            </div>
            <div className='my-12'>
                {
                    products.map(product => <CartDetails key={product.product_id} handleRemove={handleRemove} product={product}></CartDetails>)
                }

            </div>
        </div>

    );
};

export default Cart;