import { TextField } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import React, { useState } from "react";

const Input = (props) => {
  let options = props.options || []; // Simplified options initialization

  const { label, validator, type } = props;

  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const { isValid, helperText } = validator(value);

  const changeHandler = (event) => {
    setValue(event.target.value);
    setIsTouched(true); // Set isTouched when value changes
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  const errorContent = !isValid && isTouched ? helperText : null;

  let input;

  if (type === "select") {
    input = (
      <FormControl fullWidth>
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
      </FormControl>
    );
  } else {
    input = (
      <TextField
        id={`outlined-${label}`}
        label={label}
        variant="outlined"
        error={errorContent !== null}
        helperText={errorContent}
        onChange={changeHandler}
        onBlur={blurHandler}
        value={value}
      />
    );
  }

  return {
    inputHandler: {
      isValid,
      value,
      reset,
    },
    input,
  };
};

export default Input;
