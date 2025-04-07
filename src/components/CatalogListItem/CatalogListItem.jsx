import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BtnMore,
  CardWrap,
  FlexWrap,
  ImgWrapper,
  Item,
  List,
  Subtitle,
  SvgHeart,
  TextInfoBlock,
  Year,
} from "./CatalogListItem.styled";
import sprite from "../../images/sprite.svg";
import { LovedarActiveIcon, LovedarIcon } from "../Icon/CheckIcon";

const CatalogListItem = ({ car }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const parts = car.address.split(", ");
  const city = parts[1] || "";
  const country = parts[2] || "";
  const price = Number(car.rentalPrice.replace("$", ""));
  const quality = price >= 30 ? "Premium" : "Econom";

  const formatMileage = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isCarFavorite = favorites.some(
      (item) => String(item.id) === String(car.id)
    );
    setIsFavorite(isCarFavorite);
  }, [car.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isCarFavorite = favorites.some(
      (item) => String(item.id) === String(car.id)
    );
    const updatedFavorites = isCarFavorite
      ? favorites.filter((item) => String(item.id) !== String(car.id))
      : [...favorites, car];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isCarFavorite);
    window.dispatchEvent(new CustomEvent("favoritesUpdated"));
  };

  return (
    <CardWrap>
      <ImgWrapper
        style={{
          backgroundImage: `url(${
            car.img
              ? car.img
              : "https://www.auto123.com/static/auto123/images/unknown.692d9ec5c563.png"
          })`,
        }}
      />
      <SvgHeart onClick={toggleFavorite} $isFavorite={isFavorite}>
        {isFavorite ? <LovedarActiveIcon /> : <LovedarIcon />}
      </SvgHeart>
      <TextInfoBlock>
        <FlexWrap>
          <Subtitle>
            {car.make} <Year>{car.model}</Year>, {car.year}
          </Subtitle>
          <p>${car.rentalPrice}</p>
        </FlexWrap>

        <List>
          <Item>{city}</Item>
          <Item>{country}</Item>
          <Item $withDivider>{car.rentalCompany}</Item>
        </List>

        <List>
          <Item>{car.type}</Item>
          <Item>{formatMileage(car.mileage)} km</Item>
        </List>
      </TextInfoBlock>

      <Link to={`/catalog/${car.id}`}>
        <BtnMore>Read more</BtnMore>
      </Link>
    </CardWrap>
  );
};

export default CatalogListItem;
