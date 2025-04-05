import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 колонки */
  gap: 73px;

  @media (max-width: 768px) {
    /* На мобільних: 1 колонка */
    grid-template-columns: 1fr;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 488px;
  }
`;

export const CarImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 19px;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 640px;
  height: 512px;
`;

export const CarTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 8px;
  color: #222;
  font-weight: bold;
`;

export const CarSubtitle = styled.div`
  font-size: 16px;
  color: #777;
  margin-bottom: 12px;
`;

export const Price = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  // margin-bottom: 24px;
  line-height: 1.5;
  // color: #444;
  font-size: 16px;
  margin: 0; // або control через контейнер
`;

export const SectionTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: #333;
  padding-bottom: 6px;
  margin: 0; // <--- важливо!
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 20px;

  & li {
    position: relative;

    margin-bottom: 8px;
    font-size: 15px;
    // color: #555;
  }
`;

export const BookingCard = styled.div`
  border: 1px solid var(--gray-light);
  padding: 32px;
  width: 640px;
  height: auto; // прибери фіксовану висоту!
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 32px;
  border: 1px solid #d0d5dd;
  border-radius: 10px;
  height: 488px;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 640px;
  }
`;

export const BookingTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  line-height: 120%;
  font-weight: 600;
  color: var(--main, #101828);
  font-family: var(--font-family, "Manrope", sans-serif);
`;

export const BookingSubTitle = styled.p`
  margin: 4px 0 20px;
  font-size: 16px;
  line-height: 125%;
  font-weight: 500;
  color: var(--gray, #8d929a);
  font-family: var(--font-family, "Manrope", sans-serif);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 8px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #344054;
  font-weight: 600;
  gap: 4px;
`;

/* Інпут у формі */
// export const Input = styled.input`
//   padding: 12px 20px;
//   font-size: 14px;
//   border: 1px solid #d0d5dd;
//   border-radius: 12px;
//   background-color: #f9fafb;
//   transition: border-color 0.2s, box-shadow 0.2s;
//   width: 576px;
//   height: 48px;

//   &:focus {
//     border-color: #3470ff;
//     outline: none;
//     box-shadow: 0 0 0 4px rgba(52, 112, 255, 0.1);
//   }

//   &::placeholder {
//     color: #98a2b3;
//   }
// `;

/* Текстове поле (textarea) у формі */
// export const Textarea = styled.textarea`
//   // padding: 10px 14px;
//   padding: 12px 20px 56px 20px;
//   font-size: 14px;
//   border: 1px solid #d0d5dd;
//   // border-radius: 12px;
//   border-radius: 10px;
//   background-color: #f9fafb;
//   resize: vertical;
//   min-height: 80px;
//   transition: border-color 0.2s, box-shadow 0.2s;
//   width: 576px;
//   height: 88px;

//   &:focus {
//     border-color: #3470ff;
//     outline: none;
//     box-shadow: 0 0 0 4px rgba(52, 112, 255, 0.1);
//   }

//   &::placeholder {
//     color: #98a2b3;
//   }
// `;

export const SubmitButton = styled.button`
  align-self: center;
  padding: 12px 51px;
  background-color: #3470ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.25s ease;
  width: 156px;
  height: 44px;

  &:hover {
    background-color: #0b44cd;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(11, 68, 205, 0.2);
  }
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  flex-shrink: 0;

  & svg {
    width: 100%;
    height: 100%;
    fill: var(--main, #101828); // або твоя змінна кольору
  }
`;
export const BookingHeader = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  // text-align: center;
  // margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

export const CarHeaderInfo = styled.div`
  width: 488px;
  display: flex;
  flex-direction: column;
  gap: 8px; /* якщо хочеш контроль між заголовками */
  margin-bottom: 68px;
`;

export const CarInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // щоб всі блоки були по центру
  gap: 7rem;
  // justify-content: space-around;
  // height: 700px;
`;

export const RentalSection = styled.div`
  width: 488px;

  display: flex;
  flex-direction: column;
  gap: 12px; /* відстань між заголовком і списком */
`;

export const SpecificationsSection = styled.div`
  width: 488px;

  display: flex;
  flex-direction: column;
  gap: 12px; /* відстань між заголовком і списком */
`;

export const AccessoriesSection = styled.div`
  width: 488px;

  display: flex;
  flex-direction: column;
  gap: 12px; /* відстань між заголовком і списком */
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px; // як у Figma
  font-size: 16px;
  font-weight: 500;
  line-height: 125%;
  color: var(--main, #101828);
`;

export const Input = styled.input`
  padding: 12px 20px;
  font-size: 14px;
  border: 1px solid #d0d5dd;
  border-radius: 12px;
  background-color: #f9fafb;
  transition: border-color 0.2s, box-shadow 0.2s;
  width: 100%;
  max-width: 576px;
  height: 48px;

  &:focus {
    border-color: #3470ff;
    outline: none;
    box-shadow: 0 0 0 4px rgba(52, 112, 255, 0.1);
  }

  &::placeholder {
    color: #98a2b3;
  }

  &.error {
    border-color: red;
    box-shadow: 0 0 0 4px rgba(255, 0, 0, 0.2);
  }
`;

export const Textarea = styled.textarea`
  padding: 12px 20px;
  font-size: 14px;
  border: 1px solid #d0d5dd;
  border-radius: 10px;
  background-color: #f9fafb;
  resize: none; /* <--- важливо: прибирає можливість розтягувати */
  transition: border-color 0.2s, box-shadow 0.2s;
  width: 100%;
  max-width: 576px;
  height: 88px; /* фіксована висота */

  &:focus {
    border-color: #3470ff;
    outline: none;
    box-shadow: 0 0 0 4px rgba(52, 112, 255, 0.1);
  }

  &::placeholder {
    color: #98a2b3;
  }

  &.error {
    border-color: red;
    box-shadow: 0 0 0 4px rgba(255, 0, 0, 0.2);
  }
`;

export const CarId = styled.span`
  margin-left: 12px;
  padding: 2px 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 125%;
  border-radius: 6px;
  color: #344054;
  font-weight: 500;
`;
