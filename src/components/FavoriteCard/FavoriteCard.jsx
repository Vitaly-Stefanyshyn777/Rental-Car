import React, { useState, useEffect } from "react";
import FavoriteItem from "components/FavoriteItem/FavoriteItem";
import { List, Btn, HaveNotFav, Wrapper } from "./FavoritesCard.styled";

const FavoriteCard = () => {
  const [favorites, setFavorites] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 4;

  const updateFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  };

  useEffect(() => {
    updateFavorites();
    const handleFavoritesUpdate = () => updateFavorites();
    window.addEventListener("favoritesUpdated", handleFavoritesUpdate);
    return () =>
      window.removeEventListener("favoritesUpdated", handleFavoritesUpdate);
  }, []);

  const toggleFavorite = (id) => {
    const updatedFavorites = favorites.filter(
      (item) => String(item.id) !== String(id)
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
    window.dispatchEvent(new CustomEvent("favoritesUpdated"));
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const visibleFavorites = favorites.slice(0, page * pageSize);

  return (
    <Wrapper>
      {visibleFavorites.length > 0 ? (
        <>
          <List>
            {visibleFavorites.map((car) => (
              <FavoriteItem
                car={car}
                toggleFavorite={toggleFavorite}
                key={String(car.id)}
              />
            ))}
          </List>
          {favorites.length > visibleFavorites.length && (
            <Btn type="button" onClick={handleLoadMore}>
              Load more
            </Btn>
          )}
        </>
      ) : (
        <HaveNotFav>You don't have any favorite cars yet!</HaveNotFav>
      )}
    </Wrapper>
  );
};

export default FavoriteCard;
