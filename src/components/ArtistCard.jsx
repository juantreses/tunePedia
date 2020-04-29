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
import { toggleArtist } from "../data/favorites";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 0,
    paddingTop: "100%",
  },
});

export default function ArtistCard() {
  const classes = useStyles();
  const { data } = useSelector((state) => state.music);
  const { artists } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return data.map((artist) => (
    <Grid item xs={4} key={artist.id}>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={artist.picture_big} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" noWrap={true}>
            {artist.name}
          </Typography>
          <Button
            onClick={() => {
              dispatch(toggleArtist(artist.name));
            }}
          >
            {artists.includes(artist.name) && (
              <FavoriteIcon color="secondary" />
            )}
            {!artists.includes(artist.name) && (
              <FavoriteBorderIcon color="secondary" />
            )}
          </Button>
        </CardContent>
      </Card>
    </Grid>
  ));
}
