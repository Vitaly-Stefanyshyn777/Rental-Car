import styled from "styled-components";
export const HaveNotFav = styled.div`
  display: flex;
  justify-content: center;

  margin: 0 auto;
  width: 50%;
  padding: 40px;

  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;
export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 156px;
  height: 44px;
  padding: 12px 51px;

  background: #ffffff;
  border: 1px solid #0b44cd;
  border-radius: 12px;

  color: #101828;
  font-family: "ManropeSemiBold", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
  white-space: nowrap; /* ⬅️ оце не дасть тексту переноситись */

  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #0b44cd;
    color: #ffffff;
  }

  &:active {
    transform: scale(0.98);
  }
`;
