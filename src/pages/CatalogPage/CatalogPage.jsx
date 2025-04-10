import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, resetCars } from "../../redux/carsThunks";
import CatalogList from "components/CatalogList/CatalogList";
import CarFilter from "components/CarFilter/CarFilter";
import { ColorRing } from "react-loader-spinner";
import { CenteredColorRing } from "./CatalogPage.styled";
import { getIsLoading } from "../../redux/selectors";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const [page, setPage] = useState(1);
  const [filterOptions, setFilterOptions] = useState({
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
    page,
    limit: 12,
  });

  const resetPage = () => {
    setPage(1);
  };

  const incrementPage = () => {
    setPage((prevPage) => {
      const nextPage = prevPage + 1;
      setFilterOptions((prevOptions) => ({
        ...prevOptions,
        page: nextPage,
      }));
      return nextPage;
    });
  };

  useEffect(() => {
    dispatch(resetCars(filterOptions));
  }, []);

  useEffect(() => {
    dispatch(fetchCars(filterOptions));
  }, [dispatch, filterOptions]);

  return (
    <>
      {isLoading && (
        <CenteredColorRing>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </CenteredColorRing>
      )}
      <CarFilter resetPage={resetPage} />
      <CatalogList incrementPage={incrementPage} page={page} />
    </>
  );
};

export default CatalogPage;
