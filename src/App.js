import "./App.css";

import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Box, Button, Container, Typography } from "@mui/material";

import Experiences from "./pages/Experiences";
import Education from "./pages/Education";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import { Navigation } from "./components/Navigation";

import home_backgroud from "./assets/home_background.jpg";
const styles = {
  container: {
    backgroundImage: `url(${home_backgroud})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "70vh",
  },
};

function App() {
  return (
    <div style={styles.container}>
      <Container>
        <Router>
          {/* <Typography variant="h3" color="primary.main">Edward Bustos's Curriculum</Typography> */}

          <Navigation />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/experiences" element={<Experiences />} />
            <Route exact path="/education" element={<Education />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;
