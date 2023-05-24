import React from "react";
import {
  Card,
  Box,
  CardContent,
  Divider,
  Grid,
  Typography,
  Slider,
} from "@mui/material";
import { Networks } from "../components/Networks";
import { PersonalInformation } from "../components/PersonalInformation";
import profile from "../assets/profile.jpeg";

const Home = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <Card elevation={4}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={profile}
                  width={350}
                  height={400}
                  style={{ borderRadius: "5px" }}
                  alt="Profile"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" color="primary.main">
                I'm <b>Edward Bustos</b>
              </Typography>
              <Typography variant="subtitle">
                Software Developer & Data Analyst
              </Typography>
              <br />
              <Divider />
              <br />
              <br />
              <br />
              <PersonalInformation />
            </Grid>
          </Grid>
        </CardContent>

        <Networks />
      </Card>
      <br />
      <Grid container spacing={2}>
       
        <Grid item xs={6}>
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

        <Grid item xs={6}>
          <Typography variant="h4" color="primary.main">
            About Me
          </Typography>
          <p style={{ textAlign: "justify" }}>
            Developer with experience in .NET and JavaScript technologies,
            passionate about programming and software design. I am a dynamic
            person, I like to learn and work as a team, persistent in meeting
            goals and objectives that lead to the improvement of my life project
            and those around me.
          </p>
        </Grid>

      </Grid>
    </div>
  );
};

export default Home;
