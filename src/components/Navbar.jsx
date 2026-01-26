import React from 'react';
import logo from "../assets/more/logo1.png"

const Navbar = () => {
    return (
        <div className='flex items-center justify-center p-1 text-white bg-orange-950'>
           <img className='w-20' src={logo} alt="" />
           <p className='text-5xl md:text-6xl'>Espresso Emporium</p>
        </div>
    );
};

export default Navbar;