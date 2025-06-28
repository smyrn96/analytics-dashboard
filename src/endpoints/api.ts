import axiosInstance from "../axios/axiosInstance";
import type { CarResponse } from "../types/car";
import type { StatsResponse } from "../types/stats";

type fetchFilters = {
  company?: string;
  priceFrom?: number;
  priceTo?: number;
  dateFrom?: string;
  dateTo?: string;
};

export const getAllCars = async ({
  company,
  priceFrom,
  priceTo,
}: fetchFilters): Promise<CarResponse> => {
  const params = { company: company, price_gte: priceFrom, price_lte: priceTo };
  if (!priceFrom) delete params.price_gte;
  if (!priceTo) delete params.price_lte;

  const res = await axiosInstance.get<CarResponse>("/cars", {
    params: params,
  });
  return res.data;
};

export const getAllStats = async ({
  company,
  dateFrom,
  dateTo,
}: fetchFilters): Promise<StatsResponse> => {
  const res = await axiosInstance.get<StatsResponse>("/stats", {
    params: { company: company, date_gte: dateFrom, date_lte: dateTo },
  });
  return res.data;
};
