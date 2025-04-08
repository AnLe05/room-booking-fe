import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Invitation() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event: any) => {
    const newValue = event.target.value;

    // Allow only digits
    if (/^\d*$/.test(newValue)) {
      setValue(newValue);
      setError(newValue.length !== 10); // Error if not exactly 10 digits
    }
  };

  return (
    <>
      <div>Invitation</div>

      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1 } }}
        noValidate
        autoComplete="off"
      >
        <FormControl error={false} variant="standard">
          <InputLabel htmlFor="component-simple">Phone Number</InputLabel>

          <Input
            id="component-error"
            defaultValue="Composed TextField"
            aria-describedby="component-error-text"
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-helper">Name</InputLabel>
          <Input
            id="component-helper"
            defaultValue="Composed TextField"
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">
            Some important helper text
          </FormHelperText>
        </FormControl>
        <FormControl disabled variant="standard">
          <InputLabel htmlFor="component-disabled">Name</InputLabel>
          <Input id="component-disabled" defaultValue="Composed TextField" />
          <FormHelperText>Disabled</FormHelperText>
        </FormControl>
      </Box>
    </>
  );
}
