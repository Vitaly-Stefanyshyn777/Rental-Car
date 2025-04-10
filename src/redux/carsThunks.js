import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFilterCars, getCars } from "../api/cars";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (data, thunkAPI) => {
    try {
      const response = await getCars(data);
      return {
        cars: response?.cars || [],
        totalCount: response?.totalCount || 0,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const filterCars = createAsyncThunk(
  "cars/filterCars",
  async (data, thunkAPI) => {
    try {
      const response = await getFilterCars(data);
      return {
        cars: response?.cars || [],
        totalCount: response?.totalCount || 0,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resetCars = createAsyncThunk(
  "cars/resetCars",
  async (data, thunkAPI) => {
    try {
      const response = await getCars(data);
      return {
        cars: response?.cars || [],
        totalCount: response?.totalCount || 0,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
