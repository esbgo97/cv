import React from "react";
import { IconButton, CardActions } from "@mui/material";
import { Code, GitHub, Google, LinkedIn, Twitter } from "@mui/icons-material";

export const Networks = () => {
  return (
    <CardActions
      sx={{ display: "flex", justifyContent: "center", borderSpacing: 1 }}
      style={{ backgroundColor: "rgba(0, 0, 0, .3)" }}
    >
      <IconButton size="large">
        <LinkedIn sx={{ "&:hover": { color: "#0A66C2" } }} fontSize="large" />
      </IconButton>

      <IconButton size="large">
        <GitHub sx={{ "&:hover": { color: "black" } }} fontSize="large" />
      </IconButton>

      <IconButton size="large">
        <Code sx={{ "&:hover": { color: "#068932" } }} fontSize="large" />
      </IconButton>

      <IconButton size="large">
        <Google sx={{ "&:hover": { color: "#4587F4" } }} fontSize="large" />
      </IconButton>

      <IconButton size="large">
        <Twitter sx={{ "&:hover": { color: "#1D9BF0" } }} fontSize="large" />
      </IconButton>
    </CardActions>
  );
};
