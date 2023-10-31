import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

test("Navbar renders with expected text", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Menu")).toBeInTheDocument();
  expect(screen.getByText("Order")).toBeInTheDocument();
  expect(screen.getByText("Contact")).toBeInTheDocument();
  expect(screen.getByText("Sign Up")).toBeInTheDocument();
  expect(screen.getByText("Login")).toBeInTheDocument();
});
