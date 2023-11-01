import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "../pages/Login/Login";

jest.mock("../utils/userAPI");

test("handles user input and form submission", async () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const usernameInput = screen.getByLabelText("Username");
  const passwordInput = screen.getByLabelText("Password");
  const loginButtons = screen.getAllByText("Login");
  const loginButton = loginButtons[0];

  fireEvent.change(usernameInput, { target: { value: "testuser" } });
  fireEvent.change(passwordInput, { target: { value: "password123" } });
  fireEvent.click(loginButton);
});
