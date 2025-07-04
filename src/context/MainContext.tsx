import React, { createContext, useContext, useState } from "react";

export type FilterState = {
  company: string;
  manufacturer: string;
  priceFrom: number | null;
  priceTo: number | null;
  dateFrom: string;
  dateTo: string;
};

type MainContextType = {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
};

const defaultState: FilterState = {
  company: "",
  manufacturer: "",
  priceFrom: null,
  priceTo: null,
  dateFrom: "",
  dateTo: "",
};

const MainContext = createContext<MainContextType | undefined>(undefined);

export const MainContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filters, setFilters] = useState<FilterState>(defaultState);

  return (
    <MainContext.Provider value={{ filters, setFilters }}>
      {children}
    </MainContext.Provider>
  );
};

// Hook to use the filter context
// eslint-disable-next-line react-refresh/only-export-components
export const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useMainContext must be used within a FilterProvider");
  }
  return context;
};
