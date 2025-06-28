import React from "react";

type ManufacturerSelectProps = {
  selectedManufacturer: string;
  onChange: (manufacturer: string) => void;
};

const manufacturers = [
  "Ford",
  "Volkswagen",
  "Fiat",
  "Opel",
  "Citroen",
  "Kia",
  "Toyota",
  "Audi",
];

const ManufacturerSelect: React.FC<ManufacturerSelectProps> = ({
  selectedManufacturer,
  onChange,
}) => {
  return (
    <div className="w-full max-w-xs">
      <label
        htmlFor="manufacturer"
        className="block mb-1 text-sm font-medium text-gray-700"
      >
        Manufacturer
      </label>
      <select
        id="manufacturer"
        value={selectedManufacturer}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">All Manufacturers</option>
        {manufacturers.map((manufacturer) => (
          <option key={manufacturer} value={manufacturer}>
            {manufacturer}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ManufacturerSelect;
