import React from "react";

// for Select from Material UI
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputHandler from "../inputHandler/InputHandler"; // Input Handler for handling validation, isTouch, etc...
import { FormHelperText } from "@mui/material";

const useSelect = ({ options, label, validator }) => {
  // let options = isOptionsAvaliable || []; // Simplified options initialization
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
      <FormControl fullWidth error={errorContent !== null}>
        <InputLabel id={`${label}-label`}>{label}</InputLabel>
        <Select
          labelId={`${label}-label`}
          id={`${label}-select`}
          value={value}
          label={label}
          onChange={changeHandler}
          onBlur={blurHandler}
        >
          {options.map((option) => (
            <MenuItem value={option.id} key={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{errorContent}</FormHelperText>
      </FormControl>
    ),
  };
};

export default useSelect;
