import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());
    console.log(coffeeData);

    //   save coffee info in database
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Coffee data added", data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Coffee has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl">Add New Coffee</h2>
        <p className="text-lg">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at <br /> its layout. The
          point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed <br /> to using Content here.
        </p>
      </div>
      <div className="px-60">
        <form onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-2 gap-5">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Name:</legend>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Enter Coffee Name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Chef:</legend>
              <input
                type="text"
                name="chef"
                className="input w-full"
                placeholder="Enter Coffee chef"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Supplier:</legend>
              <input
                type="text"
                name="supplier"
                className="input w-full"
                placeholder="Enter Coffee Supplier"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Taste:</legend>
              <input
                type="text"
                name="taste"
                className="input w-full"
                placeholder="Enter Coffee Taste"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Category:</legend>
              <input
                type="text"
                name="category"
                className="input w-full"
                placeholder="Enter Coffee Cagegory"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Details:</legend>
              <input
                type="text"
                name="details"
                className="input w-full"
                placeholder="Enter Coffee Details"
              />
            </fieldset>
          </div>
          <fieldset className="fieldset my-2">
            <legend className="fieldset-legend">Photo:</legend>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Enter Coffee URL"
            />
          </fieldset>
          <button type="submit" className="btn bg-primary w-full">
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
