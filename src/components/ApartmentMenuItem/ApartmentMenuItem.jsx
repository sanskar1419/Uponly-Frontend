import { ListItemIcon, MenuItem } from "@mui/material";
import React from "react";
import * as Icons from "@mui/icons-material";

const ApartmentMenuItem = ({ handleClose, color, iconName, title }) => {
  let DynamicIcon = Icons[iconName];

  return (
    <MenuItem onClick={handleClose}>
      <ListItemIcon>
        <DynamicIcon
          fontSize="small"
          sx={{ color: color }}
          className="my-icon-css"
        />
      </ListItemIcon>
      {title}
    </MenuItem>
  );
};

export default ApartmentMenuItem;
