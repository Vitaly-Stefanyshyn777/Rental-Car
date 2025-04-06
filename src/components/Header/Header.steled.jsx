import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const HeaderWrap = styled.header`
  width: 100%;
  height: 68px;
  background-color: #f7f7fb;
  display: flex;
  align-items: center;
`;

export const HeaderInner = styled.div`
  box-sizing: border-box;
  max-width: 1440px;
  padding: 0 128px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    padding: 0 32px;
  }
`;

export const LogoLink = styled(Link)`
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #121417;
  text-decoration: none;

  span {
    color: #3470ff;
  }
`;

export const HeaderList = styled.ul`
  display: flex;
  gap: 32px;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
`;

export const StyledLink = styled(NavLink)`
  font-family: "Manrope", sans-serif;
  font-size: 16px;
  line-height: 1.25;
  font-weight: 500;
  color: #121417;
  text-decoration: none;
  transition: color 0.3s ease;

  &.active {
    color: #0b44cd;
    font-weight: 700;
  }

  &:hover {
    color: #3470ff;
  }
`;
