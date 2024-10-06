import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useApartmentsContext } from "../../context/ApartmentContext";
import useCurrentWing from "../../hooks/useCurrentWing";

const SelectElement = ({ placeholder, selectHeight, minWidth }) => {
  const { apartments } = useApartmentsContext();

  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: minWidth,
      }}
    >
      <InputLabel sx={{ marginTop: "-8px" }}>{placeholder}</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        label="Select Building"
        sx={{ height: selectHeight }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {apartments &&
          apartments.map((apartment) => (
            <MenuItem value={apartment.id} key={apartment.id}>
              {apartment.wing} - Wing
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default SelectElement;
