import { useQuery } from "@tanstack/react-query";
import "./App.css";
import SideBar from "./components/SideBar/Sidebar";
import { getAllCars, getAllStats } from "./endpoints/api";
import HorizontalBarChart from "./components/HorizontalBarChart/HorizontalBarChart";
import ScatterPlot from "./components/ScatterPlot/ScatterPlot";
import CarTable from "./components/Table/CarsTable";
import PriceLineChart from "./components/LineChart/LineChart";
import { useMainContext } from "./context/MainContext";

function App() {
  const title = "Dashboard Overview";
  const subTitle = "Monitor your key metrics and performance indicators";
  const context = useMainContext();
  const { filters } = context;

  const {
    data: cars,
    isLoading: isLoadingCars,
    isError: isErrorCars,
  } = useQuery({
    queryKey: ["cars", filters.company, filters.price],
    queryFn: () =>
      getAllCars({ company: filters.company, price: filters.price ?? 0 }),
  });

  const {
    data: stats,
    isLoading: isLoadingStats,
    isError: isErrorStats,
  } = useQuery({
    queryKey: ["stats", filters.company, filters.date],
    queryFn: () =>
      getAllStats({ company: filters.company, date: filters.date }),
  });

  if (isLoadingStats || isLoadingCars) return <div>Loading...</div>;
  if (isErrorCars || isErrorStats) return <div>Error loading cars.</div>;

  return (
    <div className="flex min-h-screen overflow-y-hidden">
      <SideBar />
      <div className="h-screen w-full p-10 overflow-y-scroll">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h2 className="text-lg font-medium pt-2">{subTitle}</h2>
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
      </div>
    </div>
  );
}

export default App;
