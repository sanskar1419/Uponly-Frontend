import { createContext, useContext, useState } from "react";

export const ApartmentsContext = createContext();

export const useApartmentsContext = () => {
  return useContext(ApartmentsContext);
};

export const ApartmentsContextProvider = ({ children }) => {
  const [apartments, setApartments] = useState(null);

  return (
    <ApartmentsContext.Provider value={{ apartments, setApartments }}>
      {children}
    </ApartmentsContext.Provider>
  );
};
