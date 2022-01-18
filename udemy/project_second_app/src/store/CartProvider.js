import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatesItems = [...state.items];
    const existingItem = state.items.find((item) => item.id === action.item.id);
    if (existingItem) {
      existingItem.amount += action.item.amount;
    } else {
      updatesItems.push(action.item);
    }
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatesItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    let updatedItems = [...state.items];
    const removeItemIndex = updatedItems.findIndex(
      (item) => item.id === action.id
    );
    const removeItem = updatedItems[removeItemIndex];
    if (removeItem.amount > 1) {
      removeItem.amount--;
    } else {
      updatedItems.splice(removeItemIndex, 1);
    }
    return {
      items: updatedItems,
      totalAmount: state.totalAmount - removeItem.price,
    };
  }
  return defaultCartState;
};

export default function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: (item) => {
      dispatchCartAction({ type: "ADD", item: item });
    },
    removeItem: (id) => {
      dispatchCartAction({ type: "REMOVE", id: id });
    },
    clearCart: () => {
      dispatchCartAction({ type: "CLEAR" });
    },
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
