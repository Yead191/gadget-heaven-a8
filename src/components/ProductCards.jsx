import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const ProductCards = () => {
    const { category } = useParams()
    const data = useLoaderData()
    // console.log(data);
    const [products, setProducts] = useState([])
    // console.log(category);

    useEffect(() => {
        if (category) {
            const filterByCat = [...data].filter(product => product.category === category)
            setProducts(filterByCat)

        }
        else {
            setProducts(data)

        }
    },[category, data])
    return (
        <div className='w-full'>
            {products.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4'>
                    {products.map(product => (
                        <Card key={product.product_id} product={product} />
                    ))}
                </div>
            ) : (
                <p className='text-center text-purple-700 text-5xl mt-36 font-semibold '>No products available in this category.</p>
            )}
        </div>
    );
};

export default ProductCards;