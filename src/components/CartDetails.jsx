// import React, { useEffect, useState } from 'react';
import { LuTrash } from "react-icons/lu";

const CartDetails = ({ product, handleRemove }) => {
    const { product_id, product_title, product_image, description, price } = product
    


    

    return (
        <div className="card md:card-side bg-white shadow-xl mb-4 md:h-[170px] items-center">
            <figure>
                <img className='md:w-[200px] p-2 object-cover h-[160px]'
                    src ={product_image}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p className='md:w-[1000px] overflow-y-scroll'> {description}</p>
                <p className="mt-2">Price: ${price}</p>


                
            </div>
            <div className=" place-content-center  mb-4 md:mb-0">
                    <button onClick={()=> handleRemove(product_id)} className="btn text-xl text-red-500 lg:mr-5"><LuTrash /></button>
                </div>

        </div>
    );
};

export default CartDetails;