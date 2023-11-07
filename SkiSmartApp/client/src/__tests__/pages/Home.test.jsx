import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../pages/Home";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));
const mockHandleChange = jest.fn();

describe("Home Page", () => {
  beforeEach(() => {
    render(
      <Home />
    );
  });

  it("renders Search component", () => {
    expect(screen.getByTestId("address-input")).toBeInTheDocument();
    expect(screen.getByTestId("date-input")).toBeInTheDocument();
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });

  it("submits form data and navigates to results page", () => {
    const addressInput = screen.getByTestId("address-input");
    fireEvent.change(addressInput, { target: { value: "12345" } });
    const submitButton = screen.getByRole("button", { name: /search/i });
    fireEvent.click(submitButton);

    expect(mockNavigate).toHaveBeenCalledWith("/results", {
      state: { address: "12345", distance: 1, date: "" },
    });
  });

});
