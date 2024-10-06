import React from "react";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import useCurrentWing from "../../hooks/useCurrentWing";
import { useApartmentsCountContext } from "../../context/ApartmentsCountContext";
import { useApartmentsContext } from "../../context/ApartmentContext";
import { useCurrentApartmentsContext } from "../../context/CurrentApartmentContext";
import useWidth from "../../hooks/useWidth";

const CustomPagination = ({ position, bottom, padding, paginationColor }) => {
  const { handleWingChange } = useCurrentWing();
  const { totalApartmentCountDetails } = useApartmentsCountContext();
  const { apartments } = useApartmentsContext();
  const { currentWing } = useCurrentApartmentsContext();
  const width = useWidth();

  return (
    <Grid
      position={position || "absolute"}
      container
      bottom={width === "xs" || width === "sm" ? "-90px" : "-55px"}
      direction="row"
      justifyContent={
        width === "xs" || width === "sm" ? "center" : "space-between"
      }
      alignItems="center"
      width="100%"
      padding={padding || 2}
      spacing={1}
    >
      {totalApartmentCountDetails && (
        <Typography variant="body1">
          Showing: {currentWing.totalFlatNumber[0].number} out of{" "}
          {totalApartmentCountDetails.flats}
        </Typography>
      )}
      <Pagination
        count={apartments.length}
        page={currentWing.id || 1}
        onChange={handleWingChange}
        color={paginationColor || "primary"}
      />
    </Grid>
  );
};

export default CustomPagination;
