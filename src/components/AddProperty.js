import React, { useState } from "react";
import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      bedrooms: 0,
      bathrooms: 0,
      price: 0,
      type: "",
      email: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Title
          <input
            type="text"
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>

        <div>
          <label htmlFor="city">
            City
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Shefield">Shefield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="bedrooms">
            No of Bedrooms
            <input
              type="number"
              id="bedrooms"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="bathrooms">
            No of Bathrooms
            <input
              type="number"
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="price">
            Price
            <input
              type="number"
              id="price"
              name="price"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="type">
            Type
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>
        </div>

        <button type="submit">Add</button>
      </form>
      <div>Add Property Page</div>
    </div>
  );
};

export default AddProperty;
