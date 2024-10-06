import { createContext, useContext, useState } from "react";

export const CurrentApartmentsContext = createContext();

export const useCurrentApartmentsContext = () => {
  return useContext(CurrentApartmentsContext);
};

export const CurrentApartmentsContextProvider = ({ children }) => {
  const [currentWing, setCurrentWing] = useState(null);

  return (
    <CurrentApartmentsContext.Provider value={{ currentWing, setCurrentWing }}>
      {children}
    </CurrentApartmentsContext.Provider>
  );
};
