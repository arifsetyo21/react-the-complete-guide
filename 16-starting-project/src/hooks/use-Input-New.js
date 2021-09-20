import { useState, useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }

  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }

  if (action.type === "RESET") {
  }

  return inputStateReducer;
};

const useInputNew = (valueValidator) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = valueValidator(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  const resetValue = () => {
    dispatch({ type: "RESET" });
  };

  const classInput = hasError ? "form-control invalid" : "form-control";

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    resetValue,
    valueChangeHandler,
    inputBlurHandler,
    classInput,
  };
};

export default useInputNew;
