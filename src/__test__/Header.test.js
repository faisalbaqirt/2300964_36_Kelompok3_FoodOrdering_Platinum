import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("Header component renders with expected text", () => {
  render(<Header />);

  const headerText = screen.getByText("Ayam Geprek Mang Iyok");
  const reservationsText = screen.getByText(
    "Reservations: (+62) 822 1854 2511"
  );

  expect(headerText).toBeInTheDocument();
  expect(reservationsText).toBeInTheDocument();
});
