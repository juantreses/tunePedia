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
import { toggleAlbum } from "../data/favorites";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: "100%",
    marginTop: "30",
  },
});

export default function ArtistCard() {
  const classes = useStyles();
  const { data } = useSelector((state) => state.music);
  const { albums } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return data.map((album) => (
    <Grid item xs={6} key={album.id}>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={album.cover_big} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" noWrap={true}>
            {album.artist.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" noWrap={true}>
            {album.title}
          </Typography>
          <Button
            onClick={() => {
              dispatch(toggleAlbum(album.title));
            }}
          >
            {albums.includes(album.title) && <FavoriteIcon color="secondary" />}
            {!albums.includes(album.title) && (
              <FavoriteBorderIcon color="secondary" />
            )}
          </Button>
        </CardContent>
      </Card>
    </Grid>
  ));
}
