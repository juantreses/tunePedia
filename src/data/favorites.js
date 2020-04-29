/*****************/
/* INITIAL STATE */
/*****************/
const initialState = {
  artists: ["Between the Buried and Me"],
  albums: ["Automata I"],
  tracks: ["Condemned to the Gallows"],
};

/*********/
/* TYPES */
/*********/
const TOGGLE_ARTIST = "TOGGLE_ARTIST";
const TOGGLE_ALBUM = "TOGGLE_ALBUM";
const TOGGLE_TRACK = "TOGGLE_TRACK";

/********************/
/* ACTIONS CREATORS */
/********************/
export const toggleArtist = (artist) => ({
  type: TOGGLE_ARTIST,
  payload: artist,
});
export const toggleAlbum = (album) => ({
  type: TOGGLE_ALBUM,
  payload: album,
});
export const toggleTrack = (track) => ({
  type: TOGGLE_TRACK,
  payload: track,
});

/***********/
/* REDUCER */
/***********/
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_ARTIST:
      if (state.artists.includes(payload)) {
        return {
          ...state,
          artists: state.artists.filter((artist) =>
            artist !== payload ? artist : false
          ),
        };
      }
      return { ...state, artists: [...state.artists, payload] };
    case TOGGLE_ALBUM:
      if (state.albums.includes(payload)) {
        return {
          ...state,
          albums: state.albums.filter((album) =>
            album !== payload ? album : false
          ),
        };
      }
      return { ...state, albums: [...state.albums, payload] };
    case TOGGLE_TRACK:
      if (state.tracks.includes(payload)) {
        return {
          ...state,
          tracks: state.tracks.filter((track) =>
            track !== payload ? track : false
          ),
        };
      }
      return { ...state, tracks: [...state.tracks, payload] };
    default:
      return state;
  }
};
