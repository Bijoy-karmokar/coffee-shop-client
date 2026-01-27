import React from "react";
import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  // console.log(coffee);
  const { _id, name, chef, photo, details, supplier } = coffee;

  const handleCoffeeDeleted = (id) => {
    //    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
            }
          });
      }
    });
  };

  const handleCoffeeEdit=(id)=>{
         console.log(id);
         
  }
  return (
    <div className="bg-base-200 flex items-center justify-evenly space-y-3 p-5">
      <div>
        <img src={photo} alt="" />
      </div>
      <div>
        <p>Name:{name}</p>
        <p>Chef:{chef}</p>
        <p>Details:{details}</p>
      </div>
      <div>
        <div className="join join-vertical space-y-2">
          <Link to={`/coffeeDetails/${_id}`} className="btn join-item">
            <FaEye size={25}></FaEye>
          </Link>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="btn join-item">
            <MdEdit size={25}></MdEdit>
          </button>
          </Link>
          <button
            onClick={() => handleCoffeeDeleted(_id)}
            className="btn join-item"
          >
            <MdDelete size={25}></MdDelete>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
