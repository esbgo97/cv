import "./App.css";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { Container } from "@mui/material";

import Experiences from "./pages/Experiences";
import Education from "./pages/Education";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import { Navigation } from "./components/Navigation";

const styles = {
  container: {
    height: "30vh",
    backgroundImage: "linear-gradient(to right, #AEEBF2, #019CAD)",
  },
};

function App() {
  return (
    <div style={styles.container}>
      <Container fluid>
        <Router>
          <Navigation />
          <br />
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
