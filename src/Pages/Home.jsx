import React from 'react';
import Banner from '../components/Banner';
import CardSection from '../components/CardSection';
import CoffeeCard from '../components/CoffeeCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CardSection></CardSection>
            <CoffeeCard></CoffeeCard>
        </div>
    );
};

export default Home;