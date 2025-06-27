import React, { createContext, useContext, useState } from "react";

export type FilterState = {
  company: string;
  price: number | null;
  date: string;
};

type MainContextType = {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
};

const defaultState: FilterState = {
  company: "",
  price: null,
  date: "",
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
