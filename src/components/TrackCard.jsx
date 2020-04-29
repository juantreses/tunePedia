import React from "react";
import {
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useSelector, useDispatch } from "react-redux";
import { toggleTrack } from "../data/favorites";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    width: 200,
  },
  cover: {
    width: "100%",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export default function ArtistCard() {
  const classes = useStyles();
  const { data } = useSelector((state) => state.music);
  const { tracks } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return data.map((track) => (
    <Grid item xs={12} key={track.id}>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {track.title_short}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {track.artist.name}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <audio controls src={track.preview}></audio>
          </div>
        </div>
        <CardMedia className={classes.cover} image={track.album.cover} />
        <Button
          onClick={() => {
            dispatch(toggleTrack(track.title_short));
          }}
        >
          {tracks.includes(track.title_short) && (
            <FavoriteIcon color="secondary" />
          )}
          {!tracks.includes(track.title_short) && (
            <FavoriteBorderIcon color="secondary" />
          )}
        </Button>
      </Card>
    </Grid>
  ));
}
