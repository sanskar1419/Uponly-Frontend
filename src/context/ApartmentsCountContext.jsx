import { createContext, useContext, useState } from "react";

export const ApartmentsCountContext = createContext();

export const useApartmentsCountContext = () => {
  return useContext(ApartmentsCountContext);
};

export const ApartmentsCountContextProvider = ({ children }) => {
  const [totalApartmentCountDetails, setTotalApartmentCountDetails] =
    useState(null);

  return (
    <ApartmentsCountContext.Provider
      value={{ totalApartmentCountDetails, setTotalApartmentCountDetails }}
    >
      {children}
    </ApartmentsCountContext.Provider>
  );
};
