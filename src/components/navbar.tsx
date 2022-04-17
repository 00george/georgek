import React from "react";
import AppBar from "@mui/material/AppBar";
import {Button, Container, Grid, Toolbar, Typography} from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="relative">
    <Toolbar>
      <Typography variant="h6" color="grey" noWrap>
        George Kenny
      </Typography>
      <Button>
        Projects
      </Button>
      <Button>
        CV
      </Button>
    </Toolbar>
  </AppBar>
  );
};

export default NavBar;
