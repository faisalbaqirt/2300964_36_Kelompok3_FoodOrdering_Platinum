import React from "react";
import { render, screen } from "@testing-library/react";
import AdminDashboard from "../pages/Admin/components/AdminDashboard";

jest.mock("../utils/adminAPI.js");

jest.mock("react-chartjs-2", () => ({
  Bar: () => null,
  Line: () => null,
}));

test("renders the AdminDashboard component", () => {
  render(<AdminDashboard />);

  const titleText = screen.getByText("Dashboard");
  const productText = screen.getByText("Total Products");
  const userText = screen.getByText("Total Users");
  const salesText = screen.getByText("Sales Value");

  expect(titleText).toBeInTheDocument();
  expect(productText).toBeInTheDocument();
  expect(userText).toBeInTheDocument();
  expect(salesText).toBeInTheDocument();
});
