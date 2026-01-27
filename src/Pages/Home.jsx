import React from "react";
import Banner from "../components/Banner";
import CardSection from "../components/CardSection";
import CoffeeCard from "../components/CoffeeCard";
import { Link, useLoaderData } from "react-router";
import { FiCoffee } from "react-icons/fi";

const Home = () => {
  const coffees = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <CardSection></CardSection>
      <div>
        <h2 className="text-5xl text-center">Our Popular Products</h2>
        <Link className="flex btn w-32 mx-auto" to="/addCoffee">
          Add Coffee <FiCoffee></FiCoffee>
        </Link>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
         {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
       </div>
      </div>
    </div>
  );
};

export default Home;
