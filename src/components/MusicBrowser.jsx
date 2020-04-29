import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Typography, CircularProgress, Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

import MusicForm from "./MusicForm";
import ArtistCard from "./ArtistCard";
import AlbumCard from "./AlbumCard";
import TrackCard from "./TrackCard";
import ErrorMessage from "./ErrorMessage";
import { searchMusic } from "../data/music";

export default function MusicBrowser() {
  const {
    loading,
    error,
    searchValue,
    pageCount,
    selectedOption,
  } = useSelector((state) => state.music);
  const dispatch = useDispatch();
  return (
    <>
      <Typography variant="h5">Music Browser</Typography>
      <MusicForm />
      {loading && <CircularProgress />}
      <Grid container spacing={2}>
        {selectedOption === "artist" && <ArtistCard />}
        {selectedOption === "album" && <AlbumCard />}
        {selectedOption === "track" && <TrackCard />}
      </Grid>
      {pageCount > 1 && (
        <Pagination
          count={pageCount}
          onChange={(e, value) => {
            dispatch(
              searchMusic(searchValue, selectedOption, (value - 1) * 25)
            );
          }}
        />
      )}
      {error && <ErrorMessage />}
    </>
  );
}
