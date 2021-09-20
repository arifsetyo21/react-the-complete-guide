import { useState } from "react";

const useInputNew = (valueValidator) => {
  const [value, setValue] = useState("");
  const [hasTouched, setHasTouched] = useState(false);

  const valueIsValid = valueValidator(value);
  const hasError = !valueIsValid && hasTouched;

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setHasTouched(true);
  };

  const resetValue = () => {
    setValue("");
    setHasTouched(false);
  };

  const classInput = hasError ? "form-control invalid" : "form-control";

  return {
    value,
    hasError,
    resetValue,
    valueChangeHandler,
    inputBlurHandler,
    classInput,
  };
};

export default useInputNew;
