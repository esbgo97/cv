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
      <PersonalItem label="Age" value="26" icon={<Celebration />} />
      <PersonalItem label="Experience" value="+6 Years" icon={<Work />} />
      <PersonalItem
        label="Location"
        icon={<LocationOn />}
        element={
          <>
            Chiquinquirá - Boyacá (<ReactCountryFlag countryCode="CO" svg />)
          </>
        }
      />
      <PersonalItem label="Email" value="esbgo97@gmail.com" icon={<Email />} />
      <PersonalItem
        label="Phone"
        value={[<b>(+57)</b>, " 320 967 2421"]}
        icon={<Phone />}
      />
      <PersonalItem
        label="Languages"
        icon={<Language />}
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
