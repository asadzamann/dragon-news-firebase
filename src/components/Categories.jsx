import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("/categories.json")
.then(result => result.json())


const Categories = () => {
    const categories = use(categoryPromise)

    return (
        <div>
            <h1 className='font-bold'>All Categories ({categories.length})</h1>

            <div className='grid grid-cols-1 mt-5'>
                {categories.map(category =><NavLink key={category.id} to={`/catogory/${category.id}`}  className="btn bg-white border-none hover:bg-gray-100">{category.name}</NavLink>)}
            </div>

        </div>
    );
};

export default Categories;