import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import FormOrder from "../components/FormOrder";

describe("FormOrder component", () => {
  it("should submit the form with the correct data", async () => {
    const onOrderSubmit = jest.fn();

    render(<FormOrder onOrderSubmit={onOrderSubmit} />);

    const nameInput = screen.getByLabelText("Nama Pemesan:");
    const telephoneInput = screen.getByLabelText("Telepon:");
    const addressInput = screen.getByLabelText("Alamat:");

    fireEvent.change(nameInput, { target: { value: "Ryan" } });
    fireEvent.change(telephoneInput, { target: { value: "1234567890" } });
    fireEvent.change(addressInput, { target: { value: "123 Medan" } });

    const submitButton = screen.getByText("Pesan");
    fireEvent.click(submitButton);
  });
});
