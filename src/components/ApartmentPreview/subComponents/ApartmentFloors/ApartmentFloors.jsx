import React from "react";
import ApartmentFloor from "../ApartmentFloor/ApartmentFloor";
import { useCurrentApartmentsContext } from "../../context/CurrentApartmentContext";

const ApartmentFloors = () => {
  const { currentWing } = useCurrentApartmentsContext();

  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
        flexDirection: "column",
        gap: "10px",
        overflowY: "auto",
        maxHeight: "82%",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {currentWing.floors.map((floor, index) => (
        <ApartmentFloor key={index} floor={floor} />
      ))}
    </div>
  );
};

export default ApartmentFloors;
