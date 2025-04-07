import styled from "styled-components";
import { Link } from "react-router-dom";

export const H1 = styled.h1`
  font-weight: 700;
  font-size: 60px;
  line-height: 120%;
  color: #fff;
  margin-bottom: 16px;
  text-align: center;
`;

export const TitleWrap = styled.div`
  margin: 0 auto 24px;
  width: 100%;
  height: 700px; /* Фіксована висота для фонового блоку */
  overflow: hidden;
  background-image: url("/hero-image.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 1;
`;

export const DataImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Вирівнюємо контент донизу */
  align-items: center;
  width: 100%;
  height: 100%; /* Заповнює всю висоту TitleWrap */
  padding-bottom: 80px; /* Відступ від нижнього краю */
  color: #ffffff;
  text-align: center;
  overflow: hidden;
`;

export const RentalLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 276px;
  height: 44px;
  border-radius: 12px;
  background: #3470ff;
  text-decoration: none;
  position: relative;
  z-index: 2;
  transition: background 250ms ease;
  margin: 0 auto; /* Центруємо кнопку */

  &:hover,
  &:focus {
    background: #0b44cd;
  }

  /* Стилі тексту в кнопці */
  span {
    font-family: var(--font-family, "Manrope"), sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    color: #fff;
  }
`;
