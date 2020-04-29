import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Paper, Tabs, Tab, Box } from "@material-ui/core";
import { searchMusic } from "../data/music";

export default function MusicLibrary() {
  const { artists, albums, tracks } = useSelector((state) => state.favorites);
  const [value, setValue] = useState(0);
  const changeHandler = (event, newValue) => {
    setValue(newValue);
  };
  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };
  const dispatch = useDispatch();
  const { selectedOption } = useSelector((state) => state.music);
  return (
    <>
      <Typography variant="h5">My Favorites</Typography>
      <Paper>
        <Tabs
          value={value}
          onChange={changeHandler}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Artists" {...a11yProps} />
          <Tab label="Albums" {...a11yProps} />
          <Tab label="Tracks" {...a11yProps} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        {artists.map((artist, i) => (
          <p
            key={i}
            onClick={() => {
              dispatch(searchMusic(artist, selectedOption));
            }}
            style={{ hover: "underline" }}
          >
            {artist}
          </p>
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {albums.map((album, i) => (
          <p key={i}>{album}</p>
        ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {tracks.map((track, i) => (
          <p key={i}>{track}</p>
        ))}
      </TabPanel>
    </>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
