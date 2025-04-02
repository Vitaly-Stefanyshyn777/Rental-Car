import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
export const HeaderWrap = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px 40px;
`;

export const HeaderList = styled.ul`
  display: flex;
  // gap: 20px;
  gap: 32px;
  width: 136px;
  height: 20px;
`;

export const ListItem = styled.li`
  // padding: 10px;
  width: 120px;
  cursor: pointer;
  // border: 2px solid darkblue;
  border-radius: 15px;
`;

export const StyledLink = styled(NavLink)`
  font-family: "ManropeSemiBold";
  // font-size: 18px;
  font-size: 16px;
  // line-height: 143%;
  line-height: 1.25;
  text-align: center;
  // font-weight: 600;
  // color: var(--button-hover, #3470ff);
  font-weight: 500;
  text-decoration: none;
  display: flex;
  transition: color 0.3s;
  justify-content: center;
  align-items: center;
  gap: 10px;
  &.active {
    font-weight: 700;
    color: #0b44cd; /* або інший активний колір */
  }
`;

export const SvgHeader = styled.svg`
  stroke: blue;
  fill: transparent;
`;

export const LogoLink = styled(Link)`
  font-family: var(--font-family, "Manrope", sans-serif);
  font-weight: 700;
  font-size: 24px;
  color: #121417;
  text-decoration: none;
  margin-right: auto;

  span {
    color: var(--button-hover, #3470ff);
  }
`;
