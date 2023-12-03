import { Close_CART, Tick_CART, UPDATE_QUANTITY } from "./actionTypes";

export const TickCart = (itemId) => (dispatch) => {
  dispatch({
    type: Tick_CART,
    payload: { itemId, status: "approved" },
  });
};

export const updateQuantity =
  (itemId, quantityValue, totalValue) => (dispatch) => {
    dispatch({
      type: UPDATE_QUANTITY,
      payload: { itemId, quantity: quantityValue, total: totalValue },
    });
  };

export const CloseCart = (itemId, statusValue) => (dispatch) => {
  dispatch({
    type: Close_CART,
    payload: { itemId, status: statusValue },
  });
};
