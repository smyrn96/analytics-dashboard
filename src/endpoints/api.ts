import axiosInstance from "../axios/axiosInstance";
import type { CarResponse } from "../types/car";
import type { StatsResponse } from "../types/stats";

type fetchFilters = {
  company?: string;
  manufacturer?: string;
  priceFrom?: number;
  priceTo?: number;
  dateFrom?: string;
  dateTo?: string;
};

export const getAllCars = async ({
  company,
  manufacturer,
}: fetchFilters): Promise<CarResponse> => {
  const res = await axiosInstance.get<CarResponse>("/cars", {
    params: { company: company, manufacturer: manufacturer },
  });
  return res.data;
};

export const getAllStats = async ({
  company,
  dateFrom,
  dateTo,
  priceFrom,
  priceTo,
}: fetchFilters): Promise<StatsResponse> => {
  const params = {
    company: company,
    price_gte: priceFrom,
    price_lte: priceTo,
    dateFrom: dateFrom,
    dateTo: dateTo,
  };

  if (!priceFrom) delete params.price_gte;
  if (!priceTo) delete params.price_lte;

  const res = await axiosInstance.get<StatsResponse>("/stats", {
    params: params,
  });
  return res.data;
};
