# Car Rental App

This project is a frontend application for managing car rental listings. It leverages a ready-made backend API (see the [API Documentation](https://car-rental-api.goit.global/api-docs/)) to provide data and functionality.

## Overview

The Car Rental App allows users to:

- **Browse** the catalog of available rental cars.
  ![Alt текст](/public/info1.png)
- **Filter** cars by brand, price, and mileage
  ![Alt текст](/public/info4.png)
  (filtering is performed on the backend).
- **View detailed information** for each car and rent via a booking form.
  ![Alt текст](/public/info3.png)
- **Add cars to favorites**, with the favorites list persisting across page reloads.
  ![Alt текст](/public/info2.png)

## Technologies

- **React** with **Vite** for a fast and modern development experience.
- **Redux** for state management.
- **React Router** for client-side routing.
- **Axios** for making HTTP requests.
- **Styled-components** (or your preferred CSS solution) for component-level styling.

## Project Structure

- **Home Page (`/`)**  
  Contains a banner with a prominent call-to-action ("View Catalog") that navigates users to the catalog page.

- **Catalog Page (`/catalog`)**  
  Displays a list of available cars. Includes filtering options (by brand, price, and mileage) and supports backend-driven pagination via a "Load More" button. Users can also add cars to their favorites.

- **Car Details Page (`/catalog/:id`)**  
  Shows detailed information about a selected car, including photos, specifications, and a rental booking form. A successful booking triggers a notification to the user.

## Features

- **Routing**:  
  Implemented with React Router:

  - `/` – Home Page
  - `/catalog` – Catalog Page
  - `/catalog/:id` – Car Details Page

- **Filtering**:  
  Cars are filtered on the backend. The app clears previous search results before applying new filters to ensure accuracy.

- **Favorites Management**:  
  Users can add cars to a favorites list, which is maintained across page reloads.

- **Pagination**:  
  The "Load More" button fetches additional car listings based on the active filters (handled on the backend).

- **Booking Form**:  
  The detailed car page includes a form for renting a car. Upon successful submission, a notification is displayed.

- **UI Enhancements**:
  - Mileage is formatted with spaces (e.g., "5 000 km" instead of "5000 km").
  - The layout follows a desktop-first design based on the provided mockups.
