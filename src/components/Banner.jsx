import React from 'react';
import BannerImg from "../assets/more/3.png"

const Banner = () => {
    return (
        <div 
            className='flex flex-col items-end justify-center min-h-[calc(100vh-120px)] py-36 bg-cover bg-center px-8'
            style={{ backgroundImage: `url(${BannerImg})` }}
        >
            <div className='space-y-3 text-start max-w-2xl'>
                <h3 className='text-5xl text-white'>Would you like a Cup of Delicious Coffee?</h3>
                <p className='text-lg text-white'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='bg-primary py-2 px-6 text-xl'>Learn More</button>
            </div>
        </div>
    );
};

export default Banner;