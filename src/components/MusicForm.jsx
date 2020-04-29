import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  FormControl,
  FilledInput,
  InputAdornment,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { useField } from "../hooks";
import { searchMusic, optionChange } from "../data/music";

export default function MusicForm() {
  const { error, setError, setValue, ...field } = useField("", true);
  const { selectedOption } = useSelector((state) => state.music);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (!field.value) {
      setError(true);
    } else {
      dispatch(searchMusic(field.value, selectedOption));
    }
  };
  const changeHandler = (e) => {
    if (!field.value) {
      dispatch(optionChange(e.target.value));
    } else {
      dispatch(searchMusic(field.value, e.target.value));
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <FormControl>
        <FilledInput
          {...field}
          error={error}
          placeholder="Search..."
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        ></FilledInput>
        <RadioGroup onChange={changeHandler} value={selectedOption}>
          <FormControlLabel
            value="artist"
            control={<Radio />}
            label="Artists"
          />
          <FormControlLabel value="album" control={<Radio />} label="Albums" />
          <FormControlLabel value="track" control={<Radio />} label="Tracks" />
        </RadioGroup>
      </FormControl>
    </form>
  );
}
