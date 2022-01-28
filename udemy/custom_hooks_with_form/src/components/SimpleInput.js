import useInput from "../hooks/user-input";

const VALIDATORS = {
  required: (value) => value !== "",
  email: (value) => value.includes("@"),
};

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameResetHandler,
  } = useInput([VALIDATORS.required]);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailResetHandler,
  } = useInput([VALIDATORS.required, VALIDATORS.email]);

  const formIsValid = nameIsValid && emailIsValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    nameResetHandler();
    emailResetHandler();
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${nameHasError && "invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
          autoComplete="off"
        />
        {nameHasError && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={`form-control ${emailHasError && "invalid"}`}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          autoComplete="off"
        />
        {emailHasError && (
          <p className="error-text">
            E-mail must contain "@" and not be empty.
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
