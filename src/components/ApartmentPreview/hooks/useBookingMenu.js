import { useState } from "react";
import { useBookingMenuContext } from "../context/BookingMenuContext";
import { bookingSchemaList } from "../constants";

const useBookingMenu = () => {
  const [loading, setLoading] = useState(false);
  const { setBookingSchema } = useBookingMenuContext();
  const fetchBookingMenu = async () => {
    setLoading(true);
    try {
      /* const res = await fetch(
        "https://uponly-backend.onrender.com/bookingSchema"
      );
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      } */
      setBookingSchema({ ...bookingSchemaList });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, fetchBookingMenu };
};
export default useBookingMenu;
