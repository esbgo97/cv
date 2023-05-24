import React from "react";
import {
  Card,
  Box,
  CardContent,
  Chip,
  Divider,
  Grid,
  Typography,
  Slider,
  Container,
  Fab,
  Tooltip
} from "@mui/material";
import { Networks } from "../components/Networks";
import { PersonalInformation } from "../components/PersonalInformation";
import profile from "../assets/profile.jpeg";
import {
  Download,
  Extension,
  Flight,
  MusicNote,
  PedalBike,
} from "@mui/icons-material";
import cv_edward from "../assets/cv_edwardbustos.pdf";

let onDownloadInfo = () => {
  console.log(cv_edward);
};

const Home = () => {
  return (
    <div>
      <Card elevation={4}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <br />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={profile}
                  width={200}
                  height={225}
                  style={{ borderRadius: "5px" }}
                  alt="Profile"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box textAlign="center">
                <Typography variant="h4" color="primary.main">
                  I'm <b>Edward Bustos</b>
                </Typography>
                <Typography variant="subtitle">
                  Software Developer & Data Analyst
                </Typography>
              </Box>

              <br />
              <Divider />
              <br />
              <PersonalInformation />
              <br />
            </Grid>
            <Grid item></Grid>
          </Grid>
        </CardContent>

        <Networks />
      </Card>
      <br />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="h4" color="primary.main">
              Skills
            </Typography>
            <ul>
              <li>
                Software Development (.NET, JavaScript)
                <Slider color="primary" value={95} />
              </li>
              <li>
                Data Analyst (SQL, Power BI)
                <Slider color="primary" value={70} />
              </li>
              <li>
                DevOps Expert
                <Slider color="primary" value={90} />
              </li>
              <li>
                Azure Expert
                <Slider color="primary" value={80} />
              </li>
            </ul>
          </Grid>

          <Grid container item sm={12} md={6}>
            <Grid item sm={12}>
              <Typography variant="h4" color="primary.main">
                About Me
              </Typography>
              <p style={{ textAlign: "justify" }}>
                Developer with experience in .NET and JavaScript technologies,
                passionate about programming and software design. I am a dynamic
                person, I like to learn and work as a team, persistent in
                meeting goals and objectives that lead to the improvement of my
                life project and those around me.
              </p>
            </Grid>

            <Grid item sm={12}>
              <Typography variant="h4" color="primary.main">
                Hobbies
              </Typography>
              <br />
              <Box
                sx={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "space-evenly",
                }}
              >
                <Chip label="Mountain Bike" icon={<PedalBike />} />
                <Chip label="Travel" icon={<Flight />} />
                <Chip label="Play Guitar" icon={<MusicNote />} />
                <Chip label="Puzzle Revolve" icon={<Extension />} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <a
        href={cv_edward}
        download="CV Edward Bustos"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none", color: "white" }}
      >
        <Tooltip title="Download CV">
          <Fab
            color="primary"
            sx={{ position: "fixed", bottom: 16, right: 16 }}
            onClick={onDownloadInfo}
          >
            <Download />
          </Fab>
        </Tooltip>
      </a>
    </div>
  );
};

export default Home;
