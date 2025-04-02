import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCars } from "@redux/selectors";

import {
  Container,
  LeftWrapper,
  RightWrapper,
  CarImage,
  CarTitle,
  CarSubtitle,
  Price,
  Description,
  SectionTitle,
  List,
  BookingCard,
  BookingTitle,
  BookingSubTitle,
  Form,
  Label,
  Input,
  Textarea,
  SubmitButton,
} from "./CarDetailsStyles";

const CarDetailsPage = () => {
  const { id } = useParams();
  const cars = useSelector(getCars);

  // Знаходимо автомобіль за ID
  const car = cars.find((item) => String(item.id) === String(id));
  if (!car) return <p>Car not found</p>;

  // Для прикладу: розбиваємо адресу на місто і країну
  const parts = car.address ? car.address.split(", ") : [];
  const city = parts[1] || "Unknown city";
  const country = parts[2] || "Unknown country";

  // Приклади даних (якщо у вас вони вже є в car, підставляйте їх)
  const exampleMileage = "5 858 km";
  const exampleFuel = "10.5";
  const exampleEngineSize = "3.6L V6";
  const exampleDescription =
    "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.";

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your booking request has been sent!");
  };

  return (
    <Container>
      {/* Ліва колонка: зображення + форма */}
      <LeftWrapper>
        <CarImage
          src={
            car.img ||
            "https://www.auto123.com/static/auto123/images/unknown.692d9ec5c563.png"
          }
          alt={`${car.make} ${car.model}`}
        />

        {/* Блок із формою бронювання */}
        <BookingCard>
          <BookingTitle>Book your car now</BookingTitle>
          <BookingSubTitle>
            Stay connected! We are always ready to help you.
          </BookingSubTitle>

          <Form onSubmit={handleSubmit}>
            <Label>
              Name*:
              <Input type="text" name="name" required />
            </Label>

            <Label>
              Email*:
              <Input type="email" name="email" required />
            </Label>

            <Label>
              Booking date:
              <Input type="date" name="bookingDate" />
            </Label>

            <Label>
              Comment:
              <Textarea name="comment" rows="3" />
            </Label>

            <SubmitButton type="submit">Send</SubmitButton>
          </Form>
        </BookingCard>
      </LeftWrapper>

      {/* Права колонка: детальна інформація */}
      <RightWrapper>
        <CarTitle>
          {car.make} {car.model}, {car.year}
        </CarTitle>
        <CarSubtitle>
          {city}, {country} | Mileage: {exampleMileage}
        </CarSubtitle>
        <Price>{car.rentalPrice || "$40"}</Price>
        <Description>{exampleDescription}</Description>

        <SectionTitle>Rental Conditions:</SectionTitle>
        <List>
          <li>Minimum age: 25</li>
          <li>Security deposit required</li>
          <li>Valid driver's license</li>
        </List>

        <SectionTitle>Car Specifications:</SectionTitle>
        <List>
          <li>Year: {car.year}</li>
          <li>Type: {car.type}</li>
          <li>Fuel Consumption: {exampleFuel} (л/100км)</li>
          <li>Engine Size: {exampleEngineSize}</li>
        </List>

        <SectionTitle>Accessories and functionalities:</SectionTitle>
        <List>
          <li>Leather seats</li>
          <li>Panoramic sunroof</li>
          <li>Remote start</li>
          <li>Blind-spot monitoring</li>
          <li>Power liftgate</li>
          <li>Premium audio system</li>
        </List>
      </RightWrapper>
    </Container>
  );
};

export default CarDetailsPage;
