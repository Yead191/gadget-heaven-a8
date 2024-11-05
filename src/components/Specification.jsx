import React from 'react';
import { TiTick } from "react-icons/ti";


const Specification = ({spec}) => {
    // console.log(spec);
    return (
        <div className='flex items-center gap-2'>
              <TiTick className='text-lg' />
              <p>{spec}</p>
              
        </div>
    );
};

export default Specification;

