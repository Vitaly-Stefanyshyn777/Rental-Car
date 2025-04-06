import React, { useState } from "react";
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
  IconWrapper,
  BookingHeader,
  ButtonWrapper,
  CarHeaderInfo,
  CarInfoSection,
  RentalSection,
  SpecificationsSection,
  AccessoriesSection,
  ListItem,
  CarId,
} from "./CarDetailsStyles";

import {
  CheckIcon,
  EngineIcon,
  FuelIcon,
  LocationIcon,
  TypeIcon,
  YearIcon,
} from "../../components/Icon/CheckIcon";

import DateInput from "./DateInput";

const CarDetailsPage = () => {
  const { id } = useParams();
  const cars = useSelector(getCars);
  const [bookingDate, setBookingDate] = useState(null);
  const [hasError, setHasError] = useState(false);

  const car = cars.find((item) => String(item.id) === String(id));
  if (!car) return <p>Car not found</p>;

  const parts = car.address ? car.address.split(", ") : [];
  const city = parts[1] || "Unknown city";
  const country = parts[2] || "Unknown country";

  const exampleMileage = "5 858 km";
  const exampleFuel = "10.5";
  const exampleEngineSize = "3.6L V6";
  const exampleDescription =
    "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      setHasError(true);
      return;
    }

    if (!bookingDate) {
      alert("Please select a booking date");
      setHasError(true);
      return;
    }
    setHasError(false);
    alert("Your booking request has been sent!");
  };

  return (
    <Container>
      <LeftWrapper>
        <CarImage
          src={
            car.img ||
            "https://www.auto123.com/static/auto123/images/unknown.692d9ec5c563.png"
          }
          alt={`${car.make} ${car.model}`}
        />

        <BookingCard>
          <BookingHeader>
            <BookingTitle>Book your car now</BookingTitle>
            <BookingSubTitle>
              Stay connected! We are always ready to help you.
            </BookingSubTitle>
          </BookingHeader>
          <Form id="booking-form" onSubmit={handleSubmit}>
            <Label>
              <Input
                type="text"
                name="name"
                required
                placeholder="Name*"
                className={hasError ? "invalid" : ""}
              />
            </Label>
            <Label>
              <Input
                type="email"
                name="email"
                required
                placeholder="Email*"
                className={hasError ? "invalid" : ""}
              />
            </Label>
            <Label>
              <DateInput value={bookingDate} onChange={setBookingDate} />
            </Label>
            <Label>
              <Textarea
                name="comment"
                rows="3"
                required
                placeholder="Comment*"
                className={hasError ? "invalid" : ""}
              />
            </Label>
          </Form>
          <ButtonWrapper>
            <SubmitButton type="submit" form="booking-form">
              Send
            </SubmitButton>
          </ButtonWrapper>
        </BookingCard>
      </LeftWrapper>

      <RightWrapper>
        <CarHeaderInfo>
          <CarTitle>
            {car.make} {car.model}, {car.year}
            <CarId>Id: {car.id.slice(0, 4)}</CarId>
          </CarTitle>
          <CarSubtitle>
            <ListItem>
              <IconWrapper>
                <LocationIcon />
              </IconWrapper>
              {city}, {country} | Mileage: {exampleMileage}
            </ListItem>
          </CarSubtitle>
          <Price>{car.rentalPrice || "$40"}</Price>
          <Description>{exampleDescription}</Description>
        </CarHeaderInfo>
        <CarInfoSection>
          <RentalSection>
            <SectionTitle>Rental Conditions:</SectionTitle>
            <List>
              <ListItem>
                <IconWrapper>
                  <CheckIcon />
                </IconWrapper>
                Leather seats
              </ListItem>
              <ListItem>
                <IconWrapper>
                  <CheckIcon />
                </IconWrapper>
                Security deposit required
              </ListItem>
              <ListItem>
                <IconWrapper>
                  <CheckIcon />
                </IconWrapper>
                Valid driver's license
              </ListItem>
            </List>
          </RentalSection>
          <SpecificationsSection>
            <SectionTitle>Car Specifications:</SectionTitle>
            <List>
              <ListItem>
                <IconWrapper>
                  <YearIcon />
                </IconWrapper>
                Year: {car.year}
              </ListItem>
              <ListItem>
                <IconWrapper>
                  <TypeIcon />
                </IconWrapper>
                Type: {car.type}
              </ListItem>
              <ListItem>
                <IconWrapper>
                  <FuelIcon />
                </IconWrapper>
                Fuel Consumption: {exampleFuel} (л/100км)
              </ListItem>
              <ListItem>
                <IconWrapper>
                  <EngineIcon />
                </IconWrapper>
                Engine Size: {exampleEngineSize}
              </ListItem>
            </List>
          </SpecificationsSection>
          <AccessoriesSection>
            <SectionTitle>Accessories and functionalities:</SectionTitle>
            <List>
              <ListItem>
                <IconWrapper>
                  <CheckIcon />
                </IconWrapper>
                Leather seats
              </ListItem>
              <ListItem>
                <IconWrapper>
                  <CheckIcon />
                </IconWrapper>
                Panoramic sunroof
              </ListItem>
              <ListItem>
                <IconWrapper>
                  <CheckIcon />
                </IconWrapper>
                Remote start
              </ListItem>
              <ListItem>
                <IconWrapper>
                  <CheckIcon />
                </IconWrapper>
                Blind-spot monitoring
              </ListItem>
              <ListItem>
                <IconWrapper>
                  <CheckIcon />
                </IconWrapper>
                Power liftgate
              </ListItem>
              <ListItem>
                <IconWrapper>
                  <CheckIcon />
                </IconWrapper>
                Premium audio system
              </ListItem>
            </List>
          </AccessoriesSection>
        </CarInfoSection>
      </RightWrapper>
    </Container>
  );
};

export default CarDetailsPage;
