import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
import HeadingBanner from '../components/HeadingBanner';
import { useLoaderData } from 'react-router-dom';



const Statistics = () => {
    const data = useLoaderData()
    // const { product_title, price, rating } = data
    // console.log(data);
    return (
        <div>
            <div>
                <HeadingBanner title='Statistics' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!' height='lg:h-[280px]'></HeadingBanner>
            </div>

            <div className='w-11/12 md:w-10/12 mx-auto my-12 '>
                <div className='items-center'>
                    <h1 className='text-2xl lg:text-3xl font-semibold'>Statistics</h1>
                </div>

                <div className='my-12' style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <XAxis dataKey='product_title' stroke="#8884d8" />
                            <YAxis dataKey='price' stroke="#8884d8" />
                            <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                            <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <Bar dataKey="price" fill="#8884d8" barSize={30} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>


            </div>

        </div>

    )
};

export default Statistics;