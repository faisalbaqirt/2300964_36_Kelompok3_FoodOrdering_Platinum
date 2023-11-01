import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Profile from "../pages/Profile/Profile";

test("renders user profile", () => {
  render(
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  );

  const profileTitle = screen.getByText("Profile");
  const editProfileButton = screen.getByText("Edit Profile");
  expect(profileTitle).toBeInTheDocument();
  expect(editProfileButton).toBeInTheDocument();
  fireEvent.click(editProfileButton);
});
