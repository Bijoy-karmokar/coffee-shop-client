import React from 'react';
import { FiCoffee } from 'react-icons/fi';
import { Link } from 'react-router';

const CoffeeCard = () => {
    return (
        <div>
            <h2 className='text-5xl text-center'>Our Popular Products</h2>
            <Link to="/addCoffee">Add Coffee <FiCoffee></FiCoffee></Link>
        </div>
    );
};

export default CoffeeCard;