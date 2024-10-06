import { Grid2 } from "@mui/material";
import React, { useEffect } from "react";
import { useCurrentApartmentsContext } from "../../context/CurrentApartmentContext";
import HeadingStack from "../HeadingStack/HeadingStack";
import useFetchButtonMenu from "../../hooks/useFetchButtonMenu";
import GroupedButton from "../GroupedButton/GroupedButton";
import ApartmentFloors from "../ApartmentFloors/ApartmentFloors";
import useBookingMenu from "../../hooks/useBookingMenu";
import useWidth from "../../hooks/useWidth";
import GroupedButtonMenu from "../GroupedButtonMenu/GroupedButtonMenu";

const PropertyDetails = () => {
  const { currentWing } = useCurrentApartmentsContext();
  const { wingsButtonMenu, fetchWingsButtonMenu } = useFetchButtonMenu();
  const { fetchBookingMenu } = useBookingMenu();
  const width = useWidth();

  useEffect(() => {
    fetchWingsButtonMenu();
  }, []);

  useEffect(() => {
    fetchBookingMenu();
  }, []);

  return (
    <>
      {wingsButtonMenu && (
        <Grid2
          height="20%"
          borderRadius="5px 5px 0 0"
          width="100%"
          bgcolor="#eafafe"
          paddingX={2}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <HeadingStack
            gridPadding={1}
            heading={`${currentWing.wing} - Wing`}
            subHeading={`Total Floor : ${currentWing.floors.length}`}
            subHeadingColor="grey"
            mainHeadingVariant="h6"
            subHeadingFontSize={12}
            subHeadingFontWeight={400}
            headingFontSize={
              width === "xl" || width === "lg" || width === "md"
                ? "1rem"
                : "0.8rem"
            }
          />

          {width === "xl" || width === "lg" || width === "md" ? (
            <GroupedButton
              gridSpacing={3}
              container
              direction="row"
              height={40}
              menu={wingsButtonMenu}
              isIcon
            />
          ) : (
            <GroupedButtonMenu menu={wingsButtonMenu} />
          )}
        </Grid2>
      )}
      <Grid2 height="80%">
        <ApartmentFloors />
      </Grid2>
    </>
  );
};

export default PropertyDetails;
