import React from "react";

//for autocomplete select box from Material UI
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const useAutoComplete = ({ label, validator }) => {
  let options = isOptionsAvaliable || []; // Simplified options initialization

  const {
    value,
    isValid,
    helperText,
    isTouched,
    changeHandler,
    blurHandler,
    reset,
  } = InputHandler(validator);

  const errorContent = !isValid && isTouched ? helperText : null;

  return {
    inputHandler: {
      isValid,
      value,
      reset,
    },
    input: (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    ),
  };
};

export default useAutoComplete;
