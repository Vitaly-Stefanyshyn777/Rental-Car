import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { StyledDateInput } from "./DateInput.styled";

const DateInput = ({ value, onChange, icon: Icon }) => {
  return (
    <StyledDateInput>
      <DatePicker
        selected={value}
        onChange={onChange}
        placeholderText="Booking date"
        dateFormat="dd.MM.yyyy"
        calendarStartDay={1}
      />
    </StyledDateInput>
  );
};

export default DateInput;
