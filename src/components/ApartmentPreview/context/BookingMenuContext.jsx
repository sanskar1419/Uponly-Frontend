import { createContext, useContext, useState } from "react";

export const BookingMenuContext = createContext();

export const useBookingMenuContext = () => {
  return useContext(BookingMenuContext);
};

export const BookingMenuContextProvider = ({ children }) => {
  const [bookingSchema, setBookingSchema] = useState(null);

  return (
    <BookingMenuContext.Provider value={{ bookingSchema, setBookingSchema }}>
      {children}
    </BookingMenuContext.Provider>
  );
};
