import CompanySelect from "../CompanySelect/CompanySelect";
import { useMainContext } from "../../context/MainContext";
import RangeSlider from "../RangeSlider/RangeSlider";
import { useState } from "react";
import ManufacturerSelect from "../ManufacturerSelect/ManufacturerSelect";

const SideBar = () => {
  const filterTitle: string = "Filters";
  const context = useMainContext();
  const { setFilters, filters } = context;
  const [monthFilters, setMonthFilters] = useState({
    monthFrom: 1,
    monthTo: 12,
  });

  return (
    <div className="bg-[#F3F4F6] w-[300px] flex flex-col items-center h-screen gap-[4rem]">
      <h3 className="mt-10 text-xl font-semibold">{filterTitle}</h3>
      <div className="flex flex-col gap-[3rem] px-10">
        <CompanySelect
          selectedCompany={filters.company}
          onChange={(company) => setFilters({ ...filters, company: company })}
        />
        <ManufacturerSelect
          selectedManufacturer={filters.manufacturer}
          onChange={(manufacturer) =>
            setFilters({ ...filters, manufacturer: manufacturer })
          }
        />
        <RangeSlider
          label="Price Range"
          value={[filters.priceFrom ?? 0, filters.priceTo ?? 1200]}
          step={100}
          min={0}
          max={1200}
          onChange={(value: number[]) =>
            setFilters({ ...filters, priceFrom: value[0], priceTo: value[1] })
          }
        />

        <RangeSlider
          label="Date Range"
          value={[monthFilters.monthFrom, monthFilters.monthTo]}
          step={1}
          min={1}
          max={12}
          labelValue={true}
          onChange={(value: number[]) => {
            setMonthFilters({
              ...monthFilters,
              monthFrom: value[0],
              monthTo: value[1],
            });
            const monthFromFilter = `2025-${value[0]}-01T00:00:00`;
            const monthToFilter = `2025-${value[1]}-01T00:00:00`;
            setFilters({
              ...filters,
              dateFrom: monthFromFilter,
              dateTo: monthToFilter,
            });
          }}
        />
      </div>
    </div>
  );
};

export default SideBar;
