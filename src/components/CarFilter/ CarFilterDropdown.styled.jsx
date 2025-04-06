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

export const DropdownHeader = styled.div`
  width: 100%;
  padding: 12px 16px;
  height: 44px;
  background: #f9fafb;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  line-height: 128%;
  color: rgba(18, 20, 23, 0.9);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ArrowIcon = styled.div`
  width: 10px;
  height: 6px;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23344054' stroke-width='1.5'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
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
`;

export const DropdownItem = styled.li`
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  color: #121417;
  &:hover {
    background-color: #f2f2f2;
  }
`;
