import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("Property Card", () => {
  const validProps = {
    title: "2 Bedroom Cottage",
    type: "Cottage",
    bathrooms: 2,
    bedrooms: 1,
    price: 1000,
    city: "Leeds",
    email: "poppy@mcr.codes",
  };
  // validProps.title ----> spread operator?

  test("renders title", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);
    expect(getByText("2 Bedroom Cottage")).toHaveClass("title");
  });

  test("renders type", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);
    expect(getByText("Cottage")).toHaveClass("type");
  });

  test("renders bathrooms", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);
    expect(getByText("2")).toHaveClass("bathrooms");
  });

  test("renders bedrooms", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);
    expect(getByText("1")).toHaveClass("bedrooms");
  });

  test("renders price", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);
    expect(getByText("1000")).toHaveClass("price");
  });

  test("renders city", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);
    expect(getByText("Leeds")).toHaveClass("city");
  });

  test("renders email", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);
    expect(getByText("poppy@mcr.codes")).toHaveClass("email");
  });
});

// toBe??
// title
// type
// bathrooms
// bedrooms
// price
// city
// email
