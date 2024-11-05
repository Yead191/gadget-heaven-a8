import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import HeadingBanner from './HeadingBanner';
import Specification from './Specification';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { addToCart } from './utilities';




const ProductDetails = () => {
    const { id } = useParams()
    const data = useLoaderData()
    const [product, setProduct] = useState({})


    useEffect(() => {
        const singleProduct = data.find(item => item.product_id === parseInt(id))


        setProduct(singleProduct)
    }, [id, data])


    // console.log(product);
    const { product_image, product_title, price, availability, description, specification = [], rating } = product
    


    const handleAddToCart= (product) =>{
        addToCart(product)

    }

    return (
        <div >
            <HeadingBanner title='Product Details' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!' height='lg:h-[400px]'></HeadingBanner>

            <div className="hero bg-white w-11/12 lg:w-8/12 mx-auto relative -top-20 lg:-top-40 rounded-xl ">
                <div className="hero-content flex-col lg:h-[570px] lg:flex-row ">
                    
                    <img
                        src={product_image}
                        className="lg:max-w-sm rounded-lg  lg:max-h-full object-fit    " />
                    <div className='lg:ml-5 '>
                        <h1 className="text-3xl md:text-4xl font-bold">{product_title}</h1>
                        <p className="py-2 font-medium">
                            Price: ${price}
                        </p>
                        <button className={`btn btn-xs font-bold mb-2 ${availability ? 'text-green-500' : 'text-red-500'}`}>{availability ? 'In Stock' : 'Out of Stock'}
                        </button>
                        <p className='font-light text-gray-500'>{description}</p>
                        <p className='font-bold my-2'>Specification: </p>

                        <div className=''>
                            {specification.length > 0 ? (
                                specification.map((spec, index) => (
                                    <Specification key={index} spec={spec} />
                                ))
                            ) : (
                                <p className="text-gray-500">No specifications available</p>
                            )}



                        </div>
                        <p className='font-bold my-2'>Rating: </p>
                        <div className='gap-4 flex items-center'>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-orange-400"
                                     />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" defaultChecked/>
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <button className='btn btn-sm'>{rating}</button>

                        </div>
                        <div className='mt-5 flex items-center gap-4'>
                            <button onClick={()=> handleAddToCart(product)} className='btn text-md rounded-full px-8 text-white bg-[#9538E2]'>Add To Cart <MdOutlineShoppingCart />
                            </button>
                            <button className='btn rounded-full'><FaRegHeart />
                            </button>

                        </div>



                    </div>

                </div>
            </div>

        </div>


    );
};

export default ProductDetails;