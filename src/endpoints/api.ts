import axiosInstance from "../axios/axiosInstance";
import type { CarResponse } from "../types/car";
import type { StatsResponse } from "../types/stats";

type fetchFilters = {
  company?: string;
  price?: number;
  date?: string;
};

export const getAllCars = async ({
  company,
  price,
}: fetchFilters): Promise<CarResponse> => {
  const res = await axiosInstance.get<CarResponse>("/cars", {
    params: { company: company, price: price },
  });
  return res.data;
};

export const getAllStats = async ({
  company,
  date,
}: fetchFilters): Promise<StatsResponse> => {
  const res = await axiosInstance.get<StatsResponse>("/stats", {
    params: { company: company, date: date },
  });
  return res.data;
};
