import React, { useState } from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { useSelector, useDispatch } from "react-redux";
import { unsetError } from "../data/music";

export default function ErrorMessage() {
  const { error } = useSelector((state) => state.music);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    dispatch(unsetError());
  };
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlert onClose={handleClose} severity="error">
        {error}
      </MuiAlert>
    </Snackbar>
  );
}
