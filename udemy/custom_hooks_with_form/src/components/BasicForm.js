import useInput from "../hooks/user-input";

const VALIDATORS = {
  required: (value) => value !== "",
  email: (value) => value.includes("@"),
};

const BasicForm = (props) => {
  const {
    value: nameValue,
    hasError: nameHasError,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameResetHandler,
  } = useInput([VALIDATORS.required]);

  const {
    value: surnameValue,
    hasError: surnameHasError,
    isValid: surnameIsValid,
    valueChangeHandler: surnameChangeHandler,
    inputBlurHandler: surnameBlurHandler,
    reset: surnameResetHandler,
  } = useInput([VALIDATORS.required]);

  const {
    value: emailValue,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailResetHandler,
  } = useInput([VALIDATORS.required, VALIDATORS.email]);

  const formIsValid = nameIsValid && surnameIsValid && emailIsValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    nameResetHandler();
    surnameResetHandler();
    emailResetHandler();
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={`form-control ${nameHasError && "invalid"}`}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className={`form-control ${surnameHasError && "invalid"}`}>
          <label htmlFor="surname">Last Name</label>
          <input
            type="text"
            id="surname"
            value={surnameValue}
            onChange={surnameChangeHandler}
            onBlur={surnameBlurHandler}
          />
          {surnameHasError && (
            <p className="error-text">Last Name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={`form-control ${emailHasError && "invalid"}`}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
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

export default BasicForm;
