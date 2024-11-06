import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";


const OfferCard = ({offer}) => {
    // console.log(offer);
    const {image, title, startDate, endDate, description} = offer
    return (
        <div className="card bg-base-100  shadow-xl">
            <figure>
                <img className='h-[250px] p-2 rounded-xl object-cover'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                   {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end my-3">
                    <div className="badge badge-outline items-center gap-3"><FaCalendarAlt />{startDate}
                    </div>
                    <div className="badge badge-outline items-center gap-3"><FaCalendarAlt />{endDate}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferCard;