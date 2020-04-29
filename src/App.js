import React from "react";
import { Grid } from "@material-ui/core";

import Header from "./components/Header";
import MusicBrowser from "./components/MusicBrowser";
import MusicLibrary from "./components/MusicLibrary";

function App() {
  return (
    <Grid container direction="column">
      <Header />
      <Grid container direction="row">
        <Grid container item direction="column" xs={5}>
          <MusicBrowser />
        </Grid>
        <Grid container item xs={1}>
          <hr style={{ height: "100vh" }} />
        </Grid>
        <Grid container item direction="column" xs={6}>
          <MusicLibrary />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
