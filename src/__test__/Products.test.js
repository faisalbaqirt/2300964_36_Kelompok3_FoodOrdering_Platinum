import React from "react";
import { render, screen } from "@testing-library/react";
import Products from "../components/Products";

test("renders product names and a link in the Products component", () => {
  render(<Products />);

  const menuText = screen.getByText("Menu");
  const orderLinkText = screen.getByText("Order Here!");

  expect(menuText).toBeInTheDocument();
  expect(orderLinkText).toBeInTheDocument();
});
