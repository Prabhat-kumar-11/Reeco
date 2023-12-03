import { data } from "../data";

import { Close_CART, Tick_CART, UPDATE_QUANTITY } from "./actionTypes";

const initialState = {
  cart: data,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Tick_CART:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.itemId
            ? { ...item, status: action.payload.status }
            : item
        ),
      };

    case Close_CART:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.itemId
            ? { ...item, status: action.payload.status }
            : item
        ),
      };

    case UPDATE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.itemId
            ? { ...item, quantity: action.payload.quantity ,total:action.payload.total }
            : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
