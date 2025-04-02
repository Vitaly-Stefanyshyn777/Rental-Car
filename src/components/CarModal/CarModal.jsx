// import React, { useEffect } from "react";
// import {
//   Accessories,
//   CloseBtn,
//   ConditionsItem,
//   ConditionsSpan,
//   ConditionsWrap,
//   Description,
//   FlexWrap,
//   Functionalities,
//   Img,
//   Item,
//   List,
//   ModalContent,
//   ModalOverlay,
//   RentalLink,
//   Subtitle,
//   Text,
//   Year,
// } from "./CarModal.styled";

// const CarModal = ({ isOpen, onClose, car, city, country }) => {
//   const conditionsArray = car.rentalConditions.split("\n");

//   const minimumAgeString = conditionsArray[0];
//   const minimumAgeArray = minimumAgeString.split(": ");
//   const minimumAge = parseInt(minimumAgeArray[1], 10);

//   const validLicense = conditionsArray[1];
//   const thirdRentalConditions = conditionsArray[2];

//   const formattedMileage = car.mileage.toLocaleString("en-US");

//   const formattedPrice = car.rentalPrice.slice(1) + car.rentalPrice[0];
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "Escape") {
//         onClose();
//       }
//     };

//     if (isOpen) {
//       document.addEventListener("keydown", handleKeyDown);
//       document.body.style.overflow = "hidden";
//     } else {
//       document.removeEventListener("keydown", handleKeyDown);
//       document.body.style.overflow = "";
//     }

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [isOpen, onClose]);

//   const handleBackdropClick = () => {
//     onClose();
//   };

//   const handleModalClick = (event) => {
//     event.stopPropagation();
//   };

//   return (
//     isOpen && (
//       <ModalOverlay onClick={handleBackdropClick}>
//         <ModalContent onClick={handleModalClick}>
//           <CloseBtn onClick={onClose}>✕</CloseBtn>
//           <Img
//             src={
//               car.img
//                 ? car.img
//                 : "https://www.auto123.com/static/auto123/images/unknown.692d9ec5c563.png"
//             }
//             alt="Modal car"
//           />
//           <FlexWrap>
//             <Subtitle>
//               {car.make} <Year>{car.model}</Year>, {car.year}
//             </Subtitle>
//           </FlexWrap>
//           <List>
//             <Item>{city}</Item>
//             <Item>{country}</Item>
//             <Item>Id:{car.id}</Item>
//             <Item>Year:{car.year}</Item>
//             <Item>Type:{car.type}</Item>
//             <Item>Fuel Consumption:{car.fuelConsumption}</Item>
//             <Item>Engine Size:{car.engineSize}</Item>
//           </List>
//           <Description>{car.description}</Description>
//           <Text>Accessories and functionalities:</Text>
//           <Accessories>
//             {car.accessories.length > 0 ? (
//               car.accessories.map((item, index) => (
//                 <Item key={index}>{item}</Item>
//               ))
//             ) : (
//               <Item>No accessories are available</Item>
//             )}
//           </Accessories>
//           <Functionalities>
//             {car.functionalities.length > 0 ? (
//               car.functionalities.map((item, index) => (
//                 <Item key={index}>{item}</Item>
//               ))
//             ) : (
//               <Item>No functionalities are available</Item>
//             )}
//           </Functionalities>
//           <Text>Rental Conditions:</Text>
//           <ConditionsWrap>
//             <ConditionsItem>
//               Minimum age: <ConditionsSpan>{minimumAge}</ConditionsSpan>
//             </ConditionsItem>
//             <ConditionsItem>{validLicense}</ConditionsItem>
//             <ConditionsItem>{thirdRentalConditions}</ConditionsItem>
//             <ConditionsItem>
//               Mileage: <ConditionsSpan>{formattedMileage}</ConditionsSpan>
//             </ConditionsItem>
//             <ConditionsItem>
//               Price: <ConditionsSpan>{formattedPrice}</ConditionsSpan>
//             </ConditionsItem>
//           </ConditionsWrap>
//           <RentalLink href="tel:+380730000000" type="button">
//             Rental car
//           </RentalLink>
//         </ModalContent>
//       </ModalOverlay>
//     )
//   );
// };

// export default CarModal;

// components/CarModal/CarModalContent.jsx
// components/CarModal/CarModalContent.jsx
// src/pages/CarDetailsPage/CarDetailsPage.jsx
// import React from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import {
//   Accessories,
//   ConditionsItem,
//   ConditionsSpan,
//   ConditionsWrap,
//   Description,
//   FlexWrap,
//   Functionalities,
//   Img,
//   Item,
//   List,
//   RentalLink,
//   Subtitle,
//   Text,
//   Year,
// } from "components/CarModal/CarModal.styled";
// import { getCars } from "../../redux/selectors";

// const CarDetailsPage = () => {
//   const { id } = useParams();
//   console.log("ID from URL:", id);

//   const cars = useSelector(getCars) || [];
//   console.log("Cars from Redux:", cars);

//   // Приводимо обидва id до рядка для порівняння
//   const car = cars.find((item) => String(item.id) === String(id));

//   if (!car) {
//     return <p>Car not found</p>;
//   }

//   // Парсимо адресу (city, country)
//   const parts = car.address?.split(", ") || [];
//   const city = parts[1] || "Unknown city";
//   const country = parts[2] || "Unknown country";

//   // Парсимо умови оренди
//   const conditionsArray = car.rentalConditions?.split("\n") || [];
//   const minimumAge = parseInt(conditionsArray[0]?.split(": ")[1], 10) || 18;
//   const validLicense = conditionsArray[1] || "Valid license required";
//   const thirdRentalConditions = conditionsArray[2] || "No additional info";

//   const formattedMileage = car.mileage?.toLocaleString("en-US") || "N/A";
//   const formattedPrice = car.rentalPrice
//     ? car.rentalPrice.slice(1) + car.rentalPrice[0]
//     : "$$";

//   return (
//     <div style={{ padding: "20px" }}>
//       <Img
//         src={
//           car.img ||
//           "https://www.auto123.com/static/auto123/images/unknown.692d9ec5c563.png"
//         }
//         alt="car"
//       />
//       <FlexWrap>
//         <Subtitle>
//           {car.make} <Year>{car.model}</Year>, {car.year}
//         </Subtitle>
//       </FlexWrap>
//       <List>
//         <Item>{city}</Item>
//         <Item>{country}</Item>
//         <Item>Id: {car.id}</Item>
//         <Item>Year: {car.year}</Item>
//         <Item>Type: {car.type}</Item>
//         <Item>Fuel: {car.fuelConsumption}</Item>
//         <Item>Engine: {car.engineSize}</Item>
//       </List>
//       <Description>{car.description}</Description>
//       <Text>Accessories and functionalities:</Text>
//       <Accessories>
//         {car.accessories?.length > 0 ? (
//           car.accessories.map((item, index) => <Item key={index}>{item}</Item>)
//         ) : (
//           <Item>No accessories</Item>
//         )}
//       </Accessories>
//       <Functionalities>
//         {car.functionalities?.length > 0 ? (
//           car.functionalities.map((item, index) => (
//             <Item key={index}>{item}</Item>
//           ))
//         ) : (
//           <Item>No functionalities</Item>
//         )}
//       </Functionalities>
//       <Text>Rental Conditions:</Text>
//       <ConditionsWrap>
//         <ConditionsItem>
//           Minimum age: <ConditionsSpan>{minimumAge}</ConditionsSpan>
//         </ConditionsItem>
//         <ConditionsItem>{validLicense}</ConditionsItem>
//         <ConditionsItem>{thirdRentalConditions}</ConditionsItem>
//         <ConditionsItem>
//           Mileage: <ConditionsSpan>{formattedMileage}</ConditionsSpan>
//         </ConditionsItem>
//         <ConditionsItem>
//           Price: <ConditionsSpan>{formattedPrice}</ConditionsSpan>
//         </ConditionsItem>
//       </ConditionsWrap>
//       <RentalLink href="tel:+380730000000">Rental car</RentalLink>
//     </div>
//   );
// };

// export default CarDetailsPage;
