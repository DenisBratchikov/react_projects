import { useRef } from "react";
import { useState } from "react/cjs/react.development";

import classes from "./Checkout.module.css";

function isEmpty(value) {
  return value.trim() === "";
}

function isFiveChars(value) {
  return value.trim().length === 5;
}

export default function Checkout(props) {
  const nameRef = useRef();
  const streetRef = useRef();
  const codeRef = useRef();
  const cityRef = useRef();

  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    code: true,
  });

  const confirmHandler = (event) => {
    event.preventDefault();

    const [name, street, postalCode, city] = [
      nameRef,
      streetRef,
      codeRef,
      cityRef,
    ].map((ref) => ref.current.value);

    const formValidity = {
      name: !isEmpty(name),
      street: !isEmpty(street),
      code: isFiveChars(postalCode),
      city: !isEmpty(city),
    };

    setFormInputValidity(formValidity);

    const formIsValid = Object.values(formValidity).every((elem) => elem);

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name,
      street,
      code: postalCode,
      city,
    });
  };
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formInputValidity.name ? "" : classes.invalid
        }`}>
        <label htmlFor="name">Your Name</label>
        <input autoComplete="off" ref={nameRef} type="text" id="name" />
        {!formInputValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.street ? "" : classes.invalid
        }`}>
        <label htmlFor="street">Street</label>
        <input autoComplete="off" ref={streetRef} type="text" id="street" />
        {!formInputValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.code ? "" : classes.invalid
        }`}>
        <label htmlFor="postal">Postal Code</label>
        <input autoComplete="off" ref={codeRef} type="text" id="postal" />
        {!formInputValidity.code && <p>Please enter a valid postal code!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.city ? "" : classes.invalid
        }`}>
        <label htmlFor="city">City</label>
        <input autoComplete="off" ref={cityRef} type="text" id="city" />
        {!formInputValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
}
