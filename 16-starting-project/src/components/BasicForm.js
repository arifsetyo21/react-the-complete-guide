import { useState, useEffect, useCallback } from "react";
import useInputNew from "../hooks/use-Input-New";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const {
    value: firstNameInputValue,
    hasError: firstNameHasError,
    resetValue: firstNameResetValue,
    valueChangeHandler: firstNameValueChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    classInput: firstNameClassInput,
  } = useInputNew((value) => isNotEmpty(value));

  const {
    value: lastNameInputValue,
    hasError: lastNameHasError,
    resetValue: lastNameResetValue,
    valueChangeHandler: lastNameValueChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    classInput: lastNameClassInput,
  } = useInputNew((value) => isNotEmpty(value));

  const {
    value: emailInputValue,
    hasError: emailHasError,
    resetValue: emailResetValue,
    valueChangeHandler: emailValueChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    classInput: emailClassInput,
  } = useInputNew((value) => value.trim() !== "" && value.includes("@"));

  const isAllInputValid = useCallback(() => {
    return (
      !firstNameHasError &&
      !lastNameHasError &&
      !emailHasError &&
      emailInputValue.trim() !== ""
    );
  });

  useEffect(() => {
    setFormIsValid(isAllInputValid());
  }, [
    isAllInputValid,
    firstNameHasError,
    lastNameHasError,
    emailHasError,
    emailInputValue,
  ]);

  console.log(isAllInputValid());

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!isAllInputValid) {
      return;
    }

    console.log("submitted!");
    console.log(firstNameInputValue, lastNameInputValue, emailInputValue);

    firstNameResetValue();
    lastNameResetValue();
    emailResetValue();

    console.log(firstNameInputValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClassInput}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            value={firstNameInputValue}
            onChange={firstNameValueChangeHandler}
            onBlur={firstNameInputBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">First name cannot be empty</p>
          )}
        </div>
        <div className={lastNameClassInput}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={lastNameInputValue}
            onChange={lastNameValueChangeHandler}
            onBlur={lastNameInputBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Last name cannot be empty</p>
          )}
        </div>
      </div>
      <div className={emailClassInput}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onBlur={emailInputBlurHandler}
          onChange={emailValueChangeHandler}
          value={emailInputValue}
        />
        {emailHasError && <p className="error-text">Email invalid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
