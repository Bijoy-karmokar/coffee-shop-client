import React from 'react';
import Aroma from "../assets/icons/1.png"
import Quantity from "../assets/icons/2.png"
import Grade from "../assets/icons/3.png"
import Roasting from "../assets/icons/4.png"

const CardSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-secondary py-20 px-36'>
            <div>
                <img src={Aroma} alt="" />
                <h3>Awesome Aroma</h3>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div>
                <img src={Quantity} alt="" />
                <h3>High Quality</h3>
                <p>We served the coffee to you maintaining the best quality</p>
            </div>
            <div>
                <img src={Grade} alt="" />
                <h3>Pure Grades</h3>
                <p>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div>
                <img src={Roasting} alt="" />
                <h3>Proper Roasting</h3>
                <p>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
    );
};

export default CardSection;