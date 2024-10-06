import { Button, Grid2 } from "@mui/material";
import React from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";

const GroupedButton = ({
  isIcon,
  gridSpacing,
  container,
  direction,
  height,
  menu,
}) => {
  const renderGroup = () => (
    <Grid2
      spacing={gridSpacing}
      container={container}
      direction={direction}
      height={height}
    >
      {menu.map((item, index) => (
        <Button variant={item.variant} key={index}>
          {item.buttonContent}
        </Button>
      ))}
    </Grid2>
  );

  const renderGroupWithIcon = () => (
    <Grid2
      spacing={gridSpacing}
      container={container}
      direction={direction}
      height={height}
    >
      {menu.map((item, index) => (
        <Button
          variant={item.variant}
          key={index}
          startIcon={
            item.startIcon === "ExitToAppRoundedIcon" ? (
              <ExitToAppRoundedIcon />
            ) : (
              <AddRoundedIcon />
            )
          }
        >
          {item.buttonContent}
        </Button>
      ))}
    </Grid2>
  );

  return isIcon ? renderGroupWithIcon() : renderGroup();
};

export default GroupedButton;
