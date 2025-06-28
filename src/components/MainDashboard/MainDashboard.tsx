import { useQuery } from "@tanstack/react-query";
import { getAllCars, getAllStats } from "../../endpoints/api";
import { useMainContext } from "../../context/MainContext";
import HorizontalBarChart from "../HorizontalBarChart/HorizontalBarChart";
import ScatterPlot from "../ScatterPlot/ScatterPlot";
import CarTable from "../Table/CarsTable";
import PriceLineChart from "../LineChart/LineChart";

const MainDashboard = () => {
  const context = useMainContext();
  const { filters } = context;

  const {
    data: cars,
    isLoading: isLoadingCars,
    isError: isErrorCars,
  } = useQuery({
    queryKey: ["cars", filters.company, filters.manufacturer],
    queryFn: () =>
      getAllCars({
        company: filters.company,
        manufacturer: filters.manufacturer,
      }),
  });

  const {
    data: stats,
    isLoading: isLoadingStats,
    isError: isErrorStats,
  } = useQuery({
    queryKey: [
      "stats",
      filters.company,
      filters.dateFrom,
      filters.dateTo,
      filters.priceFrom,
      filters.priceTo,
    ],
    queryFn: () =>
      getAllStats({
        company: filters.company,
        dateFrom: filters.dateFrom,
        dateTo: filters.dateTo,
        priceFrom: filters.priceFrom ?? 0,
        priceTo: filters.priceTo ?? 0,
      }),
  });

  if (isLoadingStats || isLoadingCars) return <div>Loading...</div>;
  if (isErrorCars || isErrorStats) return <div>Error loading cars.</div>;

  return (
    <div className="w-full flex mt-8 gap-4 flex-wrap">
      <div className="w-[45%]">
        <PriceLineChart data={stats ?? []} />
      </div>
      <div className="w-[45%]">
        <ScatterPlot plotData={cars ?? null} />
      </div>
      <div className="w-[45%]">
        <HorizontalBarChart plotData={cars ?? null} />
      </div>
      <div className="w-[45%]">
        <CarTable data={cars ?? []} />
      </div>
    </div>
  );
};

export default MainDashboard;
