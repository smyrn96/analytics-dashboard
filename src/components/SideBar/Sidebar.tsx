import { useState } from "react";
import CompanySelect from "../CompanySelect/CompanySelect";
import { useMainContext } from "../../context/MainContext";

const SideBar = () => {
  const [selectedCompany, setSelectedCompany] = useState("");
  const filterTitle: string = "Filters";
  const context = useMainContext();
  const { setFilters, filters } = context;

  const handleSubmitFilters = () => {
    setFilters({ ...filters, company: selectedCompany });
  };

  return (
    <div className="bg-[#F3F4F6] w-[300px] flex flex-col items-center h-screen justify-between">
      <h3 className="mt-10 text-xl font-semibold">{filterTitle}</h3>
      <div className="filters-container">
        <CompanySelect
          selectedCompany={selectedCompany}
          onChange={(company) => setSelectedCompany(company)}
        />
      </div>
      <div className="filters-button mb-10">
        <button onClick={handleSubmitFilters}>
          <p>Apply Filters</p>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
