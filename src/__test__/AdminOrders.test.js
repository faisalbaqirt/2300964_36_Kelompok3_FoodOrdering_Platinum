import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AdminOrders from "../pages/Admin/components/AdminOrders";

jest.mock("../utils/orderAPI.js");

test("renders the AdminOrders component", () => {
  render(<AdminOrders />);

  const titleText = screen.getByText("Order List");
  expect(titleText).toBeInTheDocument();

  const addButton = screen.getByText("Add");
  fireEvent.click(addButton);

  const modalTitle = screen.getByText("Tambah Pesanan", { selector: "h5" });
  expect(modalTitle).toBeInTheDocument();

  const productInput = screen.getByLabelText("Nama Produk:");
  const quantityInput = screen.getByLabelText("Jumlah:");
  const nameInput = screen.getByLabelText("Nama Pemesan:");
  const telephoneInput = screen.getByLabelText("Telepon:");
  const addressInput = screen.getByLabelText("Alamat:");

  fireEvent.change(productInput, { target: { value: "ayam geprek" } });
  fireEvent.change(quantityInput, { target: { value: "10" } });
  fireEvent.change(nameInput, { target: { value: "binar" } });
  fireEvent.change(telephoneInput, { target: { value: "08123456789" } });
  fireEvent.change(addressInput, { target: { value: "jalan binar academy" } });
});
