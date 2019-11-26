import React, { Component } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import Bookmarks from "@material-ui/icons/Bookmarks";
import NavBar from "./Navbar";
import MediaCard from "./Cards";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: purple
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <Button variant="contained" color="primary">
          <Bookmarks></Bookmarks>
          Welcome to Material UI
        </Button>
        <Button variant="contained" color="secondary">
          <Bookmarks></Bookmarks>
          Secondary color
        </Button>
        <TextField placeholder="Enter your name" label="Basic TextField" />
        <MediaCard />
      </MuiThemeProvider>
    );
  }
}

export default App;
