import styled from "styled-components";

/* Контейнер, який утримує два стовпчики: зображення + форма ліворуч і текстова частина праворуч */
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 колонки */
  gap: 40px;

  @media (max-width: 768px) {
    /* На мобільних: 1 колонка */
    grid-template-columns: 1fr;
  }
`;

/* Ліва колонка: містить зображення та форму */
export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

/* Права колонка: містить усі тексти (заголовки, списки) */
export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

/* Зображення автомобіля */
export const CarImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

/* Заголовок автомобіля (марка, модель, рік) */
export const CarTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 8px;
  color: #222;
  font-weight: bold;
`;

/* Підзаголовок: наприклад, локація, пробіг, інше */
export const CarSubtitle = styled.p`
  font-size: 16px;
  color: #777;
  margin-bottom: 12px;
`;

/* Ціна оренди */
export const Price = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 16px;
`;

/* Опис автомобіля */
export const Description = styled.p`
  margin-bottom: 24px;
  line-height: 1.5;
  color: #444;
  font-size: 16px;
`;

/* Заголовок секції (Rental Conditions, Car Specifications тощо) */
export const SectionTitle = styled.h2`
  font-size: 18px;
  margin: 24px 0 12px;
  color: #333;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  padding-bottom: 6px;
`;

/* Упорядкований список для умов, специфікацій, аксесуарів */
export const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 20px;

  & li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 8px;
    font-size: 15px;
    color: #555;
  }

  & li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #3498db;
  }
`;

/* Карточка з формою бронювання */
export const BookingCard = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

/* Заголовок у формі */
export const BookingTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;

/* Підзаголовок у формі */
export const BookingSubTitle = styled.p`
  margin-top: 0;
  margin-bottom: 20px;
  font-style: italic;
  color: #777;
  font-size: 14px;
`;

/* Форма бронювання */
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

/* Label для полів форми */
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #333;
  font-weight: 500;
`;

/* Інпут у формі */
export const Input = styled.input`
  margin-top: 4px;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

/* Текстове поле (textarea) у формі */
export const Textarea = styled.textarea`
  margin-top: 4px;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

/* Кнопка відправлення */
export const SubmitButton = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;
