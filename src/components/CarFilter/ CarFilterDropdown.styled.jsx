import styled from "styled-components";

export const DropdownWrapper = styled.div`
  width: 224px;
  position: relative;
  font-family: "Manrope", sans-serif;
  margin-right: 18px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #8a8a89;
  margin-bottom: 6px;
  display: block;
`;

export const DropdownHeader = styled.button`
  width: 100%;
  padding: 12px 16px;
  height: 44px;
  background: #f9fafb;
  border-radius: 12px;
  border: 1px solid #d0d5dd;
  cursor: pointer;
  font-size: 16px;
  line-height: 128%;
  color: rgba(18, 20, 23, 0.9);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: border 0.2s ease;
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

export const DropdownList = styled.ul`
  position: absolute;
  top: 70px;
  width: 100%;
  max-height: 200px;
  background: #fff;
  border: 1px solid #d0d5dd;
  border-radius: 12px;
  box-shadow: 0 4px 36px rgba(0, 0, 0, 0.08);
  z-index: 10;
  padding: 12px 0;
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: #c1c1c1 transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const DropdownItem = styled.li`
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  color: #121417;
  background-color: transparent;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f2f2f2;
  }
`;
