import { useState } from "react";

const useInput = (validators) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validators.every((validationFn) =>
    validationFn(enteredValue)
  );
  const hasError = !valueIsValid && isTouched;

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    if (!isTouched) {
      setIsTouched(true);
    }
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    inputBlurHandler,
    valueChangeHandler,
    reset,
  };
};

export default useInput;
