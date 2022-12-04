import PropTypes from "prop-types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/propertyCard.css";
import {
  faBath,
  faBed,
  faSterlingSign,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property-card">
      <div className="title">{title}</div>
      <div className="type">{type}</div>
      <div className="bathrooms">
        <div className="icon">
          <FontAwesomeIcon icon={faBath} />
        </div>
        {bathrooms}
      </div>
      <div className="bedrooms">
        <div className="icon">
          <FontAwesomeIcon icon={faBed} />
        </div>
        {bedrooms}
      </div>
      <div className="price">
        <div className="icon">
          <FontAwesomeIcon icon={faSterlingSign} />
        </div>
        {price}
      </div>
      <div className="city">{city}</div>
      <div className="email">
        <a href={`mailto:${email}`}>
          <div className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          {email}
        </a>
      </div>
    </div>
  );
};

export default PropertyCard;

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
