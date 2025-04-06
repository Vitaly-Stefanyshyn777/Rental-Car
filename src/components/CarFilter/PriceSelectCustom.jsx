import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  SelectWrapper,
  SelectButton,
  OptionsList,
  OptionItem,
} from "./PriceSelectCustom.styled";

const PriceSelectCustom = ({
  options,
  value,
  onChange,
  placeholder = "All",
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
        <span>{selectedOption ? `${selectedOption.label}` : placeholder}</span>
      </SelectButton>
      {isOpen && (
        <OptionsList>
          {options.map((option) => (
            <OptionItem
              key={option.value}
              isSelected={option.value === value}
              onClick={() => handleOptionClick(option)}
            >
              ${option.label}
            </OptionItem>
          ))}
        </OptionsList>
      )}
    </SelectWrapper>
  );
};

export default PriceSelectCustom;
