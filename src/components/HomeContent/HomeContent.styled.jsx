// HomeContent.styled.jsx
import styled from "styled-components";

export const H1 = styled.h1`
  font-weight: 700;
  font-size: 56px;
  line-height: 1.2;
  color: #fff;
  margin-bottom: 16px;
  text-align: center;
`;

export const H2 = styled.h2`
  padding: 14px;
  background-color: #f7f7fb;
  border-radius: 15px;
  margin-bottom: 10px;
`;

export const DataImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 700px;
  padding: 0 16px;
  color: #ffffff;

  text-align: center;
`;

export const TitleWrap = styled.div`
  margin: 0 auto 24px;
  width: 100%;
  background-image: url("/hero-image.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Section = styled.section`
  margin-bottom: 24px;
`;

export const SocialList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;

  & > li {
    padding: 10px;
    background-color: #f7f7fb;
    border-radius: 15px;
  }
`;
