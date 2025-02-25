/*
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Invitation from "./pages/Invitation";
import Room from "./pages/Rooms";
import ErrorPage from "./pages/Error";
import Layout from "./pages/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="invitation" element={<Invitation />} />
          <Route path="room" element={<Room />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
*/

import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./ProTip";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: "text.secondary",
      }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        {props.name}
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Vite.js example in TypeScript
        </Typography>
        <Button variant="outlined" onClick={() => console.log("abcxyz")}>
          Hello world
        </Button>
        <ProTip />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age} 
            label="Age"
            onChange={(event) => console.log(event.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Copyright name="an" />
        <Copyright name="jo" />
      </Box>
    </Container>
  );
}
