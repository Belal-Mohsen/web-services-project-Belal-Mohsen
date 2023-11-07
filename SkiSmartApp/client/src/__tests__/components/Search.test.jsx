import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "../../components/Search.jsx";

const mockOnChange = jest.fn();
const mockOnSubmit = jest.fn();
const initialFormData = { address: "", distance: 1, date: "" };

describe("Search Component", () => {
  beforeEach(() => {
    render(
      <Search
        formData={initialFormData}
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
      />
    );
  });

  it("allows input to be entered in the address field", () => {
    const addressInput = screen.getByTestId('address-input');
    fireEvent.change(addressInput, { target: { value: '12345' } });
    expect(mockOnChange).toHaveBeenCalledWith(
      expect.objectContaining({ address: '12345' })
    );
  });

  it("restricts minimum date to be current date", () => {
    const dateInput = screen.getByTestId("date-input");
    const today = new Date();
    const formattedToday = today.toISOString().split('T')[0]; // get YYYY-MM-DD part
    const tenDaysPast = new Date(today)
    tenDaysPast.setDate(tenDaysPast.getDate() - 10);
    const formattedTenDaysPast = tenDaysPast.toISOString().split('T')[0]; // get YYYY-MM-DD part
    fireEvent.change(dateInput, { target: { value: formattedTenDaysPast } } )
    expect(mockOnChange).toHaveBeenCalledWith(
      expect.objectContaining({ date: formattedTenDaysPast })
    );
    expect(dateInput).toHaveValue(formattedToday); // because we don't have handle change, expect to have minDate as default
  });

  it("has a distance slider that calls onChange when adjusted", () => {
    const slider = screen.getByRole("slider");
    fireEvent.change(slider, { target: { value: 50 } });
    expect(mockOnChange).toHaveBeenCalledWith(
      expect.objectContaining({ distance: 50 })
    );
  });

});
