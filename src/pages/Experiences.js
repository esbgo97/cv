import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Avatar, Card, CardContent, Grid } from "@mui/material";
import indra_logo from "../assets/indra_logo.png";
import qvision_logo from "../assets/qvision_logo.png";
import sistran_logo from "../assets/sistran_logo.png";
import itehl_logo from "../assets/itehl_logo.png";

const steps = [
  {
    label: "Indra Company",
    logo: indra_logo,
    dates: ["May 2021 - May 2023 ", <b>(2 Years)</b>],
    lead: "Software Enginner, App Support",
    description: `I was in charge of communicating with the functional user to receive their requirements or adjustments for a platform that manages volumes related to the oil industry.`,
  },
  {
    label: "Q-Vision Technologies",
    logo: qvision_logo,
    dates: ["Aug 2020 - May 2021 ", <b>(9 Months)</b>],
    lead: ".NET Developer",
    description:
      "I was hired to implement the fee calculation module for an application related to medical services.",
  },
  {
    label: "Indra Company",
    logo: indra_logo,
    dates: ["Apr 2020 - Jul 2020 ", <b>(4 Months)</b>],
    lead: "Software Enginner, App Support",
    description: `I was in charge of communicating with the functional user to receive their requirements or adjustments for a platform that manages volumes related to the oil industry.`,
  },
  {
    label: "Sistran SA",
    logo: sistran_logo,
    dates: ["May 2018 - Jan 2020 ", <b>(1.5 Years)</b>],
    lead: "Software Architect, Data Analyst",
    description: `Responsible for implementing a messaging queue solution for communication between FASECOLDA (Insurance Guild in Colombia), and different insurance companies, to calculate the policies's costs.`,
  },
  {
    label: "Itehl Digital",
    logo: itehl_logo,
    dates: ["Jan 2017 - Apr 2018 ", <b>(1.5 Years)</b>],
    lead: "Developer Jr. - Data Analyst Jr",
    description: `First company where I worked as a junior developer, there I acquired most of my knowledge in the area of software development and business management.`,
  },
];

export default function Experiences() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Card elevation={4}>
      <CardContent>
        <Typography variant="h4" color="primary.main">
          Work Experience
        </Typography>
        <p>
          Here I briefly show you some of my Work Experiences as Software
          Enginner.
        </p>
        <Grid container>
          <Grid item md={2}></Grid>
          <Grid item md={8}>
            {/* <Box  alignItems="center" display="flex"> */}
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepLabel
                    optional={
                      <Typography variant="caption">{step.lead}</Typography>
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Grid container>
                      <Grid item md={9}>
                        <Typography variant="subtitle1">
                          {step.dates}
                        </Typography>
                        <Typography>{step.description}</Typography>
                      </Grid>

                      <Grid
                        item
                        md={3}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        {step.logo && <img src={step.logo} width={180} />}
                      </Grid>
                    </Grid>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Previous
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>
                  This has been my personal experience, to hire my services you
                  can <Button variant="text">Contact me here</Button>
                </Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  See Again
                </Button>
              </Paper>
            )}
            {/* </Box> */}
          </Grid>
          <Grid item md={2}></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
