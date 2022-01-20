import { uiActions } from "./ui-slice";
import { cartActions, INITIAL_STATE } from "./cart-slice";

const URL =
  "https://react-course-app-ae14e-default-rtdb.firebaseio.com/cart.json";

export const sendCartData = (cart) => {
  return (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    fetch(URL, {
      method: "PUT",
      body: JSON.stringify({
        items: cart.items,
        totalQuantity: cart.totalQuantity,
      }),
    })
      .then((res) => {
        if (res.ok) {
          dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: "Sent cart data successfully!",
            })
          );
        } else {
          throw new Error("Sending cart data failed.");
        }
      })
      .catch((error) => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: error.message,
          })
        );
      });
  };
};

export const fetchCartData = () => {
  return (dispatch) => {
    fetch(URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Fetching cart data failed.");
        }
      })
      .then((data) => {
        dispatch(
          cartActions.replaceCart({
            items: data.items || [],
            totalQuantity: data.totalQuantity,
          })
        );
      })
      .catch((error) => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: error.message,
          })
        );
      });
  };
};
