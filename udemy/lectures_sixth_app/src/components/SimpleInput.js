import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const nameIsInvalid = enteredName.trim() === "" && nameIsTouched;
  const emailIsInvalid =
    (enteredEmail.trim() === "" || !enteredEmail.includes("@")) &&
    emailIsTouched;

  const formIsValid = !nameIsInvalid && !emailIsInvalid;

  const nameBlurHandler = (event) => {
    setNameIsTouched(true);
  };

  const emailBlurHandler = (event) => {
    setEmailIsTouched(true);
  };

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (!nameIsTouched) {
      setNameIsTouched(true);
    }
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    if (!emailIsTouched) {
      setEmailIsTouched(true);
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setNameIsTouched(true);
    setEmailIsTouched(true);

    if (nameIsInvalid) {
      nameRef.current.focus();
      return;
    } else if (emailIsInvalid) {
      emailRef.current.focus();
      return;
    }
    setEnteredName("");
    setNameIsTouched(false);
    setEmailIsTouched(false);
    setEnteredEmail("");
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${nameIsInvalid && "invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={`form-control ${emailIsInvalid && "invalid"}`}>
        <label htmlFor="email">Your E-mail</label>
        <input
          ref={emailRef}
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailIsInvalid && (
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
