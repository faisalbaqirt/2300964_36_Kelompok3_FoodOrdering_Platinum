import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AdminSidebar from "../pages/Admin/components/AdminSidebar";
import routes from "../pages/Admin/adminRoutes";
import UserContext from "../context/UserContext";

const user = { username: "binar" };

test("renders the AdminSidebar component", () => {
  render(
    <MemoryRouter>
      <UserContext.Provider value={user}>
        <AdminSidebar routes={routes} />
      </UserContext.Provider>
    </MemoryRouter>
  );

  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Dashboard")).toBeInTheDocument();
  expect(screen.getByText("Users")).toBeInTheDocument();
  expect(screen.getByText("Products")).toBeInTheDocument();
  expect(screen.getByText("Orders")).toBeInTheDocument();

  const profileLinkText = screen.getByText("Profile");
  const logoutButton = screen.getByText("Logout");

  fireEvent.click(profileLinkText);
  fireEvent.click(logoutButton);
});
