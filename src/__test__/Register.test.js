import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Register from "../pages/Register/Register";

jest.mock("../utils/userAPI");

test("handles user input and form submission", async () => {
  render(
    <MemoryRouter>
      <Register />
    </MemoryRouter>
  );

  const usernameInput = screen.getByLabelText("Username");
  const emailInput = screen.getByLabelText("Email address");
  const passwordInput = screen.getByLabelText("Password");
  const registerButtons = screen.getAllByText("Sign Up");
  const registerButton = registerButtons[0];

  fireEvent.change(usernameInput, { target: { value: "testuser" } });
  fireEvent.change(emailInput, { target: { value: "user@test.com" } });
  fireEvent.change(passwordInput, { target: { value: "password123" } });
  fireEvent.click(registerButton);
});
