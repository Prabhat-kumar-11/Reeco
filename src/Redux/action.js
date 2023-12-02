
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
} from "./actionTypes";

// Action to add a product to the cart
export const addToCart = (product) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: product,
  });
};

// Action to remove a product from the cart
export const removeFromCart = (productId) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: productId,
  });
};

// Action to update the quantity of a product in the cart
export const updateQuantity = (productId, quantity) => (dispatch) => {
  dispatch({
    type: UPDATE_QUANTITY,
    payload: { productId, quantity },
  });
};

// Action to clear the cart
export const clearCart = () => (dispatch) => {
  dispatch({
    type: CLEAR_CART,
  });
};
