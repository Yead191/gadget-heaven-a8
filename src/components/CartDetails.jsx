// import React, { useEffect, useState } from 'react';
import { LuTrash } from "react-icons/lu";

const CartDetails = ({ product, handleRemove }) => {
    const { product_id, product_title, product_image, description, price } = product
    


    

    return (
        <div className="card card-side bg-white shadow-xl mb-4 ">
            <figure>
                <img className='w-[200px] object-cover h-[160px]'
                    src ={product_image}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p className='w-[1000px]'> {description}</p>
                <p>Price: ${price}</p>


                
            </div>
            <div className=" place-content-center ">
                    <button onClick={()=> handleRemove(product_id)} className="btn text-xl text-red-500 lg:mr-5"><LuTrash /></button>
                </div>

        </div>
    );
};

export default CartDetails;