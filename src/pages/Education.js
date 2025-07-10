import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import React from "react";

import macs_logo from "../assets/macs_logo.jpg";
import sena_logo from "../assets/sena_logo.png";

import plural_logo from "../assets/plural_logo.png";
import udemy_logo from "../assets/udemy_logo.png";
import platzi_logo from "../assets/platzi_logo.png";

const studies = [
  {
    title: "ANALYST DEVELOPER",
    institute: "Servicio Nacional de Aprendizaje (SENA)",
    logo: sena_logo,
    year: 2017,
  },

  {
    title: "STATISTICS",
    institute: "IED Marco Antonio Carreño Silva",
    logo: macs_logo,
    year: 2014,
  },

  {
    title: "TECHNICAL DESIGN",
    institute: "IED Marco Antonio Carreño Silva",
    logo: macs_logo,
    year: 2014,
  },

  {
    title: "PHOTOGRAPHY",
    institute: "IED Marco Antonio Carreño Silva",
    logo: macs_logo,
    year: 2014,
  },
  {
    title: "HIGH SCHOOL",
    institute: "IED Marco Antonio Carreño Silva",
    logo: macs_logo,
    year: 2014,
  },
];

const courses = [
  {
    title: "Python Expert",
    institute: "Platzi",
    year: "2024",
    logo: platzi_logo,
  },
  {
    title: "UI/UX Expert",
    institute: "Platzi",
    year: "2024",
    logo: platzi_logo,
  },
  {
    title: "JWT Authentication",
    institute: "Udemy",
    year: "2019",
    logo: udemy_logo,
  },
  {
    title: "SOA (Service Oriented Architecture)",
    institute: "PluralSight",
    year: "2017",
    logo: plural_logo,
  },
  {
    title: ".NET Developement",
    institute: "PluralSight",
    year: "2017",
    logo: plural_logo,
  },
];

const EducationItem = (props) => {
  const { info, index } = props;
  return (
    <Accordion key={index}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={`panel{index}a-content`}
        id={`panel{index}a-header`}
      >
        <Grid container>
          <Grid item md="9">
            <Typography color="primary.main">{info.title} </Typography>
            <Typography variant="caption">{info.institute}</Typography>
          </Grid>

          <Grid item md="3">
            <img src={info.logo} height={50} alt="Logo"/>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <b>Institute:</b> {info.institute}
        </Typography>
        <Typography>
          <b>Year:</b> {info.year}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const Education = () => {
  return (
    <Card elevation={4}>
      <CardContent>
        <Typography variant="h4" color="primary.main">
          Education & Certificates
        </Typography>
        <br />
        <Grid container spacing={2}>
          <Grid item md sm={12} style={{ marginRight: 15 }}>
            <Typography variant="h5" color="primary.main">
              Institution Learning
            </Typography>
            <br />
            {studies.map((info, i) => (
              <>
                <EducationItem kei={i} index={i} info={info} />
                <br />
              </>
            ))}
          </Grid>

          <Divider orientation="vertical" flexItem />

          <Grid item md sm={12}>
            <Typography variant="h5" color="primary.main">
              Self-Learning
            </Typography>
            <br />
            {courses.map((info, i) => (
              <>
                <EducationItem kei={i} index={i} info={info} />
                <br />
              </>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Education;
