import styled from "styled-components";

export const ListOfCars = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px 32px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const HaveNotCars = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 40px;
  text-align: center;

  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #121417;
`;

export const LoadMoreBtnWrapper = styled.button`
  width: 156px;
  height: 44px;
  padding: 12px 51px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
  border: 1px solid #0b44cd;
  border-radius: 12px;

  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #0b44cd;

    span {
      color: #ffffff;
    }
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const LoadMoreText = styled.span`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 16px;
  line-height: 125%;
  color: #101828;
  white-space: nowrap;
`;
