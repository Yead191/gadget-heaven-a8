import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Categories = ({ categories }) => {
    const location = useLocation();
    const [isActive, setIsActive] = useState(location.pathname === "/" ? "All Products" : "");

    useEffect(() => {
        // Update active state if path changes
        if (location.pathname === "/") {
            setIsActive("All Products");
        }
    }, [location.pathname]);

    return (
        <div className="flex flex-col">
            {categories.map(category => (
                <NavLink
                    to={category.category_name === "All Products" ? "/" : `/category/${category.category_name}`}
                    key={category.category_id}
                    className={`btn w-10/12 mx-auto mt-1 mb-2 transition hover:scale-110 ${
                        isActive === category.category_name ? "active" : ""
                    }`}
                    onClick={() => setIsActive(category.category_name)}
                >
                    {category.category_name}
                </NavLink>
            ))}
        </div>
    );
};

export default Categories;
