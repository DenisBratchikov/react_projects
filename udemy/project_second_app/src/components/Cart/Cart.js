import { useContext } from "react";
import { useState } from "react/cjs/react.development";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

export default function Cart(props) {
  const cartCtx = useContext(CartContext);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const hasItems = cartCtx.items.length > 0;

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={() => cartCtx.removeItem(item.id)}
      onAdd={() => cartCtx.addItem({ ...item, amount: 1 })}
    />
  ));

  const orderHandler = () => {
    setIsCheckingOut(true);
  };

  const submitOrderHandler = (userData) => {
    fetch(
      "https://react-course-app-ae14e-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user: userData, orderedItems: cartCtx.items }),
      }
    ).then(() => {
      setIsSubmitted(true);
      cartCtx.clearCart();
    });
  };

  let modalContent = "";

  if (isSubmitted) {
    modalContent = (
      <>
        <p>Your order was successfully created!</p>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
        </div>
      </>
    );
  } else {
    modalContent = (
      <>
        <ul className={classes["cart-items"]}>{cartItems}</ul>
        <div className={classes.total}>
          <span>Total amount</span>
          <span>${cartCtx.totalAmount.toFixed(2)}</span>
        </div>
        {isCheckingOut ? (
          <Checkout onCancel={props.onClose} onConfirm={submitOrderHandler} />
        ) : (
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>
              Close
            </button>
            {hasItems && (
              <button className={classes.button} onClick={orderHandler}>
                Order
              </button>
            )}
          </div>
        )}
      </>
    );
  }

  return <Modal onClose={props.onClose}>{modalContent}</Modal>;
}
