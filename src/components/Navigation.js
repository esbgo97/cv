import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, ButtonGroup } from "@mui/material";

export const Navigation = () => {
  return (
    <div style={{ backgroundColor: "rgba(0, 0, 0, .4)" }}>
        
    <Box
      sx={{ display: "flex" }}
      alignContent={"center"}
      justifyContent="right"
      
    >
      <ButtonGroup variant="text">
        <Button>
          <Link style={{ textDecoration: "none", color:"white" }} to="/home">
            Home
          </Link>
        </Button>

        <Button>
          <Link style={{ textDecoration: "none", color:"white" }} to="/experiences">
            Experiencias Laborales
          </Link>
        </Button>

        <Button>
          <Link style={{ textDecoration: "none", color:"white" }} to="/education">
            Educación y Certificados
          </Link>
        </Button>

        <Button>
          <Link style={{ textDecoration: "none", color:"white" }} to="/portfolio">
            Portafolio
          </Link>
        </Button>
      </ButtonGroup>
    </Box>
    
    </div>
  );
};
