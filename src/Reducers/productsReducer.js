const { FETCH_ERROR, FETCH_SUCCESS } = require("../constant");

export const productsReducer = (state = { productList: [] }, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return { productList: action.payload };
    case FETCH_ERROR:
      return { error: action.payload };
    default:
      return state;
  }
};
