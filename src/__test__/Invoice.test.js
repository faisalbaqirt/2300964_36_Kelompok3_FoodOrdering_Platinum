import React from "react";
import { render, screen } from "@testing-library/react";
import Invoice from "../components/Invoice";

jest.mock("../utils/downloadPDF", () => ({
  downloadPDF: jest.fn(),
}));

test("renders the Invoice component", () => {
  render(<Invoice orderId="your-order-id" onBackToOrder={() => {}} />);

  const titleText = screen.getByText("Invoice");
  const paymentMethodText = screen.getByText("METODE PEMBAYARAN");
  const confirmationText = screen.getByText("KONFIRMASI PEMBAYARAN");

  expect(titleText).toBeInTheDocument();
  expect(paymentMethodText).toBeInTheDocument();
  expect(confirmationText).toBeInTheDocument();
});
