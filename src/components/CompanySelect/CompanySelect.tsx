import React from "react";

type CompanySelectProps = {
  selectedCompany: string;
  onChange: (company: string) => void;
};

const companies = ["Sixt", "Avis", "FlexCar", "Instacar", "Hertz"];

const CompanySelect: React.FC<CompanySelectProps> = ({
  selectedCompany,
  onChange,
}) => {
  return (
    <div className="w-full max-w-xs">
      <label
        htmlFor="company"
        className="block mb-1 text-sm font-medium text-gray-700"
      >
        Company
      </label>
      <select
        id="company"
        value={selectedCompany}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">All Companies</option>
        {companies.map((company) => (
          <option key={company} value={company}>
            {company}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CompanySelect;
