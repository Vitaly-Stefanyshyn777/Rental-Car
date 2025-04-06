// import axios from "axios";

// axios.defaults.baseURL = "https://car-rental-api.goit.global";

// export const getCars = async (data) => {
//   try {
//     const res = await axios.get("/cars", {
//       params: {
//         page: data.page,
//         limit: data.pageSize,
//       },
//     });

//     return {
//       cars: res.data.cars,
//       totalCount: res.data.totalCars,
//     };
//   } catch (error) {
//     console.error("Error fetching cars:", error);
//     throw error;
//   }
// };

// export const getFilterCars = async (data) => {
//   try {
//     const res = await axios.get("cars");

//     let filteredCars = res.data.filter((car) => {
//       let includeCar = true;
//       if (data.make && car.make !== data.make) {
//         includeCar = false;
//       }
//       if (
//         data.rentalPrice &&
//         parseInt(car.rentalPrice.replace("$", ""), 10) >
//           parseInt(data.rentalPrice, 10)
//       ) {
//         includeCar = false;
//       }
//       if (
//         (data.mileageFrom &&
//           data.mileageTo &&
//           (car.mileage < parseInt(data.mileageFrom.replace(",", ""), 10) ||
//             car.mileage > parseInt(data.mileageTo.replace(",", ""), 10))) ||
//         (!data.mileageFrom &&
//           data.mileageTo &&
//           car.mileage > parseInt(data.mileageTo.replace(",", ""), 10)) ||
//         (data.mileageFrom &&
//           !data.mileageTo &&
//           car.mileage < parseInt(data.mileageFrom.replace(",", ""), 10))
//       ) {
//         includeCar = false;
//       }
//       return includeCar;
//     });

//     return {
//       cars: filteredCars,
//       totalCount: filteredCars.length,
//     };
//   } catch (error) {
//     console.error("Error fetching cars:", error);
//     throw error;
//   }
// };

// 👇 тільки один імпорт і один раз дефолтний baseURL
import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

// Отримати всі машини з пагінацією
export const getCars = async (data) => {
  try {
    const res = await axios.get("/cars", {
      params: {
        page: data.page,
        limit: data.pageSize,
      },
    });

    return {
      cars: res.data.cars,
      totalCount: res.data.totalCars,
    };
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};

// // Отримати машини з фільтрацією
// export const getFilterCars = async (data) => {
//   try {
//     const params = {
//       brand: data.make || undefined,
//       rentalPrice: data.rentalPrice || undefined,
//       minMileage: data.mileageFrom
//         ? parseInt(data.mileageFrom.replaceAll(",", ""), 10)
//         : undefined,
//       maxMileage: data.mileageTo
//         ? parseInt(data.mileageTo.replaceAll(",", ""), 10)
//         : undefined,
//       page: data.page || 1,
//       limit: data.pageSize || 12,
//     };

//     const res = await axios.get("/cars", { params });

//     return {
//       cars: res.data.cars,
//       totalCount: res.data.totalCars,
//     };
//   } catch (error) {
//     console.error("Error fetching filtered cars:", error);
//     throw error;
//   }
// };

// ✅ рекомендований варіант
// export const getFilterCars = async (data) => {
//   try {
//     const params = {
//       brand: data.brand || undefined, // було make
//       rentalPrice: data.rentalPrice || undefined,
//       minMileage: data.minMileage
//         ? parseInt(data.minMileage.toString().replace(/\s/g, ""), 10)
//         : undefined,
//       maxMileage: data.maxMileage
//         ? parseInt(data.maxMileage.toString().replace(/\s/g, ""), 10)
//         : undefined,
//       page: data.page || 1,
//       limit: data.limit || 12, // було pageSize
//     };

//     const res = await axios.get("/cars", { params });

//     return {
//       cars: res.data.cars,
//       totalCount: res.data.totalCars,
//     };
//   } catch (error) {
//     console.error("Error fetching filtered cars:", error);
//     throw error;
//   }
// };

export const getFilterCars = async (data) => {
  try {
    const params = {
      brand: data.brand || undefined,
      rentalPrice: data.rentalPrice || undefined,
      minMileage: data.minMileage
        ? parseInt(data.minMileage.toString().replace(/\s/g, ""), 10)
        : undefined,
      maxMileage: data.maxMileage
        ? parseInt(data.maxMileage.toString().replace(/\s/g, ""), 10)
        : undefined,
      page: data.page || 1,
      limit: data.limit || 12,
    };

    const res = await axios.get("/cars", { params });

    return {
      cars: res.data.cars,
      totalCount: res.data.totalCars,
    };
  } catch (error) {
    console.error("Error fetching filtered cars:", error);
    throw error;
  }
};
