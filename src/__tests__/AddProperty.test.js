import React from "react";
import { render } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

test("Add property", () => {
  const { asFragment } = render(<AddProperty />);
  expect(asFragment()).toMatchSnapshot();
});
