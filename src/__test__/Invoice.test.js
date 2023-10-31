import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Invoice from "../components/Invoice";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

jest.mock("html2canvas", () => ({
  __esModule: true,
  default: jest.fn(() =>
    Promise.resolve({
      toDataURL: jest.fn(),
      width: 200,
      height: 100,
    })
  ),
}));

jest.mock("jspdf", () => {
  return jest.fn(() => ({
    addImage: jest.fn(),
    save: jest.fn()
  }));
});

test("renders the Invoice component and handles download", async () => {
  render(<Invoice orderId="your-order-id" onBackToOrder={() => {}} />);

  const titleText = screen.getByText("Invoice");
  const paymentMethodText = screen.getByText("METODE PEMBAYARAN");
  const confirmationText = screen.getByText("KONFIRMASI PEMBAYARAN");

  expect(titleText).toBeInTheDocument();
  expect(paymentMethodText).toBeInTheDocument();
  expect(confirmationText).toBeInTheDocument();

  // Temukan tombol "Download" dan klik
  const downloadButton = screen.getByText("Download");
  fireEvent.click(downloadButton);

  // Tunggu hingga downloadPDF selesai
  await waitFor(() => {
    expect(html2canvas.default).toHaveBeenCalled();
  });

  expect(jsPDF).toHaveBeenCalled();
  expect(jsPDF().addImage).toHaveBeenCalled();
  expect(jsPDF().save).toHaveBeenCalled();
});
