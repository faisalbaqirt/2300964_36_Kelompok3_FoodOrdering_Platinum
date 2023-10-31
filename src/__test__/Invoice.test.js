import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Invoice from "../components/Invoice";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Mock html2canvas and jsPDF functions
jest.mock("html2canvas", () => ({
  toCanvas: jest.fn(() =>
    Promise.resolve({
      toDataURL: jest.fn(),
      width: 200,
      height: 100
    })
  ),
}));

jest.mock("jspdf", () => {
  const mockSave = jest.fn();
  return jest.fn(() => ({
    addImage: jest.fn(),
    save: mockSave,
  }));
});

test("renders the Invoice component", () => {
  render(<Invoice orderId="your-order-id" onBackToOrder={() => {}} />);

  const titleText = screen.getByText("Invoice");
  const paymentMethodText = screen.getByText("METODE PEMBAYARAN");
  const confirmationText = screen.getByText("KONFIRMASI PEMBAYARAN");

  expect(titleText).toBeInTheDocument();
  expect(paymentMethodText).toBeInTheDocument();
  expect(confirmationText).toBeInTheDocument();

  const downloadButton = screen.getByText("Download");
  fireEvent.click(downloadButton);

  expect(html2canvas.toCanvas).toHaveBeenCalled();
  expect(jsPDF).toHaveBeenCalled();
  expect(jsPDF().addImage).toHaveBeenCalled();
  expect(jsPDF().save).toHaveBeenCalled();
});
