import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const getCars = async (data = {}) => {
  const page = data.page || 1;
  const limit = data.pageSize || 12;

  try {
    const res = await axios.get("/cars", {
      params: { page, limit },
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
