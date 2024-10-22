import { Divider, Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import CustomIcon from "../CustomIcon/CustomIcon";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import AccountMenu from "../ApartmentMenu/ApartmentMenu";

const ApartmentFloor = ({ floor }) => {
  return (
    <Grid2 width="100%">
      <Typography fontSize={18} sx={{ fontWeight: "lighter" }}>
        {floor.floorNumber}
        <sup style={{ fontSize: "0.8rem" }}>st</sup> Floor
      </Typography>
      <Divider sx={{ marginY: "1rem" }}></Divider>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {floor.flats.map((flat, index) => (
          <Stack direction="column" position="relative" key={index}>
            <CustomIcon>
              <ApartmentRoundedIcon
                sx={{
                  fontSize: "4rem",
                  color: `${
                    flat.status === "Available"
                      ? "green"
                      : flat.status === "Booked"
                      ? "red"
                      : "grey"
                  }`,
                }}
              />
              <AccountMenu flat={flat}></AccountMenu>
            </CustomIcon>
            <Typography fontSize="0.8rem">
              Flat No. - {flat.flatNumber}
            </Typography>
          </Stack>
        ))}
      </div>
      <Divider sx={{ marginY: "1rem" }}></Divider>
    </Grid2>
  );
};

export default ApartmentFloor;
