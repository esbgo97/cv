import React from "react";
import { Grid, Typography } from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import {
  Celebration,
  Email,
  Language,
  LocationOn,
  Phone,
  Work,
} from "@mui/icons-material";

const PersonalItem = (props) => {
  const { label, value, element, icon } = props;

  return (
    <>
      <Grid item xs={4}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {icon !== undefined && icon} &nbsp;
          <Typography variant="button" fontSize={18}>
            {label}
            <b>:</b>
          </Typography>
        </div>
      </Grid>

      <Grid item xs={8}>
        <Typography variant="subtitle1" fontSize={18}>
          {value ?? element}
        </Typography>
      </Grid>
    </>
  );
};

export const PersonalInformation = () => {
  return (
    <Grid container>
      <PersonalItem label="Experience" value="+6 Years" icon={<Work color="primary"/>} />
      <PersonalItem label="Age" value="26" icon={<Celebration color="primary"/>} />
      <PersonalItem
        label="Location"
        icon={<LocationOn color="primary"/>}
        element={
          <>
            Chiquinquirá - Boyacá (<ReactCountryFlag countryCode="CO" svg />)
          </>
        }
      />
      <PersonalItem label="Email" value="esbgo97@gmail.com" icon={<Email color="primary"/>} />
      <PersonalItem
        label="Phone"
        value={[<b>(+57)</b>, " 320 967 2421"]}
        icon={<Phone color="primary"/>}
      />
      <PersonalItem
        label="Languages"
        icon={<Language color="primary"/>}
        element={
          <>
            <ReactCountryFlag countryCode="US" svg /> &nbsp;
            <ReactCountryFlag countryCode="ES" svg />
          </>
        }
      />
    </Grid>
  );
};
