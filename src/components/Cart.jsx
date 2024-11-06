import React, { useEffect, useState } from 'react';
import { getStoredProductList, removeCart } from '../components/utilities';
import CartDetails from './CartDetails';
import { NavLink } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';
import modalLogo from '../assets/Group.png'



const Cart = () => {
    // const data = useLoaderData()
    const [isSorted, setIsSorted] = useState(false)
    const handleSort = () => {
        const sorted = [...products].sort((a, b) => b.price - a.price)
        setProducts(sorted)
        setIsSorted(true);


    }


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
        setTotal(total)

    }
    const handleProduct = () => {
        document.getElementById('my_modal_2').showModal()

        setProducts([])
        setTimeout(() => {
            setTotal(0)

        }, 3000);
        localStorage.removeItem('product-list')

    }



    return (
        <div className='w-10/12 mx-auto my-12'>
            <div className='md:flex md:justify-between items-center'>
                <div>
                    <h1 className='text-2xl lg:text-3xl font-semibold'>Cart</h1>
                </div>
                <div className='flex flex-col md:flex-row items-center gap-6'>
                    <h1 className='text-2xl font-semibold'>Total Cost: {total}</h1>
                    <button
                        onClick={handleSort}
                        className={`btn w-full md:w-auto btn-md rounded-full border border-[#9538E2] ${isSorted ? 'active' : ''}`}
                    >
                        Sort by Price
                    </button>
                    <button onClick={() => handleProduct()} className='btn w-full md:w-auto btn-md rounded-full border border-[#9538E2]'>Purchase</button>
                    {/* modal */}
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn hidden" onClick={() => document.getElementById('my_modal_2').showModal()}>open modal</button>
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box 
                        place-items-center">
                            <img src={modalLogo} alt="" />

                            <h3 className="font-bold text-lg mt-3 border-b-2">Payment Successfully!</h3>

                            <p className="py-4 text-sm  ">Thanks for purchasing</p>
                            <p className='text-base font-semibold'>Total: ${total}</p>
                            <form method="dialog" className="modal-backdrop my-3">
                                <button className='btn'>close</button>
                            </form>

                        </div>

                    </dialog>
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