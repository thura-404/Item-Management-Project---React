import { useState } from "react";

const InputHandler = (validator) => {
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

  return {
    value,
    isValid,
    helperText,
    isTouched,
    changeHandler,
    blurHandler,
    reset,
  };
};

export default InputHandler;
