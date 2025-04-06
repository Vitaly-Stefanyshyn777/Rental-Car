import React from "react";
import { useSelector } from "react-redux";
import {
  ListOfCars,
  HaveNotCars,
  LoadMoreBtnWrapper,
  LoadMoreText,
} from "./CatalogList.styled";
import { CenteredColorRing } from "pages/CatalogPage/CatalogPage.styled";
import { ColorRing } from "react-loader-spinner";
import CatalogListItem from "components/CatalogListItem/CatalogListItem";
import {
  getCars,
  getHideButton,
  getIsLoading,
  getTotalCount,
} from "../../redux/selectors";

const PAGE_SIZE = 12;

const CatalogList = ({ incrementPage, page }) => {
  const isLoading = useSelector(getIsLoading);
  const isHideBtn = useSelector(getHideButton);
  const totalCount = useSelector(getTotalCount);
  const cars = useSelector(getCars);
  const maxPage = Math.ceil(totalCount / PAGE_SIZE);

  const handleLoadMore = () => {
    incrementPage();
  };

  return (
    <ListOfCars>
      {cars.length > 0 ? (
        cars.map((car) => <CatalogListItem key={car.id} car={car} />)
      ) : (
        <HaveNotCars>Sorry, we don't have any cars like this!</HaveNotCars>
      )}

      {!isHideBtn && page < maxPage && (
        <div
          style={{
            gridColumn: "1 / -1",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LoadMoreBtnWrapper onClick={handleLoadMore}>
            <LoadMoreText>Load more</LoadMoreText>
          </LoadMoreBtnWrapper>
        </div>
      )}

      {isLoading && (
        <CenteredColorRing>
          <ColorRing />
        </CenteredColorRing>
      )}
    </ListOfCars>
  );
};

export default CatalogList;
