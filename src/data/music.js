import axios from "axios";

/*****************/
/* INITIAL STATE */
/*****************/
const initialState = {
  loading: false,
  error: "",
  pageCount: null,
  data: [],
  selectedOption: "artist",
  searchValue: "",
};

/*********/
/* TYPES */
/*********/
const FETCH_MUSIC_START = "FETCH_MUSIC_START";
const FETCH_MUSIC_SUCCESS = "FETCH_MUSIC_SUCCESS";
const FETCH_MUSIC_ERROR = "FETCH_MUSIC_ERROR";
const OPTION_CHANGE = "OPTION_CHANGE";
const UNSET_ERROR = "UNSET_ERROR";

/********************/
/* ACTIONS CREATORS */
/********************/
export const searchMusic = (str, selectedOption, offset = 0) => (dispatch) => {
  dispatch(setLoad());
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/${selectedOption}?q=${str}&index=${offset}`
    )
    .then((response) => {
      if (response.data.data.length === 0) {
        dispatch(setError("No music found"));
      }
      dispatch(
        setMusic({
          data: response.data.data,
          resultCount: response.data.total,
          option: selectedOption,
          searchValue: str,
        })
      );
    })
    .catch((error) => {
      console.log(error);
      dispatch(setError(error.message));
    });
};

export const setLoad = () => ({ type: FETCH_MUSIC_START });
export const setMusic = (music) => ({
  type: FETCH_MUSIC_SUCCESS,
  payload: music,
});
export const setError = (msg) => ({ type: FETCH_MUSIC_ERROR, payload: msg });
export const optionChange = (str) => ({
  type: OPTION_CHANGE,
  payload: str,
});
export const unsetError = () => ({
  type: UNSET_ERROR,
});

/***********/
/* REDUCER */
/***********/
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MUSIC_START:
      return { ...state, loading: true };
    case FETCH_MUSIC_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload.data,
        pageCount: Math.ceil(payload.resultCount / 25),
        searchValue: payload.searchValue,
        selectedOption: payload.option,
      };
    case FETCH_MUSIC_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case OPTION_CHANGE:
      return {
        ...state,
        selectedOption: payload,
      };
    case UNSET_ERROR:
      return {
        ...state,
        error: "",
      };
    default:
      return state;
  }
};
