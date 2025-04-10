import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const HeaderWrap = styled.header`
  width: 100%;
  height: 80px;
  background-color: #f7f7fb;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  overflow: hidden; /* прибираємо скрол */
`;

export const HeaderInner = styled.div`
  box-sizing: border-box;
  max-width: 1440px;
  padding: 0px 128px 0;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    padding: 10px 32px 0;
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
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
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
