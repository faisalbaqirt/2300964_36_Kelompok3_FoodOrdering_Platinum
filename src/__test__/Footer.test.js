import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

test("Footer component should display the copyright information", () => {
  render(<Footer />);

  const copyrightText = screen.getByText("© 2023 Team Three");
  expect(copyrightText).toBeInTheDocument();
});
