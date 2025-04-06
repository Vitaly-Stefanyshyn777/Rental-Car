import React, { useState } from "react";
import makes from "./makes.json";
import prices from "./prices.json";
import {
  Btn,
  CarForm,
  DivMillage,
  InputMillage,
  InputMillageWrapper,
  InputText,
  Label,
  SelectCarWrapper,
  SelectPriceWrapper,
  PriceSelect,
} from "./CarFilter.styled";
import { useDispatch } from "react-redux";
import { filterCars, resetCars } from "../../redux/carsThunks";
import CustomSelect from "./CustomSelect";
import PriceSelectCustom from "./PriceSelectCustom";
import { Container } from "../Container/Container.styled";

const CarFilter = ({ resetPage }) => {
  const dispatch = useDispatch();
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [fromMillage, setFromMillage] = useState("");
  const [toMillage, setToMillage] = useState("");

  const makeOptions = [...makes.map((make) => ({ value: make, label: make }))];

  const priceOptions = [
    ...prices.map((price) => ({ value: price, label: price })),
  ];

  const formatNumberWithSpaces = (value) => {
    if (!value) return "";
    return value.replace(/\s+/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const handleSelectPriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleFromMillageChange = (event) => {
    const cleanValue = event.target.value.replace(/\D/g, "");
    const formattedValue = formatNumberWithSpaces(cleanValue);
    setFromMillage(formattedValue);
  };

  const handleToMillageChange = (event) => {
    const cleanValue = event.target.value.replace(/\D/g, "");
    const formattedValue = formatNumberWithSpaces(cleanValue);
    setToMillage(formattedValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const minMileage = fromMillage
      ? parseInt(fromMillage.replace(/\s/g, ""), 10)
      : undefined;
    const maxMileage = toMillage
      ? parseInt(toMillage.replace(/\s/g, ""), 10)
      : undefined;

    const options = {
      brand: selectedMake || "",
      rentalPrice: selectedPrice || "",
      minMileage,
      maxMileage,
      page: 1,
      limit: 12,
    };

    resetPage();
    dispatch(filterCars(options));
  };

  const handleReset = () => {
    setSelectedMake("");
    setSelectedPrice("");
    setFromMillage("");
    setToMillage("");
    resetPage();
    const options = {
      brand: "",
      rentalPrice: "",
      minMileage: "",
      maxMileage: "",
      limit: 12,
      page: 1,
    };
    dispatch(resetCars(options));
  };

  return (
    <Container>
      <CarForm onSubmit={handleSubmit}>
        <SelectCarWrapper>
          <Label htmlFor="makeSelect">Car brand</Label>
          <CustomSelect
            options={makeOptions}
            value={selectedMake}
            onChange={(option) => setSelectedMake(option.value)}
            placeholder="Choose a brand"
          />
        </SelectCarWrapper>

        <SelectPriceWrapper>
          <Label htmlFor="priceSelect">Price / 1 hour</Label>
          <PriceSelectCustom
            options={priceOptions}
            value={selectedPrice}
            onChange={(option) => setSelectedPrice(option.value)}
            placeholder="Choose a price"
          />
        </SelectPriceWrapper>

        <InputMillageWrapper>
          <Label htmlFor="millage">Car mileage / km</Label>
          <DivMillage>
            <InputMillage
              data-from="true"
              id="millage"
              type="text"
              value={fromMillage}
              onChange={handleFromMillageChange}
            />
            <InputText data-from="true">From</InputText>

            <InputMillage
              data-to="true"
              type="text"
              value={toMillage}
              onChange={handleToMillageChange}
            />
            <InputText data-to="true">To</InputText>
          </DivMillage>
        </InputMillageWrapper>

        <Btn type="submit">Search</Btn>
        <Btn type="button" onClick={handleReset}>
          Reset
        </Btn>
      </CarForm>
    </Container>
  );
};

export default CarFilter;
