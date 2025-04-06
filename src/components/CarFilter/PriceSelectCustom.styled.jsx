import styled from "styled-components";

export const SelectWrapper = styled.div`
  position: relative;
  width: 196px;
`;

export const SelectButton = styled.button`
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

export const ArrowIcon = styled.svg.attrs(() => ({
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

export const OptionsList = styled.ul`
  position: absolute;
  top: 48px;
  left: 0;
  width: 100%;
  max-height: 188px;
  background: var(--white, #ffffff);
  border: 1px solid var(--inputs);
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

export const OptionItem = styled.li`
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
