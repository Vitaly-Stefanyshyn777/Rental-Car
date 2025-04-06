import styled from "styled-components";

export const StyledDateInput = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container input {
    width: 100%;
    padding: 12px 20px;
    font-size: 14px;
    border: 1px solid #d0d5dd;
    border-radius: 12px;
    background-color: #f9fafb;
    color: #344054;

    &::placeholder {
      color: #98a2b3;
    }

    &:focus {
      border-color: #3470ff;
      outline: none;
      box-shadow: 0 0 0 4px rgba(52, 112, 255, 0.1);
    }
  }

  /* СТИЛІ ДЛЯ КАЛЕНДАРЯ */

  .react-datepicker {
    width: 276px;
    // height: 284px;
    background-color: var(--white, #ffffff);
    border: 1px solid var(--button, #d0d5dd);
    border-radius: 12px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    font-family: var(--second-family, inherit);
    padding: 0;
  }

  .react-datepicker__triangle {
    fill: var(--white);
    border-bottom-color: var(--white);
  }

  .react-datepicker__header {
    background-color: transparent;
    border-bottom: 1px solid #e4e7ec;
    padding: 12px 0 8px;
  }

  .react-datepicker__current-month {
    font-size: 16px;
    font-weight: 600;
    color: var(--main, #101828);
    text-align: center;
    line-height: 120%;
    margin-bottom: 4px;
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    padding: 0 12px;
    margin-bottom: 8px;
    width: 252px;
    height: 14px;
  }

  .react-datepicker__day-name {
    width: 36px;
    height: 14px;
    font-size: 12px;
    font-weight: 500;
    color: #98a2b3;
    text-align: center;
  }

  .react-datepicker__month {
    margin: 0;
    padding: 0 12px 12px;
  }

  .react-datepicker__week {
    display: flex;
    justify-content: space-between;
    width: 252px;
    height: 32px;
  }

  .react-datepicker__day {
    width: 36px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    color: #101828;
    transition: background-color 0.2s ease;
  }

  .react-datepicker__day:hover {
    background-color: rgba(52, 112, 255, 0.1);
    color: #3470ff;
  }

  .react-datepicker__day--selected {
    background-color: var(--button, #3470ff);
    color: #fff;
    border-radius: 32px;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: rgba(52, 112, 255, 0.2);
    color: #1d4ed8;
  }

  .react-datepicker__day--outside-month {
    color: #cbd5e1;
  }

  .react-datepicker__navigation {
    top: 16px;
    padding: 0 12px;
  }

  .react-datepicker__navigation-icon::before {
    border-color: var(--main, #344054);
    border-width: 2px 2px 0 0;
    width: 8px;
    height: 8px;
  }
`;
