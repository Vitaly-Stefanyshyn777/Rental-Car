import styled, { css } from "styled-components";

export const CardWrap = styled.div`
  position: relative;
  width: 274px;
  border-radius: 14px;
  background-color: #ffffff;
`;

export const ImgWrapper = styled.div`
  width: 274px;
  height: 268px;
  background-color: #ccc;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 14px;
`;

export const SvgHeart = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  fill: transparent;
  stroke: rgba(255, 255, 255, 0.8);
  transition: fill 0.3s ease, stroke 0.3s ease;

  ${({ $isFavorite }) =>
    $isFavorite &&
    css`
      fill: #3470ff;
      stroke: none;
    `}
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 16px 0 8px 0;
  padding: 0 4px;
`;

export const Subtitle = styled.p`
  font-family: "ManropeMedium", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #121417;
  margin: 0;
`;

export const Year = styled.span`
  color: #3470ff;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;

  padding: 0 4px;
  list-style: none;
  font-family: "ManropeRegular", sans-serif;
`;

export const Item = styled.li`
  font-size: 12px;
  font-weight: 400;
  line-height: 133%;
  color: #8d929a;
  position: relative;

  &:not(:first-child)::before {
    content: "|";
    margin-right: 6px;
    color: rgba(18, 20, 23, 0.3);
  }
`;

export const BtnMore = styled.button`
  display: block;
  width: 276px;
  height: 44px;
  border: none;
  border-radius: 12px;
  background: #3470ff;
  color: #ffffff;
  font-family: "ManropeSemiBold", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #2d62e0;
  }
`;

export const TextInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 28px; /* ⬅️ відстань до кнопки */
`;
