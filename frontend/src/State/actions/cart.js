import { ADDTOCARRT, CLEARCART, REMOVEFROMCART, REMOVEITEM } from "../../const";

export let addToCart = (data) => async (dispatch) => {
  try {
    dispatch({ type: ADDTOCARRT, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export let removeFromCart = (data) => async (dispatch) => {
  try {
    dispatch({ type: REMOVEFROMCART, payload: data });
  } catch (err) {
    console.log(err);
  }
};
export let removeItemFromCart = (data) => async (dispatch) => {
  try {
    dispatch({ type: REMOVEITEM, payload: data });
  } catch (err) {
    console.log(err);
  }
};
export let clearCart = (data) => async (dispatch) => {
  try {
    dispatch({ type: CLEARCART, payload: null });
  } catch (err) {
    console.log(err);
  }
};
