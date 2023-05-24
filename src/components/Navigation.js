import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, ButtonGroup } from "@mui/material";

export const Navigation = () => {
  return (
    <Box
      sx={{ display: "flex" }}
      alignContent={"center"}
      justifyContent="right"
    >
      <div style={{ backgroundColor: "rgba(0, 0, 0, .6)" }}>
        <ButtonGroup variant="contained" >
          <Button>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Home
            </Link>
          </Button>

          <Button>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/experiences"
            >
              Work Experience
            </Link>
          </Button>

          <Button>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/education"
            >
              Education and Certificates
            </Link>
          </Button>

          <Button>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/portfolio"
            >
              Portfolio
            </Link>
          </Button>
        </ButtonGroup>
      </div>
    </Box>
  );
};
