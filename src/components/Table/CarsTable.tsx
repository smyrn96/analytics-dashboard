import React from "react";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type { Car, CarResponse } from "../../types/car";

type CarsTablePropsType = {
  data: CarResponse;
};

const columns: ColumnDef<Car>[] = [
  {
    header: "Model",
    accessorKey: "name",
  },
  {
    header: "Company",
    accessorKey: "company",
  },
  {
    header: "Car Type",
    accessorKey: "car_type",
  },
  {
    header: "Transmission",
    accessorKey: "transmission",
  },
  {
    header: "Gas Mileage",
    accessorKey: "gas_mileage",
  },
  {
    header: "Fuel",
    accessorKey: "fuel_type",
  },
];

const CarTable: React.FC<CarsTablePropsType> = ({ data }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="h-[350px] bg-white border border-gray-200 rounded-2xl flex items-center justify-center">
      {data ? (
        <div className="w-full h-full overflow-x-auto border border-gray-200 rounded-lg shadow">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="p-2 text-left text-sm text-gray-600"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="border-t hover:bg-gray-50">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="p-2 text-sm text-gray-700">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>There are no data to display</p>
      )}
    </div>
  );
};

export default CarTable;
