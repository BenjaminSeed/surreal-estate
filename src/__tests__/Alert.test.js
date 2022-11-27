import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

test("displays and error message", () => {
  const { getByText } = render(<Alert message="Error!" />);
  expect(getByText(/Error/).textContent).toBe("Error!");
});

test("displays a sucess message", () => {
  const { getByText } = render(<Alert message="Success!!!" success />);
  expect(getByText(/Success/).textContent).toBe("Success!!!");
});

test("does not render an error or a success message if message props is empty", () => {
  const { asFragment } = render(<Alert message="" />);
  const alert = asFragment();
  expect(alert).toMatchSnapshot();
});

test("renders an error message if message props is equal to messaqge Error!", () => {
  const { asFragment, getByText } = render(<Alert message="Error!" />);
  expect(asFragment()).toMatchSnapshot();
  expect(getByText(/Error/).textContent).toBe("Error!");
});

test("renders a success message if message props is equal to messaqge Success!!!", () => {
  const { asFragment, getByText } = render(<Alert message="Success!!!" />);
  expect(asFragment()).toMatchSnapshot();
  expect(getByText(/Success/).textContent).toBe("Success!!!");
});
