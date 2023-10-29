import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";

test("Contact component renders with expected content", () => {
  render(<Contact />);

  const heading = screen.getByText("Contact Us");
  expect(heading).toBeInTheDocument();

  const reservationsHeading = screen.getByText("Reservations");
  expect(reservationsHeading).toBeInTheDocument();
  expect(screen.getByText("Please call or text")).toBeInTheDocument();
  expect(screen.getByText("(+62) 822 1854 2511")).toBeInTheDocument();

  const addressHeading = screen.getByText("Address");
  expect(addressHeading).toBeInTheDocument();
  expect(screen.getByText("Komplek Bandung Indah Raya")).toBeInTheDocument();
  expect(screen.getByText("C 10 No. 1")).toBeInTheDocument();

  const hoursHeading = screen.getByText("Opening Hours");
  expect(hoursHeading).toBeInTheDocument();
  expect(screen.getByText("Weekday: 09:00 AM - 07:30 PM")).toBeInTheDocument();
  expect(screen.getByText("Weekend: 09:00 AM - 09:00 PM")).toBeInTheDocument();
});
