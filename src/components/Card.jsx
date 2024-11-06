import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
    // console.log(product);
    const { product_id, product_title, product_image, price } = product || {}
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img className='p-5 rounded-xl w-full h-[300px] object-cover  overflow-hidden'
                    src={product_image}
                    alt="product" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p className='text-lg text-gray-500'>Price: ${price}</p>

            </div>
            <div className="card-actions justify-start pl-4 pb-4 ">
                <Link to={`/product/${product_id
                    }`}><button className="btn rounded-full px-8 border border-[#9538E2] text-[#9538E2] font-semibold md:text-base">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Card;