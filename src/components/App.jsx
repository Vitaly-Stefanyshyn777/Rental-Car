import { Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";
import { Container } from "./Container/Container.styled";
import { lazy } from "react";
import CarDetailsPage from "../pages/CarDetailsPage/CarDetailsPage";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(() => import("pages/FavoritesPage/FavoritesPage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />

        <Route path="/car/:id" element={<CarDetailsPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
