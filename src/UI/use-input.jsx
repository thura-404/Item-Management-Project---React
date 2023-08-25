import { TextField } from "@mui/material";
import InputHandler from "../inputHandler/InputHandler"; // Input Handler for handling validation, isTouch, etc...

const useInput = ({ label, validator }) => {
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
    ),
  };
};

export default useInput;
