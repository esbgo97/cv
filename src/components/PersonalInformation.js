import React from "react";
import { Grid, Typography } from "@mui/material";

const PersonalItem = (props) => {
  const { label, value } = props;

  return (
    <>
      <Grid item xs={6}>
        <Typography variant="button" fontSize={18}>
          <b>{label}:</b>
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="subtitle1" fontSize={18}>
          {value}
        </Typography>
      </Grid>
    </>
  );
};

export const PersonalInformation = () => {
  return (
    <Grid container>
      <PersonalItem label="Age" value="26" />
      <PersonalItem
        label="Address"
        value="Calle 11 # 16 - 41, Chiquinquirá - Boyacá (COL)"
      />
      <PersonalItem label="Email" value="esbgo97@gmail.com" />
      <PersonalItem label="Phone" value="(+57) 320 967 2421" />
    </Grid>
  );
};
