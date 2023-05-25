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
        <IconButton
          size="large"
          onClick={() => {
            window.open("https://www.linkedin.com/in/edward-bustos/");
          }}
        >
          <LinkedIn
            color="white"
            sx={{ "&:hover": { color: "#0A66C2" } }}
            fontSize="large"
          />
        </IconButton>
      </Tooltip>

      <Tooltip title="GitHub">
        <IconButton
          size="large"
          onClick={() => {
            window.open("https://github.com/esbgo97");
          }}
        >
          <GitHub sx={{ "&:hover": { color: "black" } }} fontSize="large" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Hacker Rank">
        <IconButton
          size="large"
          onClick={() => {
            window.open("https://www.hackerrank.com/esbgo97?hr_r=1");
          }}
        >
          <Code sx={{ "&:hover": { color: "#068932" } }} fontSize="large" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Twitter">
        <IconButton
          size="large"
          onClick={() => {
            window.open("https://twitter.com/Esbgo");
          }}
        >
          <Twitter sx={{ "&:hover": { color: "#1D9BF0" } }} fontSize="large" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Contact">
        <IconButton
          size="large"
          onClick={() => {
            window.open("mailto:esbgo97@gmail.com");
          }}
        >
          <Email sx={{ "&:hover": { color: "#D74030" } }} fontSize="large" />
        </IconButton>
      </Tooltip>
    </CardActions>
  );
};
