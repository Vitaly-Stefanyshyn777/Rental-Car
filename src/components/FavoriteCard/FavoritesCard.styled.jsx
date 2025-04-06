import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px; /* <-- додаємо відступ зверху */
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 48px 32px;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Btn = styled.button`
  margin-top: 40px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  background-color: #3470ff;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

export const HaveNotFav = styled.p`
  font-size: 24px;
  color: #8e8e93;
  margin-top: 60px;
  text-align: center;
`;
