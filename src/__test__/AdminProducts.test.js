import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AdminProducts from "../pages/Admin/components/AdminProducts";

jest.mock("../utils/productAPI.js");

test("renders the AdminProducts component", () => {
  render(<AdminProducts />);

  const titleText = screen.getByText("Product List");
  expect(titleText).toBeInTheDocument();

  const addButton = screen.getByText("Add");
  fireEvent.click(addButton);

  const modalTitle = screen.getByText("Tambah Produk", { selector: "h5" });
  expect(modalTitle).toBeInTheDocument();

  const productInput = screen.getByLabelText("Nama Produk:");
  const descriptionInput = screen.getByLabelText("Deskripsi Produk:");
  const priceInput = screen.getByLabelText("Harga Produk:");
  const imageInput = screen.getByLabelText("Gambar Produk:");

  fireEvent.change(productInput, { target: { value: "ayam geprek" } });
  fireEvent.change(descriptionInput, { target: { value: "ayam geprek" } });
  fireEvent.change(priceInput, { target: { value: "12000" } });
  fireEvent.change(imageInput, { target: { files: "gambar.jpg" } });
});
