import { React, useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";

const Properties = () => {
  const initialState = {
    properties: [],
    alert: {
      message: "",
      isSuccess: true,
    },
  };
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    setAlert({ message: "", isSuccess: false });
    axios
      .get("http://localhost:3000/api/v1/PropertyListing", properties)
      .then((response) => setProperties(response.data))
      .catch(() => {
        setAlert({
          message: "Search has been successful",
          isSuccess: true,
        });
      });
  }, []);

  return (
    <>
      <div>
        <div className="properties">
          {properties.map((property) => (
            <div key={property._id} className="item">
              <PropertyCard {...property} />
            </div>
          ))}
          <Alert message={alert.message} success={alert.isSuccess} />
        </div>
      </div>
      <div>Properties Page</div>
    </>
  );
};

export default Properties;
