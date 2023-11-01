import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AdminUsers from "../pages/Admin/components/AdminUsers";

jest.mock("../utils/userAPI.js");

test("renders the AdminUsers component", () => {
  render(<AdminUsers />);

  const titleText = screen.getByText("User List");
  expect(titleText).toBeInTheDocument();

  const addButton = screen.getByText("Add");
  fireEvent.click(addButton);

  const modalTitle = screen.getByText("Tambah User", { selector: "h5" });
  expect(modalTitle).toBeInTheDocument();

  const usernameInput = screen.getByLabelText("Username:");
  const emailInput = screen.getByLabelText("Email:");
  const nameInput = screen.getByLabelText("Name:");
  const passwordInput = screen.getByLabelText("Password:");
  const photoInput = screen.getByLabelText("Profil Picture:");
  const roleInput = screen.getByLabelText("Role:");

  fireEvent.change(usernameInput, { target: { value: "binar123" } });
  fireEvent.change(emailInput, { target: { value: "binar@mangiyok.com" } });
  fireEvent.change(nameInput, { target: { value: "binar academy" } });
  fireEvent.change(passwordInput, { target: { value: "123binar" } });
  fireEvent.change(photoInput, { target: { files: "gambar.jpg" } });
  fireEvent.change(roleInput, { target: { value: "user" } });
});
