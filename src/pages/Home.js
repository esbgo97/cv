import React from "react";
import {
  Card,
  Box,
  CardContent,
  Divider,
  Grid,
  Typography,
  Avatar,
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
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
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
            <Grid item xs={6}>
              <Typography variant="h4">
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
      <Grid container spacing={2}>
       
        <Grid item xs={6}>
          <Typography variant="h4"> About Me</Typography>
          <p style={{textAlign:"justify"}}>
            Developer with experience in .NET and JavaScript technologies,
            passionate about programming and software design. I am a dynamic
            person, I like to learn and work as a team, persistent in meeting
            goals and objectives that lead to the improvement of my life project
            and those around me.
          </p>
        </Grid>

        <Grid item xs={6}>
        <Typography variant="h4"> Skills</Typography>
            <ul>
                <li>Software Development (.NET, JavaScript)</li>
                <li>Data Analyst (SQL, Power BI)</li>
                <li>DevOps Expert</li>
                <li>Azure Expert</li>
            </ul>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
