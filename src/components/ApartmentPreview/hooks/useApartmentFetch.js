import { useState } from "react";
import { useApartmentsContext } from "../context/ApartmentContext";
import { Apartments } from "../constants";

const useFetchApartment = () => {
  const [loading, setLoading] = useState(false);
  const { setApartments } = useApartmentsContext();

  const fetchApartments = async () => {
    setLoading(true);
    try {
      /* const res = await fetch("https://uponly-backend.onrender.com/Apartments");
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      } */
      setApartments([...Apartments]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, fetchApartments };
};
export default useFetchApartment;
