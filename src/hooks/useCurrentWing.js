import { useApartmentsContext } from "../context/ApartmentContext";
import { useCurrentApartmentsContext } from "../context/CurrentApartmentContext";

const useCurrentWing = () => {
  const { apartments } = useApartmentsContext();
  const { setCurrentWing } = useCurrentApartmentsContext();

  const setInitialValue = () => {
    setCurrentWing(apartments[0]);
  };

  const handleWingChange = (event, value) => {
    console.log(value);
    setCurrentWing(apartments[value - 1]);
  };

  return { handleWingChange, setInitialValue };
};
export default useCurrentWing;
