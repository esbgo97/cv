import React from "react";
import { IconButton, CardActions, Tooltip } from "@mui/material";
import { Code, Email, GitHub, LinkedIn, Twitter } from "@mui/icons-material";

export const Networks = () => {
  return (
    <CardActions
      sx={{ display: "flex", justifyContent: "space-evenly" }}
      style={{ backgroundColor: "#019CAD" }}
    >
      <Tooltip title="LinkedIn">
        <IconButton size="large">
          <LinkedIn color="white" sx={{ "&:hover": { color: "#0A66C2" } }} fontSize="large" />
        </IconButton>
      </Tooltip>

      <Tooltip title="GitHub">
        <IconButton size="large">
          <GitHub sx={{ "&:hover": { color: "black" } }} fontSize="large" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Hacker Rank">
        <IconButton size="large">
          <Code sx={{ "&:hover": { color: "#068932" } }} fontSize="large" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Twitter">
        <IconButton size="large">
          <Twitter sx={{ "&:hover": { color: "#1D9BF0" } }} fontSize="large" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Contact">
        <IconButton size="large">
          <Email sx={{ "&:hover": { color: "#D74030" } }} fontSize="large" />
        </IconButton>
      </Tooltip>

    </CardActions>
  );
};
