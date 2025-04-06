import styled from "styled-components";

export const CarForm = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 18px;
  width: 924px; /* Згідно з макетом */
  height: 68px; /* Згідно з макетом */
  margin: 0 auto 50px;
`;

export const Label = styled.label`
  font-family: "ManropeMedium";
  font-weight: 400;
  font-size: 12px;
  line-height: 133%;
  color: #8a8a89;
`;

export const SelectCarWrapper = styled.div`
  width: 224px;
  height: 68px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledSelect = styled.select`
  font-family: "ManropeMedium";
  font-size: 16px;
  line-height: 125%;
  color: rgba(18, 20, 23, 0.9);

  width: 204px;
  height: 44px;
  padding: 12px 16px;
  border-radius: 12px;
  border: none;
  background: var(--inputs, #f9fafb);

  /* Прибираємо стандартну стрілку та додаємо SVG */
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23344054' stroke-width='1.5'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
`;

export const SelectPriceWrapper = styled.div`
  width: 196px;
  height: 68px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PriceSelect = styled.select`
  font-family: "ManropeMedium";
  font-size: 16px;
  line-height: 125%;
  color: rgba(18, 20, 23, 0.9);

  width: 196px;
  height: 44px;
  padding: 12px 16px;
  border-radius: 12px;
  border: none;
  background: var(--inputs, #f9fafb);

  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23344054' stroke-width='1.5'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
`;

export const InputMillageWrapper = styled.div`
  // width: 320px;
  height: 68px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DivMillage = styled.div`
  display: flex;
  position: relative;
`;

export const InputMillage = styled.input`
  font-family: "ManropeMedium";
  font-size: 16px;
  color: rgba(18, 20, 23, 0.9);
  background: #f9fafb;
  border: 0px solid #d0d5dd;
  height: 44px;
  width: 160px;
  padding: 12px 16px;

  &:focus {
    outline: none;
  }

  /* Якщо це лівий інпут (from) */
  &[data-from="true"] {
    border-radius: 12px 0 0 12px;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
    padding-left: 68px;
  }

  /* Якщо це правий інпут (to) */
  &[data-to="true"] {
    border-radius: 0 12px 12px 0;
    padding-left: 48px;
  }
`;

export const InputText = styled.p`
  position: absolute;
  top: 14px;
  font-family: "ManropeMedium";
  font-size: 16px;
  color: rgba(18, 20, 23, 0.9);
  margin: 0;
  font-weight: 500;
  &[data-from="true"] {
    left: 24px;
  }

  &[data-to="true"] {
    right: 120px;
  }
`;

export const Btn = styled.button`
  font-family: "ManropeMedium";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 12px 51px;
  width: 156px;
  height: 44px;
  border-radius: 12px;
  background: var(--button, #3470ff);
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.25s ease;

  &:hover {
    background-color: #0b44cd;
  }
`;
