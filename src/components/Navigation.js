import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Tab, Tabs } from "@mui/material";

export const Navigation = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Box
      sx={{ display: "flex" }}
      alignContent={"center"}
      justifyContent="right"
    >
      <Tabs value={selected}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Tab
            label="Home"
            onClick={() => setSelected(0)}
            sx={{ "&:hover": { fontWeight: "bold" } }}
          />
        </Link>

        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/experiences"
        >
          <Tab label="Work Experience" onClick={() => setSelected(1)} />
        </Link>

        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/education"
        >
          <Tab
            label="Education & Certificates"
            onClick={() => setSelected(2)}
          />
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/portfolio"
        >
          <Tab label="Portfolio" onClick={() => setSelected(3)} />
        </Link>
        {/* <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/blog"
        >
          <Tab label="Blog" onClick={() => setSelected(3)} />
        </Link> */}
      </Tabs>
    </Box>
  );
};
