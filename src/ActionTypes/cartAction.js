import { ADD_TO_CART, REMOVE_FROM_CART } from "../constant";

export const addToCart = (product) => async (dispatch) => {
  try {
    await dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const removeFromCart = (product) => async (dispatch) => {
  try {
    await dispatch({
      type: REMOVE_FROM_CART,
      payload: product,
    });
  } catch (error) {
    console.log(error.message);
  }
};
