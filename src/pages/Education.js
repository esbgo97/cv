import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

const EducationItem = (props) => {
  const { info, index } = props;
  return (
    <Accordion key={index}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={`panel{index}a-content`}
        id={`panel{index}a-header`}
      >
        <Typography color="primary.main">{info.title}</Typography>
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
const studies = [
  {
    title: "ANALYST DEVELOPER",
    institute: "Servicio Nacional de Aprendizaje (SENA)",
    year: 2017,
  },

  {
    title: "STATISTICS",
    institute: "IED Marco Antonio Carreño Silva",
    year: 2014,
  },

  {
    title: "TECHNICAL DESIGN",
    institute: "IED Marco Antonio Carreño Silva",
    year: 2014,
  },

  {
    title: "PHOTOGRAPHY",
    institute: "IED Marco Antonio Carreño Silva",
    year: 2014,
  },
  {
    title: "HIGH SCHOOL",
    institute: "IED Marco Antonio Carreño Silva",
    year: 2014,
  },
];
const Education = () => {
  return (
    <Card elevation={4}>
      <CardContent>
        <Typography variant="h4" color="primary.main">
          Education & Certificates
        </Typography>
        {studies.map((info, i) => (
          <>
            <EducationItem kei={i} index={i} info={info} />
            <br />
          </>
        ))}
      </CardContent>
    </Card>
  );
};

export default Education;
