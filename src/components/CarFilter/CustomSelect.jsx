import React, { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";

const SelectWrapper = styled.div`
  position: relative;
  width: 204px;
`;

const SelectButton = styled.button`
  font-family: "ManropeMedium";
  font-size: 16px;
  font-weight: 500;
  line-height: 125%;
  color: rgba(18, 20, 23, 0.9);
  width: 204px;
  height: 44px;
  padding: 12px 16px;
  border-radius: 12px;
  border: none;
  background: var(--inputs, #f9fafb);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ArrowIcon = styled.svg.attrs(() => ({
  viewBox: "0 0 10 6",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
}))`
  width: 10px;
  height: 6px;
  margin-left: 8px;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

const OptionsList = styled.ul`
  position: absolute;
  top: 48px;
  left: 0;
  width: 100%;
  max-height: 272px;
  background: #ffffff;
  border: 1px solid #f9fafb;
  border-radius: 12px;
  box-shadow: 0 4px 36px rgba(0, 0, 0, 0.02);
  overflow-y: auto;
  padding: 0;
  margin: 4px 0 0;
  list-style: none;
  z-index: 999;

  scrollbar-width: thin;
  scrollbar-color: var(--gray-light, #c1c1c1) transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-light, #c1c1c1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const OptionItem = styled.li`
  font-family: "ManropeMedium";
  font-size: 16px;
  font-weight: 500;
  line-height: 125%;
  color: var(--gray, #8a8a89);
  padding: 12px 16px;
  cursor: pointer;
  background: ${({ $isSelected }) => ($isSelected ? "#f0f0f0" : "transparent")};

  &:hover {
    background: #f0f0f0;
  }
`;

const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder = "Select...",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggleOpen = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = useCallback(
    (option) => {
      if (option.value !== value) {
        onChange(option);
      }
      setIsOpen(false);
    },
    [onChange, value]
  );

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <SelectWrapper ref={wrapperRef}>
      <SelectButton onClick={handleToggleOpen}>
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <ArrowIcon $isOpen={isOpen}>
          <path
            d="M1 1L5 5L9 1"
            stroke="#344054"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </ArrowIcon>
      </SelectButton>
      {isOpen && (
        <OptionsList>
          {options.map((option) => (
            <OptionItem
              key={option.value}
              $isSelected={option.value === value}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </OptionItem>
          ))}
        </OptionsList>
      )}
    </SelectWrapper>
  );
};

export default CustomSelect;
